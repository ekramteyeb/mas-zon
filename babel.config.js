module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    //added to wrapp(bundle) enviroment variable in to the app

    plugins: [
      [
        'module:react-native-dotenv',

        {
          moduleName: '@env',
          path: '.env'
        }
      ]
    ]
  }
}
