import 'dart:async';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:firebase_auth/firebase_auth.dart';
import '../../../core/theme/app_colors.dart';
import '../../../core/theme/app_theme.dart';
import '../../../core/providers/auth_provider.dart';
import '../../../core/providers/locale_provider.dart';
import '../../../core/services/firestore_service.dart';
import '../../../data/models/farmer_model.dart';
import '../../home/screens/main_screen.dart';

class LoginScreen extends ConsumerStatefulWidget {
  const LoginScreen({super.key});

  @override
  ConsumerState<LoginScreen> createState() => _LoginScreenState();
}

class _LoginScreenState extends ConsumerState<LoginScreen> with TickerProviderStateMixin {
  final _formKey = GlobalKey<FormState>();
  final _emailController = TextEditingController();
  final _passwordController = TextEditingController();
  final _nameController = TextEditingController();
  final _phoneController = TextEditingController();
  final _otpController = TextEditingController();
  final _districtController = TextEditingController(text: 'Nashik');
  final _landSizeController = TextEditingController(text: '2.5');

  String _selectedState = 'Maharashtra';
  final List<String> _selectedCrops = ['Wheat', 'Onion'];
  String _selectedSoil = 'Black';
  String _selectedIrrigation = 'Well';
  String _selectedLanguage = 'hi';

  String _verificationId = '';
  // Default to true: Show clean Sign In with prominent option to create account
  bool _isLogin = true;
  bool _isPhoneLogin = false;
  bool _isOtpSent = false;
  bool _isLoading = false;
  bool _passwordVisible = false;

  late AnimationController _fadeController;
  late AnimationController _slideController;
  late Animation<double> _fadeAnimation;
  late Animation<Offset> _slideAnimation;

  final List<String> _states = const [
    'Maharashtra', 'Uttar Pradesh', 'Punjab', 'Rajasthan', 'Gujarat',
    'Madhya Pradesh', 'Karnataka', 'Haryana', 'Tamil Nadu', 'Andhra Pradesh',
    'Telangana', 'West Bengal', 'Bihar', 'Kerala', 'Odisha',
  ];

  final List<String> _cropOptions = const [
    'Wheat', 'Onion', 'Tomato', 'Cotton', 'Soyabean',
    'Rice', 'Gram', 'Maize', 'Potato', 'Sugarcane', 'Bajra', 'Mustard',
  ];

  final List<String> _soilOptions = const [
    'Black', 'Red', 'Alluvial', 'Sandy', 'Loamy', 'Clayey',
  ];

  final List<String> _irrigationOptions = const [
    'Well', 'Borewell', 'Canal', 'Drip', 'Rainfed',
  ];

  final List<Map<String, String>> _langOptions = const [
    {'code': 'hi', 'label': 'हिन्दी (Hindi)'},
    {'code': 'mr', 'label': 'मराठी (Marathi)'},
    {'code': 'en', 'label': 'English'},
    {'code': 'gu', 'label': 'ગુજરાતી (Gujarati)'},
    {'code': 'pa', 'label': 'ਪੰਜਾਬੀ (Punjabi)'},
    {'code': 'bn', 'label': 'বাংলা (Bengali)'},
    {'code': 'ta', 'label': 'தமிழ் (Tamil)'},
    {'code': 'te', 'label': 'తెలుగు (Telugu)'},
    {'code': 'kn', 'label': 'ಕನ್ನಡ (Kannada)'},
  ];

  @override
  void initState() {
    super.initState();
    _selectedLanguage = ref.read(appLanguageProvider);
    _fadeController = AnimationController(vsync: this, duration: const Duration(milliseconds: 700));
    _slideController = AnimationController(vsync: this, duration: const Duration(milliseconds: 500));
    _fadeAnimation = CurvedAnimation(parent: _fadeController, curve: Curves.easeOut);
    _slideAnimation = Tween<Offset>(begin: const Offset(0, 0.12), end: Offset.zero)
        .animate(CurvedAnimation(parent: _slideController, curve: Curves.easeOutCubic));
    _fadeController.forward();
    _slideController.forward();
  }

  @override
  void dispose() {
    _fadeController.dispose();
    _slideController.dispose();
    _emailController.dispose();
    _passwordController.dispose();
    _nameController.dispose();
    _phoneController.dispose();
    _otpController.dispose();
    _districtController.dispose();
    _landSizeController.dispose();
    super.dispose();
  }

  void _switchMode(bool login) {
    if (_isLogin == login) return;
    _slideController.reset();
    _slideController.forward();
    setState(() {
      _isLogin = login;
      _isPhoneLogin = false;
      _isOtpSent = false;
      _formKey.currentState?.reset();
    });
  }

