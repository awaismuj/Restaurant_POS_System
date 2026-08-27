# 🍽️ **Restaurant POS System**  

A full-featured **Restaurant POS System** built using the **MERN Stack** to streamline restaurant operations, enhance customer experience, and manage orders, payments, and inventory with ease.

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

## � Environment Setup

This project uses two environment files:

### 1) Backend environment file
Create a file named `.env` inside the `pos-backend` folder:

```env
PORT=3000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/pos-db
JWT_SECRET=change_this_to_a_long_random_secret_key
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
RAZORPAY_WEBHOOK_SECRET=your_razorpay_webhook_secret
```

### 2) Frontend environment file
Create a file named `.env` inside the `pos-frontend` folder:

```env
VITE_BACKEND_URL=http://localhost:3000
```

> These files are intentionally ignored by Git through each folder's `.gitignore` file, so real secrets are not pushed to the repository.

---

## 🚀 Local Setup and Build Process

### Install dependencies

```bash
cd pos-backend
npm install

cd ../pos-frontend
npm install
```

### Start backend

```bash
cd pos-backend
npm run dev
```

This runs the Express server with Nodemon.

### Start frontend

```bash
cd pos-frontend
npm run dev
```

This starts the Vite development server on the default local port, usually:

```text
http://localhost:5173
```

### Production build

For the frontend, generate a production build:

```bash
cd pos-frontend
npm run build
```

This creates a `dist` folder for deployment.

For the backend, there is no separate build step; it runs directly with Node:

```bash
cd pos-backend
npm start
```

---

## 🧩 Git Workflow for .env Files

Do not push the real `.env` files. They contain local secrets and should stay on your machine.

Safe workflow:

```bash
# 1. Create your local env files
cp pos-backend/.env.example pos-backend/.env
cp pos-frontend/.env.example pos-frontend/.env

# 2. Fill them with your actual local values
# then run the app

# 3. Check what is modified
git status

# 4. Add only the safe files you want to commit
git add README.md pos-backend/.env.example pos-frontend/.env.example

# 5. Commit
git commit -m "Add environment examples and README documentation"

# 6. Push
git push origin main
```

If you use a different branch name, replace `main` with your branch name.

> The actual `.env` files remain local because they are already listed in each project's `.gitignore` file.

---

## �📺 **YouTube Playlist**

🎬 Follow the complete tutorial series on building this Restaurant POS System on YouTube:  
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
