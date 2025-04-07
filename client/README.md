# Client Application

This is an Angular 18-based client application.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js** (v16 or above) installed on your machine.
- **npm** (Node Package Manager), which comes with Node.js, should be installed.

## Installation

To set up the application locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <project-directory>
Install the dependencies using npm:
bash
Копиране на код
npm install
Development Server
To run the application in development mode, use the following command:

bash
Копиране на код
npm start
This will start the Angular development server at http://localhost:4200/.

Build
To build the application for production, use:

bash
Копиране на код
npm run build
This will create a dist/ directory with the production build.

Running Tests
To run unit tests with Karma and Jasmine, use the following command:

bash
Копиране на код
npm test
Available Scripts
In addition to the default npm start, there are other commands available for development and testing:

npm start: Starts the development server using ng serve.
npm run build: Builds the application for production using ng build.
npm run watch: Builds the application in watch mode for development.
npm test: Runs unit tests with Karma and Jasmine.
Dependencies
This application relies on the following major dependencies:

Angular: The core framework for building single-page applications.
Moment.js: A JavaScript library for handling dates and times.
RxJS: A library for reactive programming using Observables.
License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments
Angular - A platform for building mobile and desktop web applications.
Moment.js - A library for parsing, validating, manipulating, and formatting dates.
RxJS - A library for composing asynchronous and event-based programs using observable sequences.
markdown
Копиране на код

### Key Sections in the README:
1. **Prerequisites**: Information about the required software for running the application.
2. **Installation**: Steps for installing the application.
3. **Development Server**: How to run the application locally for development.
4. **Build**: How to build the application for production.
5. **Running Tests**: Running unit tests.
6. **Available Scripts**: A list of useful npm scripts for development.
7. **Dependencies**: List of key dependencies in the project.
8. **License**: Information about the license under which the project is distributed.
9. **Acknowledgments**: Credits to any third-party libraries or tools used.




# Client Application

This is an Angular 18-based client application.

## Project Overview

This project is built with Angular 18 and includes various dependencies to enhance functionality such as routing, animations, and form handling. The application also integrates Moment.js for date manipulation and RxJS for reactive programming.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16 or above)
- **npm** (Node Package Manager), which comes with Node.js.

## Installation

Follow these steps to set up the project locally:

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

## Development Server

To run the application in development mode, use the following command:
```bash
npm start
```
This will start the Angular development server at `http://localhost:4200/`.


## Build

To build the application for production, use:
```bash
npm run build
```
This will create a `dist/` directory with the production build.

## Available Scripts

In addition to the default `npm start`, there are several other scripts available for development and testing:

- **`npm start`**: Starts the development server using `ng serve`.
- **`npm run build`**: Builds the application for production using `ng build`.
- **`npm run watch`**: Builds the application in watch mode for development.
- **`npm test`**: Runs unit tests with Karma and Jasmine.

## Dependencies

This project uses the following dependencies:

- **@angular/animations**: Animation support for Angular.
- **@angular/common**: Common Angular utilities and services.
- **@angular/compiler**: Angular compiler.
- **@angular/core**: Core Angular framework.
- **@angular/forms**: Angular forms module for reactive and template-driven forms.
- **@angular/platform-browser**: Browser-specific Angular support.
- **@angular/platform-browser-dynamic**: Dynamic loading for Angular.
- **@angular/router**: Angular routing module.
- **@types/moment**: TypeScript types for Moment.js.
- **moment**: Date and time manipulation library.
- **rxjs**: Reactive programming library for asynchronous programming.
- **tslib**: TypeScript runtime library.
- **zone.js**: Zone.js library for managing asynchronous operations in Angular.

## Development Dependencies

For building and testing, the project uses the following development dependencies:

- **@angular-devkit/build-angular**: Angular build tools.
- **@angular/cli**: Command-line interface for Angular.
- **@angular/compiler-cli**: Compiler CLI for Angular.
- **jasmine-core**: Jasmine framework for testing.
- **karma**: Test runner for JavaScript.
- **karma-chrome-launcher**: Launch tests in Chrome.
- **karma-coverage**: Coverage reporter for Karma.
- **karma-jasmine**: Karma plugin for Jasmine.
- **karma-jasmine-html-reporter**: HTML reporter for Karma tests.
- **typescript**: TypeScript compiler.

## Running Tests

To run unit tests with Karma and Jasmine, use:
```bash
npm test
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- **Angular**: A platform for building web applications.
- **Moment.js**: A library for parsing, manipulating, and formatting dates.
- **RxJS**: A library for reactive programming.
