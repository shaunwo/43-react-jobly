# 43 | React Jobly

This is an exercise to practice React, and PostgreSQL with relationships, through a job searching API.

## Diagram of Components to Build for Application

![React Jobly Components](https://github.com/shaunwo/43-react-jobly/blob/5708f3cd654582fc3d8987865b91d4bba350053a/React%20Jobly%20Components.png)

### Instructions for Running Code

To get this application running, download the code and run the following in the Terminal:

#### Backend API

1. `cd backend`
2. `npm i`
3. `psql < jobly.sql` <-- once PostgreSQL is running
4. `nodemon server.js`

#### Frontend Application
Make sure that PostgreSQL is running, and then you can run the commands below that will run the Backend and Frontend together, using the ***concurrently*** package.

1. `npm i`
2. `npm start`

Go to [http://localhost:3000/](http://localhost:3000/) in your browser to run/view the application.
