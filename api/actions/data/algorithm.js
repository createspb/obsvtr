/*
d - рынок - 0
f - маркетинг - 1
j - продукт - 2
l - бизнес - 3
---
q1 - 0 0, 0 2
q2 - 0 1, 0 2, 1 0, 2 0
q3 - 2 1
// q4 - 12 строка, т.е. весь custdev и переход на следующий уровень недоступен
q5 - 0 4, 2 2
q6 - 2 1
q7 - 0 3
q8 - 2 3, 3 1
q9 - 1 1
q10 - 3 0 и 3 1
q11 - 2 3 и 3 1
*/
const algorithm = {
  questions: [
    {
      id: 0,
      affect: [[0, 0, 0], [0, 0, 2]]
    }, {
      id: 1,
      affect: [[0, 0, 1], [0, 0, 2], [1, 0, 0], [2, 0, 0]]
    }, {
      id: 2,
      affect: [[2, 0, 1]]
    }, {
      id: 3
    }, {
      id: 4,
      affect: [[0, 0, 4], [2, 0, 2]]
    }, {
      id: 5,
      affect: [[2, 0, 1]]
    }, {
      id: 6,
      affect: [[0, 0, 3]]
    }, {
      id: 7,
      affect: [[2, 0, 3], [3, 0, 1]]
    }, {
      id: 8,
      affect: [[1, 0, 1]]
    }, {
      id: 9,
      affect: [[3, 0, 0], [3, 0, 1]]
    }, {
      id: 10,
      affect: [[2, 0, 3], [3, 0, 1]]
    }
  ]
};

export default algorithm;
