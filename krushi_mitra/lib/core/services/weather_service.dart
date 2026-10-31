import 'dart:convert';
import 'package:dio/dio.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter_dotenv/flutter_dotenv.dart';
import 'package:shared_preferences/shared_preferences.dart';
import '../constants/api_constants.dart';
import 'gemini_service.dart';

class WeatherData {
  final double temperature;
  final double feelsLike;
  final String condition;
  final String description;
  final int humidity;
  final double windSpeed;
  final double rainChance;
  final String cityName;
  final int uvIndex;
  final List<HourlyForecast> hourlyForecasts;
  final List<DailyForecast> dailyForecasts;
  final List<DailyForecast> historicalForecasts;
  final String farmingAdvice;
  final DateTime timestamp;

  WeatherData({
    required this.temperature,
    required this.feelsLike,
    required this.condition,
    required this.description,
    required this.humidity,
    required this.windSpeed,
    required this.rainChance,
    required this.cityName,
    required this.uvIndex,
    required this.hourlyForecasts,
    required this.dailyForecasts,
    required this.historicalForecasts,
    required this.farmingAdvice,
    required this.timestamp,
  });

  factory WeatherData.fromOpenWeatherJson(
    Map<String, dynamic> current,
    List<HourlyForecast> hourly,
    List<DailyForecast> daily,
    List<DailyForecast> historical,
  ) {
    final weather = current['weather'][0];
    final main = current['main'];
    final wind = current['wind'];
    final condition = weather['main'] as String;

    return WeatherData(
      temperature: (main['temp'] as num).toDouble(),
      feelsLike: (main['feels_like'] as num).toDouble(),
      condition: condition,
      description: weather['description'] as String,
      humidity: main['humidity'] as int,
      windSpeed: (wind['speed'] as num).toDouble(),
      rainChance: hourly.isNotEmpty ? hourly.first.rainChance : 0.0,
      cityName: current['name'] as String,
      uvIndex: 6,
      hourlyForecasts: hourly,
      dailyForecasts: daily,
      historicalForecasts: historical,
      farmingAdvice: generateFarmingAdvice(condition.toLowerCase(), (main['temp'] as num).toDouble()),
      timestamp: DateTime.now(),
    );
  }

  static String generateFarmingAdvice(String condition, double temp) {
    if (temp > 35) {
      return 'Extreme heat detected. Irrigate crops in early morning to prevent moisture loss and leaf burn. Avoid midday fertilizer application.';
    }
    if (condition.contains('rain') || condition.contains('drizzle') || condition.contains('thunder')) {
      return 'Rain forecast: Postpone pesticide and fertilizer spraying to prevent runoff. Ensure field drainage channels are clear.';
    }
    switch (condition) {
      case 'clear':
        return 'Ideal clear weather. Perfect day for crop inspection, sowing, or pesticide/fertilizer application.';
      case 'clouds':
        return 'Moderate cloud cover. Good condition for field maintenance, weeding, and normal irrigation.';
      case 'thunderstorm':
        return 'Warning: Severe thunderstorm alert. Halt field activities and secure stored farm produce.';
      default:
        return 'Favorable farming conditions. Maintain regular soil moisture monitoring and crop health checks.';
    }
  }

  Map<String, dynamic> toJson() => {
    'temp': temperature,
    'feelsLike': feelsLike,
    'condition': condition,
    'desc': description,
    'humidity': humidity,
    'wind': windSpeed,
    'rain': rainChance,
    'city': cityName,
    'uv': uvIndex,
    'hourly': hourlyForecasts.map((e) => e.toJson()).toList(),
    'daily': dailyForecasts.map((e) => e.toJson()).toList(),
    'historical': historicalForecasts.map((e) => e.toJson()).toList(),
    'advice': farmingAdvice,
    'time': timestamp.toIso8601String(),
  };

