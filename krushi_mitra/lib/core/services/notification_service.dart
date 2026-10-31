import 'package:flutter/foundation.dart';
import 'package:firebase_core/firebase_core.dart';
import 'package:firebase_messaging/firebase_messaging.dart';
import '../../firebase_options.dart';
import 'supabase_service.dart';

// Top-level function for background message handling
@pragma('vm:entry-point')
Future<void> _firebaseMessagingBackgroundHandler(RemoteMessage message) async {
  debugPrint("Handling a background message: ${message.messageId}");
}

class NotificationService {
  static final NotificationService _instance = NotificationService._internal();
  factory NotificationService() => _instance;
  NotificationService._internal();

  FirebaseMessaging? _fcm;

  Future<void> initialize() async {
    try {
      if (Firebase.apps.isEmpty) {
        await Firebase.initializeApp(
          options: DefaultFirebaseOptions.currentPlatform,
        );
      }
      _fcm = FirebaseMessaging.instance;

      // 1. Set background handler
      FirebaseMessaging.onBackgroundMessage(_firebaseMessagingBackgroundHandler);

      // 2. Request Permission
      NotificationSettings settings = await _fcm!.requestPermission(
        alert: true,
        announcement: false,
        badge: true,
        carPlay: false,
        criticalAlert: false,
        provisional: false,
        sound: true,
      );

      debugPrint('User granted notification permission: ${settings.authorizationStatus}');

      // 3. Get FCM Token
      String? token = await _fcm!.getToken();
      debugPrint('FCM Token: $token');

      // Sync FCM token with Supabase farmer profile if user is logged in
      final currentUser = SupabaseService.client?.auth.currentUser;
      if (currentUser != null && token != null && token.isNotEmpty) {
        try {
          await SupabaseService.client?.from('farmers').update({
            'fcm_token': token,
          }).eq('id', currentUser.id);
        } catch (_) {}
      }

      // 4. Configure foreground message handling
      FirebaseMessaging.onMessage.listen((RemoteMessage message) {
        debugPrint('Got a message whilst in the foreground!');
        if (message.notification != null) {
          debugPrint('Message title: ${message.notification?.title}');
        }
      });

      // 5. Handle notification clicks when app is in background/terminated
      FirebaseMessaging.onMessageOpenedApp.listen((RemoteMessage message) {
        debugPrint('A new onMessageOpenedApp event was published: ${message.data}');
      });

      // Subscribe to general topics
      await subscribeToTopic('all_farmers');
      await subscribeToTopic('weather_alerts');
    } catch (e) {
      debugPrint("Notification init notice (fail-safe): $e");
    }
  }

  Future<void> subscribeToTopic(String topic) async {
    try {
      await _fcm?.subscribeToTopic(topic);
    } catch (e) {
      debugPrint('Error subscribing to topic $topic: $e');
    }
  }

  Future<void> unsubscribeFromTopic(String topic) async {
    try {
      await _fcm?.unsubscribeFromTopic(topic);
    } catch (e) {
      debugPrint('Error unsubscribing from topic $topic: $e');
    }
  }
}
