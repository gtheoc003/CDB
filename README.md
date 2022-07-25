<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

This repository is about a CRUD application implementing Jwt Authorization with NestJs and TypeOrm.  

## Configuration 

The services are configured via a '.env' file, which is gitignored.

## Installation

1. Clone the repo

```sh
git clone https://github.com/gtheoc003/CDB.git
```

2. Install NPM packages

```sh
npm install
```

3. Configure the app

The app requires a mysql database instance to connect with the existing schema 'cdb_v2'
Create a `.env` file, based on the template provided.

4. _[Optional]_ Populate the database with example data

You can execute the SQL text file 'testData' to populate the user table

## Running the app

```bash
# watch mode
$ npm run start:dev

#Documentation:
You can find a postman collection in the folder 'postman-collection'. Import it and execute it against the api
following the instructions bellow.

-- POST http:/localhost:3000/user/create -> creates a user by passing full name, email and password ({"firstName": "your_first_name", "lastName": "your_last_name", "email": "your_email", "password": "your_password"})
-- POST http:/localhost:3000/user/login -> logging in using your credentials generates a Jwt access token
-- GET http:/localhost:3000/user/ -> get all the info for the user entity except the password by using the Jwt access token as a bearer token in Authorization

```
