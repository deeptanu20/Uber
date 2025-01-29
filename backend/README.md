# User API Documentation

## Register User
Register a new user in the system.

### Endpoint
```
POST /users/register
```

### Request Body
```json
{
  "fullname": {
    "firstname": "string",  // minimum 3 characters
    "lastname": "string"    // minimum 2 characters
  },
  "email": "string",       // valid email format, minimum 5 characters
  "password": "string"     // minimum 3 characters
}
```

### Response

#### Success Response
**Code:** 201 CREATED
```json
{
  "token": "JWT_TOKEN_STRING",
  "user": {
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "email": "string",
    "_id": "string"
  }
}
```

#### Error Responses

**Code:** 400 BAD REQUEST
```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    }
  ]
}
```

### Validation Rules
- First name: Minimum 3 characters
- Last name: Minimum 2 characters
- Email: Valid email format, minimum 5 characters
- Password: Minimum 3 characters

### Notes
- Password is automatically hashed before storing
- JWT token is generated upon successful registration
- Email must be unique in the system
