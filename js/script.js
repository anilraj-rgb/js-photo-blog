const apiKey = " https://lanciweb.github.io/demo/api/pictures/";

axios
  .get(apiKey)
  .then((response) => {
    console.log(response.data);
    //codice da eseguire in caso di successo

    response.data.forEach((element) => {
      const cardContainer = document.querySelector(".container .row");

        
        //! first version animated
        // si Usa innerHTML per inserire tutta la struttura img

        cardContainer.innerHTML += `  
        <div class="col-sm-12 col-md-6 col-lg-4 my-3">

          <div class="card rotate-zoom position-relative" style="width: 100%;">

            <figure class=" rotation-none position-absolute top-0 start-50 translate-middle">
              <img class="position-absolute top-0 start-50 translate-middle " src="./img/pin.svg" alt="pin">
            </figure>

            <a href="#" class="rounded" id="${element.id}"  >
              <img  src= "${element.url}" class="card-img-top p-3 img-fluid" alt=${element.title}">
            </a>
                        
            <div class="card-body">
              <p class="card-text">${element.date}</p>
              <h5 class="card-title fw-bold text-uppercase">${element.title}</h5>
            </div>

          </div>

        </div>
      `;
    }
    );
