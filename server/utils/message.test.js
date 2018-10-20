var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    var text = "sometext";
    var from = 'from someone';

    var res = generateMessage(from, text);
    expect(res.from).toBe(from);
    expect(res.text).toBe(text);
    expect(typeof res.createdAt).toBe('number');
  });
});
