
var products = [
  { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWv-iyEZ4JotQ_kfID4ehenH0rdto29ywW7A&s", name: "Product 1", price: "$100" },
  { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQivytN2shiMIrIMN-c3hnDKr4wGv0mQUSLlQ&s", name: "Product 2", price: "$200" },
  { image: "https://media.istockphoto.com/id/185278433/photo/black-digital-slr-camera-in-a-white-background.jpg?s=612x612&w=0&k=20&c=OOCbhvOF0W-eVhhrm-TxbgLfbKhFfs4Lprjd7hiQBNU=", name: "Product 3", price: "$300" },
  { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQorP0pUhKmmqsUHDj4oEFgwn82kXX_N9q9dQ&s", name: "Product 4", price: "$400" },
  { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgEE_2pgY7Wrj1BL6je4M0TLJ9WUBzGCzTsQ&s", name: "Product 5", price: "$500" },
  { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNaI4Hv3SfBuWQ73RqG4pKP28NTrzuDFjrHg&s", name: "Product 6", price: "$600" },
];

var productList = document.getElementById("product-list");
products.forEach(function(product) {
  var card = `
    <div class="col-md-4 mb-4">
      <div class="card product">
        <img src="${product.image}" class="card-img-top" alt="${product.name}">
        <div class="card-body">
          <h5 class="card-title">${product.name}</h5>
          <p class="card-text">Price: ${product.price}</p>
        </div>
      </div>
    </div>
  `;
  productList.innerHTML += card;
});

