import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import '../screens/home_screen.dart';
import '../../govt_schemes/screens/schemes_list_screen.dart';
import '../../profile/screens/profile_screen.dart';
import '../../ai_doctor/screens/ai_doctor_screen.dart';
import '../../weather/screens/weather_screen.dart';
import '../../../core/theme/app_colors.dart';
import '../../../core/providers/auth_provider.dart';
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
          height: 75,
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
            _buildNavDestination(Icons.dashboard_outlined, Icons.dashboard_rounded, 'Home'),
            _buildNavDestination(Icons.psychology_outlined, Icons.psychology_rounded, 'AI Doctor'),
            _buildNavDestination(Icons.wb_sunny_outlined, Icons.wb_sunny_rounded, 'Weather'),
            _buildNavDestination(Icons.storefront_outlined, Icons.storefront_rounded, 'Marketplace'),
            _buildNavDestination(Icons.gavel_outlined, Icons.gavel_rounded, 'Schemes'),
            _buildNavDestination(Icons.person_outline_rounded, Icons.person_rounded, 'Profile'),
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
