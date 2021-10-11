import "./NavBar.css";

// menu configuration

const NavBar = () => {
    return (

        <><nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid menuNavegacion">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">

                <ul className="navbar-nav justify-content-center">
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="index.html">INICIO</a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="index.html">PRODUCTOS</a>
                  </li>

                  {/* <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="Productos.html" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">PRODUCTOS</a>
                    
                    <ul className="dropdown-menu navbar" aria-labelledby="navbarDropdownMenuLink"> 
                      <li><a className="dropdown-item" href="Productos.html">FAVORITOS</a></li>
                      <li><a className="dropdown-item" href="aretes.html">ARETES</a></li>
                      <li><a className="dropdown-item" href="collares.html">COLLARES</a></li>
                      <li><a className="dropdown-item" href="brazaletes.html">BRAZALETES</a></li>
                      <li><a className="dropdown-item" href="bolsos.html">BAGS</a></li>
                    </ul>
                  </li> */}

                  <li className="nav-item">
                    <a className="nav-link" href="Nosotros.html">NOSOTROS</a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link" href="Contacto.html">CONTACTO</a>
                  </li>
                  
                  <li className="nav-item">
                    <a className="nav-link" href="Envios y devoluciones.html">ENVIOS Y DEVOLUCIONES</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </>

    );
};

export default NavBar;
