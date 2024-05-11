/* module.exports = {
    webpack: (config, { isServer }) => {
        // Solo aplicar esta configuración en el lado del cliente
        if (!isServer) {
            config.module.rules.push({
                test: /\.(mp4|webm)$/, // Extensión de los archivos de video que deseas manejar
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            publicPath: './src/components/VideoBackground/VideoBackground.js', // Ruta pública donde se colocarán los archivos de video compilados
                            outputPath: '/public/videos', // Ruta relativa dentro de la carpeta .next donde se colocarán los archivos de video compilados
                            name: '[name].[ext]', // Nombre de archivo de salida (puedes ajustarlo según tus necesidades)
                        },
                    },
                ],
            });
        }

        return config;
    },
}; */

// module.exports = {
//     webpack: (config, options) => {
//       config.module.rules.push(      {
//         test: /\.(jpe?g|png|svg|gif|ico|eot|ttf|woff|woff2|mp4|pdf|webm)$/,
//         type: 'asset',
//         generator: {
//           filename: 'static/chunks/[path][name].[hash][ext]'
//         },
//       });
  
//         return config;
//     }
//   };
/** @type {import {'next'  }.NextConfig} */
const nextConfig ={}

module.exports = nextConfig;

const withVideos = require('next-videos');



module.exports = withVideos();