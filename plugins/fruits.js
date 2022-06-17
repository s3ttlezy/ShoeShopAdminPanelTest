//111
function _createCards(array) {
  if (document.querySelector(".row") === null) {
    const $row = document.createElement("div")
    $row.classList.add("row")
    array.forEach(card => {
      const $col = document.createElement("div")
      $col.classList.add("col")
      $col.style.width = "25.5rem"
      const template = `   
          <div class="card" style="width: 25.5rem;" id="${card.id}">
            <img src="${card.img}" class="card-img-top" alt="..." style="height: 300px;">
            <div class="card-body" data-content>
              <h5 class="card-title" data-btn="true">${card.title}</h5>
              <a href="#" class="btn btn-primary" onclick="let cardsModal = $.modal({
                  title: '${card.title}',
                  closable: true,
                  content: 'Price for ${card.title} is ${card.price}',
                  width: '400px',
                  footerButtons: [{ text: 'Ok', type: 'primary', handler() { cardsModal.close() } }]
                }); cardsModal.open()">Price</a>
              <a href="#" class="btn btn-danger" onclick="let cardsModal = $.modal({
                  title: 'Deleting a ${card.title}',
                  closable: true,
                  content: 'Are you sure you want to delete a ${card.title}',
                  width: '400px',
                  footerButtons: [
                    { text: 'Delete', type: 'danger', handler() { 
                      document.getElementById('${card.id}').parentNode.outerHTML = ''
                      cardsModal.destroy() 
                      } 
                    },
                    { text: 'No', type: 'primary', handler() { cardsModal.close() } }]
                }); cardsModal.open()">Delete</a>
            </div>
          </div>
      `;
      $col.insertAdjacentHTML("beforeend", template)
      $row.appendChild($col);
    })
    return function () {
      return document.querySelector(".container").appendChild($row)
    }
  }
}
