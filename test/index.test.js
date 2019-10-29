const fs = require("fs");
const YarnLockDiff = require('../src/index.js');

test('get changes with json', () => {
  const command = new YarnLockDiff('./test/data/yarn.lock.head', './test/data/yarn.lock');
  const expectedDiff = JSON.parse(fs.readFileSync('./test/data/yarn.lock.changes', "utf8"));
  expect(command.run()).toStrictEqual(expectedDiff);
});
