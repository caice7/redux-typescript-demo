const { override } = require("customize-cra")
const rewirePostcss = require('react-app-rewire-postcss');
const px2rem = require('postcss-px2rem')

module.exports = override(
  (config) => {
    // 重写postcss
    rewirePostcss(config, {
      plugins: () => [
        //关键:设置px2rem
        px2rem({
          remUnit: 16,
          exclude: /node-modules/
        })
      ],
    });
    return config
  }
);