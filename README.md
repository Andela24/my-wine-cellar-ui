# Virtual Wine Cellar

## About Product

Welcome to your online Wine Cellar. This CRUD application allows a user to keep track of their wine collection. 
This app allows for the consumer to not only keep track of what wines they have, but also provide them with the source of which winery came from. This app allows for the consumer to keep track of the vintage, type of wine, and the source for the winery.

## 🚀 Features
The user can:

Signup, Login, and Logout. Each user's data is password protected using bcrypt.

* See all available Wineries in the cellar
* Show the bottles from chosen winery
* See your bottle collection
* See your personal wineries
* Create New Winery 
* Create New bottle
* Update bottle
* Submit new bottle
* Delete the bottle

# Installation
## Backend
Navigate to the main directory. Before you begin, you will want to populate the database with some fake data of things to rate. To do that, enter in your terminal:

* rails db:migrate 
* bundle install

to install the required gems

* rails s
will run the server on port http://localhost:3000

## Frontend:
Navigate to the client folder and enter:
* npm start

 This will launch react server and serve the app on http://localhost:4000

## Technologies

This system uses Ruby on Rails with a postgres server for the backend as well as React with React Router on the frontend.

## Demo Video
If you would like to see this project in action, check out this demo video:
https://youtu.be/TTbTg1AlB3k