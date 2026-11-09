//--- Understanding the Architecture of an App----

The Architecture of any app includes frontend, backend and the database.

Frontend - Here the user/client can interact with the webpage. The user can see the HTML- the page structure, CSS- styles and JS- which makes the page dynamic and helps the user to iteract with the webpage.
when a user click on a button, the frontend can be able to send HTTP requests to backend.

Backend - Node.js is the runtime environment used to execute JavaScript on the backend. The API endpoints are created using backend code. When the backend recieves the request from frontend, it will process the request and communicates with Database and sends the HTTP response back to frontend with status code.

The sttaus code are -
2xx - any code that starts with 2 is success
4xx - Client error
5xx - Server error

Database - database is collection of data/files. We can CRUD data using HTTP requests. The database will further send backs the requested data or gets updated based on the user query.

//------------ Add a new recipe-------
The user clicks on add new recipe button in the web page. The HTTP request will be sent to backend. since the user wants to add a new recipe, POST/recipe+ JSON will be sent to backend. The backend then communicates with the database and the database will now store te new recipe. The new recipe will get saved in the datbase and id will be generated. The backend sends the Status code of 201 created+ json to frontend. Now the new recipe will render on the webpage.

//------------View a specific recipe--------
When the user clicks on view recipe, HTTP requested will be sent to backend. Since the user wants to see a specific recipe, GET/recipe/id will be sent to backend. The backend now processes the request to database. Based on the query parameter the database will send the data to backend. Further, the backend send status code of 200 + json. Now the recipe details will be rendered on the webpage.

//--------- edit existing recipe----------
when the user wants to edit a existing recipe, Frontend sends a HTTP request PUT/recipe/id to backend. The Backend processes the reuqest to datbase and the database will be updated. Tha Backend now send the HTTP response - status code 200 + json to frontend. The Updated recipe will now render on the webpage.
