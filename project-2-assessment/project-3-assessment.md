<img src="https://i.imgur.com/ser5chI.png">

# Unit 3 - Project Assessment

## Introduction (By Instructor)

This **Introduction** section will be read in class by the instructor.

Students are to have their laptops closed during this intro period.

Students will be self-directed beginning with the **Instructions** section below.

### GOAL

The goal of this project assessment is to gauge your ability to develop a minimal NodeJS web application using the Express framework.

### OVERALL APPLICATION REQUIREMENTS

The requirements of the application are detailed in STEP 3 below, however, in brief, the application:

- Will obtain an array of **post** objects by exporting the data found in the sample-data.js file.
- Has only two separate views to be rendered using the EJS view engine.
- Views are to render a "nav" at the top of the page containing **Home** and **All Posts** links that provide navigation between the two views when clicked.
- Does not have data persistence and thus will not require: a connection to a database; any models to be defined, etc.

### PROCESS

This assessment is an **individual** assignment - no collaboration please.

The good news is that it's "open book" - you may reference anything on your computer, Google, use notes, refer to class lessons/labs, etc.

It is estimated that this assessment will take 60 to 90 minutes to complete, however, you will have up to 3 hours to complete the assessment should you need it - no submittal will be accepted after the allotted 3 hours. 

Words of advice: **Do not over think this assignment!**

## Instructions

Please follow the following steps in order:

- **STEP 1 - Prepare**
- **STEP 2 - Set up the Project**
- **STEP 3 - Implement the App's Requirements**

## Assessment Steps to Complete

### STEP 1 - Prepare

- Briefly read through the rest of this assignment to better understand what is required before starting to code.
- In Terminal, move to a directory that is not within an existing repo. You will be creating a repo for this assessment and, as you know, nested repos are no bueno!

### STEP 2 - Set up the Project

- Use Express Generator to generate an app named `project-3-assessment` that is pre-configured to use the EJS view engine.
- Although not required, it is recommended that you rename `app.js` to `server.js` as we've been doing in class.

> Reminder: Express Generator does not "install" the modules, it only lists them as dependencies in the `package.json` file.

- Open the project in VS Code.

- Start the app using `nodemon` and browse to `localhost:3000` - and you're on your way!

### STEP 3 - Implement the App's Requirements

#### Step 3.1 - The Navigation Bar

Both views should display two links at the top of the page like this:

<img src="https://i.imgur.com/GGkAv3I.png">

- Clicking **HOME** will return to the application's root route (`/`).
- Clicking **ALL POSTS** will browse to the path of `/posts`.


#### Step 3.2 - Implement the ROOT Route (`/`)

Upon typing `localhost:3000` or clicking the **HOME** link, the app should display a simple landing page that looks like this:

<img src="https://i.imgur.com/vHpWt75.png">

#### Step 3.3 - Implement the `/posts` Route

Upon clicking the **ALL POSTS** link, the app should return a view that displays all _post_ objects returned by the sample-data.json file (see below) like this:

<img src="https://i.imgur.com/GY61bmq.png">

The _post_ objects are being displayed in the page using an HTML `<table>`.

> Note: The borders on the table's cells are optional. Feel free to improve the styling by adding additional CSS to the existing **public/stylesheets/style.css**.








