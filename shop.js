async function loadShop() {
  const container = document.getElementById("shop");
  const res = await fetch("items.json");
  const items = await res.json();

  container.innerHTML = items
    .map((item, i) => `
      <div class="card rounded-2xl p-4 text-center animate__animated animate__fadeInUp animate__delay-${i}s">
        <img src="${item.image}" alt="${item.name}" class="rounded-lg mx-auto">
        <h2 class="text-2xl font-bold mt-4">${item.name}</h2>
        <p class="rarity ${item.rarity} mt-1">${item.rarity}</p>
        <p class="text-green-400 mt-2">${item.price}</p>
      </div>
    `)
    .join("");
}

loadShop();
