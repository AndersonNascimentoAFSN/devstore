export function formatterCurrencyNumber(number: number) {
  if (isNaN(Number(number))) return

  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(number)
}
