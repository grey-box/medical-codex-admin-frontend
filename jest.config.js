module.exports = {
  testEnvironment: 'node', 
  roots: ['<rootDir>/src'], 
  moduleFileExtensions: ['js', 'json', 'node'],
};

module.exports = {
  transform: {
    '^.+\.[tj]sx?$': 'babel-jest', 
  },
};

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\.(ts|tsx)$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js'],
};