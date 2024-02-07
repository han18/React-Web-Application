return (
      <div>
        <div className="container">
          {flagList.map((flags, index) => (
            <div key={index}>
              <div>
                {" "}
                <h1>{flags.flag}</h1>
                <br />
              </div>
              <div>{flags.name.common}</div>
            </div>
          ))}
        </div>
      </div>
    );

    return (
      <div class="col">
                <div class="card">
                    <img src="./img/dish2.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">TIRAMISU CAKE</h5>
                        <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
                            dignissimos accusantium amet similique velit iste.</p>
                    </div>
                    <div class="mb-5 d-flex justify-content-around">
                        <h3>190$</h3>
                        <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>


        </div>
    )

    <div class="container py-5">
    <h1 class="text-center">Popular Dishes</h1>
    <div class="row row-cols-1 row-cols-md-3 g-4 py-5">