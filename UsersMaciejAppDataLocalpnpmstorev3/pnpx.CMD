@SETLOCAL
@IF NOT DEFINED NODE_PATH (
  @SET "NODE_PATH=C:\Users\Maciej\AppData\Local\pnpm\global\5\.pnpm\pnpm@8.15.1\node_modules\pnpm\bin\node_modules;C:\Users\Maciej\AppData\Local\pnpm\global\5\.pnpm\pnpm@8.15.1\node_modules\pnpm\node_modules;C:\Users\Maciej\AppData\Local\pnpm\global\5\.pnpm\pnpm@8.15.1\node_modules;C:\Users\Maciej\AppData\Local\pnpm\global\5\.pnpm\node_modules"
) ELSE (
  @SET "NODE_PATH=C:\Users\Maciej\AppData\Local\pnpm\global\5\.pnpm\pnpm@8.15.1\node_modules\pnpm\bin\node_modules;C:\Users\Maciej\AppData\Local\pnpm\global\5\.pnpm\pnpm@8.15.1\node_modules\pnpm\node_modules;C:\Users\Maciej\AppData\Local\pnpm\global\5\.pnpm\pnpm@8.15.1\node_modules;C:\Users\Maciej\AppData\Local\pnpm\global\5\.pnpm\node_modules;%NODE_PATH%"
)
@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe"  "%~dp0\..\..\..\..\..\..\Users\Maciej\AppData\Local\pnpm\global\5\node_modules\pnpm\bin\pnpx.cjs" %*
) ELSE (
  @SET PATHEXT=%PATHEXT:;.JS;=;%
  node  "%~dp0\..\..\..\..\..\..\Users\Maciej\AppData\Local\pnpm\global\5\node_modules\pnpm\bin\pnpx.cjs" %*
)
