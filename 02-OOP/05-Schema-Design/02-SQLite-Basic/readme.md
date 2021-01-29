## Background & Objectives

This exercise is to help you to be more familiar with sql queries.

To keep it simple, we are going to use `SQLite`, which is a simple `Database Management System(DBMS)` thats relies on a standalone file.

Given a database `wa_hospital.sqlite`, try to read and query data using command line tool.

## Specs
First test just to see if you have sqlite3 installed on your computer:

```bash
sqlite3 --version
```

If you don't have it, you can install it by running:
- Mac: `brew install sqlite`
- Ubuntu: `sudo apt-get install sqlite libsqlite3-dev`

You can open the database we provided you to make some queries on it:

```bash
sqlite3 lib/db/wa_hospital.sqlite
```

You are now in the interactive sqlite3 console and you can write your SQL queries to the database.
You can exit the sqlite3 console with .quit or CTRL+D.

The goal of this exercise is to explore the WA Hospital database, and understand its schema. Answer the following questions:

- What are the tables, and the relations between tables?
- Use SQL Design tool to draw the schema of this database.
- How many rows does each table contain? 
- What are the column names for each table?


### Drawing the table
Use the [SQL Designer](https://ondras.zarovi.cz/sql/demo/) to draw the `users` table with the columns specified above.

To check your solution, click on `Save / Load`, then `Save XML`, copy/paste the generated XML code in `lib/wa_hospital.xml`. You can then `npm test` to check your solution.

