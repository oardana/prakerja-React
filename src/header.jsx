import { Link } from "react-router-dom"

function Header(){
    return (
        <header>
        <nav className="navbar navbar-dark navbar-expand-lg bg-primary h-100" >
            <div className="container-fluid">
                <Link className="navbar-brand" to="#">
                    <img src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png" alt="Logo" width="30" height="24" className="d-inline-block align-text-top"/>
                    Bootstrap
                  </Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link " to="/about">Tentang Saya</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/contact">Hubungi saya</Link>
                  </li>
                  <li>
                    <Link className="nav-link" to="/daftartugas"> Daftar Tugas</Link>
                  </li>
                </ul>
                </div>
                <div id="clock"></div>
            </div>
        </nav>
    </header>
    )
}

export default Header