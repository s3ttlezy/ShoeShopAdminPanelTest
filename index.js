let fruits = [
  {id: 0, title: "Apples", price: 100, img: "https://images.heb.com/is/image/HEBGrocery/000466634"},
  {id: 1, title: "Oranges", price: 134, img: "https://images.heb.com/is/image/HEBGrocery/000375169"},
  {id: 2, title: "Mangoes", price: 259, img: "https://img.freepik.com/free-photo/ripe-mango-with-green-leaf-isolated-on-white_252965-183.jpg?w=2000"},
  {id: 3, title: "Melons", price: 134, img: "https://kupimir.club/upload/iblock/f5c/f5cdb19e84cd015f837952c99f5877a1.png"},
]

const toHTML = fruit => `
  <div class="col">
    <div class="card" style="width: 25rem;">
      <img src="${fruit.img}" class="card-img-top" alt="${fruit.title}" style="height: 18rem">
        <div class="card-body">
          <h5 class="card-title">${fruit.title}</h5>
          <a href="#" class="btn btn-primary" data-btn="price" data-id="${fruit.id}">Price</a>
          <a href="#" class="btn btn-danger" data-btn="remove" data-id="${fruit.id}">Delete</a>
        </div>
    </div>
  </div>
`

/*
* Динамически на основе массива вывести список карточек +
* Показать цену в модалке(по 1 айтему) +
* Реализовать кнопку удалить (показать модалку с подтверждение удаления) +
* ============
* На основе $.modal нужно сделать другой плагин $.confirm (Promise) +
* */

function render() {
  const html = fruits.map(toHTML).join("")
  document.querySelector('#fruits').innerHTML = html
}
render()

const priceModal = $.modal({
  title: "Product price",
  closable: true,
  width: "400px",
  footerButtons: [
    {text: "Close", type: "primary", handler() {
      console.log("Primary btn clicked")
      priceModal.close()
    }}
  ]
})


document.addEventListener("click", event => {
  event.preventDefault()
  const btnType = event.target.dataset.btn
  const id = +event.target.dataset.id
  const fruit = fruits.find(f => f.id === id)

  if (btnType === "price") {
    priceModal.setContent(`
      <p>Price for ${fruit.title}: <strong>${fruit.price}&dollar; / kg</strong></p>
    `)
    priceModal.open()

  } else if (btnType === "remove") {
    $.confirm({
      title: "Deleting",
      content: `<p>You're going to delete: <strong>${fruit.title}</strong></p>`
    }).then(() => {
      fruits = fruits.filter(f => f.id !== id)
      render()
    }).catch(() => {
      console.log("Cancel")
    })

  }
})



