'use strict';

// ダメージ計算のモジュールを読み込む
const dc = require('../');

// Jestのテストの記述
describe('#effectiveDamage()', () => {
    test('正常なダメージ計算ができる', () => {
        expect(dc.effectiveDamage(100, 50, 30)).toBe(83);
    });

    test('負の異常値におけるダメージ計算ができる', () => {
        expect(dc.effectiveDamage(-1, 0, 0)).toBe(0);
        expect(dc.effectiveDamage(0, -1, 0)).toBe(0);
        expect(dc.effectiveDamage(0, 0, -1)).toBe(0);
    });

    test('2000より大きい異常値におけるダメージ計算ができる', () => {
        expect(dc.effectiveDamage(2001, 0, 0)).toBe(2000);
        expect(dc.effectiveDamage(300, 2150, 0)).toBe(14);
        expect(dc.effectiveDamage(300, 2000, 2001)).toBe(300);
    });
});