@echo off
setlocal
cd /d "%~dp0"

set "NODE_EXE=C:\Users\xuyang\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"
set "VITE_ENTRY=%~dp0node_modules\vite\bin\vite.js"
set "HOST=127.0.0.1"
set "PORT=5173"

title Portfolio Dev Server

if not exist "%NODE_EXE%" (
  echo [ERROR] Node runtime not found:
  echo %NODE_EXE%
  pause
  exit /b 1
)

if not exist "%VITE_ENTRY%" (
  echo [ERROR] Vite entry not found:
  echo %VITE_ENTRY%
  echo Please make sure dependencies are installed.
  pause
  exit /b 1
)

echo Starting portfolio dev server...
echo Local URL: http://%HOST%:%PORT%/
echo Keep this window open while using the site.
echo.

"%NODE_EXE%" "%VITE_ENTRY%" --host %HOST% --port %PORT%

echo.
echo Dev server stopped.
pause
exit /b %errorlevel%
