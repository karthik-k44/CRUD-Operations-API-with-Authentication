# CRUD Operations API with Authentication

This project is a simple CRUD (Create, Read, Update, Delete) API with user authentication using JWT (JSON Web Tokens). It is built using Node.js, Express, and MongoDB.

## Project Structure

```
CRUD Operations API with Authentication/
    ├── .env
    ├── package.json
    ├── server.js
    ├── config/
    │   └── db.js
    ├── controllers/
    │   ├── authContollers.js
    │   └── noteControllers.js
    ├── middlewares/
    │   └── authMiddleware.js
    ├── models/
    │   ├── noteModel.js
    │   └── userModels.js
    ├── routes/
    │   ├── authRoutes.js
    │   └── noteRoutes.js
    └── utils/
        └── tokenUtils.js
```

## Installation

1. Clone the repository:
    ```sh
    git clone <repository-url>
    cd CRUD Operations API with Authentication
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file in the root directory and add the following environment variables:
    ```env
    DBURL=<your-mongodb-connection-string>
    JWT_SECRET=<your-jwt-secret-key>
    ```

## Usage

1. Start the server:
    ```sh
    npm start
    ```

2. The server will run on `http://localhost:5000`.

## API Endpoints

### Authentication

- **Sign Up**
    - URL: `/auth/signup`
    - Method: `POST`
    - Body:
        ```json
        {
            "name": "John Doe",
            "email": "john@example.com",
            "password": "password123"
        }
        ```

- **Login**
    - URL: `/auth/login`
    - Method: `POST`
    - Body:
        ```json
        {
            "email": "john@example.com",
            "password": "password123"
        }
        ```

### Notes

- **Create Note**
    - URL: `/notes`
    - Method: `POST`
    - Headers: `Authorization: Bearer <token>`
    - Body:
        ```json
        {
            "title": "Sample Note",
            "content": "This is a sample note."
        }
        ```

- **Get Notes**
    - URL: `/notes`
    - Method: `GET`
    - Headers: `Authorization: Bearer <token>`

- **Update Note**
    - URL: `/notes/:id`
    - Method: `PUT`
    - Headers: `Authorization: Bearer <token>`
    - Body:
        ```json
        {
            "title": "Updated Note",
            "content": "This is an updated note."
        }
        ```

- **Delete Note**
    - URL: `/notes/:id`
    - Method: `DELETE`
    - Headers: `Authorization: Bearer <token>`

## License

This project is licensed under the MIT License.