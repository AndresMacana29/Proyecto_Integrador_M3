import React , {useState} from "react";
import axios from 'axios';
import apiRoutes from "../apiRoutes";
import {useNavigate} from "react-router-dom";
import '../css/Loggin.css';


function Loggin(){
    const[email , setEmail] = useState('');
    const[password , setPassword] = useState('');
    const[errores, setErrores] = useState('');
    const navegar=useNavigate();
    const validarDatos=async() =>{
        setErrores('');
        try{
        const respuesta=await axios.post(apiRoutes.loggin, {
            "correo": email,
            "clave": password,
        }); 
        console.log(respuesta);
        if(respuesta.status === 401){
            setErrores('Acceso denegado, intentar nuevamenta');
        }
        else{
            localStorage.setItem('access_token', respuesta.data.token);
            const token =respuesta.data.token;  
                const config= {
                    headers: {
                        'Authorization': `Bearer ${token}` // Incluye el token en los encabezados
                    }
                };
                const userData= await axios.get(apiRoutes.infoUsuario,
                    config
                );
                console.log(userData);
                localStorage.setItem('tipo_usuario', userData.data.tipo);
                navegar("/dashboard");
            }

        }
        catch(error){
            setErrores('Acceso denegado, intentar nuevamenta');
        }
    }

    return(
        <div>
            <div>
                <header>
                    <nav className="navegator">
                        <h2 className="navegator-name">Amanecer Urbano</h2>
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
            {errores && <p>{errores}</p>}
            <div className="container">
                <div className="container-principal">
                    <div className="col-md-4">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h3 className="panel-title" text-aling="center">Iniciar Sesion</h3>
                            </div>
                            <div className="panel-body">
                                <fieldset className="form">
                                    <div className="form-group">
                                        <input className="form-control" type="email" onChange={(e)=>setEmail(e.target.value)} value={email} placeholder="Correo electronico"></input>
                                    </div>
                                    <div className="form-group">
									    <input className="form-control"type="password" onChange={(e)=>setPassword(e.target.value)} value={password} placeholder="Contraseña"></input>
                                    </div>
                                    <div className="button-login">
                                        <button onClick={validarDatos} className="login-boton" type="submit" >Ingresar</button>
                                        <a href="/registeruser" className="login-boton">Registrarme</a>
                                    </div>
                                </fieldset>
                            </div>
                        </div>
                    </div> 
                </div>  
            </div>
            <footer>
                    <p>Amanecer Urbano - © Todos los Derechos Reservados 2024</p>
            </footer>
        </div>
    );
}

export default Loggin;