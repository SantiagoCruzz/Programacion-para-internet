
const app = new Vue({
    el: '#app',
    data: {
        nombre: '',
        apellido: '',
        edad: null,
        profesion: '',
        pais: '',
    },
    computed: {
        usuario: {
            get: function() {
                if (this.nombre && this.apellido) {
                    return this.nombre + ' ' + this.apellido;
                } else{
                    return this.nombre || this.apellido;
                }
            },
            set: function(nuevoNombre){
                const nombres = nuevoNombre.split(' ');

                if (nombres.length === 2){
                    this.nombre = nombres[0];
                    this.apellido = nombres[1];
                } else if (nombres.length <= 1){
                    this.nombre = nombres[0] || '';
                    this.apellido = '';
                }
            }
        }
    },
    methods: {
        resetear: function(){
            this.nombre = '';
            this.apellido = '';
            this.edad = null;
            this.profesion= '';
            this.pais= '';
            
        }
    }
    
}
)

const express = require("express");
const path = require("path");

const app_s = express();

app_s.get("/", (req, res) => {
  //res.send("hello world!");
  res.sendFile(path.join(__dirname + "/index.html"));
});

app_s.listen(3000, () => {
  console.log("server listening on port", 3000);
});

