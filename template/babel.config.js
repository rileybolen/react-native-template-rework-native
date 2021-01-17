module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
        ["module-resolver", {
            "alias": {
                "rework-theme": ["./App/Theme/Theme", "./node_modules/rework-native/Style/Themes/Theme"],
            }
        }]
    ],
};
