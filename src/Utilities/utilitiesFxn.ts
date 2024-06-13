export const formatCurrency = (p: number) => {
        const data = Intl.NumberFormat(undefined, {style : 'currency' , currency:'USD' , currencyDisplay: undefined}).format(p);
        return data
}