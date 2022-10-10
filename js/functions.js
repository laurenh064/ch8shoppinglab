/* define your functions here */

console.log(cart);

function calculateTotal(quantity, price) {
    return quantity * price;
}

function outputCartRow(item, total) {
    console.log(item, total);
    const { product: { title, filename, price }, quantity } = item;
    const row = `
    <tr>
    <td><img src="images/${filename}" alt="${title}"></td>
    <td>${title}</td>
    <td>${quantity}</td>
    <td>${price}</td>
    <td>${total}</td>
    </tr>`;
    document.write(row);

}

function outputTableBody() {
    for (let item of cart) {
        let total = calculateTotal(item.quantity, item.product.price);
        outputCartRow(item, total);
    }
}



