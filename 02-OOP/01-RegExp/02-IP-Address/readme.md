## Background & Objectives
`Internet` ([wiki](https://en.wikipedia.org/wiki/Internet)) is a global system of `intereconnected computer networks` to link device worldwide. We already get used to access Internet from day to day, but how does it deliver content to your devices? In real world, we use `address` to send and receive letters/parcels. In Internet, we use `Internet Protocol(IP)` ([wiki](https://en.wikipedia.org/wiki/Internet_Protocol)), where every single device in the network has it own unique `IP address`. 

## Specs
In this exercise, We are going to implement a validator to verify if a given `IP` is valid or not.

- Write a method `ipv4` to valid `IPv4` address.
- Write a method `ipv6` to valid `IPv6` address.

### Interactive Program
- Once all your methods done, we want to use it in `lib/interface.js` which runs a command line tool. To launch this program, just run this in your terminal:

```bash
node lib/interface.js
```
- You will see:
```bash
This is a IP address validator.
1. IPv4
2. I6Pv
Select a version (1-2): 1
Input IP Addess: 192.168.0.1

> This is a valid IPv4 address.
```

## Further Suggestions & resources
- Learn basic idea of how does `Internet` works.
- Learn what is `IPv4`([wiki](https://en.wikipedia.org/wiki/IPv4)) and `IPv6` ([wiki](https://en.wikipedia.org/wiki/IPv6)).
- What is the IP of `localhost`?
- What is `subnet` and `netmask`?([wiki](http://unixwiz.net/techtips/netmask-ref.html))
- Why do we need `IPv6`?