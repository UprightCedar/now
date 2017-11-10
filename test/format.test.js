import Now from '../src/index';

// test('Y token', () => {
// let now = new Now(2010, 1, 1);
// let output = now.format('Y');
// expect(output).toBe('2010');

// now = new Now(-123, 1, 1);
// output = now.format('Y');
// expect(output).toBe('-123');

// now = new Now(12345, 1, 1);
// output = now.format('Y');
// expect(output).toBe('+12345');

// now = new Now(0, 1, 1);
// output = now.format('Y');
// expect(output).toBe('1900');

// now = new Now(1, 1, 1);
// output = now.format('Y');
// expect(output).toBe('1901');

// now = new Now(95, 1, 1);
// output = now.format('Y');
// expect(output).toBe('1995');

// now = new Now(9999, 1, 1);
// output = now.format('Y');
// expect(output).toBe('9999');

// now = new Now(10000, 1, 1);
// output = now.format('Y');
// expect(output).toBe('+10000');
// });

// test('k and kk', () => {
// let now = new Now(2017, 10, 7, 1, 23, 45, 100);
// let output = now.format('k');
// expect(output).toBe('1');

// now = new Now(2017, 10, 7, 12, 34, 56, 100);
// output = now.format('k');
// expect(output).toBe('12');

// now = new Now(2017, 10, 7, 1, 23, 45, 100);
// output = now.format('kk');
// expect(output).toBe('01');

// now = new Now(2017, 10, 7, 12, 34, 56, 100);
// output = now.format('kk');
// expect(output).toBe('12');

// now = new Now(2017, 10, 7, 0, 34, 56, 100);
// output = now.format('kk');
// expect(output).toBe('24');

// now = new Now(2017, 10, 7, 0, 0, 0, 100);
// output = now.format('kk');
// expect(output).toBe('24');
// });

// test('Hmm and Hmmss', () => {
// let now = new Now(2017, 10, 7, 12, 34, 56, 100);
// let output = now.format('Hmm');
// expect(output).toBe('1234');

// now = new Now(2017, 10, 7, 1, 34, 56, 100);
// output = now.format('Hmm');
// expect(output).toBe('134');

// now = new Now(2017, 10, 7, 13, 34, 56, 100);
// output = now.format('Hmm');
// expect(output).toBe('1334');

// now = new Now(2017, 10, 7, 12, 34, 56, 100);
// output = now.format('Hmmss');
// expect(output).toBe('123456');

// now = new Now(2017, 10, 7, 1, 34, 56, 100);
// output = now.format('Hmmss');
// expect(output).toBe('13456');

// now = new Now(2017, 10, 7, 8, 34, 56, 100);
// output = now.format('Hmmss');
// expect(output).toBe('83456');

// now = new Now(2017, 10, 7, 18, 34, 56, 100);
// output = now.format('Hmmss');
// expect(output).toBe('183456');
// });

// test('milliseconds', () => {
// const now = new Now(2017, 10, 7, 18, 34, 56, 123);

// let output = now.format('S');
// expect(output).toBe('1');

// output = now.format('SS');
// expect(output).toBe('12');

// output = now.format('SSS');
// expect(output).toBe('123');

// output = now.format('SSSS');
// expect(output).toBe('1230');

// output = now.format('SSSSS');
// expect(output).toBe('12300');

// output = now.format('SSSSSS');
// expect(output).toBe('123000');

// output = now.format('SSSSSSS');
// expect(output).toBe('1230000');

// output = now.format('SSSSSSSS');
// expect(output).toBe('12300000');

// output = now.format('SSSSSSSSS');
// expect(output).toBe('123000000');
// });

// test('quarter ordinal formats', () => {
// let now = new Now(1985, 1, 4);
// let output = now.format('Qo');
// expect(output).toBe('1st');

// now = new Now(2029, 8, 18);
// output = now.format('Qo');
// expect(output).toBe('3rd');

// now = new Now(2013, 3, 24);
// output = now.format('Qo');
// expect(output).toBe('2nd');

// now = new Now(2015, 2, 5);
// output = now.format('Qo');
// expect(output).toBe('1st');

// now = new Now(1970, 0, 2);
// output = now.format('Qo');
// expect(output).toBe('1st');

// now = new Now(2001, 11, 12);
// output = now.format('Qo');
// expect(output).toBe('4th');

// now = new Now(2000, 0, 2);
// output = now.format('Qo [quarter] YYYY');
// expect(output).toBe('1st quarter 2000');
// });

// test('quarter formats', () => {
// let now = new Now(1985, 1, 4);
// let output = now.format('Q');
// expect(output).toBe('1');

// now = new Now(2029, 8, 18);
// output = now.format('Q');
// expect(output).toBe('3');

// now = new Now(2013, 3, 24);
// output = now.format('Q');
// expect(output).toBe('2');

// now = new Now(2015, 2, 5);
// output = now.format('Q');
// expect(output).toBe('1');

// now = new Now(1970, 0, 2);
// output = now.format('Q');
// expect(output).toBe('1');

