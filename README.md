# Emergency Dispatch System (EDS) - Client Application

## Introduction
The Emergency Dispatch System (EDS) is a user-friendly application designed to facilitate quick and efficient communication between individuals seeking emergency assistance and first responders. This application simplifies the process of requesting help during emergencies and enhances the coordination of response efforts.

## Core Functionalities
EDS allows users and responders to interact through a simple yet effective platform. Key functionalities include:

- **User and Responder Registration and Login**: Straightforward process for users and responders to create accounts and access the system.
- **Emergency Request Submission (User)**: Users can send emergency requests with essential details like type, location, and severity.
- **Request Acceptance (Responder)**: Responders can view and accept incoming emergency requests.
- **Dispatch History Tracking**: Both users and responders can track the status of emergency requests and responses in real-time.
- **Status Update (User)**: Users can update the status of a request based on the responder's actions (e.g., mark as arrived or finished).
- **Responder Rating (User)**: After a request is completed, users can rate the responder's service.
- **History Viewing**: Users and responders can view their history of requests and responses, respectively.

## Benefits for Users and Responders
With EDS, users and responders can do things more efficiently than before:

- **For Users**: The app provides a quick and easy way to request emergency services, track the status of their request, and rate the response received. This results in faster and more reliable emergency assistance.
- **For Responders**: Responders have a streamlined way to receive, accept, and manage emergency requests, leading to more effective response coordination.
- **General Benefits**: The application enhances communication between users and responders, reduces response times, and improves overall satisfaction with emergency services.




# End-to-End Test Plan for Emergency Dispatch System

## Introduction
This document outlines the end-to-end testing procedures for the Emergency Dispatch System, covering critical functionalities such as user and responder registration, login, emergency request submission, and history management.

## Test Environment
- Application URL.
- Access to a test database.
- Login credentials for user and responder accounts.

## Test Tools
- Web browser (e.g., Chrome, Firefox).
- Postman (for API testing).
- Database management tool.

## Test Cases

### 1. User Registration
**Test Steps:**
1. Navigate to the User Registration page.
2. Enter valid details (name, phone, password).
3. Submit the registration form.
4. Verify successful registration message.
5. Log in with the new credentials.

**Boundary Cases:**
- Register with an existing phone number.
- Submit the form with empty fields.

### 2. User Login
**Test Steps:**
1. Navigate to the Login page.
2. Enter valid username and password.
3. Click on the login button.
4. Verify redirection to the user dashboard.

**Boundary Cases:**
- Incorrect credentials.
- Unregistered phone number.

### 3. Sending Emergency Requests
**Test Steps:**
1. Log in as a registered user.
2. Navigate to 'Send Emergency Request'.
3. Fill in all fields (emergency level, type, latitude, longitude).
4. Submit the request.
5. Verify submission confirmation.

**Boundary Cases:**
- Missing or invalid data.
- Multiple requests from the same user.

### 4. User History Management
**Test Steps:**
1. Log in as a user with history.
2. Navigate to 'User History'.
3. Check all history statuses.
4. Perform actions based on status.

**Boundary Cases:**
- Cancel a pending request.
- Rate a finished request.

### 5. Responder Registration
**Test Steps:**
1. Navigate to Responder Registration page.
2. Fill in required details.
3. Submit the registration form.
4. Verify successful registration.
5. Log in with new credentials.

**Boundary Cases:**
- Existing phone number.
- Incomplete form submission.

### 6. Responder Login and History Viewing
**Test Steps:**
1. Log in as a responder.
2. Navigate to 'Responder Histories'.
3. Review different history statuses.

**Boundary Cases:**
- Accept an available request.
- Check various history statuses.

### 7. Accepting Emergency Requests (Responder)
**Test Steps:**
1. Log in as a responder.
2. Navigate to 'Available Histories'.
3. Accept a request.
4. Verify status update.

**Boundary Cases:**
- Accept a request and check 'Ongoing Histories'.


