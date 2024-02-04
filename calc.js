const price = document.querySelectorAll(".section-cards__title-price");
const currency = document.querySelectorAll(".section-cards__currency");
const date = document.querySelectorAll(".section-cards__date");

const num = 0;

// console.log(currency.forEach((el) => console.log(el)));

currency.forEach((el) => {
  el.addEventListener("click", () => {
    if (el.textContent === "$") {
      currency.forEach((c) => {
        c.textContent = "₽";
      });
      price.forEach((p) => {
        p.textContent = Math.ceil(Number(p.textContent) * 90);
      });
    } else if (el.textContent === "₽") {
      currency.forEach((c) => {
        c.textContent = "€";
      });
      price.forEach((p) => {
        p.textContent = Math.ceil(Number(p.textContent) / 97);
      });
    } else if (el.textContent === "€") {
      if (date[0].textContent === "/Month") {
        currency.forEach((c) => {
          c.textContent = "$";
        });
        price.forEach((p) => {
          p.textContent = Math.ceil(Number(p.textContent) * 1.07);
        });
      } else if (date[0].textContent === "/Day") {
        currency.forEach((c) => {
          c.textContent = "$";
        });
        price.forEach((p) => {
          p.textContent = Math.ceil(Number(p.textContent));
        });
      }
    }
  });
});

date.forEach((d) => {
  d.addEventListener("click", () => {
    if (d.textContent === "/Month") {
      date.forEach((m) => {
        m.textContent = "/Day";
      });
      price.forEach((p) => {
        p.textContent = Math.ceil(Number(p.textContent) / 30);
      });
    } else if (d.textContent === "/Day") {
      if (currency[0].textContent === "€") {
        date.forEach((m) => {
          m.textContent = "/Month";
        });
        price.forEach((p) => {
          p.textContent = Math.ceil(Number(p.textContent) * 28);
        });
      } else {
        date.forEach((m) => {
          m.textContent = "/Month";
        });
        price.forEach((p) => {
          p.textContent = Math.ceil(Number(p.textContent) * 30);
        });
      }
    }
  });
});
