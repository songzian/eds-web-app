# eds-web-app
 web application for EDS

# Emergency Dispatch System (EDS) - Client Application

## Introduction
The Emergency Dispatch System (EDS) is an innovative application designed to streamline the emergency response process for various key groups in our community, including the elderly, eldercare workers, individuals with disabilities, healthcare workers, early childhood educators, and first responders. Our application provides a robust and accessible platform for efficient emergency assistance.

## What the App Does
EDS offers a responsive and user-friendly interface that enables users to swiftly send emergency requests, track their request history, and interact directly with first responders. Key functionalities include:

- **Emergency Request Submission**: Users can quickly send detailed emergency requests with specific information about the type of emergency and their location.
- **History Management**: Users have access to their request history, where they can view the status (pending, dispatched, arrived, finished) and manage their requests accordingly.
- **Responder Functionality**: Dedicated features for first responders and healthcare workers to view and accept emergency requests, and efficiently manage their response history.

## How It Uses the Service
Our client app interacts seamlessly with the EDS service to provide the following:

- **Secure User Registration and Authentication**: Ensuring a secure and straightforward process for user registration and login.
- **Real-Time Request Processing**: Rapid processing and dispatching of emergency requests to the appropriate responders.
- **Data Integrity and Privacy**: Maintaining the security and privacy of user data while providing necessary information to responders.

## Benefits for the Target Audience
EDS is tailored to address the unique needs of each user group:

- **Elderly**: An easy-to-use interface for quick emergency assistance, catering to those living independently or with age-related challenges.
- **Eldercare Workers**: Multilingual support to accommodate non-English speakers, ensuring effective communication for caretakers.
- **Disabled or Impaired**: Accessibility features for users with various impairments, such as vision or hearing difficulties.
- **Healthcare Workers**: Streamlined process for receiving and responding to medical emergencies, enhancing the ability to provide timely care.
- **PreK-2 Teachers**: Quick response mechanisms for educational settings, ensuring the safety and well-being of young children.
- **First Responders**: Efficient emergency management through categorized requests, aiding in faster and more effective responses.

## Conclusion
The Emergency Dispatch System revolutionizes the way emergency services are requested and delivered. It empowers our target audience by offering a dependable platform for critical situations, contributing to a safer and more responsive community.



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


