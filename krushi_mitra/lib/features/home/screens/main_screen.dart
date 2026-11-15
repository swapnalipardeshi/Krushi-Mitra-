import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import '../screens/home_screen.dart';
import '../../govt_schemes/screens/schemes_list_screen.dart';
import '../../profile/screens/profile_screen.dart';
import '../../ai_doctor/screens/ai_doctor_screen.dart';
import '../../weather/screens/weather_screen.dart';
import '../../../core/theme/app_colors.dart';
import '../../../core/providers/auth_provider.dart';
import '../../../core/providers/locale_provider.dart';
import '../../../shared/widgets/loading_widget.dart';
import '../../marketplace/screens/marketplace_screen.dart';

class MainScreen extends ConsumerStatefulWidget {
  const MainScreen({super.key});

  @override
  ConsumerState<MainScreen> createState() => _MainScreenState();
}

class _MainScreenState extends ConsumerState<MainScreen> {
  int _currentIndex = 0;
  bool _forceStarted = false;

  final List<Widget> _screens = [
    const HomeScreen(),
    const AIDoctorScreen(),
    const WeatherScreen(),
    const MarketplaceScreen(), // Added Marketplace to nav
    const SchemesListScreen(),
    const ProfileScreen(),
  ];

  @override
  Widget build(BuildContext context) {
    final userProfileAsync = ref.watch(currentUserProvider);

    if (_forceStarted) {
      return _buildMainScaffold(null);
    }

    return userProfileAsync.when(
      loading: () => Scaffold(
        body: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              const LoadingWidget(message: 'Starting Krushi Mitra...'),
              const SizedBox(height: 24),
              TextButton(
                onPressed: () => setState(() => _forceStarted = true),
                child: const Text('Enter App Now'),
              ),
            ],
          ),
        ),
      ),
      // Resilient: In case of error, never block the farmer - go straight to dashboard
      error: (err, stack) => _buildMainScaffold(null),
      data: (profile) {
        return _buildMainScaffold(profile);
      },
    );
  }

  Widget _buildMainScaffold(dynamic profile) {
    final lang = ref.watch(appLanguageProvider);
    final Map<String, List<String>> tabLabels = {
      'hi': ['होम', 'डॉक्टर', 'मौसम', 'बाजार', 'योजनाएं', 'प्रोफाइल'],
      'mr': ['मुख्य', 'डॉक्टर', 'हवामान', 'बाजार', 'योजना', 'प्रोफाइल'],
      'en': ['Home', 'Doctor', 'Weather', 'Market', 'Schemes', 'Profile'],
      'gu': ['હોમ', 'ડૉક્ટર', 'હવામાન', 'બજાર', 'યોજના', 'પ્રોફાઇલ'],
      'pa': ['ਹੋਮ', 'ਡਾਕਟਰ', 'ਮੌਸਮ', 'ਮੰਡੀ', 'ਯੋਜਨਾਵਾਂ', 'ਪ੍ਰੋਫਾਈਲ'],
      'bn': ['হোম', 'ডাক্তার', 'আবহাওয়া', 'বাজার', 'যোজনা', 'প্রোফাইল'],
      'ta': ['முகப்பு', 'மருத்துவர்', 'வானிலை', 'சந்தை', 'திட்டங்கள்', 'சுயவிவரம்'],
      'te': ['హోమ్', 'డాక్టర్', 'వాతావరణం', 'మార్కెట్', 'పథకాలు', 'ప్రొఫైల్'],
      'kn': ['ಮುಖಪುಟ', 'ವೈದ್ಯ', 'ಹವಾಮಾನ', 'ಮಾರುಕಟ್ಟೆ', 'ಯೋಜನೆಗಳು', 'ಪ್ರೊಫೈಲ್'],
    };
    final labels = tabLabels[lang] ?? tabLabels['en']!;

    return Scaffold(
      body: IndexedStack(
        index: _currentIndex,
        children: _screens,
      ),
      bottomNavigationBar: Container(
        decoration: BoxDecoration(
          border: Border(top: BorderSide(color: AppColors.outlineVariant.withValues(alpha: 0.3))),
        ),
        child: NavigationBar(
          height: 72,
          backgroundColor: AppColors.background,
          elevation: 0,
          indicatorColor: AppColors.primaryEmerald.withValues(alpha: 0.15),
          selectedIndex: _currentIndex,
          onDestinationSelected: (index) {
            setState(() {
              _currentIndex = index;
            });
          },
          labelBehavior: NavigationDestinationLabelBehavior.alwaysShow,
          destinations: [
            _buildNavDestination(Icons.dashboard_outlined, Icons.dashboard_rounded, labels[0]),
            _buildNavDestination(Icons.psychology_outlined, Icons.psychology_rounded, labels[1]),
            _buildNavDestination(Icons.wb_sunny_outlined, Icons.wb_sunny_rounded, labels[2]),
            _buildNavDestination(Icons.storefront_outlined, Icons.storefront_rounded, labels[3]),
            _buildNavDestination(Icons.gavel_outlined, Icons.gavel_rounded, labels[4]),
            _buildNavDestination(Icons.person_outline_rounded, Icons.person_rounded, labels[5]),
          ],
        ),
      ),
    );
  }

  NavigationDestination _buildNavDestination(IconData icon, IconData selectedIcon, String label) {
    return NavigationDestination(
      icon: Icon(icon, color: AppColors.textSecondary, size: 24),
      selectedIcon: Icon(selectedIcon, color: AppColors.primaryEmerald, size: 24),
      label: label,
    );
  }
}
