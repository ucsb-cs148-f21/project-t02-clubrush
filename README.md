<<<<<<< HEAD
<<<<<<< HEAD
# project-t02-clubrush

=======
# This is some starter code in React with Google Auth

# Adding code to Github
For new repos, you can fork into a new Github repository by clicking "Fork" at the top of this screen.

For existing repos, add a starter branch into your local .git file by doing these commands.
1) "git remote add starter https://github.com/vincentktieu101/ReactGoogleAuthStarter.git"
2) "git pull starter master --allow-unrelated-histories"

You need the flag "--allow-unrelated-histories" if you have a README.md in your existing repo. There will then be a merge conflict where you must resolve by editing the README.md accordingly. Finally...

3) push your code to Github!

# Getting Started

Example of the app: https://react-google-auth-starter.herokuapp.com/. I also have a video on how to use this starter code here! https://www.youtube.com/watch?v=XZceEXlYC1w&ab_channel=VincentTieu.

To get started, make sure you have node and npm installed. You can check that by running "node -v" and "npm -v" on your computer. If no versions of node or npm appear on your computer, you can download them here: https://nodejs.org/en/.

Next, clone the repo onto your machine.

The first thing to notice is a folder called src/ which contains index.js, App.js, components/, pages/, images/, etc. This is where all of your HTML, CSS, and Javascipt are written for your frontend app.

The second thing to notice is the "package.json" and "package-lock.json." "package.json" shows you how the React app is being configured. There is a section called "scripts" which are used to start, build, and format your app. "package-lock.json" manages npm, which stands for "Node package manager", to manage what are essentially all of the user libraries for the app. "package-lock.json" records what libraries are being added and ensures that all developers are using a similar developer environment.

By doing "npm install", a folder called "node_modules" will be installed to the repo's root directory so your machine will have all the libraries required to run the app.  Now try doing "npm run start" to run the application on your machine's "localhost:3000/".

# Adding Google Authentication

You should now have an instance of the app running on "localhost:3000/". Awesome! You may now be wondering why the app looks so bare-bones. You aren't even able to click on the "Profile" button without the app breaking. This is because Google Authentication's Client ID is not being loaded in yet.

You can check this by right clicking anywhere on the website and performing an "inspect." Then check the "console" tab. You should see an uncaught error regarding "client_id".

<img src="https://user-images.githubusercontent.com/46038043/114118579-dffb2e00-989d-11eb-8ffb-b53dd417a0b8.png" />

The next step to setup the "client_id" for your app in the ".env". Go to this link: https://console.cloud.google.com/apis/credentials and create a project. In the OAuth consent screen, you should set the user type to "external." Now go ahead to the "credentials" screen and add a new "OAuth Client ID."

**When adding an "OAuth Client ID," add it for a "web application" and remember to set the "Authorized JavaScript origins" and "Authorized redirect URIs" to "http://localhost:3000" and "https://localhost:3000".**

In your folder, copy a file called ".env.SAMPLE" into ".env". Finally add your "client_id" into your ".env" file and do "npm run start". You should now have the React app running locally on your computer!

# Deploying

Now that you have the .env file setup and your app is identical to https://react-google-auth-starter.herokuapp.com/, you are finally ready to deploy your app to the World Wide Web!

Go to https://www.heroku.com/, which is a **FREE** cloud platform to host your app to the web. Click create new project. Name it. Then go to the settings. In "Config Vars", add a key called "REACT_APP_AUTH_CLIENT_ID" with a key value of your "client_id". Make sure that you committed and pushed your changes onto your github repo. Link the github repo and deploy it.

**Remember to add the name of your website into "Authorized JavaScript origins" and "Authorized redirect URIs" of your OAuth consent screen!**

You are now done! Congratulations for sticking through to the end of the tutorial. Come to my office hours (Monday 4-5 PM PST) if you have any questions more related to the starter code / Google Authentication. For questions about general React and Heroku, I'm sure that anyone on the **awesome** teaching team would be happy to answer them.

# React Tips

The application is setup with Google Authentication, Private and Public Routing (how you change the url), and some basic HTML CSS page layouts. The application also includes some npm libraries located in package-lock.json called "prettier" and "react-bootstrap." <a href="https://prettier.io/">Prettier </a> is a code formatter, which you can use with the command "npm run format". <a href="https://react-bootstrap.github.io/">React-Bootstrap</a> is a frontend library used to setup some components like the nav bar for example. Another npm library that I'd **really** recommend is called "Material-UI" which is developed by Google. This isn't added into this repo but is very easy to setup :)

In App.js, we can see how the routing takes place. The most important lines of the file is on lines 51-59. Everything else can be blackboxed for the most part. We have a switch tag with routes to a "Home", "Profile", and "404 Page Not Found" page. "Home" is a public route, meaning you don't have to login to view the information. "Profile" is a private page where you do have to log in to view the information. In both the "Home" and "Profile" pages, we have a layout which takes a parameter of "user" which is used to load the page.
>>>>>>> b228e6d03faf284a8bd742470bcba6328cef24a8
=======
# Team Name
project-t02-clubrush
# Project Name
Club Rush
# Description
Our project will allow students to find at community at UCSB in a more streamlined website that is more convenient than the current website, Shoreline.

For our project, we want to utilize filters and nested drop-down menus, to give students an easier time in their search for their new community. We want to have broader categories displayed first such as academic, fraternity, cultural, community service, etc., and then within those individual categories, have more specific filters to match what the user is looking for in their search: Co-ed, engineering, Asian, etc. We want this site to be as minimal and simplistic as possible to give students an easier time in their search. Sites such as Shoreline is a good option too, but Shoreline has too much unneccessary information and most organization's  page on Shoreline has not been updated in a very long time.

# Team Members
 Christine Ong |  Christine-ong
---------------------------------
   Morgan Lin  |   Morgan6688
---------------------------------
   Robert He   |  roberthe9606
---------------------------------
  Tommy Nguyen | tommynguyen13810
---------------------------------

# Tech Stack
For our project, we will be using the MERN stack development. MongoDB, Express, React and Node.js

# Communication + Meetings
We are holding meetings and checkouts remotely over Discord, and frequently contacting our team memebers to see how much we've done or if we have any questions for the others.
# User Roles
Our Club Rush application would have Users that are students who can search up organizations, but can't add new information/data to the system. We would also have Admin/Organization Leaders that could upload new data to the system that would update organization info that is displayed on the app.

# Installation
# Prerequisites
TODO: List what a user needs to have installed before running the installation instructions below (e.g., git, which version(s) of your framework(s) of choice)

# Dependencies
TODO: List which libraries / add-ons you added to the project, and the purpose each of those add-ons serves in your app.

# Installation Steps
TODO: Describe the installation process (making sure you give complete instructions to get your project going from scratch). Instructions need to be such that a user can just copy/paste the commands to get things set up and running. Note that with the use of GitHub Actions, these instructions can eventually be fully automated (e.g. with act, you can run GitHub Actions locally).

# Functionality
TODO: Write usage instructions. Structuring it as a walkthrough can help structure this section, and showcase your features.

# Known Problems
TODO: Describe any known issues, bugs, odd behaviors or code smells. Provide steps to reproduce the problem and/or name a file or a function where the problem lives.
>>>>>>> 07fbeb651bf5ec9355c7a6d697834bd49865a52e
