
export const dirProducts = 'https://reactcoder.consultoriainformaticaon.com/productos'

export const dirIcons = 'https://reactcoder.consultoriainformaticaon.com/icons'

export const currencyFormat = (num) => {
    return new Intl.NumberFormat('ES-MX', {
        style: 'currency',
        currency: 'MXN',
        maximumFractionDigits: 2,
        minimumFractionDigits: 2,
    }
    ).format(num)
}
