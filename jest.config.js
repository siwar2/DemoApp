module.exports = {
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
    moduleNameMapper: {
      "\\.(css|scss|sass|less)$": "identity-obj-proxy", // Mock CSS imports
    },
    testPathIgnorePatterns: ["/node_modules/", "/dist/"],
  };
  