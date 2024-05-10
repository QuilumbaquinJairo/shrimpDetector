//variables
const body = document.body;
const audio = new Audio('sounds/risa.mp3');
const audioNo = new Audio('sounds/nosound.mp3')

function detectionMethod () {
    Swal.fire({
        title: 'Are you a Shirmp?',
        showDenyButton: true,
        confirmButtonText: 'YES',
        denyButtonText:'NO',
        allowOutsideClick: false
}).then((result)=>{
    if(result.isConfirmed){
        audio.play();
        Swal.fire({
            title: "HAHAHAHAHHAHHA IDIOT",
            imageUrl: "https://i.ibb.co/93CFQv5/shirmp-Yes.jpg",
            imageWidth: 500,
            imageHeight: 400,
            imageAlt: "Custom image",
            allowOutsideClick: false
          }).then((result)=>{
            if(result.isConfirmed){
                audio.pause();
                audio.load();
            }
          });
          
        
    }else if (result.isDenied) {
        audioNo.play();
        Swal.fire({
            title: "WELL DONE TAKE A POPSICLE",
            imageUrl: "https://i.ibb.co/L5V3ddZ/shrimpNo.jpg",
            imageWidth: 800,
            imageHeight: 400,
            imageAlt: "Custom image",
            allowOutsideClick: false
          }).then((result)=>{
            if(result.isConfirmed){
                audioNo.pause();
                audioNo.load();
            }
          });
          
      }
}).get
} 

