# GLS

###Technologies Used
* **Node.js**-  Server-side Javascript environment for developing the backend of the application
* **Express.js**-  Server-side MVC framework with HTTP methods and middleware to create API.  
* **MongoDB**-  Non-relational database for storing and interacting with model instances.
* **Mongoose**-  ODM for creating schemas in mongoDB.  Has methods for CRUD actions within mongoDB.
* **Moment.js**-  Javascript library for parsing, validating, manipulating, and displaying dates and times.
* **Twilio**-  Iaas that allows the application to send SMS through requests to the API.
* **Bootstrap**- CSS library for creating responsive layouts and formatting through built in classes
  
###Approach
I began by wireframing the views and creating an ERD for the reservation model.  I forgot to take a picture of them.
I then built the basic view layouts with bootstrap.  Then created my routes so I could navigat around the site.  I built the User and Reservation 
models although I ended up not finishing the user functionality in time.  Once I was done creating new reservations with the form and storing
them in MongoDB, I spent the vast majority of my time learning how to initiate Twilio requests to notify the user of their reservation details including secret password by text message.  Then I had to build the admin views to display daily reservations for the bouncer.  I updated and displayed
the capacity count based on the number of people with reservations for the night, so the bouncer would know when no more people were allowed in.
My long-term plan is to only update the count once the user has been checked-in and not allow any more reservations to be made if the number of reservations is at capacity to avoid overbooking.

###Unsolved Issues
* So much styling to do
* Check-in button for reservations isn't functional
* Admin (doorguys and staff) auth is not functioning. Currently anyone can access the list of current reservations. I hit brick walls with this, so I abandoned it for after presentations.
* I will eventually create models for events and drinks, so the staff can update this on their own rather than hard coding or embedding a google calendar.

[Green Light Social](https://calm-lake-6254.herokuapp.com/)
[Home screenshot](https://github.com/Jonfurr/GLS/issues/3)
