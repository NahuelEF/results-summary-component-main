const url = "./data.json";
const list = document.getElementById("list");

fetch(url)
  .then((response) => response.json())
  .then((json) =>
    json.forEach((e) => {
      list.innerHTML += `
        <li class="category category--${e.color}">
            <div class="container">
                <img src="${e.icon} " alt="${e.category} " />
                <span class="category__name">
                    ${e.category}
                </span>
            </div>
            <p class="category__point">
                <span class="category__point--span">
                    ${e.score}
                </span>/ 100
            </p>
        </li>
      `;
    })
  );
