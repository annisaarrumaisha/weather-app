module.exports = function (api) {
  // Cache hasil konfigurasi ini untuk meningkatkan performa build
  api.cache(true);

  return {
    presets: [
      // Menggunakan preset Expo untuk kompatibilitas dengan Expo
      "babel-preset-expo",
    ],
    plugins: [
      [
        // Menggunakan plugin untuk mendukung import variabel environment dari file .env
        "module:react-native-dotenv",
        {
          moduleName: "@env",
          path: ".env",
        },
      ],
    ],
  };
};
