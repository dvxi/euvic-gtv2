# Web Application for Data Input and Visualization (Euvic 2023 - [GTv2])

This web application allows you to input and visualize data using a table and a form. It also includes routing, translation, and Redux integration.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [Features](#features)

## Installation

1. Clone the repository to your local machine:

```bash
git clone https://github.com/dvxi/euvic-gtv2.git
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

4. Open the web application in your browser at http://localhost:3000.

## Usage

The web application has two pages: `/main` and `/views`. You can navigate between the pages using the navigation menu.

### Main Page

The main page contains a table with the following columns:

- Name
- Age
- Birthdate
- Description
- Actions

You can use the pagination and page size controls to navigate the table. You can also select multiple rows using the checkboxes and delete them using the delete button at the top of the table. The Action column contains buttons to delete or edit each row.

The main page also contains a form to input or edit data. The form includes the following fields:

- Name (required)
- Age (required)
- Date of Birth (required)
- Description (optional)

The form data is validated using the Yup library and saved to the Redux store.

### Views Page

The views page displays a grid of components that visualize data from the Redux store. The grid uses a reusable component that can be used with different types of data.

## Technologies

This web application uses the following technologies:

- React
- Ant Design
- React Router
- Formik
- React Redux
- Yup
- SCSS
- TypeScript

## Features

- Routing with two pages and a 404 page.
- Translation with a language select menu.
- Table with pagination, page size controls, selection, and deletion.
- Form with data validation and Redux integration.
- Reusable grid component for data visualization.

## Contributing

If you would like to contribute to this project, please open a pull request and include a detailed description of your changes.
