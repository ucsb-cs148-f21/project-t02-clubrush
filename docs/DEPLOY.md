TO-DO lab06
# Deployment Instructions
1. In your machine, git clone this repository
2. cd into this repository, with the command "cd project-t02-clubrush"
3. Open two separate terminals
4. In the first terminal, cd into the api folder using the command "cd api", then type "npm i"
5. In the second terminal, cd into the client folder using the command "cd client", then type "npm i"
6. Once both terminals finish installing all the packages, go into the terminal currently in api and run the command, "npm run start", and then go into the terminal in client and run "npm run start".
7. Then the localhost:3000 will open on your browser


# Deployment Instructions For Heroku
1. In your machine, git clone this repository
2. 2. cd into this repository, with the command "cd project-t02-clubrush"
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
