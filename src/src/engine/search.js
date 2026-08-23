/**
 * @module search
 * @description Search engine module for the agricultural crop database.
 */

// Helper functions

/**
 * Normalizes text by converting to lowercase, removing special characters, and normalizing whitespace.
 * @param {string} text - The text to normalize.
 * @returns {string} The normalized text.
 */
export function normalizeText(text) {
    if (!text) return '';
    return text.toString().toLowerCase().replace(/[^\w\s\u0900-\u097F]/g, ' ').replace(/\s+/g, ' ').trim();
}

/**
 * Splits text into searchable tokens (handles Hindi + English).
 * @param {string} text - The text to tokenize.
 * @returns {string[]} Array of tokens.
 */
export function tokenize(text) {
    if (!text) return [];
    const normalized = normalizeText(text);
    return normalized.split(' ').filter(token => token.length > 0);
}

/**
 * Calculates the Levenshtein distance between two strings.
 * @param {string} a - First string.
 * @param {string} b - Second string.
 * @returns {number} The distance.
 */
export function levenshtein(a, b) {
    if (!a.length) return b.length;
    if (!b.length) return a.length;

    const matrix = [];

    for (let i = 0; i <= b.length; i++) {
        matrix[i] = [i];
    }

    for (let j = 0; j <= a.length; j++) {
        matrix[0][j] = j;
    }

    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            if (b.charAt(i - 1) === a.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1, // substitution
                    Math.min(
                        matrix[i][j - 1] + 1, // insertion
                        matrix[i - 1][j] + 1 // deletion
                    )
                );
            }
        }
    }

    return matrix[b.length][a.length];
}

/**
 * Returns a similarity score between 0 and 1 based on Levenshtein distance.
 * @param {string} query - The query string.
 * @param {string} target - The target string.
 * @param {number} [threshold=0.3] - Minimum score to be considered a match.
 * @returns {number} Similarity score (1 is exact match).
 */
export function fuzzyMatch(query, target, threshold = 0.3) {
    const a = normalizeText(query);
    const b = normalizeText(target);
    if (!a || !b) return 0;
    if (a === b) return 1;
    
    const distance = levenshtein(a, b);
    const maxLength = Math.max(a.length, b.length);
    const score = 1 - (distance / maxLength);
    return score;
}

/**
 * Highlights matches of the query in the text.
 * @param {string} text - The original text.
 * @param {string} query - The search query.
 * @returns {string} Text with matches wrapped in <mark> tags.
 */
export function highlightMatch(text, query) {
    if (!text || !query) return text;
    const tokens = tokenize(query);
    if (tokens.length === 0) return text;

    let highlighted = text;
    for (const token of tokens) {
        const safeToken = token.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regex = new RegExp(`(${safeToken})`, 'gi');
        highlighted = highlighted.replace(regex, '<mark>$1</mark>');
    }
    return highlighted;
}

// TF-IDF Implementation

/**
 * Computes Term Frequency (TF) for a term in a document.
 * @param {string} term - The search term.
 * @param {string[]} document - Array of tokens in the document.
 * @returns {number} The term frequency.
 */
export function computeTF(term, document) {
    let count = 0;
    for (const token of document) {
        if (token === term) count++;
    }
    return count / (document.length || 1);
}

/**
 * Computes Inverse Document Frequency (IDF) for a term across all documents.
 * @param {string} term - The search term.
 * @param {string[][]} documents - Array of documents (each document is an array of tokens).
 * @returns {number} The inverse document frequency.
 */
export function computeIDF(term, documents) {
    let count = 0;
    for (const doc of documents) {
        if (doc.includes(term)) count++;
    }
    if (count === 0) return 0;
    return Math.log(documents.length / count);
}

/**
 * Computes the TF-IDF score for a query against a document in a corpus.
 * @param {string} query - The search query.
 * @param {string[]} document - The document tokens to score.
 * @param {string[][]} corpus - All documents in the corpus (as arrays of tokens).
 * @returns {number} The combined TF-IDF score.
 */
export function tfidfScore(query, document, corpus) {
    const queryTokens = tokenize(query);
    let score = 0;
    for (const term of queryTokens) {
        const tf = computeTF(term, document);
        const idf = computeIDF(term, corpus);
        score += tf * idf;
    }
    return score;
}

