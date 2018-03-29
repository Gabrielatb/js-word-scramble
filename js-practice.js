let candy = new Map();
candy.set('red','cherry');
candy.set('green','watermelon');
candy.set('yellow','lemon');
candy.set('pink','strawberry');
candy.set('blue','blueberry');

function findFlavor(color, candyMap) {

    if (candyMap.has(color)) {    
        return candyMap.get(color);
    }
    else {
        console.log("Sorry, that color doesn't have a flavor");
    }
}

function getFlavorList(colors) {
    let flavors = []; 
    for (color of colors) {
        if (candy.has(color)) {
            flavors.push(candy.get(color));
        }
        else {
            flavors.push(null);
        }
    }
    return flavors;
}