# Create a new directory (mkdir nameofdirectory) and CD into it

# npm init -y// This will give you the package.json file

# install the  packages needed for the project.    examples: 
  npm i express nodemon express-handlebars path node-fetch // 
      this will install
        1. express
        2. nodemon
        3. express-handlebars 
        4. path
        5. node-fetch

  this will give you the other files (node modules, package-lock.json) as well as the above packages. 

# create two new folders within the directory   (touch index.js index.html)

# create a new script in package.json allowing you to start nodemon with 'start':
    syntax: "start": "nodemon index.js" 


# set-up basic file structure (already done in this template)
      lib (custom modules)
      public (static files - css)
      views (hbs files)
        layouts (main hbs file template)

        partials (any components)
      index.js 