// Search Engine Class

/**
 * TextSearch class for agricultural crop database.
 * 
 * @example
 * import { cropList } from '../data/index.js';
 * import { TextSearch } from './search.js';
 * const search = new TextSearch(cropList);
 * const results = search.searchBySymptom('yellow spots on leaves with concentric rings');
 */
export class TextSearch {
    /**
     * @param {Array<Object>} cropList - Flat array of all crop objects.
     */
    constructor(cropList) {
        this.cropList = cropList || [];
        this.index = new Map(); // Inverted index
        this.symptomCorpus = []; // For TF-IDF
        this.symptomDocsMap = []; // Maps corpus index to crop + issue
        this.buildIndex();
    }

    /**
     * Creates an inverted index across all searchable fields.
     */
    buildIndex() {
        this.index.clear();
        this.symptomCorpus = [];
        this.symptomDocsMap = [];

        const addToIndex = (token, ref) => {
            if (!this.index.has(token)) {
                this.index.set(token, []);
            }
            this.index.get(token).push(ref);
        };

        this.cropList.forEach(crop => {
            // Index crop names
            const names = [crop.common_name, crop.hindi_name, ...(crop.regional_names || [])];
            names.forEach(name => {
                if (name) {
                    tokenize(name).forEach(token => addToIndex(token, { crop, field: 'name', match: name }));
                }
            });

            // Index soil & nutrition deficiencies
            if (crop.soil_and_nutrition?.deficiencies) {
                crop.soil_and_nutrition.deficiencies.forEach(def => {
                    const docText = `${def.nutrient} ${def.symptoms}`;
                    const tokens = tokenize(docText);
                    
                    tokens.forEach(token => {
                        addToIndex(token, { crop, field: 'nutrient', match: def.nutrient });
                    });
                    
                    this.symptomCorpus.push(tokens);
                    this.symptomDocsMap.push({ crop, type: 'deficiency', data: def });
                });
            }

            // Index pests and diseases
            if (crop.pest_and_disease_solutions) {
                crop.pest_and_disease_solutions.forEach(issue => {
                    const docText = `${issue.issue_name} ${issue.hindi_name || ''} ${issue.symptoms || ''}`;
                    const tokens = tokenize(docText);
                    
                    tokens.forEach(token => {
                        addToIndex(token, { crop, field: 'issue_name', match: issue.issue_name });
                    });
                    
                    const symptomTokens = tokenize(issue.symptoms || '');
                    if (symptomTokens.length > 0) {
                        this.symptomCorpus.push(symptomTokens);
                        this.symptomDocsMap.push({ crop, type: 'pest_disease', data: issue });
                    }
                    
                    if (issue.solutions) {
                        const sols = [
                            ...(issue.solutions.chemical_curative || []),
                            ...(issue.solutions.organic_ipm || [])
                        ];
                        sols.forEach(sol => {
                            if (sol.active_ingredient) {
                                tokenize(sol.active_ingredient).forEach(token => {
                                    addToIndex(token, { crop, field: 'active_ingredient', match: sol.active_ingredient, issue });
                                });
                            }
                            if (sol.commercial_reference) {
                                tokenize(sol.commercial_reference).forEach(token => {
                                    addToIndex(token, { crop, field: 'commercial_reference', match: sol.commercial_reference, issue });
                                });
                            }
                        });
                    }
                });
            }
        });
    }

