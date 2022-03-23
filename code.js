/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  let encabezados= ["Ingresa tu nombre", "ingresa el año en que naciste",
  "Ingresa donde vives" ,"te interesa java script"]
  let h3= document.querySelectorAll("#sitio > div > h3 ")
  for (let i=0;i< encabezados.length;i++){

        let dato

        if (i== encabezados.length-1){
        dato=confirm(encabezados[i])


        }else{
        dato=prompt(encabezados[i])
        }

        dato==true ? datosPersona[i]="Si" : datosPersona[i]=dato

        }



}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  
  
  let ListaSpan= document.querySelectorAll("#sitio > div > h3 > span ")
  
  console.log(ListaSpan)

  ListaSpan.forEach((span,index) =>{   
     
      if(index==1){
        fechaActual=new Date()
        let edad=parseInt(fechaActual.getFullYear())- parseInt(datosPersona[index])
        span.innerText=edad        
      }else{
        span.innerText=datosPersona[index]
  }
  
})

}



function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  let elementoFila=document.getElementById("fila")

  if(elementoFila.innerHTML==""){

    let contadorImg=0
    for (let imagen of listado){
      
        let etiqueta= document.createElement("span")
        let elementoFila=document.getElementById("fila")
        etiqueta.innerHTML=`<img src=${listado[contadorImg].imgUrl}> 
                            <br>
                            <div>Lenguajes: ${listado[contadorImg].lenguajes}</div>
                            <br>
                            <div>Bimestre: ${listado[contadorImg].bimestre}</div>`

               
        etiqueta.setAttribute("class","caja")
        etiqueta.setAttribute("alt",listado[contadorImg].lenguajes)     
        elementoFila.appendChild(etiqueta)

        contadorImg++

    }
  


  }
}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
 
  
  document.getElementById("sitio").classList.toggle("dark")

}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */

document.body.onkeypress=function(event){
  if( event.key="f"){
    document.getElementById("sobre-mi").classList.remove("oculto")
  }
}
