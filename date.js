exports.getDate = function(){
    let today = new Date();
    
    //new method to render
    let options = {
        weekday : "long",
        day : "numeric",
        month : "long"
    }
    
    return today.toLocaleString("en-US",options);
}

exports.getDay = function() {
    let today = new Date();

    //new method to render
    let options = {
        weekday : "long"
    }

    return today.toLocaleString("en-US",options);
   
}