const apiKey = ' https://lanciweb.github.io/demo/api/pictures/';

axios.get(apiKey)
    .then(response => {
        console.log(response.data)
        //codice da eseguire in caso di successo

        response.forEach(element => {

            const cardHtmal = document.querySelectorAll('.container .row')
            
            cardHtmal.innerHtmal +=
            
          `  <div class="col-sm-12 col-md-6 col-lg-4">

                <div class="card m-3" style="width: 100%;">

                    <figure class="position-relative">
                        <img class="position-absolute top-0 start-50 translate-middle" src="./img/pin.svg" alt="pin">
                    </figure>

                    <a href="">
                        <img src= "${element.url}" class="card-img-top p-3" alt="...">
                    </a>
                        
                    <div class="card-body">
                      <h5 class="card-title">${element.title}</h5>
                      <p class="card-text">${element.date}</p>
                    </div>

                </div>

            </div>
            `
            


            
        });
