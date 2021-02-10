// class idSuperUsuario{
//     constructor(nombre, apellido, edad, carrera, sexo, correo,activado){
//         this.nombre   = nombre
//         this.apellido = apellido
//         this.edad     = edad
//         this.carrera  = carrera
//         this.sexo     = sexo
//         this.correo   = correo
//         this.activado = activado
//     }
// saludar=()=>{
// return document.write(`
//  <div>
//     <h1>
//      Hola, mi nombre es ${this.nombre} ${this.apellido}, y estudio ${this.carrera}
//     </h1>
// </div>`)}
// }

// class idEstudiantes extends idSuperUsuario{
//     constructor(nombre, apellido, edad, carrera, sexo, correo,activado,lenguaje, experiencia){
//         super(nombre, apellido, edad, carrera, sexo, correo,activado)        
//         this.lenguaje    = lenguaje
//         this.experiencia = experiencia
//     }
// }
// class idProfesor extends idSuperUsuario{
//     constructor(nombre, apellido, edad, carrera, sexo, correo,activado, lenguaje, experiencia){
//         super(nombre, apellido, edad, carrera, sexo, correo,activado)        
//         this.lenguaje    = lenguaje
//         this.experiencia = experiencia
//     }
// }

// const newEstudiante = new idEstudiantes(
//     'Dey',
//     'Frias',
//     32,
//     'Empresas',
//     'Masculino',
//     'Dey_melfy@hotmail.com',
//     false,
//     'javascript'
//     ,true);

// console.log(newEstudiante)

// class Forma{
//     constructor(alto, ancho, color){
//         this.alto    = alto
//         this.anancho = ancho
//         this.color   = color
       
//     }
// dibujar=()=>{
// return document.body.innerHTML=`
//     <div
//         style="
//         width:${this.ancho}px;
//         height:${this.alto}px;
//         background:${this.color}"
//     >
//     </div>
//     `
//     }


// }
// const Forma1 = new Forma(220,400,"red");

//************************************************************** */

// class Usuarios{
//     constructor(nombre, apellido, contrasenia){
//         this.nombre = nombre 
//         this.apapellido =apellido
//         this.contrasenia = contrasenia
//     }
// }


// let fomularios=document.getElementById('formulario')

// fomularios.addEventListener('submit', e=>{
//     e.preventDefault()
//     let nombre=e.target.nombre.value
//     let apellido=e.target.apellido.value
//     let contrasenia=e.target.contrasenas.value

//     let usuario=new Usuarios(nombre,apellido,contrasenia)
//     console.log(usuario)
//    console.log(e.target.nombre.value)
//    console.log(e.target.apellido.value)
//    console.log(e.target.contrasenas.value)
// })

