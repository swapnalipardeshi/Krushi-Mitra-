@echo off
title Krushi Mitra - Android Emulator Launcher
echo ======================================================================
echo             KRUSHI MITRA - LAUNCHING ON EMULATOR
echo ======================================================================
echo.

set "ANDROID_SDK=C:\Users\swapn\AppData\Local\Android\Sdk"
set "FLUTTER_BIN=C:\flutter\flutter_windows_3.47.6-stable\flutter\bin"
set "PATH=%FLUTTER_BIN%;%ANDROID_SDK%\platform-tools;%ANDROID_SDK%\emulator;%PATH%"

echo [1/4] Clearing any stale emulator locks...
del /f /q /s "C:\Users\swapn\.android\avd\Medium_Phone.avd\*.lock" 2>nul

echo.
echo [2/4] Starting Android Emulator Window (Medium_Phone_API_37.0)...
start "Android Emulator" "%ANDROID_SDK%\emulator\emulator.exe" -avd Medium_Phone_API_37.0 -gpu host

echo.
echo [3/4] Waiting for emulator to boot up...
"%ANDROID_SDK%\platform-tools\adb.exe" wait-for-device
echo Emulator connected! Waiting for system ready...
timeout /t 5 /nobreak >nul

echo.
echo [4/4] Launching Krushi Mitra App...
cd /d "c:\Users\swapn\krushi mitra\Krushi-Mitra\krushi_mitra"
call "%FLUTTER_BIN%\flutter.bat" run -d emulator-5554

echo.
pause
