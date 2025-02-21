const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    // Ajouter une règle pour les fichiers PDF
    config.module.rules.push({
      test: /\.pdf$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            publicPath: '/_next/static/files/', // Chemin de sortie pour les fichiers
            outputPath: `${isServer ? '../' : ''}static/files/`, // Chemin de sortie pour les fichiers (server vs client)
          },
        },
      ],
    });

    return config;
  },
};

module.exports = nextConfig;