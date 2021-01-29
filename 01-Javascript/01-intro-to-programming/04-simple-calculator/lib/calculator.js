function calculator(num1, operation, num2){
  switch (operation) {
    case '+':
      return num1+num2
      
    case '-':
      return num1-num2
      
    case '*':
      return num1*num2
      
    case '/':
      return num1/num2
      
    default:
      console.log('Please put the right Operation');
  }
  console.log('Service is ready')
}

function enhancedCalculator(expression) {
  var ex = expression.split(' ')
  var num1 = ex[0]
  var num2 = ex[2]
  var operation = ex[1]
  
  switch (operation) {
    case 'plus':
      return calculator(num1,'+',num2)
            
    case 'minus':
      return calculator(num1,'-',num2)
      
    case 'times':
      return calculator(num1,'*',num2)
      
    case 'divide':
      return calculator(num1,'/',num2)
      
    default:
      return 'none'
  }
}

module.exports = { 
  calculator,
  enhancedCalculator
}