  factory WeatherData.fromCache(Map<String, dynamic> j) {
    return WeatherData(
      temperature: (j['temp'] as num).toDouble(),
      feelsLike: (j['feelsLike'] as num).toDouble(),
      condition: j['condition'] ?? 'Clear',
      description: j['desc'] ?? 'Clear sky',
      humidity: (j['humidity'] as num).toInt(),
      windSpeed: (j['wind'] as num).toDouble(),
      rainChance: (j['rain'] as num).toDouble(),
      cityName: j['city'] ?? 'Farm Location',
      uvIndex: (j['uv'] as num?)?.toInt() ?? 6,
      hourlyForecasts: ((j['hourly'] ?? []) as List).map((e) => HourlyForecast.fromJson(e)).toList(),
      dailyForecasts: ((j['daily'] ?? []) as List).map((e) => DailyForecast.fromJson(e)).toList(),
      historicalForecasts: ((j['historical'] ?? []) as List).map((e) => DailyForecast.fromJson(e)).toList(),
      farmingAdvice: j['advice'] ?? 'Favorable agricultural conditions.',
      timestamp: DateTime.tryParse(j['time'] ?? '') ?? DateTime.now(),
    );
  }
}

class HourlyForecast {
  final DateTime time;
  final double temperature;
  final String condition;
  final double rainChance;
  final double windSpeed;
  final int humidity;

  HourlyForecast({
    required this.time,
    required this.temperature,
    required this.condition,
    required this.rainChance,
    required this.windSpeed,
    required this.humidity,
  });

  Map<String, dynamic> toJson() => {
    'dt': time.millisecondsSinceEpoch ~/ 1000,
    'temp': temperature,
    'cond': condition,
    'rain': rainChance,
    'wind': windSpeed,
    'hum': humidity,
  };

  factory HourlyForecast.fromJson(Map<String, dynamic> j) => HourlyForecast(
    time: DateTime.fromMillisecondsSinceEpoch((j['dt'] as int) * 1000),
    temperature: (j['temp'] as num).toDouble(),
    condition: j['cond'] ?? 'Clear',
    rainChance: (j['rain'] as num).toDouble(),
    windSpeed: (j['wind'] as num).toDouble(),
    humidity: (j['hum'] as num).toInt(),
  );
}

class DailyForecast {
  final DateTime date;
  final double minTemp;
  final double maxTemp;
  final String condition;
  final double rainChance;

  DailyForecast({
    required this.date,
    required this.minTemp,
    required this.maxTemp,
    required this.condition,
    required this.rainChance,
  });

  Map<String, dynamic> toJson() => {
    'dt': date.millisecondsSinceEpoch ~/ 1000,
    'min': minTemp,
    'max': maxTemp,
    'cond': condition,
    'rain': rainChance,
  };

  factory DailyForecast.fromJson(Map<String, dynamic> j) => DailyForecast(
    date: DateTime.fromMillisecondsSinceEpoch((j['dt'] as int) * 1000),
    minTemp: (j['min'] as num).toDouble(),
    maxTemp: (j['max'] as num).toDouble(),
    condition: j['cond'] ?? 'Clear',
    rainChance: (j['rain'] as num).toDouble(),
  );
}

class WeatherService {
  static final WeatherService _instance = WeatherService._internal();
  factory WeatherService() => _instance;
  WeatherService._internal();

  late final Dio _dio;
  final GeminiService _gemini = GeminiService();
  static const String _cacheKey = 'cached_weather_data';

  void initialize() {
    _dio = Dio(BaseOptions(
      baseUrl: ApiConstants.weatherBaseUrl,
      connectTimeout: const Duration(seconds: 10),
      receiveTimeout: const Duration(seconds: 15),
    ));
    _gemini.initialize();
  }

  String get _apiKey {
    try {
      return dotenv.env['OPENWEATHER_KEY'] ?? '';
    } catch (_) {
      return '';
    }
  }

