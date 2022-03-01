module.exports = function (wallaby) {
  return {
    files: ['src/**/*.js'],
    tests: ['test/**/*Spec.js'],
    Language: 'javascript',
    Path:' twcdeployment\src\wallaby.js'
    // for node.js tests you need to set env property as well
    // https://wallabyjs.com/docs/integration/node.html
  };
};
