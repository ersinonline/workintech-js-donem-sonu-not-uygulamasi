const { describe, expect, test } = require('@jest/globals');
const rewire = require('rewire');
let myModule = rewire('./index');

// rewire ile private değişkenlere erişim
let result, puan1, puan2, puan3, puan4;

try {
  result = myModule.__get__('result');
} catch (error) {
  result = undefined;
}

try {
  puan1 = myModule.__get__('puan1');
} catch (error) {
  puan1 = undefined;
}

try {
  puan2 = myModule.__get__('puan2');
} catch (error) {
  puan2 = undefined;
}

try {
  puan3 = myModule.__get__('puan3');
} catch (error) {
  puan3 = undefined;
}

try {
  puan4 = myModule.__get__('puan4');
} catch (error) {
  puan4 = undefined;
}

describe('Görev 1 testleri', () => {
  test('result değişkenini tanımladın mı?', () => {
    expect(result).toBeDefined();
  });

  test("tüm puanları toplayıp sonucu result değişkenine eşitledin mi?", () => {
    const updatedResult = myModule.__get__("result");
    expect(updatedResult).toEqual(100);
  });

  test('result değişkenini let ile tanımladın mı?', () => {
    myModule.__set__('result', 5);
    const updatedResult = myModule.__get__('result');
    expect(updatedResult).toEqual(5);
  });

  test('puan1 değişkenini tanımladın mı?', () => {
    expect(puan1).toBeDefined();
  });

  test('puan2 değişkenini tanımladın mı?', () => {
    expect(puan2).toBeDefined();
  });

  test('puan3 değişkenini tanımladın mı?', () => {
    expect(puan3).toBeDefined();
  });

  test('puan4 değişkenini tanımladın mı?', () => {
    expect(puan4).toBeDefined();
  });

  test('puan1 değeri doğru atanmış mı?', () => {
    expect(puan1).toEqual(10);
  });

  test('puan2 değeri doğru atanmış mı?', () => {
    expect(puan2).toEqual(20);
  });

  test('puan3 değeri doğru atanmış mı?', () => {
    expect(puan3).toEqual(30);
  });

  test('puan4 değeri doğru atanmış mı?', () => {
    expect(puan4).toEqual(40);
  });
});