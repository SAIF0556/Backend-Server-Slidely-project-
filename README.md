Backend for Form Submission Management System
This repository contains the backend implementation for a Form Submission Management System. It provides RESTful APIs to submit, read, update, delete, and search form submissions stored in a JSON file.

Features
Submit Form: API endpoint to submit a new form with Name, Email, Phone Number, GitHub link, and stopwatch time.
Read Forms: API endpoint to retrieve form submissions by index or all submissions.
Update Form: API endpoint to update an existing form submission by index.
Delete Form: API endpoint to delete a form submission by index.
Search Forms: API endpoint to search for form submissions by email address.


Technologies Used
Node.js: Runtime environment for JavaScript/TypeScript.
Express: Web framework for handling HTTP requests.
TypeScript: Typed superset of JavaScript used for enhanced code quality.
JSON: Data format for storing form submissions persistently.

Getting Started
To get the backend server up and running locally, follow these steps:

Clone the repository:
git clone https://github.com/your-username/backend.git
cd backend

Install dependencies:
npm install


Build the TypeScript code:
npm run build


Start the server:
npm start


Verify the server:
Open your web browser and go to http://localhost:3000/ping. You should see { "success": true } indicating that the server is up and running.

Usage
API Endpoints
Submit a Form:
POST http://localhost:3000/submit
Request body should contain JSON data with fields: FullName, EmailAddress, PhoneNumber, GitHubLink, stopwatch_time.

Read Form Submissions:
GET http://localhost:3000/read?index=0
Retrieves the form submission at the specified index. Omit index parameter to get all submissions.

Update a Form Submission:
PUT http://localhost:3000/update
Request body should contain JSON data with fields: index (index of the submission to update) and submission (updated submission data).

Delete a Form Submission:
DELETE http://localhost:3000/delete?index=0


Search Form Submissions by Email:
GET http://localhost:3000/search?email=john.doe@example.com




