#!/usr/bin/env node

/**
 * Reference script from: https://github.com/callstack/super-app-showcase/blob/main/scripts/build-miniapp.js
 */

const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

function getScriptName(targetPlatform) {
  if (targetPlatform === 'android') {
    return 'bundle:android';
  }
  if (targetPlatform === 'ios') {
    return 'bundle:ios';
  }

  console.error(`Unsupported platform: ${targetPlatform}`);
  process.exit(1);
}

function runShellCommands(commands) {
  const command = commands.shift();
  const child = spawn(command.cmd, command.args);

  child.stdout.on('data', data => {
    console.log(String(data));
  });

  child.stderr.on('data', data => {
    console.error(String(data));
  });

  child.on('close', code => {
    if (code !== 0) {
      process.exit(1);
    }

    if (commands.length > 0) {
      runShellCommands(commands);
    }
  });
}

const miniApps = ['landers'];

const PLATFORMS = ['android', 'ios'];

function buildMiniApp() {
  miniApps.forEach(miniApp => {
    PLATFORMS.forEach(platform => {
      const scriptName = getScriptName(platform);

      const packageJsonData = fs.readFileSync(
        path.join('apps', `${miniApp}-app`, 'package.json'),
        'utf8',
      );

      const packageJson = JSON.parse(packageJsonData);

      const buildPath = path.join(
        'apps',
        `${miniApp}-app`,
        'build',
        'outputs',
        platform,
        'remotes',
      );

      const miniAppDirName = miniApp.charAt(0).toUpperCase() + miniApp.slice(1);

      const buildDir = `apps/server-builds/build/${miniAppDirName}/${packageJson.version}`;
      const serverBuildDir = `${buildDir}/${platform}`;

      if (fs.existsSync(buildDir)) {
        fs.rmSync(buildDir, { recursive: true, force: true });
      }

      fs.mkdirSync(serverBuildDir, { recursive: true });

      const commands = [
        { cmd: 'yarn', args: ['workspace', miniApp, scriptName] },
        {
          cmd: 'mv',
          args: [buildPath, serverBuildDir],
        },
      ];

      // store buildPath to S3 ??

      runShellCommands(commands);
    });
  });
}

buildMiniApp();
