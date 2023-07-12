## Chat-App MERN
This is a full-stack chat application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). The project allows users to create accounts, join chat rooms, and communicate with other users in real-time.

## Features

> - User authentication: Users can create accounts and log in using their email and password. Passwords are securely hashed and stored in the database.
>- Real-time chat: Users can join different chat rooms and send messages in real-time. The chat updates instantly for all users in the room.
>- User presence: Users are notified when other users join or leave the chat room.
>- Online status: Users can see the online status of other users in the chat room.
>- Chat history: Users can view previous messages in the chat room when they join.
>- Profile customization: Users can update their profile picture and display name.


## Technologies 

>- MongoDB: A NoSQL database used to store user information, chat rooms, and messages.
>- Express.js: A framework used to handle servers ide logic, route, and API endpoints.
>- React.js: A JavaScript library used for building user interfaces and managing the frontend.
>- Node.js: A JavaScript runtime used for building the server-side of the application.
>- Socket.IO: A library that enables real-time bidirectional communication between the server and clients.
>- JSON Web Tokens (JWT): Used for user authentication and session management.
>- bcrypt: A library used for hashing passwords.
>- Material-UI: A popular UI framework for React.js, used for styling the frontend components.
>- Axios: A library used for making HTTP requests from the frontend to the backend API.

## run project follow this Steps

step-1 : Clone the repository: git clone (repository-url)
step-2 : Navigate to the project folder: cd chat-app
step-3 : Install the dependencies for both the server and the client:
>- Server: cd server && npm install ---- server means Api folder
>- Client: cd client && npm install

step-4 Set up environment variables:
>- Create a .env file in the server directory.
>- Add env files
>-starting PORT=4040
>- Replace <your-mongodb-connection-string> with your MongoDB connection string,
>- Replace <your-jwt-secret> with a secret key of your choice.

```bash
MONGO_URL="mongodb+srv://<Database- URL>"
JWT_SECRET="kncdkjkvvjkijdvjvdjvhjvdjjhvfnfjvjvnjvjdnj"
CLIENT_URL="http://127.0.0.1:5173" 
```


step-5: Start the development server:
>- Server: In the server directory, run npm run dev.
>- Client: In the client directory, run npm start.

step-6: Open your browser and navigate to http://localhost:5173/ to access the application.

## Project Structure
1. server: Contains the backend server code.
>- config: Contains configuration files, including database connection and authentication settings.
>- controllers: Contains controller functions that handle the application's business logic.
>- models: Contains the data models for the application.
>- routes: Defines the API routes and maps them to the corresponding controller functions.
>- utils: Contains utility functions used throughout the application.
>- added env file for client

2. client: Contains the frontend React application.
>- src: Contains the application source code.
>- components: Contains reusable React components used throughout the application.
>- contexts: Contains context providers for managing application state.
>- pages: Contains the main application pages/components.
>- services: Contains utility functions for making API requests to the backend.
>- styles: Contains CSS styles for the application.
>- utils: Contains utility functions used throughout the application.
>- add env file for server
```
       SERVER_URL="http://localhost:4040"
```
