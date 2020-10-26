Ecommerce Shop

Description
Ecommerce shop (shoes) created with Next.js

The shop features following pages and functionality:

a products page
a page for each single product
a shopping cart page showing all tiems added to cart
a checkout page which shows the total and asks for shipping and payment information
a thank you page after a checkout has been completed
header/footer
about page
shipping/returns page
faq w/dropdown accordian

Technologies used
Next.js
PostgresQL
Ley(lukeed/ley)
Typescript
Heroku

Setup instructions
Database Setup
Copy the .env.example file to .env and add the database connection information.

You'll also need PostgreSQL for this.

PostgreSQL Installation instructions

Follow the instructions from the PostgreSQL step on upleveled/system-setup.

Run the following queries inside of psql to set up the database and the user:

CREATE DATABASE databasename>;
CREATE USER <username> WITH ENCRYPTED PASSWORD '<password>';
GRANT ALL PRIVILEGES ON DATABASE <databasename> TO <username>;
Then, in order to connect to the database using this new user, quit psql and reconnect:

\q
psql -U ecommerce ecommerce;
You can run the migrations with the following command:

yarn migrate up
To drop the last migration run the following in your terminal:

yarn migrate down

Deployment instructions for Heroku
Sign up for Heroku: signup.heroku.com
Create a new App
Choose a name and select your region
Click on the button in the middle called "Connect to GitHub"
Search for your repository in the search box at the bottom of the page and click on the "Connect" button
Click on the button for "Enable Automatic Deploys"
Go back to the Overview tab and click on "Configure Add-On"
Search for "Postgres" and select "Heroku Postgres" from the results
