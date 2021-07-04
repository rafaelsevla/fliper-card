
type FormaterKind = 'money' | 'percent';

export function valuesFormater (kind: FormaterKind, value: number) {
  if (!value) return value;

  switch (kind) {
    case 'money':
      return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });    
  
    case 'percent':
      const options = {
        style: 'decimal',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }
      return `${value.toLocaleString('pt-BR', options)}%`;

    default:
      return value;
  }
}