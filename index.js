const fruits = [
  {id: 0, title: "Apples", price: 100, img: "https://images.heb.com/is/image/HEBGrocery/000466634"},
  {id: 1, title: "Oranges", price: 134, img: "https://images.heb.com/is/image/HEBGrocery/000375169"},
  {id: 2, title: "Mangoes", price: 259, img: "https://img.freepik.com/free-photo/ripe-mango-with-green-leaf-isolated-on-white_252965-183.jpg?w=2000"},
  {id: 3, title: "Melons", price: 134, img: "https://kupimir.club/upload/iblock/f5c/f5cdb19e84cd015f837952c99f5877a1.png"},
]


options = {
  title: this.title,
  closable: true,
  content: `Price for ${this.title} is card.price`,
  width: '400px',
  footerButtons: [
    {
      text: 'Ok', type: 'primary', handler() {

      }
    }
  ]
}

/*
* Динамически на основе массива вывести список карточек +
* Показать цену в модалке(по 1 айтему) +
* Реализовать кнопку удалить (показать модалку с подтверждение удаления) +
* ============
* На основе $.modal нужно сделать другой плагин $.confirm (Promise)
*
* */

const list = _createCards(fruits)() // Вызов меню

// const price = $.modal()

const modal = $.modal({
  title: "Hello world",
  closable: true,
  content: `
    <p>Lorem ipsum dolor sit.</p>
    <p>Lorem ipsum dolor sit.</p>
  `,
  width: "400px",
  footerButtons: [
    {text: "Ok", type: "primary", handler() {
        console.log("Primary btn clicked")
        modal.close()
      }},
    {text: "Cancel", type: "danger", handler() {
        console.log("Danger btn clicked")
        modal.close()
      }}
  ]
})

// document.querySelector(".modal-close").addEventListener("click", (event) => {
//   modal.close()
// })
// document.querySelector(".modal-overlay").addEventListener("click", (event) => {
//   modal.close()
// })


