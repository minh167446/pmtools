module.exports = {
  name: 'datas',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/datas',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
