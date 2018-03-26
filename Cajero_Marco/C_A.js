var boton = document.getElementById("procesar");
boton.addEventListener("click", Procesar );

class cajero{
    constructor(v,c){
        this.valor = v;
        this.cantidad = c;
    }
}

//Crear Billetes
var Billetes = [
    {"c":10,"v":200},
    {"c":10,"v":100},
    {"c":10,"v":50},
    {"c":10,"v":20},
    {"c":10,"v":10}
];


function Procesar(){
    c_r = parseInt(document.getElementById("Dinero").value);
    var bi = [];
    var cant = 0;
    var rest = 0;
    var T_A = 0; // Total de Efectivo actual

    if(c_r >= 10){
        
        for(var i in Billetes){
            T_A = T_A + (Billetes[i].c * Billetes[i].v);  
        }

        if(T_A > c_r){
            for (var B in Billetes) {
                if( Billetes[B]["c"] > 0 ){
                        cant = Math.floor(c_r / parseInt(Billetes[B]["v"]));
                        if(cant > Billetes[B]["c"]){
                            rest = cant - Billetes[B]["c"];
                            cant = cant - rest;
                        }
                        
                        bi.push({"c":cant,"v":Billetes[B]["v"]});
                        c_r = c_r - (cant * Billetes[B]["v"]);
                        
                        //console.log(c_r);

                        /*Billetes[B]["c"] = Billetes[B]["c"] - cant;
                        c_r = c_r - (cant * parseInt(Billetes[B]["v"]));
                        if(c_r == 0){
                            if(Billetes[B]["c"] <= 0){
                                delete Billetes[B];
                            }
                            break;
                        }*/
                }
            }
            if(c_r=0){
                for(var B in Billetes){
                    if(Billetes[B]["v"] == bi[]){

                    }
                }
            }
            else{
                alert("Cantidad solicitada supera la cantidad disponible");
            }
        }
        else{
            alert("Cantidad Superior a la cantidad de Efectivo Disponible");
        }
    }
    else{
        alert("Monto minimo a retirar debe ser de 10");
    }
        
}

