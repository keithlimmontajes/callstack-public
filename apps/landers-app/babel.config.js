module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '^components/(.+)': './src/components/\\1',
          '^screens/(.+)': './src/screens/\\1',
        },
        extensions: [
          '.ios.js',
          '.android.js',
          '.ios.ts',
          '.android.ts',
          '.ios.tsx',
          '.android.tsx',
          '.js',
          '.jsx',
          '.json',
          '.tsx',
          '.ts',
          '.native.js',
        ],
      },
    ],
  ],
};
