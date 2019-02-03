export default function(value = 0) {
  const valueNumber = parseFloat(value);

  let numero = valueNumber.toFixed(2).split('.');
  numero[0] = numero[0].split(/(?=(?:...)*$)/).join('.');
  return numero.join(',');
}
