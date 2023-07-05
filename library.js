const myBooks = function () {
    fetch('https://striveschool-api.herokuapp.com/books', {
      
    })
      .then((res) => {
        if (res.ok) {
          // preleverò i dati dei libri
          return res.json()
        } else {
          if (res.status === 404) {
            throw new Error('Not found')
          } else if (res.status === 500) {
            throw new Error('Internal Server Error')
          } else {
            throw new Error('Errore nella chiamata API')
          }
        }
      })
      .then((data) => {
        console.log(data)
        let spinnerContainer = document.getElementById('spinner-container')
        spinnerContainer.classList.add('d-none')
       
       
       
        data.forEach((el) => {
           const row3 = document.getElementById("rows")
            const col1 = document.getElementById("colu")
            const col2 = document.getElementById("cold")
            const col3 = document.getElementById("colt")
            const col4 = document.getElementById("colq")
            const col5 = document.getElementById("colc")
            
            row3.appendChild(col1, col2, col3, col4, col5)
            
            col1.innerHTML = `
            <div class="card" style="width: 12rem;">
            <img src=${el.img[5]} class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title"> ${el.title[5]} </h5>
            <p class="card-text"> ${el.price[5]} </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        `
        col2.innerHTML = `
        <div class="card" style="width: 12rem;">
        <img src=${el.img[3]} class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title"> ${el.title[3]} </h5>
        <p class="card-text"> ${el.price[3]} </p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    `
    col3.innerHTML = `
    <div class="card" style="width: 12rem;">
    <img src=${el.img[2]} class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title"> ${el.title[2]} </h5>
    <p class="card-text"> ${el.price[2]} </p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
`
col4.innerHTML = `
<div class="card" style="width: 12rem;">
<img src=${el.img[1]} class="card-img-top" alt="...">
<div class="card-body">
<h5 class="card-title"> ${el.title[1]} </h5>
<p class="card-text"> ${el.price[1]} </p>
<a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>
`
col5.innerHTML = `
<div class="card" style="width: 12rem;">
<img src=${el.img[4]} class="card-img-top" alt="...">
<div class="card-body">
<h5 class="card-title"> ${el.title[4]} </h5>
<p class="card-text"> ${el.price[4]} </p>
<a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>
`
          

        
        })
    })

      
      .catch((err) => {
        console.log(err)
      })
  
}
  myBooks()
  