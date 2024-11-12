import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard(){
    const navegar=useNavigate();
    return(
            <><h1>
                Bienvenido!
            </h1>
            <button onClick={()=>navegar("/hotel")}>Gestionar Hoteles</button>
            </>
    );
}

export default Dashboard;