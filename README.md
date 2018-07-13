# Description of My app: 

My app is designed to let users search the IMDB database allow users 
to create lists of media such as TV shows, movies or video games. 

## Future development plans:
- Allow users to filter by genre when searching for movies.
- Allow users to search the movie database by Actor, Director and other meta-data.
- Allow users to sort and filter movies within lists by genre.

## Link to the live version:
https://james-moviesurfer-client.herokuapp.com/

## Link to the database repo:
https://github.com/thinkful-ei21/james-capstone-server

## Screenshots of the app:

### Login:
![Login](images/Login.png)

### Search Results:
![Search Results](images/search.png)

### List View:
![List View](images/listview.png)

## Tech Stack:

    Client: 
    *React 
    *Redux for state management
    *Redux form for validation
    *jwt for client validation

    Server:
    -Express and Node.js
    -MongoDB for database
    -bcryptjs

## Key parts of the app

Actions: In src/actions

Components: In src/components

Reducers: In src/reducers

Store: Contains all reducers in a combine reducer (in store.js)

CSS for all components is kept in src/styles