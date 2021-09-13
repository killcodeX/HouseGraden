export const calDiscount = (price, discount) => {
    return Math.floor((price * discount) / 100)
}

export const findTax = (price) => {
    return Math.floor((price * 18) / 100) 
}

export const findAmount = (price, discount, tax) => {
    return price + tax - discount
}