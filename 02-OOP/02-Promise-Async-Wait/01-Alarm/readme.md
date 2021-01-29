## Background & Objectives
- Working with asynchronous execution codes.
- See how does callback function work.
- Building an Alarm System.

## Specs
- Implement `setAlarm` function that takes `seconds` and `callback` as parameters and start an alarm.
```javascript
setTimeout(function() {
    console.log('Alarm ringing...');
}, 1000);
console.log('Timeout set.');
```
- Implement `snooze` function that takes `callback` as parameter and extend an alarm for 5 seconds.

### Interactive Program
- Once all your methods done, we want to use it in `lib/interface.js` which runs a command line tool. To launch this program, just run this in your terminal:

```bash
node lib/interface.js
```

- You'll see that your program returns a list of operations. 
```bash
How long? (seconds): 30s
> Set a 30 seconds alarm done.
> Alarm ringing...

Snooze 5 seconds? yes
> Ringing in 5 seconds
> Alarm ringing...

Snooze 5 seconds? No
```

## Further Suggestions & resources
- `setTimout` calls a function after a specified number of milliseconds.
- Try to make a `Promise` version of `setTimeout`