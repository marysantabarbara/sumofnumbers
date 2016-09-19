/**
 * Practice WOD E26: Five problems every software engineer should be able to solve.
 * Created by Mary Santabarbara on 9/18/2016.
 */

const testList = [1, 2, 3, 4, 5];

function sumFor(list) {
  let sum = 0;

  for (const i of list) {
    sum += i;
  }

  return sum;
}

console.log(sumFor(testList));

function sumWhile(list) {
  let sum = 0;
  let index = 0;

  while (index < list.length) {
    sum += list[index];
    index += 1;
  }

  return sum;
}

console.log(sumWhile(testList));

function sumTheSimpleWay(list) {
  return _.reduce(list, function total(memo, num) { return memo + num; }, 0);
}

console.log(sumTheSimpleWay(testList));

function sumRecursion(list) {
  if (list.length === 0) {
    return 0;
  }
  return list[0] + sumRecursion(list.splice(1, list.length));
}

console.log(sumRecursion(testList));
