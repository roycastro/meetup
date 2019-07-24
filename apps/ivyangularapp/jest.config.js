module.exports = {
  name: 'ivyangularapp',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/ivyangularapp',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
