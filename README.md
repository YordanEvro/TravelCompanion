# TravelCompanion
A MERN stack application that displays Covid-19 restrictions for countries. The only supported countries are the ones currently part of G7.
<p align="center">
  <img width="600" height="400" src="https://user-images.githubusercontent.com/48580919/115976260-17bed280-a53a-11eb-84dd-563c3208923b.png">
</p>

## Installation
This porject has multiple dependencies. Follow the following installation steps to run the application.

### Getting the code
Clone the repo to get the source code.

### Node
To install Node, visit the Node [download page](https://nodejs.org/en/download/), and download the relevant installer for your system.
After installation is complete ensure that NodeJS is on your `PATH`. You can check this by running:
```bash
node -v # Should be  v14.13.1
npm -v # Should be 6.14.8
```

### Mongodb
To install MongoDB, visit the [download page](https://docs.mongodb.com/manual/administration/install-community/).
After installation is complete ensure that mongo and mongod is on your `PATH`. You can check this by running:
```bash
mongo  # Should open the mongo shell
mongod # Should open mongo daemon
```
To add mongod to your `PATH`, find the location of mongod.exe file. This file is usually in `C:\Program Files\MongoDB\Server\4.4\bin`. Add this path to your `PATH` system variable. Now try running:
```bash
mongod
```

If you get an error that says `C:\data\db` does not exists, create the folders `data\db` in your `C:\` drive.

### Nodemon and concurrently
This step facilitates development of the project. Nodemon tracks changes in the backend folder and allows developers to make changes without restarting `server.js`. Concurrently allows to run multiple `npm` commands. To install, run:
```bash
npm install -g nodemon
npm install -g concurrently
```

### Install dependencies
This next step involves installing the dependencies for the project. Once you are in the `TravelCompanion` directory, run the following commands:
```bash
cd frontend
npm install
cd ../backend
npm install
```

### Setting up MongoDB

Once you have added `mongo` and `mongod` to your `PATH`, open a command-line and run:
```bash
mongo
```
This should open the `mongo` shell. Then you can create a database called TravelCompanion:
```bash
use TravelCompanion
````
You can now run `exit` to exit the shell. Note that if you want to use another name for the database, you must also locally change the file `backend/config/db.js`.

## Running the code
Open a new command-line and go to the `TravelCompanion` directory. To run both the frontend and the backend, execute the following command:
```bash
npm run dev
````

## Seeding the database
For developers working on this application, seeding the data can be done using mongoimport from the mongo CLI. Open the `mongo` shell and execute the following commands. However instead of `data`, copy and paste the contents of `backend/config/seeds/country_seeds.json` as argument to the `insertMany()` function.
```bash
use TravelCompanion
db.countries.insertMany( data )
````
