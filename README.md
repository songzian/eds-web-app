# Emergency Dispatch System (EDS) - Client Application

## Introduction
The Emergency Dispatch System (EDS) Client Application is a specialized application designed to enhance emergency response efficiency, particularly for vulnerable groups such as the elderly and disabled, as well as streamline the process for first responders.

## Core Functionalities
EDS provides a range of features tailored to the needs of its users:

- **User Registration and Login**: Elderly and disabled users can easily create and access their accounts.
- **Emergency Request Submission**: Users can quickly send requests detailing their emergency, crucial for elderly or disabled individuals who require immediate assistance.
- **Responder Registration and Login**: First responders have a dedicated portal for accessing emergency requests.
- **Request Acceptance and Management (Responder)**: Responders can view, accept, and manage incoming emergency requests efficiently.
- **Dispatch History Tracking**: Both users and responders can track the real-time status of emergency requests.
- **Status Updates by Users**: Users can update the status of their request, providing timely feedback to responders.
- **Responder Rating by Users**: After an emergency, users can rate the service provided by responders.

## Benefits for Specific User Groups
EDS is designed with particular attention to the needs of its target user groups:

- **Elderly Users**: With an intuitive interface, the app makes it easy for elderly users to request help. Large buttons and clear instructions cater to those who may not be tech-savvy.
- **Disabled Users**: The app accommodates various disabilities, offering voice command options for visually impaired users or simplified navigation for those with motor impairments.
- **First Responders**: EDS enables responders to receive detailed information about the emergency, allowing for a more targeted response. The app aids in reducing response times, thereby increasing the chances of positive outcomes.

## Enhanced Communication and Efficiency
- **For Users (Elderly/Disabled)**: EDS provides a lifeline in emergencies, offering a quick way to communicate their needs and receive help.
- **For Responders**: The system ensures that responders are well-informed and can prioritize emergencies more effectively.




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


