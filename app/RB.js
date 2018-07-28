export default class Core {
    constructor(){

    }
    //Functions
    image({path, callback} = {}){
        let ourImg = new Image();
        ourImg.src = path;

        if(callback){
            callback();
        }

        return ourImg;
    }
}