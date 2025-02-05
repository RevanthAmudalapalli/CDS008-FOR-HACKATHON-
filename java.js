document.getElementById('productForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const productName = document.getElementById('productName').value;
    const productPrice = document.getElementById('productPrice').value;
    const productDescription = document.getElementById('productDescription').value;

    if (productName && productPrice && productDescription) {
        addProduct(productName, productPrice, productDescription);
        document.getElementById('productForm').reset();
    }
});

function addProduct(name, price, description) {
    const productsContainer = document.getElementById('productsContainer');

    const productElement = document.createElement('div');
    productElement.classList.add('product');

    productElement.innerHTML = `
        <p class="product-name">${name}</p>
        <p class="product-price">$${price}</p>
        <p class="product-description">${description}</p>
    `;

    productsContainer.appendChild(productElement);
}