// now = new Now(2001, 11, 12);
// output = now.format('Q');
// expect(output).toBe('4');

// now = new Now(2000, 0, 2);
// output = now.format('[Q]Q-YYYY');
// expect(output).toBe('Q1-2000');
// });

// test('toJSON skips postformat', () => {
// Now.defineLocale('postformat', {
// postformat: function(s) {
// s.replace(/./g, 'X');
// }
// });
// const now = new Now(2000, 0, 1);
// const output = now.toJSON();
// expect(output).toBe('2000-01-01T00:00:00.000Z');
// Now.defineLocale('postformat', null);
// });

// test('toString is just human readable format', () => {
// const now = new Now(2017, 9, 29, 17, 35, 20, 100);
// console.log('nowString: ', now.toString());
// console.log('foffff: ', now.format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ'));
// expect(now.toString()).toEqual(now.format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ'));
// });

// test('weekday formats', () => {
// const fn = () => Now.defineLocale('dow: 3,doy: 5', {
// week: {
// dow: 3,
// doy: 5
// }
// });
// fn();
// let now = new Now(1985, 1, 6);
// fn();
// let output = now.format('e');
// expect(output).toBe('0');

// now = new Now(2029, 8, 20);
// fn();
// output = now.format('e');
// expect(output).toBe('1');

// now = new Now(2013, 3, 26);
// fn();
// output = now.format('e');
// expect(output).toBe('2');

// now = new Now(2015, 2, 7);
// fn();
// output = now.format('e');
// expect(output).toBe('3');

// now = new Now(1970, 0, 4);
// fn();
// output = now.format('e');
// expect(output).toBe('4');

// now = new Now(2001, 4, 14);
// fn();
// output = now.format('e');
// expect(output).toBe('5');

// now = new Now(2000, 0, 4);
// fn();
// output = now.format('e');
// expect(output).toBe('6');
// });

// test('toJSON', () => {
//   const supportsJson = typeof JSON !== 'undefined' && JSON.stringify && JSON.stringify.call;
//   const now = new Now(2012, 9, 9, 20, 30, 40, 678);
//   expect(now.toJSON()).toBe('2012-10-09T20:30:40.678Z');

//   if (supportsJson) {
//     expect(JSON.stringify({
//       now,
//     })).toBe('{"now":"2012-10-09T20:30:40.678Z"}');
//   }
// });

// test('toISOString', () => {
//   let now = new Now(2012, 9, 9, 20, 30, 40, 678);
//   expect(now.toISOString()).toBe('2012-10-09T20:30:40.678Z');

//   // big years
//   now = new Now(20123, 9, 9, 20, 30, 40, 678);
//   expect(now.toISOString()).toBe('+020123-10-09T20:30:40.678Z');

//   // negative years
//   now = new Now(-1, 9, 9, 20, 30, 40, 678);
//   expect(now.toISOString()).toBe('-000001-10-09T20:30:40.678Z');

//   // big negative years
//   now = new Now(-20123, 9, 9, 20, 30, 40, 678);
//   expect(now.toISOString()).toBe('-020123-10-09T20:30:40.678Z');

//   now = new Now(2017, 11, 32);
//   expect(now.toISOString()).toBe('2018-01-01T00:00:00.000Z');
// });

// test('toISOString() when 0 year', () => {
//   let now = new Now(0, 9, 9, 20, 30, 40, 678);
//   console.log("when", now.toISOString());
//   expect(now.toISOString()).toBe('1900-10-09T20:30:40.678Z');
// });

// test('long years', () => {
//   let now = new Now(2, 1);
//   expect(now.format('YYYYYY')).toBe('+001902');

//   now = new Now(2012, 1);
//   expect(now.format('YYYYYY')).toBe('+002012');

//   now = new Now(20123, 1);
//   expect(now.format('YYYYYY')).toBe('+020123');

//   now = new Now(-1, 1);
//   expect(now.format('YYYYYY')).toBe('-000001');

//   now = new Now(-2012, 1);
//   expect(now.format('YYYYYY')).toBe('-002012');

//   now = new Now(-20123, 1);
//   expect(now.format('YYYYYY')).toBe('-020123');
// });

test('handle negative years', () => {
  let now = new Now(-1, 1);
  expect(now.format('YY')).toBe('-01');

  now = new Now(-1, 1);
  expect(now.format('YY')).toBe('-01');

  now = new Now(-12, 1);
  expect(now.format('YY')).toBe('-12');

  now = new Now(-12, 1);
  expect(now.format('YYYY')).toBe('-0012');

  now = new Now(-123, 1);
  expect(now.format('YY')).toBe('-23');

  now = new Now(-123, 1);
  expect(now.format('YYYY')).toBe('-0123');

  now = new Now(-1234, 1);
  expect(now.format('YY')).toBe('-34');

  now = new Now(-1234, 1);
  expect(now.format('YYYY')).toBe('-1234');

  now = new Now(-12345, 1);
  expect(now.format('YY')).toBe('-45');

  now = new Now(-12345, 1);
  expect(now.format('YYYY')).toBe('-12345');
});
