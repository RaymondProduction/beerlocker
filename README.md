# Beer Locker: Building a RESTful API With Node

This project which will help me to understand "How will make Building a RESTful API With Node?"

## Step 1

I did know about utility  Nodemon. This is a utility that is monitor for any changes in you source and automatically restart my server. It is useful utility.

## Step 2

I will have learned how to connect to a MongoDB, used Mongoose for object modeling.

### Install MongoDB
```
$ sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 0C49F3730359A14518585931BC711F9BA15703C6
$ echo "deb [ arch=amd64,arm64 ] http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.4.list
$ sudo apt-get update
$ sudo apt-get install -y mongodb-org
$ sudo service mongod start
```
### Run client of MongoDB for check work of MongoDB
```
$ mongo
```
### Some commands of MongoDB

* version() - show version MongoDB

* show dbs - show all databases

* use <name> - use database by name (use my_base)

* show collections

* db.<collection name>.find() - show contain collection (
db.people.find())

* help - information about the commands

## Step 3
I have implemented GET, PUT, POST, and DELETE endpoints.

