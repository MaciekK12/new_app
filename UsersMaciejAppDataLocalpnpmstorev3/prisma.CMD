@SETLOCAL
@IF NOT DEFINED NODE_PATH (
  @SET "NODE_PATH=C:\Users\Maciej\AppData\Local\pnpm\global\5\.pnpm\prisma@5.9.0\node_modules\prisma\build\node_modules;C:\Users\Maciej\AppData\Local\pnpm\global\5\.pnpm\prisma@5.9.0\node_modules\prisma\node_modules;C:\Users\Maciej\AppData\Local\pnpm\global\5\.pnpm\prisma@5.9.0\node_modules;C:\Users\Maciej\AppData\Local\pnpm\global\5\.pnpm\node_modules"
) ELSE (
  @SET "NODE_PATH=C:\Users\Maciej\AppData\Local\pnpm\global\5\.pnpm\prisma@5.9.0\node_modules\prisma\build\node_modules;C:\Users\Maciej\AppData\Local\pnpm\global\5\.pnpm\prisma@5.9.0\node_modules\prisma\node_modules;C:\Users\Maciej\AppData\Local\pnpm\global\5\.pnpm\prisma@5.9.0\node_modules;C:\Users\Maciej\AppData\Local\pnpm\global\5\.pnpm\node_modules;%NODE_PATH%"
)
@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe"  "%~dp0\..\..\..\..\..\..\Users\Maciej\AppData\Local\pnpm\global\5\node_modules\prisma\build\index.js" %*
) ELSE (
  @SET PATHEXT=%PATHEXT:;.JS;=;%
  node  "%~dp0\..\..\..\..\..\..\Users\Maciej\AppData\Local\pnpm\global\5\node_modules\prisma\build\index.js" %*
)
