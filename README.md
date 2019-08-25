

# Wrapper Code Web App

##### Link: https://taperoffset.herokuapp.com


## Description:


## Required 3rd Party platform/software:
###### Computer Software
  1. NodeJS(w/npm)
  2. Homebrew(w/Postgresql DB)
  3. GIT/Github(version control)
  4. Heroku(hosting platform)/CLI
  6. Postico(view/query PostgreSQL DB)
  7. Yahoo.com email login credentials(app sends emails from a Yahoo account)
  8. Google account (taperoffset@gmail.com)
  9. Google developer account (gmail Oauth installed)


## Technologies Used:
NOTE: Refer to `` package.json `` file for a complete list of Node dependancies
  1. HTML5
  2. CSS3 -> Flex-Box
  3. AngularJS
  4. NodeJS
  5. ExpressJS
  6. PassportJS
  7. Nodemailer
  8. Handlebars
  9. PostgreSQL  
  10. AlertifyJS
  12. GIT / GitHub
  13. Heroku CLI / Heroku (w/PostgreSQL DB)
  14. Google Analytics


## Install App:
NOTE: NodeJS, Brew Services(w/PostgreSQL package installed), NPM and Nodemon must be installed prior
  1. Install all required 3rd Party platform/software
  2. Create Stripe.js account
  3. Download zip file
  4. Open terminal and navigate into folder
  5. Create PostgreSQL database (needed sql queries are found in all `` .sql `` files) 
  6. Add domain name to `` CNAME `` file
  7. Create a `` .env `` file or add global variables to your server's platform:

      ```
      ACCOUNT_ADDRESS=<YOUR-KEY>
      ACCOUNT_PASSWORD=<YOUR-KEY>
      ACCOUNT_SERVICE=<YOUR-KEY>
      HYPR_lINK=<YOUR-KEY>
      STRIPE_PUBLISHABLE_KEY_TEST=<YOUR-KEY>
      STRIPE_SECRET_KEY_TEST=<YOUR-KEY>
      STRIPE_PUBLISHABLE_KEY_LIVE=<YOUR-KEY>
      STRIPE_SECRET_KEY_LIVE=<YOUR-KEY>
      ```
    
  8. Run commands:
      - `` brew services start postgresql `` Starts DB through Brew Services
      - `` npm install `` Installs Node Packages including dependencies from package.json
      - `` npm start `` Starts server
      - `` npm test `` Starts server using Nodemon

  9. Server is listening on localhost port: 5000
  10. *NOTE: `` Procfile `` is for use with Heroku web services



  

## Revisions:
 


## License:
##### Copyright 2019 Christopher J. Stanton

###### Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

###### The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

###### THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
