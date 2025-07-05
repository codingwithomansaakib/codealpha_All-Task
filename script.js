const products = [
  { id: 1, name: "Smart Watch", price: 1999, image: "https://m.media-amazon.com/images/I/61ftG19NACL._AC_SL1500_.jpg" },
  { id: 2, name: "Bluetooth Headphones", price: 1499, image: "https://www.leafstudios.in/cdn/shop/files/BassProupdated_5c4be897-7c12-4ca1-ae42-8498d4c51857_800x.jpg?v=1690373001" },
  { id: 3, name: "Wireless Mouse", price: 799, image: "https://foxin.in/cdn/shop/files/3_1c4a0734-9fce-4e33-9e82-73987e411f31_2048x.jpg?v=1729509140" } ,
  { id: 4, name: "Earbuds", price: 999, image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRDWoRuyaKLyw24PJMr7N3NrXTpamXrzYyF-g58dSpm-P-88vzVmF8cYmvfSgcPYoXqG-HbltcmY90qGF3pd_bBsi905g2U8WFHtfcwf9sYHgyN2CEhwnVdsA" },
  { id: 5, name: "Shirt", price: 499, image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRDpO18dXY7Z3WdNIud1jFn7UkoMUvME7FEPFNneAfxxRhdlPq8xXNwvZpVsVv0XSg_1LYW9zV3VwCOv_NWPpcbKvJyWnYgKKAISLyXxSbd" },
  { id: 6, name: "Jeans", price: 699, image: "https://assets.sheinindia.in/medias/shein_sys_master/root/20250324/qw6I/67e138e755340d4b4f84727f/-473Wx593H-443322739-lightblue-MODEL.jpg" }
];

const list = document.getElementById("product-list");

products.forEach((product) => {
  const div = document.createElement("div");
  div.className = "product-card";
  div.innerHTML = `
    <img src="${product.image}" alt="${product.name}" />
    <h3>${product.name}</h3>
    <p>₹${product.price}</p>
    <button onclick="addToCart(${product.id})">Add to Cart</button>
  `;
  list.appendChild(div);
});

function addToCart(id) {
  const product = products.find(p => p.id === id);
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const index = cart.findIndex(item => item.id === id);

  if (index !== -1) {
    cart[index].qty += 1;
  } else {
    cart.push({ id: product.id, name: product.name, price: product.price, image: product.image, qty: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart!");
}

