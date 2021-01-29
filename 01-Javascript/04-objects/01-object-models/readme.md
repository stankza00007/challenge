## Background & Objectives

Let's say you want to stay fit but keep eating KFC... You have the brilliant idea to write a quick method that computes the number of calories in a KFC order. Let's use the table below as our abridged KFC menu:

<table class="table">
  <thead>
    <tr>
      <th>Item</th>
      <th>Calories</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Chicken Drumstick</td>
      <td>150</td>
    </tr>
    <tr>
      <td>Chicken Thigh</td>
      <td>280</td>
    </tr>
    <tr>
      <td>Popcorn Nuggets</td>
      <td>620</td>
    </tr>
    <tr>
      <td>Chicken Whole Wing</td>
      <td>130</td>
    </tr>
    <tr>
      <td>French Fries</td>
      <td>230</td>
    </tr>
    <tr>
      <td>Salad</td>
      <td>15</td>
    </tr>
    <tr>
      <td>Pepsi</td>
      <td>150</td>
    </tr>
    <tr>
      <td>7UP</td>
      <td>160</td>
    </tr>
  </tbody>
</table>

For instance, below is an example of a `Object` - `AGE_OF_STUDENTS` - that contains students and their ages:

```javascript
let ageOfStudents = {
  "Peter": 21,
  "George": 22,
  "Mary": 20
}
```

Read the documentation about Objects
You'll use them all the time, so make friends with them 😊

**For this exercise, use `Strings` for your keys, just for simplicity's sake**

## Specs

- Create a `caloriesCounter` that returns the total number of calories for the three items of your order.
- **constraint**: your method should make use of a object (obviously!)
- **constraint**: your method must use **our given calorie values**!

For example `caloriesCounter("Chicken Drumstick", "French Fries", "7UP")` should return `540`.

## Key learning points

- What's an Object? When do you use them?
- How do you retrieve a value stored in a `Object`?
