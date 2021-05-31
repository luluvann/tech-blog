# Tech Blog Full Stack
A Tech Blog to get the latest news about tech

## Deployed app
https://aqueous-chamber-69974.herokuapp.com/

## Technologies used
- Sequelize ORM
- Express.js
- Handlebars
- Connect session sequelize
- Bcrypt
- JavaScript

## Installation
1. Clone the repo 
```
git clone git@github.com:luluvann/tech-blog.git
```
2. Open a terminal and cd to the root of the cloned repo
3. Create a .env file at the root of the repo
4. Paste the following text in the .env file and make sure to replace the value in DB_PW and DB_USER with your own credentials. Keep the value of DB_NAME
```
DB_PW='yourMySQLPassword'
DB_NAME='tech_blog_db'
DB_USER='yourMySQLUsername'
```
5. Install all the dependencies
```
npm install
```
6. Open MySQL Terminal and connect with your MySQL password
```
mysql -u root -p
```
7. Create the database and use it
```
source db/schema.sql
USE tech_blog_db;
```
8. Open a new terminal and start a new server
```
npm start
```
9. Open a new terminal and seed the tables data
```
npm run seeds
```
10. Open a web browser and go to localhost:3001