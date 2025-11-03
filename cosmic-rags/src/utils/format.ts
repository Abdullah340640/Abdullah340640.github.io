export const formatCurrency = (value: number, currency: 'GBP' | 'USD' | 'EUR') =>
  new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
  }).format(value)

export const formatDate = (value: string) =>
  new Intl.DateTimeFormat('en-GB', {
    month: 'short',
    year: 'numeric',
  }).format(new Date(value))