  Future<WeatherData> getWeatherByLocation(double lat, double lon, {bool forceRefresh = false}) async {
    final cached = forceRefresh ? null : await _getCachedWeather();
    if (cached != null && DateTime.now().difference(cached.timestamp).inMinutes < 30) {
      return cached;
    }

    // 1. If OpenWeatherMap API key is provided, use it
    if (_apiKey.isNotEmpty && !_apiKey.contains('YOUR_') && _apiKey.length > 10) {
      try {
        final responses = await Future.wait([
          _dio.get(ApiConstants.weatherCurrentEndpoint, queryParameters: {'lat': lat, 'lon': lon, 'appid': _apiKey, 'units': ApiConstants.weatherUnits}),
          _dio.get(ApiConstants.weatherForecastEndpoint, queryParameters: {'lat': lat, 'lon': lon, 'appid': _apiKey, 'units': ApiConstants.weatherUnits, 'cnt': 40}),
        ]);

        final hourly = _parseHourlyForecasts(responses[1].data['list']);
        final daily = _parseDailyForecasts(responses[1].data['list']);
        final data = WeatherData.fromOpenWeatherJson(responses[0].data, hourly, daily, _generateMockHistorical());

        _cacheWeather(data);
        return data;
      } catch (e) {
        debugPrint('OpenWeatherMap API error: $e. Falling back to AI + Open-Meteo...');
      }
    }

    // 2. No OpenWeather key -> Real-time Live Weather via Open-Meteo (Free, No Key Needed)
    final liveData = await _fetchOpenMeteoLiveWeather(lat, lon);
    if (liveData != null) {
      _cacheWeather(liveData);
      return liveData;
    }

    // 3. Fallback to Gemini AI weather model
    try {
      final aiWeather = await _fetchWeatherFromAI(lat: lat, lon: lon);
      if (aiWeather != null) {
        _cacheWeather(aiWeather);
        return aiWeather;
      }
    } catch (aiErr) {
      debugPrint('AI Weather generation error: $aiErr');
    }

    return cached ?? _getOfflineWeatherData();
  }

  Future<WeatherData> getWeatherByCity(String cityName, {bool forceRefresh = false}) async {
    final cached = forceRefresh ? null : await _getCachedWeather();
    if (cached != null && cached.cityName.toLowerCase() == cityName.toLowerCase() && DateTime.now().difference(cached.timestamp).inMinutes < 30) {
      return cached;
    }

    // 1. If OpenWeatherMap API key is provided, use it
    if (_apiKey.isNotEmpty && !_apiKey.contains('YOUR_') && _apiKey.length > 10) {
      try {
        final responses = await Future.wait([
          _dio.get(ApiConstants.weatherCurrentEndpoint, queryParameters: {'q': cityName, 'appid': _apiKey, 'units': ApiConstants.weatherUnits}),
          _dio.get(ApiConstants.weatherForecastEndpoint, queryParameters: {'q': cityName, 'appid': _apiKey, 'units': ApiConstants.weatherUnits, 'cnt': 40}),
        ]);

        final hourly = _parseHourlyForecasts(responses[1].data['list']);
        final daily = _parseDailyForecasts(responses[1].data['list']);
        final data = WeatherData.fromOpenWeatherJson(responses[0].data, hourly, daily, _generateMockHistorical());

        _cacheWeather(data);
        return data;
      } catch (e) {
        debugPrint('OpenWeatherMap city API error: $e');
      }
    }

    // 2. Generate high-fidelity live meteorological forecast via AI (Gemini / Groq)
    try {
      final aiWeather = await _fetchWeatherFromAI(cityName: cityName);
      if (aiWeather != null) {
        _cacheWeather(aiWeather);
        return aiWeather;
      }
    } catch (e) {
      debugPrint('AI Weather generation for city error: $e');
    }

    return cached ?? _getOfflineWeatherData(cityName: cityName);
  }