  Future<void> _handleAuth() async {
    if (!_formKey.currentState!.validate()) return;
    setState(() => _isLoading = true);
    try {
      final auth = ref.read(authServiceProvider);

      if (_isPhoneLogin) {
        if (!_isOtpSent) {
          final phone = _phoneController.text.trim();
          final formattedPhone = phone.startsWith('+') ? phone : '+91$phone';
          await auth.verifyPhoneNumber(
            phoneNumber: formattedPhone,
            verificationCompleted: (PhoneAuthCredential credential) async {
              await FirebaseAuth.instance.signInWithCredential(credential);
              _navigateToHome();
            },
            verificationFailed: (FirebaseAuthException e) {
              if (mounted) {
                setState(() => _isLoading = false);
                ScaffoldMessenger.of(context).showSnackBar(SnackBar(
                  content: Text(_friendlyError(e.message ?? e.toString())),
                  backgroundColor: AppColors.error,
                  behavior: SnackBarBehavior.floating,
                  shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
                ));
              }
            },
            codeSent: (String verificationId, int? resendToken) {
              if (mounted) {
                setState(() {
                  _verificationId = verificationId;
                  _isOtpSent = true;
                  _isLoading = false;
                });
                ScaffoldMessenger.of(context).showSnackBar(SnackBar(
                  content: Text('Verification code sent to $formattedPhone'),
                  backgroundColor: AppColors.primaryEmerald,
                  behavior: SnackBarBehavior.floating,
                  shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
                ));
              }
            },
            codeAutoRetrievalTimeout: (String verificationId) {
              _verificationId = verificationId;
            },
          );
          return;
        } else {
          await auth.signInWithPhoneOtp(_verificationId, _otpController.text.trim());
          _navigateToHome();
          return;
        }
      }

      // Email & Password Flow
      if (_isLogin) {
        // Sign In
        final cleanEmail = _emailController.text.trim().toLowerCase();
        final cleanPassword = _passwordController.text.trim();
        final cred = await auth.signInWithEmail(
          cleanEmail,
          cleanPassword,
        );
        if (cred.user != null) {
          await ref.read(currentUserProvider.notifier).fetchProfile(cred.user!.uid);
          if (mounted) {
            ScaffoldMessenger.of(context).showSnackBar(SnackBar(
              content: const Text('Signed in successfully!'),
              backgroundColor: AppColors.primaryEmerald,
              behavior: SnackBarBehavior.floating,
              shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
            ));
          }
          _navigateToHome();
        }
      } else {
        // Create Full Farmer Account
        final cleanEmail = _emailController.text.trim().toLowerCase();
        final cleanPassword = _passwordController.text.trim();
        final cleanName = _nameController.text.trim().isEmpty ? 'Farmer' : _nameController.text.trim();
        final cleanDistrict = _districtController.text.trim().isEmpty ? 'Nashik' : _districtController.text.trim();
        final cleanLand = double.tryParse(_landSizeController.text.trim()) ?? 2.5;

        final cred = await auth.signUpWithEmail(
          cleanEmail,
          cleanPassword,
          fullName: cleanName,
        );

        if (cred.user != null) {
          final uid = cred.user!.uid;
          final farmer = Farmer(
            id: uid,
            name: cleanName,
            state: _selectedState,
            district: cleanDistrict,
            landSize: cleanLand,
            cropsGrown: _selectedCrops.isEmpty ? ['Wheat', 'Onion'] : _selectedCrops,
            preferredLanguage: _selectedLanguage,
            soilType: _selectedSoil,
            irrigationSource: _selectedIrrigation,
          );

          // 1. Instantly set in Riverpod state so UI reflects it immediately
          ref.read(currentUserProvider.notifier).setProfile(farmer);

          // 2. Persist profile locally and to Firestore
          await FirestoreService().saveFarmerProfile(farmer);
          await ref.read(appLanguageProvider.notifier).setLanguage(_selectedLanguage, userId: uid);

          if (mounted) {
            ScaffoldMessenger.of(context).showSnackBar(SnackBar(
              content: Text('🎉 Welcome ${farmer.name}! Account created successfully.'),
              backgroundColor: AppColors.primaryEmerald,
              behavior: SnackBarBehavior.floating,
              shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
            ));
          }
          _navigateToHome();
        }
      }
    } catch (e) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(SnackBar(
          content: Row(children: [
            const Icon(Icons.error_outline_rounded, color: Colors.white, size: 20),
            const SizedBox(width: 10),
            Expanded(child: Text(_friendlyError(e.toString()), style: GoogleFonts.plusJakartaSans(fontSize: 13))),
          ]),
          backgroundColor: AppColors.error,
          behavior: SnackBarBehavior.floating,
          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
        ));
      }
    } finally {
      if (mounted) setState(() => _isLoading = false);
    }
  }

  Future<void> _handleGoogleLogin() async {
    setState(() => _isLoading = true);
    try {
      final cred = await ref.read(authServiceProvider).signInWithGoogle();
      if (cred != null) {
        if (cred.user != null) {
          await ref.read(currentUserProvider.notifier).fetchProfile(cred.user!.uid);
        }
        _navigateToHome();
      }
    } catch (e) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(SnackBar(
          content: Text(_friendlyError(e.toString())),
          backgroundColor: AppColors.error,
          behavior: SnackBarBehavior.floating,
          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
        ));
      }
    } finally {
      if (mounted) setState(() => _isLoading = false);
    }
  }

  void _handleGuestLogin() {
    ref.read(currentUserProvider.notifier).enterAsGuest();
    _navigateToHome();
  }

  Future<void> _forgotPassword() async {
    final email = _emailController.text.trim();
    if (email.isEmpty) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Text('Enter your registered email address first', style: GoogleFonts.plusJakartaSans()),
          backgroundColor: AppColors.warning,
          behavior: SnackBarBehavior.floating,
          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
        ),
      );
      return;
    }
    try {
      await ref.read(authServiceProvider).sendPasswordResetEmail(email);
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(
            content: Text('Password reset link sent to $email. Please check your inbox.'),
            backgroundColor: AppColors.primaryEmerald,
            behavior: SnackBarBehavior.floating,
            shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
            duration: const Duration(seconds: 5),
          ),
        );
      }
    } catch (e) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(SnackBar(
          content: Text(_friendlyError(e.toString())),
          backgroundColor: AppColors.error,
          behavior: SnackBarBehavior.floating,
          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
        ));
      }
    }
  }

  void _navigateToHome() {
    Navigator.of(context).pushAndRemoveUntil(
      MaterialPageRoute(builder: (_) => const MainScreen()),
      (route) => false,
    );
  }

  String _friendlyError(String error) {
    final lower = error.toLowerCase();
    if (lower.contains('invalid-credential') || lower.contains('wrong-password') || lower.contains('user-not-found')) {
      return 'Incorrect email or password. Please try again.';
    }
    if (lower.contains('email-already-in-use')) {
      return 'This email is already registered. Please sign in instead.';
    }
    if (lower.contains('weak-password')) {
      return 'Password is too weak. Please use at least 6 characters.';
    }
    if (lower.contains('too-many-requests')) {
      return 'Too many attempts. Please wait a minute and try again.';
    }
    if (lower.contains('network') || lower.contains('socketexception') || lower.contains('failed host lookup')) {
      return 'Network connection issue. Please check your internet connection.';
    }
    return error.replaceAll('Exception:', '').replaceAll('firebase_auth/', '').trim();
  }

  int get _passwordStrength {
    final p = _passwordController.text;
    int s = 0;
    if (p.length >= 6) s++;
    if (p.length >= 8) s++;
    if (RegExp(r'[A-Z]').hasMatch(p)) s++;
    if (RegExp(r'[0-9]').hasMatch(p)) s++;
    if (RegExp(r'[!@#\$&*~]').hasMatch(p)) s++;
    return s;
  }

  Color get _strengthColor {
    switch (_passwordStrength) {
      case 0:
      case 1:
        return AppColors.error;
      case 2:
        return AppColors.warning;
      case 3:
        return Colors.orange;
      case 4:
      case 5:
        return AppColors.primaryEmerald;
      default:
        return AppColors.textSecondary;
    }
  }

  String get _strengthLabel {
    switch (_passwordStrength) {
      case 0:
      case 1:
        return 'Weak';
      case 2:
        return 'Fair';
      case 3:
        return 'Good';
      case 4:
      case 5:
        return 'Strong';
      default:
        return '';
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.background,
      body: Stack(
        children: [
          // Background decorations
          Positioned(top: -120, left: -80, child: _glowCircle(350, AppColors.primaryEmerald.withValues(alpha: 0.08))),
          Positioned(bottom: -100, right: -100, child: _glowCircle(300, AppColors.neonCyan.withValues(alpha: 0.06))),
          // Main content
          SafeArea(
            child: Center(
              child: SingleChildScrollView(
                padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 16),
                child: FadeTransition(
                  opacity: _fadeAnimation,
                  child: SlideTransition(
                    position: _slideAnimation,
                    child: Form(
                      key: _formKey,
                      child: Column(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          _buildLogo(),
                          const SizedBox(height: 16),
                          _buildTitle(),
                          const SizedBox(height: 16),
                          // Dual Segmented Switcher: [ 📝 Create Account ] [ 🔑 Sign In ]
                          _buildModeToggle(),
                          const SizedBox(height: 20),
                          // Form fields
                          AnimatedSwitcher(
                            duration: const Duration(milliseconds: 300),
                            child: _buildFormFields(),
                          ),
                          const SizedBox(height: 24),
                          // Primary button
                          _buildPrimaryButton(),
                          // Forgot password & Create Account Prompt (only in Sign In mode)
                          if (!_isPhoneLogin && _isLogin) ...[
                            const SizedBox(height: 12),
                            TextButton(
                              onPressed: _forgotPassword,
                              child: Text('Forgot Password?',
                                  style: GoogleFonts.plusJakartaSans(fontSize: 13, fontWeight: FontWeight.w700, color: AppColors.primaryEmerald)),
                            ),
                            const SizedBox(height: 16),
                            _buildCreateAccountPrompt(),
                          ],
                          const SizedBox(height: 20),
                          _buildDivider(),
                          const SizedBox(height: 16),
                          // Guest Login Button
                          _buildGuestButton(),
                          const SizedBox(height: 12),
                          // Social / phone buttons
                          _buildGoogleButton(),
                          const SizedBox(height: 12),
                          _buildPhoneToggleButton(),
                          const SizedBox(height: 24),
                        ],
                      ),
                    ),
                  ),
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _glowCircle(double size, Color color) {
    return Container(
      width: size, height: size,
      decoration: BoxDecoration(shape: BoxShape.circle, gradient: RadialGradient(colors: [color, Colors.transparent])),
    );
  }

  Widget _buildLogo() {
    return Hero(
      tag: 'app_logo',
      child: Container(
        width: 80, height: 80,
        decoration: BoxDecoration(
          gradient: AppTheme.celestialGradient,
          borderRadius: BorderRadius.circular(22),
          boxShadow: [BoxShadow(color: AppColors.primaryEmerald.withValues(alpha: 0.35), blurRadius: 24, offset: const Offset(0, 8))],
        ),
        child: ClipRRect(
          borderRadius: BorderRadius.circular(22),
          child: Image.asset('assets/icons/app_icon.png', width: 64, height: 64, fit: BoxFit.cover,
              errorBuilder: (_, __, ___) => const Icon(Icons.agriculture_rounded, size: 44, color: Colors.white)),
        ),
      ),
    );
  }

  Widget _buildTitle() {
    return Column(
      children: [
        Text(
          _isPhoneLogin
              ? 'PHONE VERIFICATION'
              : (_isLogin ? 'WELCOME BACK' : 'NEW FARMER REGISTRATION'),
          style: GoogleFonts.plusJakartaSans(color: AppColors.primaryEmerald, letterSpacing: 2.0, fontWeight: FontWeight.w800, fontSize: 11),
        ),
        const SizedBox(height: 6),
        Text(
          _isPhoneLogin
              ? (_isOtpSent ? 'Verify OTP' : 'Phone Login')
              : (_isLogin ? 'Sign In to Your Account' : 'Create Farmer Account'),
          style: GoogleFonts.outfit(fontSize: 26, fontWeight: FontWeight.w900, color: AppColors.textPrimary),
          textAlign: TextAlign.center,
        ),
        const SizedBox(height: 4),
        Text(
          _isLogin
              ? 'Sign in to access your crops, diary and market rates'
              : 'Fill in your farm details for personalized AI advice & alerts',
          style: GoogleFonts.plusJakartaSans(fontSize: 13, color: AppColors.textSecondary),
          textAlign: TextAlign.center,
        ),
      ],
    );
  }

  Widget _buildCreateAccountPrompt() {
    return Container(
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: AppColors.primaryEmerald.withValues(alpha: 0.08),
        borderRadius: BorderRadius.circular(18),
        border: Border.all(color: AppColors.primaryEmerald.withValues(alpha: 0.25)),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              const Text('🌱', style: TextStyle(fontSize: 22)),
              const SizedBox(width: 8),
              Expanded(
                child: Text(
                  'New to Krushi Mitra? (नवीन शेतकरी?)',
                  style: GoogleFonts.outfit(fontSize: 15, fontWeight: FontWeight.w800, color: AppColors.textPrimary),
                ),
              ),
            ],
          ),
          const SizedBox(height: 6),
          Text(
            'Create your farmer profile to get customized AI crop advice, live mandi alerts, and accurate weather updates.',
            style: GoogleFonts.plusJakartaSans(fontSize: 12, color: AppColors.textSecondary, height: 1.4),
          ),
          const SizedBox(height: 12),
          SizedBox(
            width: double.infinity,
            child: ElevatedButton.icon(
              onPressed: () => _switchMode(false),
              icon: const Icon(Icons.person_add_alt_1_rounded, size: 18),
              label: Text(
                'Create Farmer Account (नवीन खाते तयार करा)',
                style: GoogleFonts.plusJakartaSans(fontSize: 13, fontWeight: FontWeight.w800),
              ),
              style: ElevatedButton.styleFrom(
                backgroundColor: AppColors.primaryEmerald,
                foregroundColor: Colors.white,
                padding: const EdgeInsets.symmetric(vertical: 12),
                shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
                elevation: 0,
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildModeToggle() {
    return Container(
      padding: const EdgeInsets.all(4),
      decoration: BoxDecoration(
        color: AppColors.surfaceContainerHigh,
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: AppColors.outlineVariant.withValues(alpha: 0.3)),
      ),
      child: Row(
        children: [
          Expanded(
            child: GestureDetector(
              onTap: () => _switchMode(true),
              child: AnimatedContainer(
                duration: const Duration(milliseconds: 200),
                padding: const EdgeInsets.symmetric(vertical: 12),
                decoration: BoxDecoration(
                  color: _isLogin ? AppColors.primaryEmerald : Colors.transparent,
                  borderRadius: BorderRadius.circular(12),
                  boxShadow: _isLogin
                      ? [
                          BoxShadow(
                            color: AppColors.primaryEmerald.withValues(alpha: 0.3),
                            blurRadius: 10,
                            offset: const Offset(0, 4),
                          ),
                        ]
                      : [],
                ),
                child: Center(
                  child: Text(
                    '🔑 Sign In',
                    style: GoogleFonts.plusJakartaSans(
                      fontSize: 14,
                      fontWeight: FontWeight.w800,
                      color: _isLogin ? Colors.white : AppColors.textSecondary,
                    ),
                  ),
                ),
              ),
            ),
          ),
          Expanded(
            child: GestureDetector(
              onTap: () => _switchMode(false),
              child: AnimatedContainer(
                duration: const Duration(milliseconds: 200),
                padding: const EdgeInsets.symmetric(vertical: 12),
                decoration: BoxDecoration(
                  color: !_isLogin ? AppColors.primaryEmerald : Colors.transparent,
                  borderRadius: BorderRadius.circular(12),
                  boxShadow: !_isLogin
                      ? [
                          BoxShadow(
                            color: AppColors.primaryEmerald.withValues(alpha: 0.3),
                            blurRadius: 10,
                            offset: const Offset(0, 4),
                          ),
                        ]
                      : [],
                ),
                child: Center(
                  child: Text(
                    '📝 Create Account',
                    style: GoogleFonts.plusJakartaSans(
                      fontSize: 14,
                      fontWeight: FontWeight.w800,
                      color: !_isLogin ? Colors.white : AppColors.textSecondary,
                    ),
                  ),
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildFormFields() {
    if (_isPhoneLogin) {
      return Column(
        key: const ValueKey('phone_auth'),
        children: [!_isOtpSent ? _buildPhoneField() : _buildOtpField()],
      );
    }

    if (_isLogin) {
      // Clean Sign In Form
      return Column(
        key: const ValueKey('login_form'),
        children: [
          _buildField(
            _emailController,
            'Email Address',
            Icons.email_outlined,
            keyboardType: TextInputType.emailAddress,
            validator: (v) {
              if (v == null || v.isEmpty) return 'Enter your email';
              if (!RegExp(r'^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$').hasMatch(v)) return 'Enter a valid email';
              return null;
            },
          ),
          const SizedBox(height: 14),
          _buildPasswordField(),
        ],
      );
    }

    // Full Detailed Account Creation Form
    return Column(
      key: const ValueKey('signup_form'),
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        // Easy navigation back to sign in
        OutlinedButton.icon(
          onPressed: () => _switchMode(true),
          icon: const Icon(Icons.arrow_back_rounded, size: 18),
          label: Text('← Back to Sign In (साइन इन कडे परत जा)', style: GoogleFonts.plusJakartaSans(fontWeight: FontWeight.w700, fontSize: 13)),
          style: OutlinedButton.styleFrom(
            foregroundColor: AppColors.primaryEmerald,
            side: BorderSide(color: AppColors.primaryEmerald.withValues(alpha: 0.4)),
            minimumSize: const Size(double.infinity, 42),
            shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
          ),
        ),
        const SizedBox(height: 16),
        _buildSectionHeader('👤 Farmer Information'),
        const SizedBox(height: 10),
        _buildField(
          _nameController,
          'Full Name (पूर्ण नाव / पूरा नाम)',
          Icons.person_outline_rounded,
          validator: (v) => v == null || v.trim().isEmpty ? 'Enter your full name' : null,
        ),
        const SizedBox(height: 12),
        _buildField(
          _emailController,
          'Email Address',
          Icons.email_outlined,
          keyboardType: TextInputType.emailAddress,
          validator: (v) {
            if (v == null || v.isEmpty) return 'Enter your email';
            if (!RegExp(r'^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$').hasMatch(v)) return 'Enter a valid email';
            return null;
          },
        ),
        const SizedBox(height: 12),
        _buildPasswordField(),
        if (_passwordController.text.isNotEmpty) ...[
          const SizedBox(height: 8),
          _buildPasswordStrengthBar(),
        ],
        const SizedBox(height: 18),
        _buildSectionHeader('📍 Farm Location & Size'),
        const SizedBox(height: 10),
        Row(
          children: [
            Expanded(
              child: DropdownButtonFormField<String>(
                initialValue: _selectedState,
                decoration: const InputDecoration(
                  labelText: 'State (राज्य)',
                  prefixIcon: Icon(Icons.map_rounded, size: 20),
                  contentPadding: EdgeInsets.symmetric(horizontal: 12, vertical: 14),
                ),
                items: _states.map((s) => DropdownMenuItem(value: s, child: Text(s, style: GoogleFonts.plusJakartaSans(fontSize: 13)))).toList(),
                onChanged: (val) {
                  if (val != null) setState(() => _selectedState = val);
                },
              ),
            ),
            const SizedBox(width: 12),
            Expanded(
              child: _buildField(
                _districtController,
                'District (जिल्हा)',
                Icons.location_city_rounded,
                validator: (v) => v == null || v.trim().isEmpty ? 'Enter district' : null,
              ),
            ),
          ],
        ),
        const SizedBox(height: 12),
        _buildField(
          _landSizeController,
          'Land Size (जमीन एकर / Land in Acres)',
          Icons.landscape_rounded,
          keyboardType: const TextInputType.numberWithOptions(decimal: true),
          validator: (v) {
            if (v == null || v.isEmpty) return 'Enter land size';
            if (double.tryParse(v) == null) return 'Enter valid number';
            return null;
          },
        ),
        const SizedBox(height: 18),
        _buildSectionHeader('🌾 Crops Grown (पिके / फसलें)'),
        const SizedBox(height: 8),
        Text('Tap to select crops you grow:', style: GoogleFonts.plusJakartaSans(fontSize: 12, color: AppColors.textSecondary)),
        const SizedBox(height: 8),
        Wrap(
          spacing: 8,
          runSpacing: 8,
          children: _cropOptions.map((crop) {
            final isSelected = _selectedCrops.contains(crop);
            return FilterChip(
              label: Text(crop),
              selected: isSelected,
              onSelected: (selected) {
                setState(() {
                  if (selected) {
                    _selectedCrops.add(crop);
                  } else {
                    _selectedCrops.remove(crop);
                  }
                });
              },
              selectedColor: AppColors.primaryEmerald.withValues(alpha: 0.2),
              checkmarkColor: AppColors.primaryEmerald,
              labelStyle: GoogleFonts.plusJakartaSans(
                fontSize: 12,
                fontWeight: isSelected ? FontWeight.w800 : FontWeight.w500,
                color: isSelected ? AppColors.primaryEmerald : AppColors.textPrimary,
              ),
              backgroundColor: AppColors.surfaceContainerHigh,
              shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(12),
                side: BorderSide(color: isSelected ? AppColors.primaryEmerald : AppColors.outlineVariant.withValues(alpha: 0.3)),
              ),
            );
          }).toList(),
        ),
        const SizedBox(height: 18),
        _buildSectionHeader('🌱 Soil & Irrigation'),
        const SizedBox(height: 10),
        Row(
          children: [
            Expanded(
              child: DropdownButtonFormField<String>(
                initialValue: _selectedSoil,
                decoration: const InputDecoration(
                  labelText: 'Soil Type (माती)',
                  prefixIcon: Icon(Icons.grass_rounded, size: 20),
                  contentPadding: EdgeInsets.symmetric(horizontal: 12, vertical: 14),
                ),
                items: _soilOptions.map((s) => DropdownMenuItem(value: s, child: Text(s, style: GoogleFonts.plusJakartaSans(fontSize: 13)))).toList(),
                onChanged: (val) {
                  if (val != null) setState(() => _selectedSoil = val);
                },
              ),
            ),
            const SizedBox(width: 12),
            Expanded(
              child: DropdownButtonFormField<String>(
                initialValue: _selectedIrrigation,
                decoration: const InputDecoration(
                  labelText: 'Irrigation (पाणी)',
                  prefixIcon: Icon(Icons.water_drop_rounded, size: 20),
                  contentPadding: EdgeInsets.symmetric(horizontal: 12, vertical: 14),
                ),
                items: _irrigationOptions.map((s) => DropdownMenuItem(value: s, child: Text(s, style: GoogleFonts.plusJakartaSans(fontSize: 13)))).toList(),
                onChanged: (val) {
                  if (val != null) setState(() => _selectedIrrigation = val);
                },
              ),
            ),
          ],
        ),
        const SizedBox(height: 14),
        DropdownButtonFormField<String>(
          initialValue: _selectedLanguage,
          decoration: const InputDecoration(
            labelText: 'Preferred App Language (भाषा निवडा)',
            prefixIcon: Icon(Icons.language_rounded, size: 20),
            contentPadding: EdgeInsets.symmetric(horizontal: 12, vertical: 14),
          ),
          items: _langOptions.map((l) => DropdownMenuItem(value: l['code'], child: Text(l['label']!, style: GoogleFonts.plusJakartaSans(fontSize: 13)))).toList(),
          onChanged: (val) {
            if (val != null) {
              setState(() => _selectedLanguage = val);
              ref.read(appLanguageProvider.notifier).setLanguage(val);
            }
          },
        ),
      ],
    );
  }

  Widget _buildSectionHeader(String title) {
    return Text(
      title,
      style: GoogleFonts.plusJakartaSans(
        fontSize: 13,
        fontWeight: FontWeight.w800,
        color: AppColors.primaryEmerald,
        letterSpacing: 0.5,
      ),
    );
  }

  Widget _buildField(TextEditingController controller, String label, IconData icon, {
    TextInputType? keyboardType,
    String? Function(String?)? validator,
  }) {
    return TextFormField(
      controller: controller,
      keyboardType: keyboardType,
      decoration: InputDecoration(
        labelText: label,
        prefixIcon: Icon(icon, size: 20),
        contentPadding: const EdgeInsets.symmetric(horizontal: 16, vertical: 14),
      ),
      validator: validator ?? (v) => (v == null || v.isEmpty) ? 'Required' : null,
    );
  }

  Widget _buildPasswordField() {
    return TextFormField(
      controller: _passwordController,
      obscureText: !_passwordVisible,
      onChanged: (_) { if (!_isLogin) setState(() {}); },
      decoration: InputDecoration(
        labelText: 'Password',
        prefixIcon: const Icon(Icons.lock_outline_rounded, size: 20),
        contentPadding: const EdgeInsets.symmetric(horizontal: 16, vertical: 14),
        suffixIcon: IconButton(
          icon: Icon(_passwordVisible ? Icons.visibility_off_rounded : Icons.visibility_rounded, size: 20),
          onPressed: () => setState(() => _passwordVisible = !_passwordVisible),
        ),
      ),
      validator: (v) {
        if (v == null || v.isEmpty) return 'Enter your password';
        if (v.length < 6) return 'Password must be at least 6 characters';
        return null;
      },
    );
  }

  Widget _buildPasswordStrengthBar() {
    return Row(
      children: [
        Expanded(
          child: ClipRRect(
            borderRadius: BorderRadius.circular(4),
            child: LinearProgressIndicator(
              value: _passwordStrength / 5,
              backgroundColor: AppColors.surfaceVariant,
              color: _strengthColor,
              minHeight: 4,
            ),
          ),
        ),
        const SizedBox(width: 10),
        Text(_strengthLabel, style: GoogleFonts.plusJakartaSans(fontSize: 11, fontWeight: FontWeight.w800, color: _strengthColor)),
      ],
    );
  }

  Widget _buildPhoneField() {
    return TextFormField(
      controller: _phoneController,
      keyboardType: TextInputType.phone,
      decoration: const InputDecoration(
        labelText: 'Phone Number',
        hintText: '10 digit number',
        prefixIcon: Icon(Icons.phone_android_rounded, size: 20),
        prefixText: '+91 ',
      ),
      validator: (v) => (v == null || v.isEmpty || v.length < 10) ? 'Enter valid 10-digit number' : null,
    );
  }

  Widget _buildOtpField() {
    return TextFormField(
      controller: _otpController,
      keyboardType: TextInputType.number,
      maxLength: 6,
      style: GoogleFonts.outfit(fontSize: 24, fontWeight: FontWeight.w800, letterSpacing: 8),
      textAlign: TextAlign.center,
      decoration: InputDecoration(
        labelText: 'Enter OTP',
        prefixIcon: const Icon(Icons.sms_rounded, size: 20),
        counterText: '',
        hintText: '• • • • • •',
        hintStyle: GoogleFonts.outfit(fontSize: 24, color: AppColors.textSecondary.withValues(alpha: 0.3)),
      ),
      validator: (v) => (v == null || v.isEmpty || v.length < 6) ? 'Enter 6-digit OTP' : null,
    );
  }

  Widget _buildPrimaryButton() {
    final buttonText = _isPhoneLogin
        ? (_isOtpSent ? 'Verify OTP & Enter' : 'Send Verification OTP')
        : (_isLogin ? '🔑 Sign In (लॉगिन करा)' : '🌱 Create Account & Enter (खाते तयार करा)');

    return GestureDetector(
      onTap: _isLoading ? null : _handleAuth,
      child: AnimatedContainer(
        duration: const Duration(milliseconds: 200),
        height: 56,
        width: double.infinity,
        decoration: BoxDecoration(
          gradient: _isLoading ? null : AppTheme.celestialGradient,
          color: _isLoading ? AppColors.textSecondary : null,
          borderRadius: BorderRadius.circular(18),
          boxShadow: _isLoading ? [] : [BoxShadow(color: AppColors.primaryEmerald.withValues(alpha: 0.35), blurRadius: 20, offset: const Offset(0, 8))],
        ),
        child: Center(
          child: _isLoading
              ? const SizedBox(width: 24, height: 24, child: CircularProgressIndicator(color: Colors.white, strokeWidth: 2.5))
              : Text(
                  buttonText,
                  style: GoogleFonts.plusJakartaSans(fontSize: 16, fontWeight: FontWeight.w800, color: Colors.white),
                ),
        ),
      ),
    );
  }

  Widget _buildDivider() {
    return Row(
      children: [
        Expanded(child: Divider(color: AppColors.outline.withValues(alpha: 0.5))),
        Padding(
          padding: const EdgeInsets.symmetric(horizontal: 16),
          child: Text('OR', style: GoogleFonts.plusJakartaSans(color: AppColors.textSecondary, fontSize: 12, fontWeight: FontWeight.w800, letterSpacing: 1)),
        ),
        Expanded(child: Divider(color: AppColors.outline.withValues(alpha: 0.5))),
      ],
    );
  }

  Widget _buildGuestButton() {
    return _socialButton(
      onTap: _handleGuestLogin,
      icon: const Icon(Icons.nature_people_rounded, color: AppColors.primaryEmerald, size: 22),
      label: 'Explore as Guest (अतिथी म्हणून सुरू करा)',
    );
  }

  Widget _buildGoogleButton() {
    return _socialButton(
      onTap: _handleGoogleLogin,
      icon: Container(
        width: 22, height: 22,
        decoration: const BoxDecoration(shape: BoxShape.circle),
        child: Center(child: Text('G', style: GoogleFonts.outfit(fontSize: 18, fontWeight: FontWeight.w900, color: Colors.red.shade600))),
      ),
      label: 'Continue with Google',
    );
  }

  Widget _buildPhoneToggleButton() {
    if (!_isPhoneLogin) {
      return _socialButton(
        onTap: () => setState(() { _isPhoneLogin = true; _isOtpSent = false; _slideController.reset(); _slideController.forward(); }),
        icon: const Icon(Icons.phone_android_rounded, color: AppColors.primaryEmerald, size: 22),
        label: 'Continue with Phone Number',
      );
    }
    return _socialButton(
      onTap: () => setState(() { _isPhoneLogin = false; _isOtpSent = false; _slideController.reset(); _slideController.forward(); }),
      icon: const Icon(Icons.email_outlined, color: AppColors.primaryEmerald, size: 22),
      label: 'Back to Email & Details Form',
    );
  }

  Widget _socialButton({required VoidCallback onTap, required Widget icon, required String label}) {
    return GestureDetector(
      onTap: _isLoading ? null : onTap,
      child: Container(
        height: 52,
        decoration: BoxDecoration(
          color: AppColors.surface,
          borderRadius: BorderRadius.circular(16),
          border: Border.all(color: AppColors.outline.withValues(alpha: 0.4)),
        ),
        child: Center(
          child: Row(
            mainAxisSize: MainAxisSize.min,
            children: [
              icon,
              const SizedBox(width: 12),
              Text(label, style: GoogleFonts.plusJakartaSans(fontWeight: FontWeight.w700, fontSize: 13, color: AppColors.textPrimary)),
            ],
          ),
        ),
      ),
    );
  }
}
