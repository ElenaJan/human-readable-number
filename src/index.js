module.exports = function toReadable (number) {
  const ones = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
  };
  const prefixe = {
    2: 'twenty',
    3: 'thirty',
    4: 'forty',
    5: 'fifty',
    6: 'sixty',
    7: 'seventy',
    8: 'eighty',
    9: 'ninety',
  };

  let arr = String(number).split('');
  let num11 = arr[1] + arr[2];
  let result = (number in ones) ? ones[number] :
  (arr.length === 2 && +arr[1] === 0) ? (prefixe[arr[0]]) :
  (arr.length === 2 && number > 19) ? prefixe[arr[0]] + ' ' + ones[arr[1]] :  
  (arr.length === 3 && +arr[1] === 0 && +arr[2] === 0) ? (ones[arr[0]] + ' ' + 'hundred') :
  (arr.length === 3 && +arr[1] === 0) ? (ones[arr[0]] + ' ' + 'hundred' + ' ' + ones[arr[2]]) :
  (arr.length === 3 && +arr[2] === 0 && +arr[1] > 1) ?   (ones[arr[0]] + ' ' + 'hundred' + ' ' + prefixe[arr[1]] ) :
  (arr.length === 3 && +arr[1] === 1) ? (ones[arr[0]] + ' ' + 'hundred' + ' ' + ones[num11]) :
  (ones[arr[0]] + ' ' + 'hundred' + ' ' + prefixe[arr[1]] + ' ' + ones[arr[2]]);

  return result;
}
