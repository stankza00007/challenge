let cal = {
    "Chicken Drumstick" : 150,
    "Chicken thigh" : 280,
    "Chicken Whole Wing" : 130,
    "Popcorn Nuggets" : 620,
    "French Fries" : 230,
    "Salad" : 15,
    "Pepsi" : 150,
    "7UP" : 160,
}

function caloriesCounter(chicken, side, beverage) {
    // TODO: return number of calories for this kfc order
    let result = cal[chicken] + cal[side] + cal[beverage] 
    return result
}

module.exports = caloriesCounter