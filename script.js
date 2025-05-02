let lang = "zh";

function switchLang() {
  lang = lang === "zh" ? "en" : "zh";
  document.getElementById("title").innerText = lang === "zh" ? "QuickPrice 快比" : "QuickPrice";
  document.getElementById("searchInput").placeholder = lang === "zh" ? "輸入商品名稱" : "Enter product name";
  document.querySelector("button").innerText = lang === "zh" ? "搜尋" : "Search";
}

function search() {
  const results = document.getElementById("results");
  results.innerHTML = "";

  const platforms = [
    { name: "Shopee", price: "$10200", img: "https://via.placeholder.com/100?text=Shopee" },
    { name: "PChome", price: "$9900", img: "https://via.placeholder.com/100?text=PChome" },
    { name: "momo", price: "$10100", img: "https://via.placeholder.com/100?text=momo" },
  ];

  platforms.forEach(p => {
    results.innerHTML += \`
      <div class="product">
        <h3>\${p.name}</h3>
        <p>\${lang === "zh" ? "價格" : "Price"}: \${p.price}</p>
        <img src="\${p.img}" alt="\${p.name}">
      </div>
    \`;
  });
}
