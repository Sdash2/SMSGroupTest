# SMSGroupTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.2.

## Development server

1. UI is built with Angular 10, integrated with `MongoDB` .
2. The solution contains `server.js` file which handles the DB connection and the API's .
3. After cloning , Please perform the following tasks in the same order : -

1. `npm install`

2. Open CMD prompt and navigate into this folder , and type `npm run server` - This will allow to run mongoDB connection & API services on port `8080`, but prior to this ensure that `mongod` & `mongo` service is running on port `27017`.

3. In order to setup the data , i have used MongoDB Compass and imported the JSON data.

4. To test the api , one can directly hit the url in browser i.e. => `http://localhost:8080/api/getCitiesList/`

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
