module.exports = {
  name: 'noivyangularapp',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/noivyangularapp',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
