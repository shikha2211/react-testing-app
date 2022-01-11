module.exports = {
	moduleNameMapper: {
		"\\.(css|less|scss)$": "identity-obj-proxy",
	},
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],

};