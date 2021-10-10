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

                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="Productos.html" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">PRODUCTOS</a>
                    
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <li><a className="dropdown-item" href="Productos.html">FAVORITOS</a></li>
                      <li><a className="dropdown-item" href="aretes.html">ARETES</a></li>
                      <li><a className="dropdown-item" href="collares.html">COLLARES</a></li>
                      <li><a className="dropdown-item" href="brazaletes.html">BRAZALETES</a></li>
                      <li><a className="dropdown-item" href="bolsos.html">BAGS</a></li>
                    </ul>
                  </li>

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

                <div class="navbar-nav">
                  <div class="d-flex justify-content-center mt-3">
                    <a type="button" data-toggle="modal" data-target="#cartVisible">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="42" fill="currentColor" class="bi bi-cart2" viewBox="0 0 16 16">
                      <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                      </svg>
                    </a>  
                    
                    <div id="cartNumbers"> 
                      <span id="cart-counter">0</span>
                    </div>
                  </div>
                </div>
            </div>
          </nav>
        </>

    );
};

export default NavBar;
