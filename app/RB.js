export default class Core {
    constructor(){

    }
    //RB.image()
    image(path){
        let ourImg = new Image();
        ourImg.src = path;
        return ourImg;
    }
    //RB.viewport()
    viewport(element, topMod = 0, bottomMod = 0){
        let rect = element.getBoundingClientRect();
        let eHeight = Math.abs(rect.bottom - rect.top);
        let eCenter = rect.bottom - eHeight/2;

        let topState = (rect.top >= 0 && rect.top <= window.innerHeight);
        let centerState = (eCenter >= 0 && eCenter <= window.innerHeight);
        let bottomState = (rect.bottom >= 0 && rect.bottom <= window.innerHeight);
        if(topState || centerState || bottomState){
            return true;
        }
        return false;
        
    }
}