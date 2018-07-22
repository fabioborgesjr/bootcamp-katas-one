// Descrição: http://braziljs.github.io/eloquente-javascript/chapters/estrutura-de-dados/#a-lista

function arrayToList(array) {
  var list = null;

  for (let i = array.length - 1; i >= 0; i--) {
    if (list === null) {
      list = {
        value: array[i],
        rest: null
      }
    } else {
      list = {
        value: array[i],
        rest: list
      }
    }
  }

  return list;
}

function listToArray(list) {
  var array = [];

  for (let i = list; i; i = i.rest)
    array.push(i.value)

  return array;
}

function prepend(value, list) {
  if (list === null) {
    list = {
      value: value,
      rest: null
    }
  } else {
    list = {
      value: value,
      rest: list
    }
  }

  return list;
}

function nth(list, n) {
  let cont = 0;
  for (let i = list; i; i = i.rest) {
    if (cont == n)
      return i.value
    else
      cont++
  }
}

// TESTES

describe("arrayToList", function () {
  it("recebe um array como parâmetro e retorna uma lista", function () {
    expect(arrayToList([10, 20])).toEqual({ value: 10, rest: { value: 20, rest: null } });
  });
});

describe("listToArray", function () {
  it("recebe uma lista como parâmetro e retorna um array", function () {
    expect(listToArray(arrayToList([10, 20, 30]))).toEqual([10, 20, 30]);
  });
});
describe("prepend", function () {
  it("adiciona um valor no começo da lista", function () {
    expect(prepend(10, prepend(20, null))).toEqual({ value: 10, rest: { value: 20, rest: null } });
  });
});
describe("nth", function () {
  it("recebe uma lista e uma posição da lista e retorna o valor nesta posição", function () {
    expect(nth(arrayToList([10, 20, 30]), 1)).toEqual(20);
  });
});