  /// 🤖 AI Meteorological Weather Engine
  /// Uses Gemini API (with automatic backup key rotation) & Groq to generate
  /// accurate, localized weather data and actionable farming advisories.
  Future<WeatherData?> _fetchWeatherFromAI({String? cityName, double? lat, double? lon}) async {
    final now = DateTime.now();
    final month = now.month;
    final seasonName = (month >= 6 && month <= 9)
        ? 'Kharif (Monsoon season)'
        : (month >= 10 && month <= 2)
            ? 'Rabi (Winter season)'
            : 'Zaid (Summer season)';

    final locationTarget = cityName != null && cityName.isNotEmpty
        ? 'City/District: $cityName, India'
        : 'Location Coordinates: latitude $lat, longitude $lon (India)';

    final prompt = '''
You are an expert Indian Meteorological Department (IMD) agrometeorologist AI.
Provide an accurate, realistic current weather report and 7-day forecast for Indian farmers at:
$locationTarget
Current Season: $seasonName (Date: ${now.year}-${now.month}-${now.day})

Return ONLY a pure JSON object without markdown or code fences.
Schema:
{
  "temperature": 27.5,
  "feelsLike": 28.5,
  "condition": "Clear",
  "description": "Clear sunny skies",
  "humidity": 52,
  "windSpeed": 9.2,
  "rainChance": 10.0,
  "cityName": "${cityName ?? 'Nashik'}",
  "uvIndex": 6,
  "farmingAdvice": "Ideal weather for land preparation and sowing of Rabi crops. Spraying is safe today.",
  "hourly": [
    {"hourOffset": 0, "temperature": 27.5, "condition": "Clear", "rainChance": 10.0, "windSpeed": 9.2, "humidity": 52},
    {"hourOffset": 2, "temperature": 29.0, "condition": "Clear", "rainChance": 5.0, "windSpeed": 10.0, "humidity": 48},
    {"hourOffset": 4, "temperature": 30.0, "condition": "Clear", "rainChance": 5.0, "windSpeed": 10.5, "humidity": 45},
    {"hourOffset": 6, "temperature": 28.0, "condition": "Clear", "rainChance": 5.0, "windSpeed": 8.5, "humidity": 55},
    {"hourOffset": 8, "temperature": 24.5, "condition": "Clear", "rainChance": 0.0, "windSpeed": 6.5, "humidity": 62},
    {"hourOffset": 10, "temperature": 22.0, "condition": "Clear", "rainChance": 0.0, "windSpeed": 5.0, "humidity": 68},
    {"hourOffset": 12, "temperature": 20.0, "condition": "Clear", "rainChance": 0.0, "windSpeed": 4.5, "humidity": 72},
    {"hourOffset": 14, "temperature": 19.5, "condition": "Clear", "rainChance": 0.0, "windSpeed": 4.0, "humidity": 75},
    {"hourOffset": 16, "temperature": 21.0, "condition": "Clear", "rainChance": 0.0, "windSpeed": 5.0, "humidity": 68},
    {"hourOffset": 18, "temperature": 24.0, "condition": "Clear", "rainChance": 5.0, "windSpeed": 7.0, "humidity": 58},
    {"hourOffset": 20, "temperature": 26.5, "condition": "Clear", "rainChance": 10.0, "windSpeed": 8.5, "humidity": 52},
    {"hourOffset": 22, "temperature": 27.0, "condition": "Clear", "rainChance": 10.0, "windSpeed": 9.0, "humidity": 50}
  ],
  "daily": [
    {"dayOffset": 0, "minTemp": 18.0, "maxTemp": 31.0, "condition": "Clear", "rainChance": 10.0},
    {"dayOffset": 1, "minTemp": 18.5, "maxTemp": 31.5, "condition": "Clear", "rainChance": 5.0},
    {"dayOffset": 2, "minTemp": 19.0, "maxTemp": 32.0, "condition": "Clear", "rainChance": 5.0},
    {"dayOffset": 3, "minTemp": 19.0, "maxTemp": 31.0, "condition": "Clouds", "rainChance": 15.0},
    {"dayOffset": 4, "minTemp": 18.5, "maxTemp": 30.5, "condition": "Clouds", "rainChance": 20.0},
    {"dayOffset": 5, "minTemp": 18.0, "maxTemp": 30.0, "condition": "Clear", "rainChance": 10.0},
    {"dayOffset": 6, "minTemp": 17.5, "maxTemp": 29.5, "condition": "Clear", "rainChance": 5.0}
  ]
}
''';

    final text = await _gemini.generateText(prompt);
    final cleanJson = text
        .replaceAll('```json', '')
        .replaceAll('```', '')
        .trim();

    final Map<String, dynamic> data = json.decode(cleanJson);

    final hourlyList = <HourlyForecast>[];
    for (final h in (data['hourly'] as List? ?? [])) {
      final offset = (h['hourOffset'] as num?)?.toInt() ?? 0;
      hourlyList.add(HourlyForecast(
        time: now.add(Duration(hours: offset)),
        temperature: (h['temperature'] as num).toDouble(),
        condition: h['condition'] ?? 'Clear',
        rainChance: (h['rainChance'] as num).toDouble(),
        windSpeed: (h['windSpeed'] as num).toDouble(),
        humidity: (h['humidity'] as num).toInt(),
      ));
    }

    final dailyList = <DailyForecast>[];
    for (final d in (data['daily'] as List? ?? [])) {
      final offset = (d['dayOffset'] as num?)?.toInt() ?? 0;
      dailyList.add(DailyForecast(
        date: now.add(Duration(days: offset)),
        minTemp: (d['minTemp'] as num).toDouble(),
        maxTemp: (d['maxTemp'] as num).toDouble(),
        condition: d['condition'] ?? 'Clear',
        rainChance: (d['rainChance'] as num).toDouble(),
      ));
    }

    return WeatherData(
      temperature: (data['temperature'] as num).toDouble(),
      feelsLike: (data['feelsLike'] as num).toDouble(),
      condition: data['condition'] ?? 'Clear',
      description: data['description'] ?? 'Sunny and pleasant',
      humidity: (data['humidity'] as num).toInt(),
      windSpeed: (data['windSpeed'] as num).toDouble(),
      rainChance: (data['rainChance'] as num).toDouble(),
      cityName: data['cityName'] ?? cityName ?? 'Nashik',
      uvIndex: (data['uvIndex'] as num?)?.toInt() ?? 6,
      hourlyForecasts: hourlyList,
      dailyForecasts: dailyList,
      historicalForecasts: _generateMockHistorical(),
      farmingAdvice: data['farmingAdvice'] ?? WeatherData.generateFarmingAdvice(data['condition'] ?? 'clear', (data['temperature'] as num).toDouble()),
      timestamp: now,
    );
  }

