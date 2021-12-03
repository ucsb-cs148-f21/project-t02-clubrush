TO-DO lab06
# Deployment Instructions

### Getting Starter Code
First, you want to git clone our repo to your local machine. You can do this by running "git init" followed by "git clone https://github.com/ucsb-cs148-f21/project-t02-clubrush.git". 

### Getting Started
Make sure you have node and npm installed. You can check that by running "node -v" and "npm -v" on your computer. Within the root directory, should be called "project-t02-clubrush", run npm install. This installs all the dependencies listed within the package.json file. Within the same root directory, create a file called ".env" to hold some variables that we will use. Within that file, add the code: ```REACT_APP_website="http://localhost:9000"```. Now we need to generate our own mongodburi. After generating the MongoDB URI, insert it into the ".env" file with the respective user and password. 
```mongodburi= "mongodb+srv://<user>:<password>@cluster0.jfgms.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"```


### Generating MongoDB URI
Go to the website https://www.mongodb.com/cloud/atlas/register. Here you would want to sign up for a new account. Free users are only allowed to host one free cluster, so you probably want to create a new account. From here you can sign in, and you should be redirected to Organizations page. You can press "Create an Organization" and select MongoDB Atlas. Feel free to give the organization any name. For now skip the add members tab and create organization.
<img width="1437" alt="Screen Shot 2021-12-02 at 4 48 01 PM" src="https://user-images.githubusercontent.com/56321654/144525820-1ec42f7a-d283-429d-8f2e-b2a63d90442c.png">
<img width="1435" alt="Screen Shot 2021-12-02 at 4 50 17 PM" src="https://user-images.githubusercontent.com/56321654/144526024-3173c128-b6bd-4d78-81d5-9441f20221ac.png">
Now repeat the same process for creating a new project. It should lead you to the database page. Create a new database cluster, choosing the free shared option. Then choose the default options and create the cluster. 

<img width="1440" alt="Screen Shot 2021-12-02 at 4 52 05 PM" src="https://user-images.githubusercontent.com/56321654/144527207-6442afca-e381-407b-a135-1bdff3d6d2cf.png">


It leads you to Security Quickstart and create a new username and password. You will use this within your Mongo DB URI. Select local environment for connection location and within the IP access list, include 0.0.0.0/0 as the IP address. This allows anybody to access mongodb operations. Now click finish and close. Now we can obtain our mongouri. Within Cluster0 click connect. After that click the "connect your application" option.

<img width="1238" alt="Screen Shot 2021-12-02 at 4 58 14 PM" src="https://user-images.githubusercontent.com/56321654/144526674-aa055735-d271-4e29-9579-b6d0075cdb68.png">

The MongoDB URI should be displayed here and should look something like 
```mongodb+srv://<username>:<password>@cluster0.gikbx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority```
Replace <username> and <password> with the respective info that you created earlier. This will be you final Mongo DB URI that you will use within the application.


1. In your machine, git clone this repository
2. cd into this repository, with the command "cd project-t02-clubrush"
3. Open two separate terminals
4. In the first terminal, cd into the api folder using the command "cd api", then type "npm i"
5. In the second terminal, cd into the client folder using the command "cd client", then type "npm i"
6. Now we go onto mongodbatlas.com and signup or login if you already have an account. If you already have an account with a cluster, create a new account. It only allows for one free cluster creation.
7. Follow the instructions to create a new cluster from mongoDB Atlas.
8. Create a database user and password, give this access to readand write to any database.
9. Obtain the mongodburi for the cluster that you created so that we can connect to it in the backend.
10. Back in the api folder, create a ".env" file and put in "mongodburi="your mongodburi that you obtained from mongodb atlas"".
11. Now that you have the correct mongodburi, you can run the backend and the fronend.
12. Go into the terminal currently in api and run the command, "npm run start", and then go into the terminal in client and run "npm run start".
13. Then the localhost:3000 will open on your browser
14. To obtain club info, you can look through testAPI.js within api/routes/testAPI.js and see how we datascrap and insert into our mongoDB using puppeteer.


# Deployment Instructions For Heroku
1. In your machine, git clone this repository
2. cd into this repository, with the command "cd project-t02-clubrush"
3. In the first terminal, cd into the api folder using the command "cd api", then type "npm i"
4. In the second terminal, cd into the client folder using the command "cd client", then type "npm i"
5. Within the client folder, run "npm run build". This creates a build folder within the client folder.
6. Copy all files within the newly generated build folder.
7. Go to api folder. Then within the public folder, paste all the copied files from build folder.
8. Within api folder, create a file called "Procfile". This is so heroku knows what to run. Copy and paste this "web: node app.js" into Procfile.
9. Also within api folder, create a ".env" file. Within this file add keys and values. (contact reviewee contact)
10. Now we go to terminal. Now within the api folder do "git init". 
11. Then we do heroku login. (Make sure you have heroku installed on CLI).
12. Next we create a new app with "heroku create <name-of-app>
13. We can now test with "heroku open" in terminal. It should open a blank heroku site.
14. Now we push all our code to heroku using "git add .", "git commit -m "<some message>" and then "git push heroku master".
15. Now we can go to the heroku website, login, and click on our created app <name-of-app>.
16. Within our app page, go to settings. We go to config vars and press reveal config vars.
17. Here, we insert our variables that we put in the .env file.
18. Now heroku has the correct config vars and you can now access your heroku website app.
