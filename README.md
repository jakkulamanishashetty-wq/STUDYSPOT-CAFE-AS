# StudySpot Cafe – Study Carrel Booking System

## 1. Project Overview

StudySpot Cafe is a REST API-based application developed to manage study spaces in a cafe environment. It allows students to view study carrels, check different zones, and book suitable study spaces.

The main purpose of this project is to make study carrel management and booking easier through a simple backend system.

The application is developed using Node.js, Express.js, and SQLite. It provides different API endpoints to perform operations on students, carrels, and bookings.

## 2. Project Objectives

- To manage student details.
- To manage study carrels and their information.
- To allow students to book study carrels.
- To search for carrels based on their zones.
- To display the number of carrels available in each zone.
- To retrieve booking details along with student and carrel information.
- To perform database operations using REST APIs.

## 3. Technologies Used

| Technology | Purpose |
|---|---|
| Node.js | JavaScript runtime environment |
| Express.js | Creating REST APIs |
| SQLite | Database management |
| JavaScript | Backend programming |
| Postman | API testing |
| Git and GitHub | Version control and collaboration |
| Render | Application deployment |
| Visual Studio Code | Code development |

## 4. Project Modules

### Module 1: Students Management

This module manages student information.

Operations include:
- Adding student details.
- Viewing student records.
- Managing student information through API requests.

### Module 2: Carrels Management

This module manages the study carrels available in StudySpot Cafe.

Operations include:
- Adding new carrels.
- Viewing all carrels.
- Viewing a particular carrel using its ID.
- Updating carrel details.
- Deleting carrels.
- Searching carrels based on zones.
- Displaying the number of carrels in each zone using SQL GROUP BY.

### Module 3: Bookings Management

This module manages student bookings.

Operations include:
- Creating a booking for a student.
- Connecting students with their selected carrels.
- Retrieving booking information.
- Displaying student names and carrel names using SQL JOIN operations.
- Validating booking details using database relationships.

## 5. Database Design

The project uses an SQLite database with three main tables.

### Students Table

Stores student information.

- student_id
- student_name
- email

### Carrels Table

Stores information about study carrels.

- carrel_id
- name
- zone

### Bookings Table

Stores booking information and connects students with carrels.

- booking_id
- student_id
- carrel_id

Foreign key relationships are used to connect the bookings table with the students and carrels tables.

## 6. API Endpoints

### Students APIs

| HTTP Method | Endpoint | Description |
|---|---|---|
| GET | `/students` | Retrieve all students |
| POST | `/students` | Add a new student |

### Carrels APIs

| HTTP Method | Endpoint | Description |
|---|---|---|
| GET | `/carrels` | Retrieve all carrels |
| GET | `/carrels/:id` | Retrieve a carrel by ID |
| GET | `/carrels?zone=Quiet` | Search carrels by zone |
| GET | `/carrels/summary` | Display carrel count by zone |
| POST | `/carrels` | Add a new carrel |
| PUT | `/carrels/:id` | Update carrel details |
| DELETE | `/carrels/:id` | Delete a carrel |

### Bookings APIs

| HTTP Method | Endpoint | Description |
|---|---|---|
| GET | `/bookings` | Retrieve booking details with student and carrel information |
| POST | `/bookings` | Create a new booking |

## 7. Sample API Requests

### Add a Student

**Method:** POST

**Endpoint:** `/students`

```json
{
  "student_name": "Manisha",
  "email": "manisha@gmail.com"
}
```

### Add a Carrel

**Method:** POST

**Endpoint:** `/carrels`

```json
{
  "name": "Silent Corner",
  "zone": "Quiet"
}
```

### Create a Booking

**Method:** POST

**Endpoint:** `/bookings`

```json
{
  "student_id": 1,
  "carrel_id": 1
}
```

The student ID and carrel ID must already exist in the database.

## 8. Project Setup and Installation

Follow these steps to run the project locally.

### Step 1: Clone the Repository

```bash
git clone https://github.com/jujjharshini17-arch/STUDYSPOTCAFE-LG4.git
```

### Step 2: Open the Project Folder

```bash
cd STUDYSPOTCAFE-LG4
```

### Step 3: Install Dependencies

```bash
npm install
```

### Step 4: Start the Server

```bash
node app.js
```

The application runs on:

`http://localhost:3000`

## 9. API Testing

Postman is used to test the REST API endpoints.

The following HTTP methods are used:

- GET – To retrieve information.
- POST – To insert new information.
- PUT – To update existing information.
- DELETE – To remove information.

The API responses and HTTP status codes are checked to verify that the operations work correctly.

## 10. Important Concepts Used

- REST API architecture
- Express routing
- SQLite database operations
- CRUD operations
- SQL JOIN
- SQL GROUP BY
- Query parameters
- Request validation
- Foreign key constraints
- HTTP status codes

## 11. Deployment

The application is deployed using Render so that the APIs can be accessed online.

**Deployment Platform:** Render

**Source Code Repository:** GitHub

## 12. Conclusion

StudySpot Cafe provides a simple backend solution for managing study spaces and student bookings. Through this project, we gain practical experience in developing REST APIs, connecting databases, performing CRUD operations, using SQL JOIN and GROUP BY, testing APIs with Postman, and collaborating through GitHub.

This project helps us understand how backend applications work and how different components are connected to build a complete application.

## 13. Team Project Information

**Project Name:** StudySpot Cafe

**Project Type:** REST API Development

**Backend Technology:** Node.js and Express.js

**Database:** SQLite

**API Testing Tool:** Postman

**Version Control:** GitHub

**Deployment Platform:** Render
