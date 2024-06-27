function Carousel(){
return(
    <div class="container-fluid bg-primary">
        <div id="carouselExample" class="carousel slide">
            <div class="carousel-inner " style={{objectFit: 'cover', objectPosition: 'center'}}>
              <div class="carousel-item active">
                <img src="https://www.jtrustbank.co.id/theme/Site/img/Banner_website_BukaTabunganTebarHadiah_jul_23.jpg" class="d-block w-100" height="550px" alt="..."/>
              </div>
              <div class="carousel-item">
                <img src="https://lh3.googleusercontent.com/94axuxYbl_UEr8yKB-mzH_gxB5SSilmFdoS-OsMpbQwgpP3pfMA6neVOhxBsyy_zLi0DaXb6Gq0OnGi2Z_e2554BenAWy96mDmlylm2Bm6RbXEFkoKpqoCHM1Kv_0xFJ7ITDY6eCrV9kDjqdafXfl8xWT_ARFOQ7-_Qpz0h6wDcSy9z2H88xBcbIBEurvg" class="d-block w-100" height="550px" alt="..."/>
              </div>
              <div class="carousel-item">
                <img src="https://delapanmedia.com/asset/berita/original/76318067767-aaa.jpg" class="d-block w-100" height="550px" alt="..."/>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span class="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
              <span class="visually-hidden ">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span class="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
    </div>
)
}

export default Carousel