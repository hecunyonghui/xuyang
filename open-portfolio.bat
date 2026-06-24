@echo off
setlocal
cd /d "%~dp0"

set "HOST=127.0.0.1"
set "PORT=5173"
set "URL=http://%HOST%:%PORT%/?v=stable"
set "SERVER_SCRIPT=%~dp0start-portfolio.bat"
set "SERVER_TITLE=Portfolio Dev Server"

echo Checking local portfolio server...
powershell -NoProfile -ExecutionPolicy Bypass -Command ^
  "$ProgressPreference='SilentlyContinue';" ^
  "try {" ^
  "  Invoke-WebRequest -UseBasicParsing 'http://%HOST%:%PORT%/' | Out-Null;" ^
  "  exit 0" ^
  "} catch {" ^
  "  exit 1" ^
  "}"
if %errorlevel%==0 goto open_browser

echo Server is not running. Starting a dedicated terminal window...
start "%SERVER_TITLE%" cmd /k "\"%SERVER_SCRIPT%\""

echo Waiting for the server to become available...
powershell -NoProfile -ExecutionPolicy Bypass -Command ^
  "$ProgressPreference='SilentlyContinue';" ^
  "$url='http://%HOST%:%PORT%/';" ^
  "$ready=$false;" ^
  "for($i=0; $i -lt 30; $i++) {" ^
  "  Start-Sleep -Milliseconds 500;" ^
  "  try {" ^
  "    Invoke-WebRequest -UseBasicParsing $url | Out-Null;" ^
  "    $ready=$true;" ^
  "    break;" ^
  "  } catch {}" ^
  "}" ^
  "if(-not $ready) { exit 1 }"

if errorlevel 1 (
  echo [ERROR] The local server did not start in time.
  echo Please check the "%SERVER_TITLE%" window for details.
  pause
  exit /b 1
)

:open_browser
echo Opening %URL%
start "" "%URL%"
exit /b 0
