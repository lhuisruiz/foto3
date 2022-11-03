
const evento = document.getElementById('send')
const enviarFormulario = () => {

    let numero = document.getElementById('numero').value;


    var win = window.open(`https://wa.me/54${numero}?text=Mis Fotos App Web:%20https://bit.ly/3f2nzZI%0APara que el enlace se active me tienes que enajenar`, '_blank');
    //
}
evento.addEventListener('click', enviarFormulario)


//Compartir
const shareBtn = document.getElementById('shareBtn')
shareBtn.addEventListener('click', event => {
    if (navigator.share) {
        //drive
        navigator.share({
            text: 'Instala la App web "Mis fotos": ',
            url: 'https://bit.ly/3f2nzZI'
        }).then(() => {
            console.log('Gracias por compartir mis fotos!');
        })
            .catch((err) => console.error(err));
    } else {

        alert("El navegador actual no admite la función de compartir. Por favor, comparte manualmente el enlace")
    }
});


//Numero de pagina
function modal_09() {
    Swal.fire({
        html: '<h3 class="bm">ivan zarate cumple 14 Foto2</h3>',
        //tamaño
        imageWidth: 300,
        imageHeight: 300,
        //cerrar
        padding: '1rem',
        showCloseButton: true,
        showConfirmButton: false,
        background: 'linear-gradient(#000,#000)',
        //ajustes
        showCloseButton: true,
        timer: '5000',
        timerProgressBar: true,
        customClass: {
            actions: 'content',
        }
    })
}


// automatica
Swal.fire({

    html: '<div class="mensaje-2">' +
        '<h3 class="bm-4">Black Momets</h3>' +
        '<p class="bm-2-pp">Foto disponible el <b>4 de octubre</b>, Si no aparecen escribeme al </p>' +
        '<a href="https://wa.me/541144382987" target="_blank"><button class="bt-msj" >+54 11 4438-2987</button></a>' +
        '</div>',
   
       html: '<div class="mensaje">' +
       '<h3 class="bm-4">Black Momets</h3>' +
       '<p class="bm-2-pp">Fotos listas, gracias por la confianza</p>' +
       '</div>',
   
    //tamaño
    imageWidth: 300,
    imageHeight: 300,
    //cerrar
    padding: '1rem',
    showCloseButton: true,
    showConfirmButton: false,
    background: '#0e0e0e',
    //ajustes
    showCloseButton: true,
    timer: '3000',
    timerProgressBar: true,
    customClass: {
        actions: 'content',
    }
})



//Abrir fotos
let boton = document.querySelector('#boton');
boton.addEventListener('click', function () {
        location.href = "https://drive.google.com/drive/folders/1WgSheC4TvYEdPpfbPbZKICdkFXqPRP1f?usp=share_link"
});
//ventana descargar todo
function modal_08() {
    Swal.fire({
        html: '<div class="mensaje-2">' +
        '<h3 class="bm-4">Black Momets</h3>' +
        '<p class="bm-2-pp">Tamaño de Descarga, <b>3GB De Fotos</b>, Procura tener espacio en el dispositivo, Se descargara todo en formato rar o zip, eso lo podes encontar en la Play store o app store </p>' +
        '<a href="http://download852.mediafire.com/u3qg6tjdb7og/aoypndnm4vgfers/fotos.rar" target="_blank"><button class="bt-msj" >Si, Descargar Todo <i class="fa-solid fa-download blu"></button></a>' +
        '</div>',
        //tamaño
        imageWidth: 400,
        imageHeight: 500,
        //cerrar
        padding: '1rem',
        showCloseButton: true,
        showConfirmButton: false,
        background: '#0e0e0e',
        //ajustes
        showCloseButton: true,
        timerProgressBar: true,
        timerProgressBar: true,
})
}



// Foto lhuis ruiz
function modal_05() {
    Swal.fire({
        html: '<h3 class="bm-4" onclick="modal_09();">Black Momets</h3>'+
        '<p class = "bm-2-pp">Fotos al mejor precio.</p>',
        imageUrl: 'https://res.cloudinary.com/lhuis/image/upload/v1666754485/iconos/fkppmxoe9qs9xhggmzcc.png',
        //tamaño
        imageWidth: 300,
        imageHeight: 300,
        //cerrar
        padding: '1rem',
        showCloseButton: true,
        showConfirmButton: false,
        background: 'linear-gradient(#000,#000)',

    })
}

// Foto lhuis ruiz
function modal_11() {
    Swal.fire({
        html: '<div>'+
        '<img class = "img-misfotos" src="img/a.jpg" alt="">'+
    '</div>'+
        '<h3 class="bm-4">Black Momets</h3>'+
        '<p >Fotos al mejor precio.</p>',
        //tamaño
        imageWidth: 300,
        imageHeight: 500,
        //cerrar
        padding: '1rem',
        showCloseButton: true,
        showConfirmButton: false,
        background: '#0e0e0e',

    })
}


