# 🍽️ Food Delivery Full-Stack Application

A complete food delivery ecosystem built with **React 19**, **Node.js**, **Express**, and **MongoDB**. This full-stack solution includes a customer-facing frontend, admin panel, and robust backend API with payment integration.

---

## 🚀 Features

### Customer Frontend
- 🏠 **Home Page** – Hero section with vibrant visuals and easy navigation  
- 🍕 **Dynamic Food Display** – Browse 32+ dishes across multiple categories  
- 🛒 **Smart Cart System** – Real-time add/remove/update functionality  
- 📦 **Order Placement** – Checkout with delivery form and order confirmation  
- 📱 **Fully Responsive** – Works across desktop, tablet, and mobile  
- 💳 **Stripe Payment Integration** – Secure payment processing

### Admin Panel
- 📊 **Dashboard** – Overview of orders, revenue, and statistics
- 🍕 **Food Management** – Add, edit, and remove food items with image upload
- 📦 **Order Management** – View and update order statuses
- 👥 **User Management** – Manage customer accounts
- 📈 **Analytics** – Sales reports and performance metrics

### Backend API
- 🔐 **Authentication** – JWT-based user authentication
- 🛒 **Cart Management** – Persistent cart storage per user
- 📦 **Order Processing** – Complete order lifecycle management
- 💳 **Payment Processing** – Stripe integration for secure payments
- 📸 **Image Upload** – Multer-based file upload system
- 🛡️ **Security** – Protected routes with middleware authentication

---

## 🛠️ Tech Stack

### Frontend (Customer)
- **React 19** – Modern React with latest features
- **Vite** – Lightning-fast development & build
- **React Router DOM** – Client-side routing
- **React Context API** – Global state management
- **Axios** – HTTP client for API calls
- **CSS3** – Responsive styling with mobile-first approach

### Admin Panel
- **React 19** – Modern admin interface
- **React Router DOM** – Navigation between admin sections
- **Axios** – API communication
- **React Toastify** – User notifications
- **CSS3** – Professional admin styling

### Backend
- **Node.js** – JavaScript runtime
- **Express.js** – Web framework
- **MongoDB** – NoSQL database
- **Mongoose** – MongoDB object modeling
- **JWT** – JSON Web Tokens for authentication
- **Bcrypt** – Password hashing
- **Multer** – File upload handling
- **Stripe** – Payment processing
- **CORS** – Cross-origin resource sharing
- **Dotenv** – Environment variable management

---

## 📁 Project Structure

```
FOOD-DELIVERY/
├── frontend/          # Customer-facing React app
├── admin/            # Admin panel React app
├── backend/          # Node.js Express API
├── README.md         # This file
└── .gitignore
```

---

## 🔧 Installation & Setup

### Prerequisites
- **Node.js** (v16 or higher)
- **MongoDB** (local or cloud instance)
- **npm** or **yarn** package manager

### 1. Clone the Repository
```bash
git clone https://github.com/venkateswarareddychalla/Food-Delivery.git
cd Food-Delivery
```

### 2. Backend Setup
```bash
# Navigate to backend folder
cd backend

# Install dependencies
npm install

# Create .env file
# Edit .env with your configuration:
# MONGODB_URI=mongodb://localhost:27017/food-delivery
# JWT_SECRET=your_jwt_secret_key
# STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
# PORT=4000

# Run the backend server
npm run server
# Server runs on http://localhost:4000
```

### 3. Frontend Setup
```bash
# Navigate to frontend folder
cd frontend

# Install dependencies
npm install

# Run the frontend
npm run dev
# Frontend runs on http://localhost:5173
```

### 4. Admin Panel Setup
```bash
# Navigate to admin folder
cd admin

# Install dependencies
npm install

# Run the admin panel
npm run dev
# Admin runs on http://localhost:5174
```

---

## 🌐 API Endpoints & Routes

### Base URL
```
http://localhost:4000
```

### Food Routes (`/api/food`)
- **POST** `/add` - Add new food item (with image upload)
- **GET** `/list` - Get all food items
- **POST** `/remove` - Remove food item

