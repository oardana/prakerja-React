import Table from "./table"
const Contact = ()=>{
    return(
       <>
       <div className="container-fluid bg-primary bg-gradient pb-5 pt-5">
            <div className="container col-lg bg-secondary p-3 w-50 rounded">
                <h1 className="text-center text-white">Hubungi Saya</h1>
                    <form action="">
                        <div className="input-group">
                            <input type="text" class="form-control" name="name" id="name" placeholder="Name" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Silahkan Isi Nama Lengkap Anda"/>
                        </div>
                        <div className="input-group">
                            <input type="text" class="form-control" name="email" id="email" placeholder="Email"/>
                        <span id="emailError" class="error-message"></span>
                        </div>
                        <div class="input-group">
                            <input type="text" class="form-control" name="notelepon" id="notelepon" placeholder="No telepon"/>
                            <span id="noteleponError" class="error-message"> </span>
                        </div>
                        <div class="form-floating">
                            <textarea  class="form-control" name="pesan" id="pesan" placeholder="Pesan" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Silahkan isi pesan anda disini MAX 100 character"></textarea>
                            <label for="">Pesan</label>
                        </div>
                    <button type="submit" class="btn btn-light mb-3" >Kirim</button>
                    </form>
            </div>
       </div>
        <Table/>
       </>
    )
}
export default Contact