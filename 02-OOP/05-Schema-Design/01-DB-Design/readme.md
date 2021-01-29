## Background & Objectives
The goal of this challenge is to become familiar with database design.
Given a user story, design your own database schema which capable for the use case.

## Specs
Founded by Nathan Lee in 2019, WA Hotel Group has over 50 luxury hotels and resorts with over 10,000 rooms in the world. WA Hotel Group has 5 brands across different market segments including WA Hotels, WA Resorts, Lee Hotels, Nathan Hotels and Hotel Kwan Wah. The five-star luxury lodgings of the chain can be found across world.

After talking with Nathan, he want to design a new hotel management system(HMS). You are the CTO of the company, you are asked to design the database schema of the new HMS. You have some basic ideas:
1. Each hotel has it own rating.
2. Each hotel has different types of room.
2. Room is charged by type per night.
4. Customer can book a room online.
4. Customer can see the room details online.
5. To make a booking, customer need to provide their name, email, phone number, passport number, check-in date and check-out date.

## Schema design

### hotel
- id
- name
- address
- rating

### room
- id
- number
- type_id
- hotel_id

### room_type
- id
- type
- price
- description

### booking
- id
- room_id
- checkin_date
- checkout_date
- customer_id
- booking_date

### customer
- id
- firstname
- lastname
- email
- phone_no
- passport_no


### Drawing the table
Use the [SQL Designer](https://ondras.zarovi.cz/sql/demo/) to draw the tables that specified above.

To check your solution, click on `Save / Load`, then `Save XML`, copy/paste the generated XML code in `lib/wa_hotel.xml`. You can then `npm test` to check your solution.



## Further Suggestions & resources
- Do you know what a schema is?
- What's the relation between tables?
- Could you draw the database scheme behind facebook? airbnb? Take a bit of paper and have a go!