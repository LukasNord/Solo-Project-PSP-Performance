# Name of Project
Public Speaking Performance Tracker
Link to live site: https://pspperformancetracker.herokuapp.com


I built this application to help my school track public speaking performance for students.  The application tracks individual user statistics and provides a visualization on how they're doing over time. 

## Built With

HTML/CSS

JavaScript

AngularJS

Angular Material

Chart.js

Express.js

Passport

Node.js

Moment.js

PostgreSQL

## Getting Started


If you're interested in working on this project locally, clone the Master branch and run NPM install.  You will need to have postgreSQL running on your computer and a connection to the database.  If you wish to change the database name you will need to update the pool.js module to reflect your naming convention.  Included in the files is a .sql file with the table structure.  At this time, you will have to manually run these SQL statements to build out the database structure.  Automation for this is a future feature.

### Prerequisites



- [Node.js](https://nodejs.org/en/)
- PostgreSQL (https://www.postgresql.org/)


### Installing

Steps to get the development environment running.
1.) Clone the Master Branch locally.
2.) Create a database called "VisualToast". If you want to name it differently you will need to modify the pool.js module to connect to your database. Set up the postgreSQL database according to the ToastVisual_postgres_create.sql file. (Execute these to build out the table).
3.) Run NPM Install within the project.
4.) Run NPM start.
5.) Happy coding!










### Next Steps

- [ ] Allow usernames to be non-case sensitive.

- [ ] Allow user password reset.

- [ ] Create Admin Reporting Module.

- [ ] Mobile responsive.  iPad view is the smallest ideal size for data entry.

- [ ] SQL script automation.



## Authors

* Lukas Nord


## Acknowledgments

* Thanks to the Chart.js team for a wonderful library!
* Thanks to my instructors at Prime Digital Academy!
