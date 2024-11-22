# **ShoppyGlobe Backend**

This repository contains the backend for the **ShoppyGlobe** e-commerce application, built with **Node.js**, **Express.js**, and **MongoDB**. The backend provides RESTful APIs for managing products, cart operations, and user authentication.

---

## **Features**

- **Product Management**:
  - Fetch all products.
  - Fetch a single product by ID.
  - Add, update, and delete products (Admin only).
- **Cart Management**:
  - Add items to the cart.
  - Update item quantities.
  - Remove items from the cart.
- **User Authentication**:
  - User registration and login.
  - JWT-based authentication for protected routes.
- **Secure Routes**:
  - Protected cart routes for logged-in users.
  - Admin-only routes for product management.

---

## **Technologies Used**

- **Node.js**: JavaScript runtime for building server-side applications.
- **Express.js**: Lightweight web framework for creating APIs.
- **MongoDB**: NoSQL database for storing application data.
- **Mongoose**: ODM for MongoDB.
- **JWT**: Secure authentication using JSON Web Tokens.
- **bcryptjs**: Password hashing for secure storage.

---

## **API Endpoints**

### **1. Authentication**
| Method | Endpoint         | Description                  |
|--------|-------------------|------------------------------|
| POST   | `/api/auth/register` | Register a new user.       |
| POST   | `/api/auth/login`    | Login and get a JWT token. |

### **2. Products**
| Method | Endpoint               | Description                        |
|--------|-------------------------|------------------------------------|
| GET    | `/api/products`         | Fetch all products.               |
| GET    | `/api/products/:id`     | Fetch product details by ID.      |
| POST   | `/api/products`         | Add a new product (Admin only).   |
| PUT    | `/api/products/:id`     | Update a product by ID (Admin only). |
| DELETE | `/api/products/:id`     | Delete a product by ID (Admin only). |

### **3. Cart**
| Method | Endpoint               | Description                             |
|--------|-------------------------|-----------------------------------------|
| POST   | `/api/cart`             | Add a product to the cart (User only). |
| PUT    | `/api/cart/:productId`  | Update product quantity in the cart.   |
| DELETE | `/api/cart/:productId`  | Remove a product from the cart.        |

---

## **Setup Instructions**

### **1. Clone the Repository**
```bash
git clone https://github.com/yourusername/shoppyglobe-backend.git
cd shoppyglobe-backend
```

### **2. Install Dependencies**
```bash
npm install
```

### **3. Set Up Environment Variables**
1. Create a `.env` file in the root directory.
2. Add the following environment variables:
   ```
   MONGO_URI=mongodb://localhost:27017/shoppyglobe
   JWT_SECRET=your_jwt_secret
   ```

### **4. Start the Server**
```bash
npm run dev
```
- The server will run on `http://localhost:5000`.

---

## **Testing the API**

Use **Postman** or **Thunder Client** to test the API routes. Ensure the backend is running and connected to MongoDB.

### **Example Requests**

#### **1. Register a New User**
- **Endpoint**: `POST /api/auth/register`
- **Body**:
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123"
  }
  ```

#### **2. Login and Get JWT Token**
- **Endpoint**: `POST /api/auth/login`
- **Body**:
  ```json
  {
    "email": "john@example.com",
    "password": "password123"
  }
  ```

#### **3. Fetch All Products**
- **Endpoint**: `GET /api/products`

#### **4. Add a Product to Cart**
- **Endpoint**: `POST /api/cart`
- **Headers**:
  ```
  Authorization: Bearer <JWT_TOKEN>
  ```
- **Body**:
  ```json
  {
    "productId": "12345",
    "quantity": 2
  }
  ```

---

## **Folder Structure**

```
shoppyglobe-backend/
├── models/
│   ├── Product.js         # Product schema
│   ├── Cart.js            # Cart schema
│   └── User.js            # User schema
├── routes/
│   ├── productRoutes.js   # Product routes
│   ├── cartRoutes.js      # Cart routes
│   └── authRoutes.js      # Authentication routes
├── controllers/
│   ├── productController.js  # Product logic
│   ├── cartController.js     # Cart logic
│   └── authController.js     # Auth logic
├── middleware/
│   └── authMiddleware.js  # Middleware for JWT and admin checks
├── .env                   # Environment variables
├── server.js              # Entry point for the backend
├── package.json           # Dependency manager
```

---

## **Error Handling**

- **Invalid Product ID**: Returns a 404 error if a product is not found.
- **Unauthorized Access**: Protected routes return a 401 error if the token is missing or invalid.
- **Validation Errors**: Returns a 400 error if required fields are missing.

---

## **Screenshots**

1. Include **MongoDB screenshots** showing:
   - Product collection.
   - Cart collection.
   - User collection.

2. Include **API testing screenshots** for:
   - Successful requests.
   - Error handling cases.

---

## **Future Enhancements**

- Add order placement and payment integration.
- Implement pagination for product listing.
- Enhance admin functionalities.

---

## **Contributing**

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---

## **License**

This project is licensed under the MIT License.
