## Background & Objectives
In Internet, We use an `email address` to send and receive email message over the network.

There is two main parts of every email address, `username` and `domain name`, which is separated by `@`. For example, `hungtinming@whiteboard.academy`, The username, `hungtinming` comes first, followed by an `@` symbol, then followed by `whiteboard.academey`, the domain name.

## Specs
Please write method `validate` to check if a given email address is correct. Also, implement two methods, `getUsername` and `getDomain`, to extract `username` and `domain name`.

1. Complete `validate` method.
2. Implement `getUsername` method.
3. Implement `getDomain` method.

### Interactive Program
- Once all your methods done, we want to use it in `lib/interface.js` which runs a command line tool. To launch this program, just run this in your terminal:

```bash
node lib/interface.js
```
- You will see:
```bash
Input Email Address: nathanlee@whiteboard.academy

> This is a valid email address.
> Username: nathanlee
> Domain Name: whiteboard.academy
```