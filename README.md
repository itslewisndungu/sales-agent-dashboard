# Zeraki School Invoice Management System

This is a School Management System built with Angular. It provides functionalities such as managing schools, invoices, and collections.

## Project Overview

The Zeraki School Invoice Management System is a web application designed to help manage schools, invoices, and collections. It is built using Angular, a popular framework for building web applications. The application uses TypeScript for static typing and better developer tooling.

Key features of the application include:

- **School Management**: Add, update, and delete schools.
- **Invoice Management**: Create, update, and delete invoices for schools.
- **Collection Management**: Track collections for each invoice.

## Key Design Decisions

- **Angular**: We chose Angular for its robustness and full-featured nature. Angular's built-in features like HTTP client, forms, and routing made it a good fit for this project. We implemented the application using angular standalone components, which is the mordern way of building Angular applications.
- **TypeScript**: TypeScript provides static types which improve code quality and developer productivity.
- **Ng-Zorro**: We used the Ng-Zorro component library to speed up development and ensure a consistent look and feel across the application.
- **Tailwind CSS**: We used Tailwind CSS for styling the application. Tailwind CSS is a utility-first CSS framework that makes it easy to create custom designs.
- **Chart.js**: We used Chart.js to create charts for visualizing data in the application.
- **MSW**: We used MSW (Mock Service Worker) to mock API requests during development. This allowed us to develop features without relying on a real backend.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed the latest version of Node.js and NPM.
- You have a Windows/Linux/Mac machine. This project is OS agnostic.
- You have a basic understanding of TypeScript and Angular.

## Getting Started

To get the project running locally, follow these steps:

1. Clone the repository: `git clone <repository_url>`
2. Navigate into the project directory: `cd <repository_directory>`
3. Install the dependencies: `npm install`
4. Start the development server: `npm start`

The application will be running at `http://localhost:4200`.

## Project Structure

The main parts of the project are:

- `src/app/pages`: This directory contains the main pages of the application (Schools, Invoices, Collections).
- `src/app/services`: This directory contains the services used to manage data throughout the application.
- `src/app/types`: This directory contains the TypeScript types used in the application.


## Contributing

Contributions are welcome. To contribute:

1. Fork this repository.
2. Create a branch: `git checkout -b <branch_name>`.
3. Make your changes and commit them: `git commit -m '<commit_message>'`
4. Push to the original branch: `git push origin <project_name>/<location>`
5. Create the pull request.

## Building and Deployment

This section will guide you on how to build and deploy the Zeraki School Invoice Management System.

### Building the Project

To build the project, follow these steps:

1. Ensure you are in the project directory.
2. Run the build command: `npm run build`.

This command will create a `dist/` directory with the compiled code.

### Deployment

The deployment process depends on your hosting provider. Here's a general guide:

1. After building the project, navigate to the `dist/` directory: `cd dist/`.
2. Upload the contents of the `dist/` directory to your web server. The specifics of this step depend on your hosting provider.

For example, if you're using a service like Netlify or Vercel, you can typically just drag-and-drop the `dist/` directory into their web interface.

If you're using a more traditional web host, you might need to use an FTP client or similar. Check your hosting provider's documentation for specific instructions.

Remember to configure your server to redirect all routes to `index.html` to take advantage of Angular's routing.

## Contact

If you want to contact me you can reach me at `itslewisndungu@gmail.com`.

## License

This project uses the following license: `<license_name>`.
