let cal = {
    "Chicken Drumstick": 150,
    "Chicken Thigh": 280,
    "Popcorn Nuggets": 620,
    "Chicken Whole Wing": 130,
    "French Fries": 230,
    "Salad": 15,
    "Pepsi": 150,
    "7UP": 160
}

function caloriesCounter(chicken, side, beverage) {
    // TODO: copy your caloriesCounter function previously into here
    return cal[chicken] + cal[side] + cal[beverage]
}

function betterCaloriesCounter(order) {
    // TODO: return number of calories for a less constrained order
    // Example: order = ["Chicken Drumstick", "Chicken Thigh", "Salad", "Pepsi", "Pepsi"] => 745
    let sum = 0

    order.forEach(item => {
        sum += cal[item]
    });
    
    return sum
}

module.exports = betterCaloriesCounter