module.exports = {
  // ... other Jest configuration options

  transform: {
    '^.+\\.js$': 'babel-jest', // Transform .js files using babel-jest
  },

  moduleFileExtensions: ['js', 'jsx'], // Add 'jsx' as an allowed module extension

  moduleNameMapper: {
    // Handle CSS, SCSS, and other imports by mocking them
    '\\.(css|less|scss)$': 'identity-obj-proxy',
  },
};
