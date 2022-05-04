# Movies

# Steps:

1 - Page layout and design
    Used pages and components that each utilizes

2 - Data layout
    Data type used and organized comming from database or dummy data file
    Aka: movie, type object, contains Id, name etc...

Hands on

3 - Simple Website layout development, all movies page, and top movies revenue page using simple dummy data

4 - Added infinite scroll, 20 movies on the list, go to the bottom of the page and load 20 more movies untill all movies are loaded

Data Management

5 - After page layout with dummy data is funcional i decided to work on a dynamic version of the app, soo i made an sql server locally
    This database only has a movie table with all the needed parameters
    I used Mockaroo to generate fake data to insert on the sql server

6 - Api Creation, i decided to use a web .net framework api using visual studio to get a json response of the movie data from the sql server
    Activated cors and added a get system, no point on adding any other crud call since i only need to see the movies and not delete or update them

7 - Back to the angular project, Added a data management service to get an observable with all the movies and the top movies

8 - added an API to get the posters of the movies that have posters

9 - Published the database and the web API to Azure to be hosted online. (Using a free trial)

10 - last check on code for cleaning

11 - README 

