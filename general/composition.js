// Composition Example from Eric Elliot
// article: https://medium.com/javascript-scene/master-the-javascript-interview-what-s-the-difference-between-class-prototypal-inheritance-e4cd0a7562e9#.z8mxxpqe3
// http://codepen.io/ericelliott/pen/XXzadQ?editors=001
// https://gist.github.com/ericelliott/fed0fd7a0d3388b06402

const distortion = { distortion: 1 };
const volume = { volume: 1 };
const cabinet = { cabinet: 'maple' };
const lowCut = { lowCut: 1 };
const inputLevel = { inputLevel: 1 };

const GuitarAmp = (options) => {
    return Object.assign({}, distortion, volume, cabinet, options);
};

const BassAmp = (options) => {
    return Object.assign({}, lowCut, volume, cabinet, options);
};

const ChannelStrip = (options) => {
    return Object.assign({}, inputLevel, lowCut, volume, options);
};


test('GuitarAmp', assert => {
    const msg = 'should have distortion, volume, and cabinet';
const level = 2;
const cabinet = 'vintage';

const actual = GuitarAmp({
    distortion: level,
    volume: level,
    cabinet
});
const expected = {
    distortion: level,
    volume: level,
    cabinet
};

assert.deepEqual(actual, expected, msg);
assert.end();
});

test('BassAmp', assert => {
    const msg = 'should have volume, lowCut, and cabinet';
const level = 2;
const cabinet = 'vintage';

const actual = BassAmp({
    lowCut: level,
    volume: level,
    cabinet
});
const expected = {
    lowCut: level,
    volume: level,
    cabinet
};

assert.deepEqual(actual, expected, msg);
assert.end();
});

test('ChannelStrip', assert => {
    const msg = 'should have inputLevel, lowCut, and volume';
const level = 2;

const actual = ChannelStrip({
    inputLevel: level,
    lowCut: level,
    volume: level
});
const expected = {
    inputLevel: level,
    lowCut: level,
    volume: level
};

assert.deepEqual(actual, expected, msg);
assert.end();
});