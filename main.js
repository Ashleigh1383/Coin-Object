let coin = {
    state: 0,
    flip: function() {
        this.state = Math.round(Math.random());


        console.log(this.state);
        
        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
        
    },
    toString: function() {

        if(this.state === 1){
            return "Heads"
        }else{
            return "Tails"
        }
        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
    },
    toHTML: function() {
        let image = document.createElement('img');
         
        if(this.state === 1){
           image.src = "./quarter-heads.jpg"
        }else {
           image.src = "./quarter-tails.png"        
        } 
        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
        return image
    }
};

function display20Flips() {
    for (let i = 0; i < 20; i++){
        coin.flip()
        let newElement = document.createElement("div")
        newElement.append(coin.toString())
        document.body.append(newElement)
    }
}

function display20Images() {
    for (let i = 0; i < 20; i++) {
        coin.flip()
        document.body.append(coin.toHTML())
        
    }
}