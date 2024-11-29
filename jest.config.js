module.exports = {
  testEnvironment: 'node', 
  roots: ['<rootDir>/src'], 
  moduleFileExtensions: ['js', 'json', 'node'],
};

module.exports = {
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest', 
  },
};
