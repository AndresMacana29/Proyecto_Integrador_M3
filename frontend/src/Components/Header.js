import React from "react";
import '../css/Header.css';
import './Footer';


function Header(){
    return(
        <div>
            <div>
                <header>
                    <nav className="navegator">
                        <h2 className="navegator-name">Amanecer Urbano</h2>
                        <div className="navegator-boton">
                            <a href="/registeruser" className="login-boton">Registrarme</a>
                            <a href="/loggin" className="login-boton">Iniciar Sesion</a>
                        </div>
                    </nav>
                    <div>
                        <div className="container-description">
                            <div class="col-lg-12 text-center">
                                <h1 className="promt">Paraisos de Colombia</h1>
                                <h6 className="description">Descubre los mejores lugares para hospedarte en este gran paraiso terranal</h6>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
            <div>
                <div class="container">
                    <form action="#" method="post">
                        <div className="container-search">
                            <div className="row">
                                <div className="col-lg-3 p-0">
                                        <select className="form-control" id="exampleFormControlSelect1">
                                            <option>Destino</option>
                                            <option>Medellin</option>
                                            <option>Bogotá</option>
                                            <option>Cali</option>
                                            <option>Cartegena</option>
                                            <option>Bucaramanga</option>
                                        </select>
                                </div>
                                <div className="col-lg-3 p-0">
                                        <input type="date" className="form-control search-slt"></input>
                                </div>
                                <div class="col-lg-3 p-0">
                                        <input type="date" className="form-control search-slt"></input>
                                </div>
                                    <div className="col-lg-3 p-0">
                                        <a href="/dashboard" type="button" className="btn btn-danger">Buscar</a>
                                   </div>
                            </div>
                        </div>
                    </form>
                </div>
                <footer>
                    <p>Amanecer Urbano - © Todos los Derechos Reservados 2024</p>
                </footer>
            </div>
        </div>
    );
}

export default Header;