    /**
     * Main search method.
     * @param {string} query - The search query.
     * @param {Object} [options] - Search options.
     * @param {number} [options.limit=20] - Max results to return.
     * @param {boolean} [options.fuzzy=true] - Whether to use fuzzy matching.
     * @param {number} [options.threshold=0.3] - Minimum fuzzy match score.
     * @param {string[]} [options.fields=['all']] - Fields to search in.
     * @returns {Array<{crop: Object, match: string, field: string, score: number, snippet: string}>}
     */
    search(query, options = {}) {
        const { limit = 20, fuzzy = true, threshold = 0.3, fields = ['all'] } = options;
        const queryTokens = tokenize(query);
        if (queryTokens.length === 0) return [];

        const resultsMap = new Map();

        const addResult = (ref, score) => {
            if (fields[0] !== 'all' && !fields.includes(ref.field)) return;
            
            const key = `${ref.crop.crop_id}-${ref.field}-${ref.match}`;
            if (!resultsMap.has(key) || resultsMap.get(key).score < score) {
                resultsMap.set(key, {
                    crop: ref.crop,
                    match: ref.match,
                    field: ref.field,
                    score,
                    snippet: highlightMatch(ref.match, query)
                });
            }
        };

        if (fuzzy) {
            for (const [indexToken, refs] of this.index.entries()) {
                for (const qToken of queryTokens) {
                    const score = fuzzyMatch(qToken, indexToken, threshold);
                    if (score >= threshold) {
                        refs.forEach(ref => addResult(ref, score));
                    }
                }
            }
        } else {
            for (const qToken of queryTokens) {
                const refs = this.index.get(qToken);
                if (refs) {
                    refs.forEach(ref => addResult(ref, 1.0));
                }
            }
        }

        const sortedResults = Array.from(resultsMap.values()).sort((a, b) => b.score - a.score);
        return sortedResults.slice(0, limit);
    }

    /**
     * Specialized symptom matching with TF-IDF scoring.
     * @param {string} symptomText - The symptoms to search for.
     * @returns {Array<{crop: Object, type: string, data: Object, score: number}>}
     */
    searchBySymptom(symptomText) {
        const results = [];
        this.symptomCorpus.forEach((docTokens, index) => {
            const score = tfidfScore(symptomText, docTokens, this.symptomCorpus);
            if (score > 0) {
                results.push({
                    crop: this.symptomDocsMap[index].crop,
                    type: this.symptomDocsMap[index].type,
                    data: this.symptomDocsMap[index].data,
                    score
                });
            }
        });
        
        return results.sort((a, b) => b.score - a.score).slice(0, 20);
    }

    /**
     * Find all crops affected by a specific pest.
     * @param {string} pestName - The name of the pest.
     * @returns {Array<{crop: Object, issue: Object, score: number}>}
     */
    searchByPest(pestName) {
        const rawResults = this.search(pestName, { fields: ['issue_name'] });
        const map = new Map();
        
        rawResults.forEach(r => {
            if (!map.has(r.crop.crop_id)) {
                const issue = r.crop.pest_and_disease_solutions?.find(i => i.issue_name === r.match);
                if (issue) {
                    map.set(r.crop.crop_id, {
                        crop: r.crop,
                        issue,
                        score: r.score
                    });
                }
            }
        });
        
        return Array.from(map.values());
    }

    /**
     * Find crop by name (English, Hindi, regional).
     * @param {string} cropQuery - The crop name.
     * @returns {Array<{crop: Object, score: number}>}
     */
    searchByCrop(cropQuery) {
        const rawResults = this.search(cropQuery, { fields: ['name'] });
        const map = new Map();
        
        rawResults.forEach(r => {
            if (!map.has(r.crop.crop_id) || map.get(r.crop.crop_id).score < r.score) {
                map.set(r.crop.crop_id, {
                    crop: r.crop,
                    score: r.score,
                    match: r.match
                });
            }
        });
        
        return Array.from(map.values());
    }

    /**
     * Find which crops/diseases use a specific chemical.
     * @param {string} chemicalName - The active ingredient or commercial reference.
     * @returns {Array<{crop: Object, issue: Object, match: string, field: string, score: number}>}
     */
    searchByChemical(chemicalName) {
        const rawResults = this.search(chemicalName, { fields: ['active_ingredient', 'commercial_reference'] });
        
        return rawResults.map(r => {
            let matchedIssue = null;
            if (r.crop.pest_and_disease_solutions) {
                matchedIssue = r.crop.pest_and_disease_solutions.find(issue => {
                    if (!issue.solutions) return false;
                    const sols = [
                        ...(issue.solutions.chemical_curative || []),
                        ...(issue.solutions.organic_ipm || [])
                    ];
                    return sols.some(sol => 
                        sol.active_ingredient === r.match || sol.commercial_reference === r.match
                    );
                });
            }
            
            return {
                crop: r.crop,
                issue: matchedIssue,
                match: r.match,
                field: r.field,
                score: r.score
            };
        });
    }
}
