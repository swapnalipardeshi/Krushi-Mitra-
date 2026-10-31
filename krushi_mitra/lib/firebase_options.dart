// File generated manually from google-services.json and Firebase Console config.
// To regenerate, run: flutterfire configure
//
// ignore_for_file: type=lint
import 'package:firebase_core/firebase_core.dart' show FirebaseOptions;
import 'package:flutter/foundation.dart'
    show defaultTargetPlatform, kIsWeb, TargetPlatform;

/// Default [FirebaseOptions] for the current platform.
class DefaultFirebaseOptions {
  static FirebaseOptions get currentPlatform {
    if (kIsWeb) {
      return web;
    }
    switch (defaultTargetPlatform) {
      case TargetPlatform.android:
        return android;
      case TargetPlatform.iOS:
        return ios;
      case TargetPlatform.macOS:
        throw UnsupportedError(
          'DefaultFirebaseOptions have not been configured for macOS - '
          'you can reconfigure this by running the FlutterFire CLI again.',
        );
      case TargetPlatform.windows:
        throw UnsupportedError(
          'DefaultFirebaseOptions have not been configured for Windows - '
          'you can reconfigure this by running the FlutterFire CLI again.',
        );
      case TargetPlatform.linux:
        throw UnsupportedError(
          'DefaultFirebaseOptions have not been configured for Linux - '
          'you can reconfigure this by running the FlutterFire CLI again.',
        );
      default:
        throw UnsupportedError(
          'DefaultFirebaseOptions are not supported for this platform.',
        );
    }
  }

  // Values sourced from google-services.json and Firebase Console
  static const FirebaseOptions android = FirebaseOptions(
    apiKey: 'AIzaSyDd5Q8iDR0hzuXRDqsowPgF534O_g3kKEo',
    appId: '1:1024024620084:android:9736c2a0350d5fba006e61',
    messagingSenderId: '1024024620084',
    projectId: 'krushi-mitra-dd431',
    storageBucket: 'krushi-mitra-dd431.firebasestorage.app',
  );

  // Web config sourced from website/src/firebase/config.js
  static const FirebaseOptions web = FirebaseOptions(
    apiKey: 'AIzaSyDd5Q8iDR0hzuXRDqsowPgF534O_g3kKEo',
    appId: '1:1024024620084:web:9736c2a0350d5fba006e61',
    messagingSenderId: '1024024620084',
    projectId: 'krushi-mitra-dd431',
    authDomain: 'krushi-mitra-dd431.firebaseapp.com',
    storageBucket: 'krushi-mitra-dd431.firebasestorage.app',
  );

  // iOS placeholder — update after running: flutterfire configure
  // You need to create an iOS app in Firebase Console first, then download
  // GoogleService-Info.plist and place it in ios/Runner/
  static const FirebaseOptions ios = FirebaseOptions(
    apiKey: 'AIzaSyDd5Q8iDR0hzuXRDqsowPgF534O_g3kKEo',
    appId: '1:1024024620084:ios:REPLACE_WITH_IOS_APP_ID',
    messagingSenderId: '1024024620084',
    projectId: 'krushi-mitra-dd431',
    storageBucket: 'krushi-mitra-dd431.firebasestorage.app',
    iosBundleId: 'app.krushiMitra',
  );
}