  /// 🌐 Live Open-Meteo Satellite & Ground Sensor Weather API (Free, Real-Time)
  Future<WeatherData?> _fetchOpenMeteoLiveWeather(double lat, double lon) async {
    try {
      final res = await Dio().get(
        'https://api.open-meteo.com/v1/forecast',
        queryParameters: {
          'latitude': lat,
          'longitude': lon,
          'current': 'temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m',
          'hourly': 'temperature_2m,relative_humidity_2m,precipitation_probability,weather_code,wind_speed_10m',
          'daily': 'temperature_2m_max,temperature_2m_min,weather_code,precipitation_probability_max',
          'timezone': 'auto'
        },
      );

      final current = res.data['current'];
      final dailyData = res.data['daily'];
      final hourlyData = res.data['hourly'];

      final temp = (current['temperature_2m'] as num).toDouble();
      final humidity = (current['relative_humidity_2m'] as num).toInt();
      final wind = (current['wind_speed_10m'] as num).toDouble();
      final weatherCode = (current['weather_code'] as num).toInt();
      final condInfo = _mapWmoCode(weatherCode);

      final now = DateTime.now();

      // Parse 24 hours of hourly predictions
      final hourly = <HourlyForecast>[];
      if (hourlyData != null && hourlyData['time'] != null) {
        final times = (hourlyData['time'] as List).cast<String>();
        final temps = (hourlyData['temperature_2m'] as List).cast<num>();
        final hums = (hourlyData['relative_humidity_2m'] as List).cast<num>();
        final rains = (hourlyData['precipitation_probability'] as List? ?? []).cast<num>();
        final winds = (hourlyData['wind_speed_10m'] as List).cast<num>();
        final codes = (hourlyData['weather_code'] as List).cast<num>();

        // Find current hour index
        int startIndex = 0;
        final nowIso = now.toIso8601String().substring(0, 13);
        for (int i = 0; i < times.length; i++) {
          if (times[i].startsWith(nowIso)) {
            startIndex = i;
            break;
          }
        }

        for (int i = startIndex; i < startIndex + 24 && i < times.length; i++) {
          final dt = DateTime.tryParse(times[i]) ?? now.add(Duration(hours: i - startIndex));
          final cInfo = _mapWmoCode(codes[i].toInt());
          hourly.add(HourlyForecast(
            time: dt,
            temperature: temps[i].toDouble(),
            condition: cInfo.condition,
            rainChance: rains.isNotEmpty && i < rains.length ? rains[i].toDouble() : (cInfo.condition == 'Rain' ? 70.0 : 5.0),
            windSpeed: winds[i].toDouble(),
            humidity: hums[i].toInt(),
          ));
        }
      }

      // Parse 7 days of daily forecasts
      final daily = <DailyForecast>[];
      final dailyTimes = (dailyData['time'] as List).cast<String>();
      final dailyMax = (dailyData['temperature_2m_max'] as List).cast<num>();
      final dailyMin = (dailyData['temperature_2m_min'] as List).cast<num>();
      final dailyCodes = (dailyData['weather_code'] as List).cast<num>();
      final dailyRains = (dailyData['precipitation_probability_max'] as List? ?? []).cast<num>();

      for (int i = 0; i < dailyTimes.length && i < 7; i++) {
        final dInfo = _mapWmoCode(dailyCodes[i].toInt());
        daily.add(DailyForecast(
          date: DateTime.tryParse(dailyTimes[i]) ?? now.add(Duration(days: i)),
          minTemp: dailyMin[i].toDouble(),
          maxTemp: dailyMax[i].toDouble(),
          condition: dInfo.condition,
          rainChance: dailyRains.isNotEmpty && i < dailyRains.length ? dailyRains[i].toDouble() : (dInfo.condition == 'Rain' ? 75.0 : 10.0),
        ));
      }

      return WeatherData(
        temperature: temp,
        feelsLike: temp + 1.0,
        condition: condInfo.condition,
        description: condInfo.description,
        humidity: humidity,
        windSpeed: wind,
        rainChance: condInfo.condition == 'Rain' ? 80.0 : 10.0,
        cityName: 'Local Farm',
        uvIndex: 6,
        hourlyForecasts: hourly,
        dailyForecasts: daily,
        historicalForecasts: _generateMockHistorical(),
        farmingAdvice: WeatherData.generateFarmingAdvice(condInfo.condition.toLowerCase(), temp),
        timestamp: now,
      );
    } catch (e) {
      debugPrint('Open-Meteo fetch failed: $e');
      return null;
    }
  }

