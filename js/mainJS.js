var audioSelect =new Audio('../media/sonidos/select.mp3');
    var audioSelect2 =new Audio('../media/sonidos/OptSelect.mp3');

opt = (n) => {
    
    switch(n){
        case 1:
        document.getElementById('options').src = './media/Options1.png';
        audioSelect.play();
           
        break;
        case 2:
        document.getElementById('options').src = './media/Options2.png';
        audioSelect.play();
           
        break;
        case 3:
        document.getElementById('options').src = './media/Options3.png';
        audioSelect.play();
            
        break;
    }
}

resetOpt = () => {
        document.getElementById('options').src = './media/OptionsDefaults.png';
    }

    var isImage1 = true;
    var audio = new Audio('../media/sonidos/IntroMusic.mp3');
    

    audio.play(); 

    function changeImage() {
        var buttonImage = document.getElementById('buttonImage');
        
        if (isImage1) {
            buttonImage.src = './media/Unmute.png';
            audio.pause(); 
             
        } else {
            buttonImage.src = './media/mute.png';
            audio.play();
        }

        isImage1 = !isImage1; 
    }
  
   