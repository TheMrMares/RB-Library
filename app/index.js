// Load application styles
import 'styles/index.scss';
import 'images/favicon1mincom.png';
import 'images/example2.png';
import imageURL from 'images/example.png';

//Library
import Core from './RB';
const RB = new Core();

//Tests
document.addEventListener('DOMContentLoaded',()=>{
    document.querySelector('#sampleImage').setAttribute('src', imageURL);

    // RB.image()
    let myImg = RB.image(imageURL);
    document.body.appendChild(myImg);
    let canvas = document.querySelector('#sampleCanvas');
    let ctx = canvas.getContext('2d');
    let interval = window.setInterval(loop, 1000/10);
    function loop(){
        ctx.drawImage(myImg,0,0);
    }

    //RB.viewport()
    document.addEventListener('scroll', () => {
        if(RB.viewport(document.querySelector('.vpTest'))){
            document.querySelector('.vpTest').style.color = 'blue';
        } else {
            document.querySelector('.vpTest').style.color = 'red';
        }
    })
});