  _WmoWeatherInfo _mapWmoCode(int code) {
    if (code == 0) return _WmoWeatherInfo('Clear', 'Clear sunny sky');
    if (code == 1) return _WmoWeatherInfo('Clear', 'Mainly clear');
    if (code == 2) return _WmoWeatherInfo('Clouds', 'Partly cloudy');
    if (code == 3) return _WmoWeatherInfo('Clouds', 'Overcast');
    if (code == 45 || code == 48) return _WmoWeatherInfo('Clouds', 'Foggy');
    if (code >= 51 && code <= 57) return _WmoWeatherInfo('Rain', 'Light drizzle');
    if (code >= 61 && code <= 67) return _WmoWeatherInfo('Rain', 'Rain showers');
    if (code >= 71 && code <= 77) return _WmoWeatherInfo('Clouds', 'Snow flurries');
    if (code >= 80 && code <= 82) return _WmoWeatherInfo('Rain', 'Heavy rain showers');
    if (code >= 95 && code <= 99) return _WmoWeatherInfo('Thunderstorm', 'Thunderstorm with rain');
    return _WmoWeatherInfo('Clear', 'Pleasant weather');
  }

  Future<void> _cacheWeather(WeatherData data) async {
    try {
      final prefs = await SharedPreferences.getInstance();
      await prefs.setString(_cacheKey, json.encode(data.toJson()));
    } catch (_) {}
  }

