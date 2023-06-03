interface Product {
    price: number,
    discount: number,
    isInstallment: boolean,
    months: number
}

const totalPrice = (product: Product): number => {
    if (product.price <= 0) {
        return 0
    }
    let result = product.price

    if (product.discount > 0 && product.discount <= 100) {
        result = product.price - product.price * (product.discount / 100)
    }
    if (product.isInstallment && (product.months > 0)) {
        result /= product.months
    }

    return result
};

console.log(totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 }))