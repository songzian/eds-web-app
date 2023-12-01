# Emergency Dispatch System (EDS) Client Application

## Introduction
The Emergency Dispatch System (EDS) client app is a specialized tool designed to enhance emergency response efficiency, catering especially to the elderly, disabled, and first responders.

## What the App Does
EDS streamlines the process of requesting and responding to emergencies. Key features include:

- **User Registration and Login**: Easy account creation and access.
- **Emergency Request Submission**: Users can quickly send detailed requests.
- **Responder Registration and Login**: Specialized access for responders.
- **Dispatch History Tracking**: Real-time tracking of emergency requests and responses.
- **Status Updates and Ratings**: Users can update request statuses and rate responders.

## How It Uses the Service
EDS interacts with a backend service to:

- **Authenticate Users**: Securely manage logins and registrations.
- **Process Emergency Requests**: Relay requests from users to responders efficiently.
- **Update Request Status**: Keep all parties informed with real-time status updates.

## Benefits for the Target Audience
EDS is particularly advantageous for:

- **Elderly Users**: An accessible interface allows easy use.
- **Disabled Users**: Features accommodate various impairments.
- **First Responders**: Receive detailed information for effective response.

## Enhanced Capabilities with EDS
With the EDS app:

- **Easier Emergency Reporting**: Particularly for the elderly and disabled, reporting emergencies is now faster and more straightforward.
- **Improved Response Coordination**: First responders get real-time updates, leading to better emergency management.
- **Better Communication**: The app ensures clear communication between users in need and responders.
- **Feedback Mechanism**: Users can rate responders, promoting transparency and improvement.



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


