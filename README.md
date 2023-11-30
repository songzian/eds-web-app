# eds-web-app
 web application for EDS

# 
frontend: run "npm install" under "./eds-web-app", then run "npm start"

backend: run "npm install" under "./eds-web-app/client", then run "node server.js"

#
End-to-End Test Plan for Emergency Dispatch System
Introduction
This document outlines the end-to-end testing procedures for the Emergency Dispatch System. The tests will cover critical functionalities such as user and responder registration and login, emergency request submission, and history management.

Test Environment
URL of the application.
Access to a test database.
Login credentials for both user and responder accounts.
Test Tools
Web browser (e.g., Chrome, Firefox).
Postman (for API testing).
Database management tool (if direct database access is needed).
Test Cases
1. User Registration
Test Steps:
Navigate to the User Registration page.
Enter valid details in all fields (name, phone, password).
Submit the registration form.
Verify successful registration message.
Attempt to log in with the new credentials.
Boundary Cases:
Try registering with an existing phone number.
Submit the form with one or more fields empty.
2. User Login
Test Steps:
Navigate to the Login page.
Enter valid username and password.
Click on the login button.
Verify redirection to the user dashboard.
Boundary Cases:
Attempt to log in with incorrect credentials.
Try logging in with an unregistered phone number.
3. Sending Emergency Requests
Test Steps:
Log in as a registered user.
Navigate to 'Send Emergency Request'.
Fill in all fields with valid data (emergency level, type, latitude, longitude).
Submit the request.
Verify successful submission confirmation.
Boundary Cases:
Submit a request with missing or invalid data.
Send a request when another request is still pending.
4. User History Management
Test Steps:
Log in as a user who has sent requests.
Navigate to 'User History'.
Verify all history statuses (pending, dispatched, arrived, finished).
Use available actions (Cancel, Mark as Arrived, Rate) based on the status.
Boundary Cases:
Cancel a pending request.
Rate an emergency request that is finished.
5. Responder Registration
Test Steps:
Navigate to the Responder Registration page.
Enter all required details.
Submit the registration form.
Verify successful registration.
Attempt to log in with the new responder credentials.
Boundary Cases:
Register with an existing phone number.
Submit the form with incomplete data.
6. Responder Login and History Viewing
Test Steps:
Log in as a responder.
Verify redirection to the responder dashboard.
Navigate to 'Responder Histories'.
Review available, ongoing, and finished histories.
Boundary Cases:
Accept an available history.
Check for histories with different statuses.
7. Accepting Emergency Requests (Responder)
Test Steps:
Log in as a responder.
Navigate to 'Available Histories'.
Accept an available emergency request.
Verify that the history status changes appropriately.
Boundary Cases:
Accept a request and then check its status in 'Ongoing Histories'.
