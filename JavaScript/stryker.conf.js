module.exports = function(config) {
  config.set({
    files: [
      { pattern: 'src/*.js', mutated: true, included: false },
      'test/*.js'
    ],
    mutator: "es5",
    packageManager: "npm",
    reporters: ["clear-text", "progress"],
    testRunner: "mocha",
    transpilers: [],
    testFramework: "mocha",
    coverageAnalysis: "perTest"
  });
};
