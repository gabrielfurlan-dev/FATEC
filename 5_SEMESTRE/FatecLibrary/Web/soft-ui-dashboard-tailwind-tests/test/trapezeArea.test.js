const TrapezeArea = require('../TrapezeArea');

test('Calculate trapeze area: 5 height, 8 higherBase, 4 lowerBase is equals 24 ', () => {
    expect(TrapezeArea(5,8,4)).toBe(30)
});