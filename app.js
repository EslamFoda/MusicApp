const play = document.querySelector('.play');
const pause = document.querySelector('.pause');
const mute = document.querySelector('.mute');
const sound = document.querySelector('.sound');
const song = document.querySelector('.song');
const disk = document.querySelector('.disk');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const lista = document.querySelector('.lista');
const arrow = document.querySelector('.div-arrow');
const listArrow = document.querySelector('.arrow');
const songs = document.querySelectorAll('.list-box');
const songTwo = document.querySelector('.song-two');
const songThree = document.querySelector('.song-three');
const songFour = document.querySelector('.song-four');
const songFive = document.querySelector('.song-five');
const songSix = document.querySelector('.song-six');
const songSeven = document.querySelector('.song-seven');
const songName = document.querySelector('.songname p')

let myArray = Array.from(songs);


myArray.forEach(function(song){
    song.addEventListener('click',function(e){
        
     if(e.target === songs[0] || e.target.parentElement === songs[0] || e.target.parentElement.parentElement === songs[0] ){
         songName.textContent = 'Points Of Authority'
         songTwo.play();
         songThree.pause();
         songFour.pause();
         songFive.pause();
         songSix.pause();
         songSeven.pause();
         songThree.mute = false;
         songFour.mute = false;
         songFive.mute = false;
         songSix.mute = false;
         songSeven.mute = false;
         disk.src = '/imgs/disk2.png';
         disk.classList.add('rotating');
         pause.addEventListener('click',function(){
            songTwo.pause();
             disk.style.animationPlayState = 'paused';
    one.style.visibility = 'hidden';
    two.style.visibility = 'visible';
    setTimeout(function(){
        two.style.visibility = 'hidden';
       },4000)
    three.style.visibility = 'hidden';
    four.style.visibility = 'hidden';
            
        })
        play.addEventListener('click',function(){
            songTwo.play();
            songThree.pause();
         songFour.pause();
         songFive.pause();
         songSix.pause();
         songSeven.pause();
         
         disk.classList.add('rotating');
         disk.style.animationPlayState = 'running';
         one.style.visibility = 'visible';
         setTimeout(function(){
          one.style.visibility = 'hidden';
         },4000)
         two.style.visibility = 'hidden';
         three.style.visibility = 'hidden';
          four.style.visibility = 'hidden';
        })
        mute.addEventListener('click',function(){
            songTwo.muted = true;
            songThree.mute = false;
            songFour.mute = false;
            songFive.mute = false;
            songSix.mute = false;
            songSeven.mute = false;
            one.style.visibility = 'hidden';
            two.style.visibility = 'hidden';
            three.style.visibility = 'visible';
            setTimeout(function(){
                three.style.visibility = 'hidden';
               },4000)
            four.style.visibility = 'hidden';
        
        })
        sound.addEventListener('click',function(){
            songTwo.muted = false;
            one.style.visibility = 'hidden';
            two.style.visibility = 'hidden';
            three.style.visibility = 'hidden';
            four.style.visibility = 'visible';
            setTimeout(function(){
                four.style.visibility = 'hidden';
               },4000)
        })
        let volume = document.querySelector("#volume-control");
             volume.addEventListener("change", function(e) {
              songTwo.volume = e.currentTarget.value / 100;
            })
         
         

        } else if(e.target === songs[1] || e.target.parentElement === songs[1] || e.target.parentElement.parentElement === songs[1]) {
            songName.textContent = 'New Divide'
            disk.src = '/imgs/disk3.png';
            disk.classList.add('rotating');
            songThree.play();
            songTwo.pause();
         
         songFour.pause();
         songFive.pause();
         songSix.pause();
         songSeven.pause();
         songThree.muted = false;
         songTwo.muted = false;
         songFour.mute = false;
         songFive.mute = false;
         songSix.mute = false;
         songSeven.mute = false;
         pause.addEventListener('click',function(){
            songThree.pause();
             disk.style.animationPlayState = 'paused';
    one.style.visibility = 'hidden';
    two.style.visibility = 'visible';
    setTimeout(function(){
        two.style.visibility = 'hidden';
       },4000)
    three.style.visibility = 'hidden';
    four.style.visibility = 'hidden';
            
        })
        play.addEventListener('click',function(){
            songThree.play();
            songTwo.pause();
         songFour.pause();
         songFive.pause();
         songSix.pause();
         songSeven.pause();
         
          disk.classList.add('rotating');
   disk.style.animationPlayState = 'running';
   one.style.visibility = 'visible';
   setTimeout(function(){
    one.style.visibility = 'hidden';
   },4000)
   two.style.visibility = 'hidden';
   three.style.visibility = 'hidden';
    four.style.visibility = 'hidden';
        })
        mute.addEventListener('click',function(){
            songThree.muted = true;
            songTwo.muted = false;
            songFour.mute = false;
            songFive.mute = false;
            songSix.mute = false;
            songSeven.mute = false;
            one.style.visibility = 'hidden';
            two.style.visibility = 'hidden';
            three.style.visibility = 'visible';
            setTimeout(function(){
                three.style.visibility = 'hidden';
               },4000)
            four.style.visibility = 'hidden';
        
        })
        sound.addEventListener('click',function(){
            songThree.muted = false;
            one.style.visibility = 'hidden';
            two.style.visibility = 'hidden';
            three.style.visibility = 'hidden';
            four.style.visibility = 'visible';
            setTimeout(function(){
                four.style.visibility = 'hidden';
               },4000)
        })
        let volume = document.querySelector("#volume-control");
             volume.addEventListener("change", function(e) {
              songThree.volume = e.currentTarget.value / 100;
            })
            
        } else if(e.target === songs[2] || e.target.parentElement === songs[2] || e.target.parentElement.parentElement === songs[2]) {
            songName.textContent = 'One Step Closer'
            disk.src = '/imgs/disk4.png';
            disk.classList.add('rotating');
            songFour.play();
            songThree.pause();
            songTwo.pause();
         songFive.pause();
         songSix.pause();
         songSeven.pause();
         songFour.muted = false;
         songTwo.muted = false;
         songThree.mute = false;
         songFive.mute = false;
         songSix.mute = false;
         songSeven.mute = false;
         pause.addEventListener('click',function(){
            songFour.pause();
             disk.style.animationPlayState = 'paused';
    one.style.visibility = 'hidden';
    two.style.visibility = 'visible';
    setTimeout(function(){
        two.style.visibility = 'hidden';
       },4000)
    three.style.visibility = 'hidden';
    four.style.visibility = 'hidden';
            
        })
        play.addEventListener('click',function(){
            songFour.play();
            songThree.pause();
            songTwo.pause();
         songFive.pause();
         songSix.pause();
         songSeven.pause();
         
          disk.classList.add('rotating');
   disk.style.animationPlayState = 'running';
   one.style.visibility = 'visible';
   setTimeout(function(){
    one.style.visibility = 'hidden';
   },4000)
   two.style.visibility = 'hidden';
   three.style.visibility = 'hidden';
    four.style.visibility = 'hidden';
        })
        mute.addEventListener('click',function(){
            songFour.muted = true;
            songTwo.muted = false;
            songThree.mute = false;
            songFive.mute = false;
            songSix.mute = false;
            songSeven.mute = false;
            one.style.visibility = 'hidden';
            two.style.visibility = 'hidden';
            three.style.visibility = 'visible';
            setTimeout(function(){
                three.style.visibility = 'hidden';
               },4000)
            four.style.visibility = 'hidden';
        
        })
        sound.addEventListener('click',function(){
            songFour.muted = false;
            one.style.visibility = 'hidden';
            two.style.visibility = 'hidden';
            three.style.visibility = 'hidden';
            four.style.visibility = 'visible';
            setTimeout(function(){
                four.style.visibility = 'hidden';
               },4000)
        })
        let volume = document.querySelector("#volume-control");
             volume.addEventListener("change", function(e) {
              songFour.volume = e.currentTarget.value / 100;
            })
            
        } else if(e.target === songs[3] || e.target.parentElement === songs[3] || e.target.parentElement.parentElement === songs[3]){
            songName.textContent = 'A place For My Head'
            disk.src = '/imgs/disk5.png';
            disk.classList.add('rotating');
            songFive.play();
            songFour.pause();
            songThree.pause();
            songTwo.pause();
         songSix.pause();
         songSeven.pause();
         songFive.muted = false;
         songTwo.muted = false;
         songThree.mute = false;
         songFour.mute = false;
         songSix.mute = false;
         songSeven.mute = false;
         pause.addEventListener('click',function(){
            songFive.pause();
             disk.style.animationPlayState = 'paused';
    one.style.visibility = 'hidden';
    two.style.visibility = 'visible';
    setTimeout(function(){
        two.style.visibility = 'hidden';
       },4000)
    three.style.visibility = 'hidden';
    four.style.visibility = 'hidden';
            
        })
        play.addEventListener('click',function(){
            songFive.play();
            songFour.pause();
            songThree.pause();
            songTwo.pause();
         songSix.pause();
         songSeven.pause();
         
          disk.classList.add('rotating');
   disk.style.animationPlayState = 'running';
   one.style.visibility = 'visible';
   setTimeout(function(){
    one.style.visibility = 'hidden';
   },4000)
   two.style.visibility = 'hidden';
   three.style.visibility = 'hidden';
    four.style.visibility = 'hidden';
        })
        mute.addEventListener('click',function(){
            songFive.muted = true;
            songTwo.muted = false;
            songThree.mute = false;
            songFour.mute = false;
            songSix.mute = false;
            songSeven.mute = false;
            one.style.visibility = 'hidden';
            two.style.visibility = 'hidden';
            three.style.visibility = 'visible';
            setTimeout(function(){
                three.style.visibility = 'hidden';
               },4000)
            four.style.visibility = 'hidden';
        
        })
        sound.addEventListener('click',function(){
            songFive.muted = false;
            one.style.visibility = 'hidden';
            two.style.visibility = 'hidden';
            three.style.visibility = 'hidden';
            four.style.visibility = 'visible';
            setTimeout(function(){
                four.style.visibility = 'hidden';
               },4000)
        })
        let volume = document.querySelector("#volume-control");
             volume.addEventListener("change", function(e) {
              songFive.volume = e.currentTarget.value / 100;
            })
          

        } else if(e.target === songs[4] || e.target.parentElement === songs[4] || e.target.parentElement.parentElement === songs[4]){
            songName.textContent = 'Crawling'
            disk.src = '/imgs/disk6.png';
            disk.classList.add('rotating');
            songSix.play();
            songFive.pause();
            songFour.pause();
            songThree.pause();
            songTwo.pause();
         songSeven.pause();
         songSix.muted = false;
         songTwo.muted = false;
         songThree.mute = false;
         songFour.mute = false;
         songFive.mute = false;
         songSeven.mute = false;
         pause.addEventListener('click',function(){
            songSix.pause();
             disk.style.animationPlayState = 'paused';
    one.style.visibility = 'hidden';
    two.style.visibility = 'visible';
    setTimeout(function(){
        two.style.visibility = 'hidden';
       },4000)
    three.style.visibility = 'hidden';
    four.style.visibility = 'hidden';
            
        })
        play.addEventListener('click',function(){
            songSix.play();
            songFive.pause();
            songFour.pause();
            songThree.pause();
            songTwo.pause();
         songSeven.pause();
         
          disk.classList.add('rotating');
   disk.style.animationPlayState = 'running';
   one.style.visibility = 'visible';
   setTimeout(function(){
    one.style.visibility = 'hidden';
   },4000)
   two.style.visibility = 'hidden';
   three.style.visibility = 'hidden';
    four.style.visibility = 'hidden';
        })
        mute.addEventListener('click',function(){
            songSix.muted = true;
            songTwo.muted = false;
            songThree.mute = false;
            songFour.mute = false;
            songFive.mute = false;
            songSeven.mute = false;
            one.style.visibility = 'hidden';
            two.style.visibility = 'hidden';
            three.style.visibility = 'visible';
            setTimeout(function(){
                three.style.visibility = 'hidden';
               },4000)
            four.style.visibility = 'hidden';
        
        })
        sound.addEventListener('click',function(){
            songSix.muted = false;
            one.style.visibility = 'hidden';
            two.style.visibility = 'hidden';
            three.style.visibility = 'hidden';
            four.style.visibility = 'visible';
            setTimeout(function(){
                four.style.visibility = 'hidden';
               },4000)
        })
        let volume = document.querySelector("#volume-control");
             volume.addEventListener("change", function(e) {
              songSix.volume = e.currentTarget.value / 100;
            })
            
        } else if(e.target === songs[5] || e.target.parentElement === songs[5] || e.target.parentElement.parentElement === songs[5]){
            songName.textContent = 'In The End'
            disk.src = '/imgs/disk7.png';
            disk.classList.add('rotating');
            songSeven.play();
            songSix.pause();
            songFive.pause();
            songFour.pause();
            songThree.pause();
            songTwo.pause();
            songSeven.muted = false;
            songTwo.muted = false;
            songThree.mute = false;
            songFour.mute = false;
            songFive.mute = false;
            songSix.mute = false;
            pause.addEventListener('click',function(){
                songSeven.pause();
                 disk.style.animationPlayState = 'paused';
    one.style.visibility = 'hidden';
    two.style.visibility = 'visible';
    setTimeout(function(){
        two.style.visibility = 'hidden';
       },4000)
    three.style.visibility = 'hidden';
    four.style.visibility = 'hidden';
                
            })
            play.addEventListener('click',function(){
                songSeven.play();
            songSix.pause();
            songFive.pause();
            songFour.pause();
            songThree.pause();
            songTwo.pause();
            
             disk.classList.add('rotating');
   disk.style.animationPlayState = 'running';
   one.style.visibility = 'visible';
   setTimeout(function(){
    one.style.visibility = 'hidden';
   },4000)
   two.style.visibility = 'hidden';
   three.style.visibility = 'hidden';
    four.style.visibility = 'hidden';
            })
            mute.addEventListener('click',function(){
                songSeven.muted = true;
                songTwo.muted = false;
                songThree.mute = false;
                songFour.mute = false;
                songFive.mute = false;
                songSix.mute = false;
                one.style.visibility = 'hidden';
                two.style.visibility = 'hidden';
                three.style.visibility = 'visible';
                setTimeout(function(){
                    three.style.visibility = 'hidden';
                   },4000)
                four.style.visibility = 'hidden';
            
            })
            sound.addEventListener('click',function(){
                songSeven.muted = false;
                one.style.visibility = 'hidden';
                two.style.visibility = 'hidden';
                three.style.visibility = 'hidden';
                four.style.visibility = 'visible';
                setTimeout(function(){
                    four.style.visibility = 'hidden';
                   },4000)
            })
            let volume = document.querySelector("#volume-control");
             volume.addEventListener("change", function(e) {
              songSeven.volume = e.currentTarget.value / 100;
            })

            
        }
        
    })
})


arrow.addEventListener('click',function(){
    
    
    if(lista.classList.contains('close')){
        lista.classList.remove('close');
        lista.classList.add('open');
        listArrow.style.transform = 'rotate(0deg)';
    } else {
        lista.classList.add('close');
        lista.classList.remove('open');
        listArrow.style.transform = 'rotate(180deg)';
    }

})





















