const display = document.getElementById("display")
const teaButton = document.getElementById("tea-button")
const cokeButton = document.getElementById("coke-button")
const addButton = document.getElementById("add-my-money")
const balanceOfMoney = document.getElementById("my-money")
const addAmountButton = document.getElementById("add-amount-money")
const amountMoney = document.getElementById("amount-money")
let myMoney = 0
let amoutMoney = 0

const createImage = (drink) => {
  let drinkImgSrc = ""
  switch (drink) {
    case "tea":
      drinkImgSrc =
        "https://www.itoen.jp/files/products/japanese_tea/210315%20ikiikiPKG.jpg"
      break
    case "coke":
      drinkImgSrc =
        "https://www.cocacola.jp/images/product/cola_bottle_img_2020.png"
      break
    default:
      drinkImgSrc =
        "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
  }
  const figure = document.createElement("figure")
  figure.classList.add("vending-machine__items-container__figure")
  const img = document.createElement("img")
  img.src = drinkImgSrc
  img.classList.add("vending-machine__items-container__figure__img")
  figure.append(img)
  return figure
}

addButton.onclick = () => {
  myMoney += 1000
  balanceOfMoney.textContent = myMoney
}

addAmountButton.onclick = () => {
  if (myMoney < 100) {
    return
  }
  myMoney -= 100
  amoutMoney += 100

  balanceOfMoney.textContent = myMoney
  amountMoney.textContent = amoutMoney
}

teaButton.onclick = () => {
  if (amoutMoney < 100) {
    return
  }
  const image = createImage("tea")
  display.append(image)

  amoutMoney -= 100
  amountMoney.textContent = amoutMoney
}
cokeButton.onclick = () => {
  if (amoutMoney < 130) {
    return
  }
  const image = createImage("coke")
  display.append(image)

  amoutMoney -= 130
  amountMoney.textContent = amoutMoney
}
