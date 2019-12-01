// module.exports = {
//     exportPathMap: function() {
//       return {
//         '/': { page: '/' },
//         '/about': { page: '/about' }
//       };
//     }
//   };

  const withSass = require('@zeit/next-sass');
  const withCSS = require('@zeit/next-css');
  
  let cssLoader = withCSS(withSass({
    cssModules: true,
    webpack (config, options) {
        config.module.rules.push({
            test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 100000
                }
            }
        });
  
        return config;
    }
  }));
  cssLoader.target = 'serverless';

  cssLoader.exportPathMap = function() {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' }
    };
  }
  
  module.exports = cssLoader;