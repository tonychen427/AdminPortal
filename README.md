Login Portal v1.0.0

Command Line 
    mvn clean install

    mvn jetty:run


debug netbean
Project - Properties - Actions - Debug project

    Execute Goals : jetty:run

    set properties : jpda.listen=maven



Login API

    GET request to /api/users/ returns a list of users
    GET request to /api/user/1 returns the user with ID 1
    POST request to /api/user/ with a user object as JSON creates a new user
    PUT request to /api/user/3 with a user object as JSON updates the user with ID 3
    DELETE request to /api/user/4 deletes the user with ID 4
    DELETE request to /api/users/ deletes all the users
