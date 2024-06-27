function Header(){
    return (
        <header>
        <nav className="navbar navbar-dark navbar-expand-lg bg-primary h-100" >
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png" alt="Logo" width="30" height="24" className="d-inline-block align-text-top"/>
                    Bootstrap
                  </a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link " href="/about">Tentang Saya</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/contact">Hubungi saya</a>
                  </li>
                </ul>
                <form className="d-flex search" role="search">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                  <button className="btn btn-outline-dark text-white" type="submit">Search</button>
                </form>
                </div>
                <div id="clock"></div>
            </div>
        </nav>
    </header>
    )
}

export default Header