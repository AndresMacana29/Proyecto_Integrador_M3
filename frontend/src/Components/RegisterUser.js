import React , {useState} from "react";
import axios from 'axios';
import apiRoutes from "../apiRoutes";
import {useNavigate} from "react-router-dom";
import '../css/RegisterUser.css';


function RegisterUser(){
    const[nombre , setNombre] =useState('');
    const[correo , setEmail] =useState('');
    const[password , setPassword] =useState('');
    const[telefono , setTelefono] =useState('');
    const[direccion , setDireccion] =useState('');
    const[tipoUser , settipoUser] =useState('');
    const[errores, setErrores] = useState('');
    const navegar=useNavigate();
    const validarCampos=async() =>{
        setErrores('');
        try{
        const respuesta=await axios.post(apiRoutes.register,{
            "nombre": nombre,
            "correo": correo,
            "password" : password,
            "telefono" : telefono,
            "direccion": direccion,
            "tipoUser" : tipoUser,
        });
        console.log(respuesta);
        if(respuesta.status === 401){
            setErrores('Datos ingresados no son correctos, intentar nuevamente');
        }
        else{
            localStorage.setItem('access_token', respuesta.data.token);
            navegar("/loggin");
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
                </header>
            </div>
            {errores && <p>{errores}</p>}
            <div className="container">
                <div className="container-principal">
                    <div className="col-md-4">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h3 className="panel-title" text-aling="center">Registrarme en Amanecer Urbano</h3>
                            </div>
                            <div className="panel-body">
                                <fieldset>
                                    <div class="form-group">
                                        <input className="form-control" type="text" onChange={(e)=>setNombre(e.target.value)} value={nombre} placeholder="Nombre"></input>
                                    </div>
                                    <div class="form-group">
                                        <input className="form-control" type="email" onChange={(e)=>setEmail(e.target.value)} value={correo} placeholder="Correo electronico"></input>
                                    </div>
                                    <div class="form-group">
                                    <input className="form-control" type="password" onChange={(e)=>setPassword(e.target.value)} value={password} placeholder="Contraseña"></input>
                                    </div>
                                    <div className="form-group">
                                        <input className="form-control" type="numero" onChange={(e)=>setTelefono(e.target.value)} value={telefono} placeholder="Telefono"></input>
                                    </div>
                                    <div className="form-group">
                                        <input className="form-control" type="text" onChange={(e)=>setDireccion(e.target.value)} value={direccion} placeholder="Direccion residencia"></input>
                                    </div>
                                    <div className="form-group">
                                        <input className="form-control" type="text" onChange={(e)=>settipoUser(e.target.value)} value={tipoUser} placeholder="Usuario"></input>
                                    </div>
                                    <div className="button-register">
                                        <button onClick={validarCampos} className="login-boton" type="submit" >Registrarme</button>
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

export default RegisterUser;