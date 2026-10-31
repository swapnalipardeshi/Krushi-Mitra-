class Post {
  final String id;
  final String farmerId;
  final String farmerName;
  final String title;
  final String content;
  final String? photoUrl;
  final String? cropTag;
  final String? problemTag;
  final int likes;
  final int commentsCount;
  final DateTime createdAt;

  Post({
    required this.id,
    required this.farmerId,
    required this.farmerName,
    required this.title,
    required this.content,
    this.photoUrl,
    this.cropTag,
    this.problemTag,
    required this.likes,
    required this.commentsCount,
    required this.createdAt,
  });

  factory Post.fromJson(Map<String, dynamic> json) {
    return Post(
      id: (json['id'] ?? '').toString(),
      farmerId: (json['farmerId'] ?? json['farmer_id'] ?? '').toString(),
      farmerName: (json['farmerName'] ?? json['author_name'] ?? json['farmer_name'] ?? 'Farmer').toString(),
      title: (json['title'] ?? 'Community Post').toString(),
      content: (json['content'] ?? '').toString(),
      photoUrl: json['photoUrl'] as String? ?? json['photo_url'] as String? ?? json['image_url'] as String?,
      cropTag: json['cropTag'] as String? ?? json['crop_tag'] as String?,
      problemTag: json['problemTag'] as String? ?? json['problem_tag'] as String?,
      likes: (json['likes'] as num?)?.toInt() ?? 0,
      commentsCount: (json['commentsCount'] ?? json['comments_count'] as num?)?.toInt() ?? 0,
      createdAt: json['createdAt'] != null
          ? (DateTime.tryParse(json['createdAt'].toString()) ?? DateTime.now())
          : (json['created_at'] != null
              ? (DateTime.tryParse(json['created_at'].toString()) ?? DateTime.now())
              : DateTime.now()),
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'farmerId': farmerId,
      'farmer_id': farmerId,
      'farmerName': farmerName,
      'author_name': farmerName,
      'title': title,
      'content': content,
      'photoUrl': photoUrl,
      'photo_url': photoUrl,
      'cropTag': cropTag,
      'crop_tag': cropTag,
      'problemTag': problemTag,
      'problem_tag': problemTag,
      'likes': likes,
      'commentsCount': commentsCount,
      'comments_count': commentsCount,
      'createdAt': createdAt.toIso8601String(),
      'created_at': createdAt.toIso8601String(),
    };
  }
}
