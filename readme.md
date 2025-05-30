# SISKON-EXAM Project

![Node.js](https://img.shields.io/badge/Node.js-v14+-green)
![Express](https://img.shields.io/badge/Express-v4.21.2-blue)
![Swagger](https://img.shields.io/badge/Swagger-UI-green)
![REST API](https://img.shields.io/badge/REST-API-orange)
![Documentation](https://img.shields.io/badge/Documentation-Swagger-lightgrey)

A modern RESTful API project built with Node.js and Express, featuring comprehensive API documentation using Swagger UI. This project serves as an examination system with user management capabilities and well-documented endpoints.

## 📋 Overview

This project implements a robust examination system API using Node.js and Express, providing a secure and scalable platform for managing examinations and user data. The system is built with modern web development practices and includes comprehensive API documentation.

## 🎯 Project Goals

- Implement a secure and scalable REST API
- Provide comprehensive API documentation using Swagger
- Enable user management functionality
- Ensure robust error handling and validation
- Implement clean and maintainable code structure
- Follow REST API best practices

## 📊 Key Features

### API Features
- RESTful API endpoints
- User management system
- Comprehensive error handling
- Request validation
- Response standardization
- Middleware implementation

### Documentation
- Interactive Swagger UI documentation
- Detailed API endpoint descriptions
- Request/Response examples
- Authentication requirements
- Error code documentation

### Technical Features
- Express.js framework
- Body-parser middleware
- Swagger UI integration
- Static file serving
- Modular route structure
- Environment configuration

## 🛠️ Technologies Used

- Node.js
- Express.js
- Swagger UI Express
- Body Parser
- REST API Architecture
- JSON Data Format

## 📈 Project Structure

```
siskon-exam/
├── api/                    # API routes and controllers
│   ├── index.js           # Route aggregator
│   └── user.js            # User-related endpoints
├── public/                # Static files
├── data/                  # Data storage
├── screenshots/           # Project screenshots
├── app.js                 # Main application file
├── swagger.json          # API documentation
└── package.json          # Project dependencies
```

## 💻 Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd siskon-exam
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
npm start
```

4. Access the API documentation:
```
http://localhost:8920/swagger
```

## 🔍 API Documentation

The API documentation is available through Swagger UI at `/swagger` endpoint. It provides:
- Detailed endpoint descriptions
- Request/Response schemas
- Authentication requirements
- Example requests
- Error responses

## 📊 System Requirements

- Node.js v14 or higher
- npm (Node Package Manager)
- Modern web browser for Swagger UI
- Minimum 512MB RAM
- 1GB storage space

## 👤 Author

Mert Ali Celik

## 📚 Documentation

For detailed documentation, please refer to:
- [Express.js Documentation](https://expressjs.com/)
- [Swagger UI Documentation](https://swagger.io/tools/swagger-ui/)
- [Node.js Documentation](https://nodejs.org/docs/)
