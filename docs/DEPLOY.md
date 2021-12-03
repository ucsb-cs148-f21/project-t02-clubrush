TO-DO lab06
# Deployment Instructions

### Getting Starter Code
First, you want to git clone our repo to your local machine. You can do this by running "git init" followed by "git clone https://github.com/ucsb-cs148-f21/project-t02-clubrush.git". 

### Getting Started
Make sure you have node and npm installed. You can check that by running "node -v" and "npm -v" on your computer. Within the root directory, should be called "project-t02-clubrush", run npm install. This installs all the dependencies listed within the package.json file. Within the same root directory, create a file called ".env" to hold some variables that we will use. Within that file, add the code: ```REACT_APP_website="http://localhost:9000"```. Now we need to generate our own mongodburi. After generating the MongoDB URI, insert it into the ".env" file with the respective user and password. <br/>
```mongodburi= "mongodb+srv://<user>:<password>@cluster0.jfgms.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"``` <br/>
Now you can run the application on your local machine by running within the terminal "npm run start" for the frontend and "npm run server" for the backend. Now you need to obtain the club data from data scrapping. See the steps down below. After this, the application should be ready to run on your local machine!


### Generating MongoDB URI
Go to the website https://www.mongodb.com/cloud/atlas/register. Here you would want to sign up for a new account. Free users are only allowed to host one free cluster, so you probably want to create a new account. From here you can sign in, and you should be redirected to Organizations page. You can press "Create an Organization" and select MongoDB Atlas. Feel free to give the organization any name. For now skip the add members tab and create organization.
<img width="1437" alt="Screen Shot 2021-12-02 at 4 48 01 PM" src="https://user-images.githubusercontent.com/56321654/144525820-1ec42f7a-d283-429d-8f2e-b2a63d90442c.png">
<img width="1435" alt="Screen Shot 2021-12-02 at 4 50 17 PM" src="https://user-images.githubusercontent.com/56321654/144526024-3173c128-b6bd-4d78-81d5-9441f20221ac.png">
Now repeat the same process for creating a new project. It should lead you to the database page. Create a new database cluster, choosing the free shared option. Then choose the default options and create the cluster. 

<img width="1440" alt="Screen Shot 2021-12-02 at 4 52 05 PM" src="https://user-images.githubusercontent.com/56321654/144527207-6442afca-e381-407b-a135-1bdff3d6d2cf.png">


It leads you to Security Quickstart and create a new username and password. You will use this within your Mongo DB URI. Select local environment for connection location and within the IP access list, include 0.0.0.0/0 as the IP address. This allows anybody to access mongodb operations. Now click finish and close. Now we can obtain our mongouri. Within Cluster0 click connect. After that click the "connect your application" option.

<img width="1238" alt="Screen Shot 2021-12-02 at 4 58 14 PM" src="https://user-images.githubusercontent.com/56321654/144526674-aa055735-d271-4e29-9579-b6d0075cdb68.png">

The MongoDB URI should be displayed here and should look something like <br/>
```mongodb+srv://<username>:<password>@cluster0.gikbx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority``` <br/>
Replace <username> and <password> with the respective info that you created earlier. This will be your final Mongo DB URI that you will use within the application. 

### Obtaining Data with Datascrapping
Go to the src/pages/Home.js. Then go to line 35. Edit the fetch call so that it fethces the url: ```http://localhost:9000/testAPI```. It should look like this.
  
  <img width="422" alt="Screen Shot 2021-12-02 at 5 16 11 PM" src="https://user-images.githubusercontent.com/56321654/144528100-ee383c12-9f20-4e44-b677-8245652d1e6c.png">
  
***IMPORTANT. Make sure you only run the homepage once, so that the route /testAPI is only called once, and only uploads once to your database. Calling homepage more than once can lead to multiple copies of data being saved to your database.
Now, you want to load up the frontend and backend, and go to the homepage. Fetching the http://localhost:9000/testAPI tells the backend to run the code within the /testAPI route, which datascraps the code from Shoreline and saves it into your MongoDB. You can see the code to datascrap within api/routes/testAPI. After running this once, change the code back to the original code.
  
<img width="432" alt="Screen Shot 2021-12-02 at 5 12 51 PM" src="https://user-images.githubusercontent.com/56321654/144528520-c3d200bb-a8c8-4ff1-ae6e-c4b1ccf6bfd1.png">
  
### Deploying to heroku
Go to https://www.heroku.com/, which is a FREE cloud platform to host your app to the web. Login/Create an account. Then click the "New" button and create a new app. Name this app whatever you'd like. Within the deploy tab, choose GitHub as your Deployment Method. Connect to the respective github repo that contains the starter code. Now go to settings tab, and click "Reveal Config Vars". Add the variables from you .env file, but the make sure you insert your heroku website for the REACT_APP_website key. Ex: <br/>
KEY: REACT_APP_website, VALUE: https://<website name>.herokuapp.com<br/>
KEY: mongodburi, VALUE: <your mongodburi> <br/>
After this, go back to Deploy tab and deploy branch. After this, your app should be ready launch!
