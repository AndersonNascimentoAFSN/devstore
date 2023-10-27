export function formatterCurrencyNumber(number: number) {
  if (isNaN(Number(number))) return 'R$ 0,00'

  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(number)
}