### User Routes (`/api/user`)
- **POST** `/register` - Register new user
- **POST** `/login` - User login

### Cart Routes (`/api/cart`)
- **POST** `/add` - Add item to cart (Protected)
- **POST** `/remove` - Remove item from cart (Protected)
- **GET** `/get` - Get user cart (Protected)

### Order Routes (`/api/order`)
- **POST** `/place` - Place new order (Protected)
- **POST** `/verify` - Verify payment
- **GET** `/myOrders` - Get user orders (Protected)
- **GET** `/list` - Get all orders (Admin)
- **POST** `/status` - Update order status (Admin)

---

## 📦 Dependencies & Use Cases

### Backend Dependencies
- **express** - Web framework for API
- **mongoose** - MongoDB object modeling
- **cors** - Cross-origin resource sharing
- **dotenv** - Environment variables
- **bcrypt** - Password hashing
- **jsonwebtoken** - JWT token generation/verification
- **multer** - File upload handling
- **stripe** - Payment processing
- **validator** - Input validation
- **nodemon** - Development server with auto-restart

### Frontend Dependencies
- **react** - UI library
- **react-dom** - React DOM rendering
- **react-router-dom** - Client-side routing
- **axios** - HTTP client
- **vite** - Build tool and dev server

### Admin Dependencies
- **react** - UI library
- **react-dom** - React DOM rendering
- **react-router-dom** - Client-side routing
- **axios** - HTTP client
- **react-toastify** - Toast notifications
- **vite** - Build tool and dev server

---

## 🚀 Running the Applications

### Development Mode
```bash
# Terminal 1 - Backend
cd backend
npm run server

# Terminal 2 - Frontend
cd frontend
npm run dev

# Terminal 3 - Admin
cd admin
npm run dev
```

### Production Build
```bash
# Backend (already production ready)
npm run server

# Frontend
cd frontend
npm run build
npm run preview

# Admin
cd admin
npm run build
npm run preview
```

---

## 🔐 Environment Variables

Create `.env` file in backend folder:

```env
MONGODB_URI=mongodb://localhost:27017/food-delivery
JWT_SECRET=your_super_secret_jwt_key
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
PORT=4000
```

---

## 📱 Responsive Design

All applications are fully responsive:
- **Mobile** - Optimized for touch interactions
- **Tablet** - Adaptive layouts for medium screens
- **Desktop** - Full-featured desktop experience

---

## 🧪 Testing

```bash
# Test backend endpoints
curl http://localhost:4000/

# Test frontend
Open http://localhost:5173 in browser

# Test admin panel
Open http://localhost:5174 in browser
```

---

## 🛠️ Development Workflow

1. **Start MongoDB** - Ensure database is running
2. **Start Backend** - Run API server
3. **Start Frontend** - Run customer app
4. **Start Admin** - Run admin panel
5. **Test Flow** - Place test orders and manage through admin

---

## 🚦 Roadmap

- 🔗 **Real-time updates** with Socket.io
- 📱 **Mobile apps** with React Native
- 📊 **Advanced analytics** dashboard
- 🎯 **Push notifications**
- 💬 **Live chat support**
- 🎨 **Dark mode** themes

---

## 🐛 Troubleshooting

### Common Issues

**Port already in use:**
```bash
# Kill process on port 4000
npx kill-port 4000
```

**MongoDB connection failed:**
- Ensure MongoDB is running
- Check connection string in .env

**CORS errors:**
- Backend CORS is configured for localhost
- Check if ports match

**Image upload issues:**
- Ensure uploads folder exists in backend
- Check file permissions

---

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Open a Pull Request

---

## 📄 License

Released under the [MIT License](LICENSE).

---

## 🌐 Live Demo

- **Frontend**: https://food-delivery-nine-gamma.vercel.app/
- **Backend**: Deploy on Render/Heroku
- **Admin Panel**: Deploy separately with authentication

---

## 📞 Support

For support, email venkateswarareddychalla@gmail.com or create an issue in the repository.
