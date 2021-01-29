## Background & Objectives

A few small exercises here to get you manipulating arrays and objects. Ready to consolidate your javascript skills?

## Specs

1) Write a method `arrayToObject` which takes an `Array` as an argument
and returns a `Object`.

2) Write a method `arrayToObjectTwo` which takes an `Array` of reviews (grouped as pairs ["review", "count"]) and returns a `Object`. 

* Assume the first element of a pair is the key.
* Also assume the array with always be an even length

```javascript
    ["good", 10, "normal", 5, "bad", 3]
```

that converts to:

```javascript
    { 
        "good": 10, 
        "normal": 5, 
        "bad": 3 
    }
```

3) Write a method `twoDArrayToObject` which takes an `Array` of `Arrays` and converts
it into an `Array` of `Objects`. It should look like this:

<!-- List of prices for food -->
```javascript
    [
        [ "burger", 30 ],
        [ "fries", 23 ],
        [ "sprite", 12 ]
    ]
```

should convert to:
```javascript
    {
        "burger": 30,
        "fries": 23,
        "sprite": 12
    }
```

## Resources

* [Reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)