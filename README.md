# CRUD Operations with React

This project is a simple CRUD (Create, Read, Update, Delete) application built using React. The application allows you to manage a list of products with fields such as name, price, image, and category. The data is stored in a local JSON server.

## Live Demo
You can view live demo for application [here](https://pk1331.github.io/CRUD-Operations-Using-React/)

![CRUD_operations](https://github.com/user-attachments/assets/58a9ef96-aff8-4faf-82c0-3ebce086b4b4)

## Features

- **Add a Product:** Fill out the form with the product's details to add a new product to the list.
- **Edit a Product:** Update the details of an existing product by clicking the "Edit" button.
- **Delete a Product:** Remove a product from the list by clicking the "Delete" button.
- **View Products:** All products are displayed in a table format with their corresponding details, including an image preview.

## Project Structure

The project is organized into several key components:

- **`App.js`:** The main component that manages the state and renders the `Table` and `Form` components.
- **`Table.js`:** A component that displays the list of products in a table format with operations for editing and deleting.
- **`Form.js`:** A component that handles the creation and editing of products. Includes validation and file handling for images.
- **`API.js`:** Contains functions for making HTTP requests to the JSON server (get, post, put, delete).

### Folder Structure

```plaintext
.
├── public
│   └── index.html
├── src
│   ├── components
│   │   ├── App.js
│   │   ├── Table.js
│   │   ├── Form.js
│   │   └── API.js
│   ├── index.js
│   ├── index.css
│   └── App.css
├── package.json
└── README.md
```
## Prerequisites

- **Node.js:** Ensure that Node.js is installed on your machine.
- **npm or yarn:** Node Package Manager is required to install dependencies.


## Usage

- **Add Product:** Click on the "Add Product" button, fill in the product details, and submit the form.
- **Edit Product:** Click the "Edit" button next to a product in the table, update the form, and submit.
- **Delete Product:** Click the "Delete" button next to a product in the table.

## Technologies Used

- **React.js:** A JavaScript library for building user interfaces.
- **Axios:** Promise-based HTTP client for the browser and Node.js.
- **Bootstrap:** CSS framework for developing responsive and mobile-first websites.
- **JSON Server:** Provides a simple API for your application using a JSON file as a database.

## Styling

The application uses Bootstrap for basic styling. Custom styles are added in `App.css` to enhance the UI, especially for the form overlay and table.


## Contact

If you have any questions or feedback, please feel free to reach out at [andepavan37@gmail.com](mailto:andepavan37@gmail.com).

## Install dependencies:
```bash
npm install (boostrap,axios,json-server)
```
## Start the JSON server:
Ensure you have json-server installed globally or as a dev dependency: 
```bash
npm install -g json-server
json-server --watch products.json
```

