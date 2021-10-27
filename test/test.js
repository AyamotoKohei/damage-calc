'use strict';

// ダメージ計算のモジュールを読み込む
const dc = require('../');

// Jestのテストの記述
describe('#effectiveDamage()', () => {
    test('正常なダメージ計算ができる', () => {
        expect(dc.effectiveDamage(100, 50, 30)).toBe(83);
    });
});