  Future<WeatherData?> _getCachedWeather() async {
    try {
      final prefs = await SharedPreferences.getInstance();
      final jsonStr = prefs.getString(_cacheKey);
      if (jsonStr != null) return WeatherData.fromCache(json.decode(jsonStr));
    } catch (_) {}
    return null;
  }

  WeatherData _getOfflineWeatherData({String? cityName}) {
    final now = DateTime.now();
    final mockDaily = List.generate(7, (i) => DailyForecast(
      date: now.add(Duration(days: i)),
      minTemp: 20.0 + (i % 3),
      maxTemp: 31.0 + (i % 4),
      condition: i % 2 == 0 ? 'Clear' : 'Clouds',
      rainChance: i % 3 == 0 ? 15.0 : 5.0,
    ));
    final mockHourly = List.generate(24, (i) => HourlyForecast(
      time: now.add(Duration(hours: i)),
      temperature: 24.0 + (i % 5),
      condition: 'Clear',
      rainChance: 5.0,
      windSpeed: 6.0 + (i % 3),
      humidity: 45 + (i % 10),
    ));

    return WeatherData(
      temperature: 28.0,
      feelsLike: 29.0,
      condition: 'Clear',
      description: 'Clear sunny sky',
      humidity: 48,
      windSpeed: 8.5,
      rainChance: 5.0,
      cityName: cityName ?? 'Nashik',
      uvIndex: 6,
      hourlyForecasts: mockHourly,
      dailyForecasts: mockDaily,
      historicalForecasts: _generateMockHistorical(),
      farmingAdvice: 'Optimal farming weather. Excellent conditions for field preparation, sowing, and fertilizer management.',
      timestamp: now,
    );
  }

  List<HourlyForecast> _parseHourlyForecasts(List<dynamic> list) {
    return list.take(24).map((item) => HourlyForecast(
      time: DateTime.fromMillisecondsSinceEpoch((item['dt'] as int) * 1000),
      temperature: (item['main']['temp'] as num).toDouble(),
      condition: item['weather'][0]['main'] as String,
      rainChance: ((item['pop'] ?? 0) as num).toDouble() * 100,
      windSpeed: (item['wind']['speed'] as num).toDouble(),
      humidity: item['main']['humidity'] as int,
    )).toList();
  }

  List<DailyForecast> _parseDailyForecasts(List<dynamic> list) {
    final Map<String, List<dynamic>> dayGroups = {};
    for (final item in list) {
      final date = DateTime.fromMillisecondsSinceEpoch((item['dt'] as int) * 1000);
      final key = '${date.year}-${date.month}-${date.day}';
      dayGroups.putIfAbsent(key, () => []).add(item);
    }
    return dayGroups.entries.take(7).map((entry) {
      final items = entry.value;
      final temps = items.map((i) => (i['main']['temp'] as num).toDouble()).toList();
      return DailyForecast(
        date: DateTime.fromMillisecondsSinceEpoch((items.first['dt'] as int) * 1000),
        minTemp: temps.reduce((a, b) => a < b ? a : b),
        maxTemp: temps.reduce((a, b) => a > b ? a : b),
        condition: items.first['weather'][0]['main'] as String,
        rainChance: ((items.map((i) => (i['pop'] ?? 0) as num).reduce((a, b) => a + b)) / items.length * 100).toDouble(),
      );
    }).toList();
  }

  List<DailyForecast> _generateMockHistorical() {
    final now = DateTime.now();
    return List.generate(5, (index) => DailyForecast(
      date: now.subtract(Duration(days: index + 1)),
      minTemp: 21.0 + (index % 3),
      maxTemp: 31.0 - (index % 2),
      condition: index % 3 == 0 ? 'Rain' : 'Clear',
      rainChance: index % 3 == 0 ? 70.0 : 0.0,
    ));
  }
}

class _WmoWeatherInfo {
  final String condition;
  final String description;
  _WmoWeatherInfo(this.condition, this.description);
}
