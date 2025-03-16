# Order Management API

A simple RESTful API for order management, built with Node.js and Express. Allows you to create, list, update, delete, and change the status of orders with unique IDs generated via UUID.


## DEMONSTRATION
![Demo GIF](/assets/preview(1).gif)


---

## Features

- **GET** `/order`: Retrieve all orders.
- **POST** `/order`: Create a new order with a unique ID.
- **PUT** `/order/:id`: Update an existing order by ID.
- **DELETE** `/order/:id`: Delete an order by ID.
- **PATCH** `/order/:id`: Update the status of an order (mark as "ready").

## Technologies Used

- **Node.js**
- **Express**
- **UUID** (for unique order IDs)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/CamilleGS/order-management-api.git 
```
2.Install dependencies: 
```bash
cd order-management-api
npm install
```
3.Start the server:
```bash
npm run dev
```
The server will be running on http://localhost:3000/order.

## Testing
Use Insomnia or Postman to test the API endpoints.

## Author 
_CamilleGS_
