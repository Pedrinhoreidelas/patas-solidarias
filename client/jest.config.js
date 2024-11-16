module.exports = {
    transform: {
      '^.+\\.jsx?$': 'babel-jest' // Transforma arquivos .jsx e .js com babel-jest
    },
    moduleFileExtensions: ['js', 'jsx', 'json', 'node'], // Garante que o Jest entenda .js e .jsx
  };
  