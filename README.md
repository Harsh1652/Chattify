# Chat Application

A simple web-based chat application built with Spring Boot and Spring Security. This application allows users to register, log in, and send messages in real-time.

## Features

- User authentication and authorization using Spring Security
- User registration and login
- Real-time chat functionality
- Support for different message types (e.g., "Say", "Shout", "Whisper")
- Responsive user interface

## Technologies Used

- **Backend**: Spring Boot, Spring Security, Spring Data JPA
- **Frontend**: HTML, CSS, JavaScript (or a front-end framework like React, Angular, etc.)
- **Database**: H2 (or any other relational database)
- **Build Tool**: Maven or Gradle

## Getting Started

### Prerequisites

- Java 11 or higher
- Maven or Gradle
- An IDE (e.g., IntelliJ IDEA, Eclipse)

### Installation

1. Clone the repository:

   ```
   git clone [https://github.com/you/.git](https://github.com/Harsh1652/Chattify
   cd chat-application
   ```

# Usage
- Register: Click on the "Sign Up" link to create a new account.
- Login: After registration, log in with your credentials.
- Chat: Once logged in, you can send messages in the chat interface. Messages will be displayed in real-time.

# Configuration
- You can configure the application by modifying the application.properties file located in the src/main/resources directory. Here are some common configurations:

```
# Server port
server.port=8080

# Database configuration (if using H2)
spring.h2.console.enabled=true
spring.datasource.url=jdbc:h2:mem:testdb
spring.datasource.driverClassName=org.h2.Driver
spring.datasource.username=sa
spring.datasource.password=
```


# Contributing
- Contributions are welcome! If you have suggestions for improvements or new features, please open an issue or submit a pull request.


# Acknowledgments
- Spring Boot
- Spring Security
- Lombok
- H2 Database






    




   
