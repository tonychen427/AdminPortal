#Admin Portal v1.0.0


#Setup

    npm install
    
    bower install

        There will be a conflict with jquery / font-awesome 
        because the original bower developer did not update their bower.json 
        some of their dependency was out date.  so select the latest jquery / font-awesome library.

                8) jquery#~2.1.4 
                2) components-font-awesome#~4.5 

#Command Line 

    mvn clean install

    mvn jetty:run

    mvn clean package

#Unit Testing

    TestNG With Spring Framework.    

#Debug in Netbeans IDE

Project - Properties - Actions - Debug project

    Execute Goals : jetty:run

    set properties : jpda.listen=maven

#URL

    http://localhost:8080/index
    http://localhost:8080/adminLTE


#Login REST API

    http://localhost:8080/api/users/

    GET request to /api/users/ returns a list of users
    GET request to /api/user/1 returns the user with ID 1
    POST request to /api/user/ with a user object as JSON creates a new user
    PUT request to /api/user/3 with a user object as JSON updates the user with ID 3
    DELETE request to /api/user/4 deletes the user with ID 4
    DELETE request to /api/users/ deletes all the users
