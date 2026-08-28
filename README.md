# 🍕 **Gen Z Pizza POS System**

A full-featured **Gen Z Pizza POS System** built using the **MERN Stack** to streamline pizza shop operations, enhance customer experience, and manage orders, payments, and inventory with ease.

## ✨ **Features**

- 🍽️ **Order Management**  
  Efficiently manage customer orders with real-time updates and status tracking.

- 🪑 **Table Reservations**  
  Simplify table bookings and manage reservations directly from the POS.

- 🔐 **Authentication**  
  Secure login and role-based access control for admins, staff, and users.

- 💸 **Payment Integration**  
  Integrated with **Razorpay** (or other gateways) for seamless online payments.

- 🧾 **Billing & Invoicing**  
  Automatically generate detailed bills and invoices for every order.


## 🏗️ **Tech Stack**

| **Category**             | **Technology**                |
|--------------------------|-------------------------------|
| 🖥️ **Frontend**          | React.js, Redux, Tailwind CSS  |
| 🔙 **Backend**           | Node.js, Express.js           |
| 🗄️ **Database**          | MongoDB                       |
| 🔐 **Authentication**    | JWT, bcrypt                   |
| 💳 **Payment Integration**| Razorpay    |
| 📊 **State Management**   | Redux Toolkit                 |
| ⚡ **Data Fetching & Caching** | React Query            |
| 🔗 **APIs**              | RESTful APIs                   |

---
<br>

## ⚙️ Environment Setup

This project uses two environment files:

### 1) Backend environment file
Create a file named `.env` inside the `pos-backend` folder:

```env
PORT=3000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
MONGODB_URI=mongodb://localhost:27017/pos-db
JWT_SECRET=change_this_to_a_long_random_secret_key

ADMIN_NAME=System Admin
ADMIN_EMAIL=devops.awais@gmail.com
ADMIN_PHONE=9999999999
ADMIN_PASSWORD=admin123
ADMIN_ROLE=Admin

RAZORPAY_KEY_ID=
RAZORPAY_KEY_SECRET=
RAZORPAY_WEBHOOK_SECRET=
```

For MongoDB Atlas, use a connection string like:

```env
MONGODB_URI=mongodb+srv://YOUR_MONGODB_USER:YOUR_MONGODB_PASSWORD@cluster0.xxxxxx.mongodb.net/pos-db?retryWrites=true&w=majority
```

### 2) Frontend environment file
Create a file named `.env` inside the `pos-frontend` folder:

```env
VITE_BACKEND_URL=http://localhost:3000
VITE_RAZORPAY_KEY_ID=
```

> These files are intentionally ignored by Git through each folder's `.gitignore` file, so real secrets are not pushed to the repository.

---

## 🚀 Fresh Clone Setup

Run these commands from the project root:

```bash
cp pos-backend/.env.example pos-backend/.env
cp pos-frontend/.env.example pos-frontend/.env

# Edit the .env files and fill in your MongoDB, JWT, and frontend URLs
```

Then install dependencies:

```bash
cd pos-backend
npm install

cd ../pos-frontend
npm install
```

---

## 🗃️ Database Migration and Seed

This project includes a simple MongoDB bootstrap flow so a new clone can be ready to run without manual database setup.

### Run all database setup steps

From the `pos-backend` folder:

```bash
npm run db:setup
```

This does the following:

- connects to MongoDB
- syncs database indexes
- creates the default admin user if it does not already exist
- sets up the app for immediate login after startup

### Individual commands

```bash
npm run migrate
npm run seed
```

Both commands trigger the same database bootstrap process. `seed` is useful when you want to create the initial admin account and default data only.

### Default admin user

The app seeds a default admin account automatically when no admin exists:

```text
Email: devops.awais@gmail.com
Password: admin123
```

Change the password immediately after your first login in production.

---

## ▶️ Start the app

### Start backend

```bash
cd pos-backend
npm run dev
```

### Start frontend

```bash
cd pos-frontend
npm run dev
```

This starts the Vite dev server usually on:

```text
http://localhost:5173
```

---

## 🏗️ Production build

For the frontend:

```bash
cd pos-frontend
npm run build
```

For the backend:

```bash
cd pos-backend
npm start
```

---

## 🧩 Git workflow for .env files

Do not push real `.env` files. Keep them local.

Safe workflow:

```bash
# 1. Create your local env files
cp pos-backend/.env.example pos-backend/.env
cp pos-frontend/.env.example pos-frontend/.env

# 2. Fill in your real values
# 3. Check what is modified
git status

# 4. Add only the safe files to the commit
git add README.md pos-backend/.env.example pos-frontend/.env.example

# 5. Commit
git commit -m "Add environment examples and database bootstrap docs"

# 6. Push
git push origin main
```

If you use a different branch name, replace `main` with your branch name.

> The actual `.env` files remain local because they are already listed in each project's `.gitignore` file.

---

## �📺 **YouTube Playlist**

🎬 Follow the complete tutorial series on building this Gen Z Pizza POS System on YouTube:  
👉 [Watch the Playlist](https://www.youtube.com/playlist?list=PL9OdiypqS7Nk0DHnSNFIi8RgEFJCIWB6X)  

## 📁 **Assets**

- 📦 **Project Assets:** [Google Drive](https://drive.google.com/drive/folders/193N-F1jpzyfPCRCLc9wCyaxjYu2K6PC_)

---

## 📋 **Flow Chart for Project Structure**

- 🗺️ **Visualize the Project Structure:** [View Flow Chart](https://app.eraser.io/workspace/IcU1b6EHu9ZyS9JKi0aY?origin=share)

---

## 🎨 **Design Inspiration**

- 💡 **UI/UX Design Reference:** [Behance Design](https://www.behance.net/gallery/210280099/Restaurant-POS-System-Point-of-Sale-UIUX-Design)

---

## 🖼️ **Project Screenshots**

<table>
  <tr>
    <td><img src="https://res.cloudinary.com/amritrajmaurya/image/upload/v1740502772/ibjxvy5o1ikbsdebrjky.png" alt="Screenshot 1" width="300"/></td>
    <td><img src="https://res.cloudinary.com/amritrajmaurya/image/upload/v1740502773/ietao6dnw6yjsh4f71zn.png" alt="Screenshot 2" width="300"/></td>
  </tr>
  <tr>
    <td><img src="https://res.cloudinary.com/amritrajmaurya/image/upload/v1740502772/vesokdfpa1jb7ytm9abi.png" alt="Screenshot 3" width="300"/></td>
    <td><img src="https://res.cloudinary.com/amritrajmaurya/image/upload/v1740502772/setoqzhzbwbp9udpri1f.png" alt="Screenshot 4" width="300"/></td>
  </tr>
  <tr>
    <td><img src="https://res.cloudinary.com/amritrajmaurya/image/upload/v1740502772/fc4tiwzdoisqwac1j01y.png" alt="Screenshot 5" width="300"/></td>
  </tr>
</table>


✨ Feel free to explore, contribute, and enhance the project! 🚀

💡 To contribute, please check out the **CONTRIBUTING.md** for guidelines.

⭐ If you find this project helpful, don't forget to **star** the repository! 🌟
