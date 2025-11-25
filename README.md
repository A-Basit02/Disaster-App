# 🚨 Disaster Relief & Resource Management Platform

A full-stack mobile application for coordinating disaster relief efforts, connecting citizens, rescue workers, NGOs, and government agencies during emergencies.

## 📱 What This App Does

- **Citizens** can report emergencies and find nearby shelters
- **Rescue Workers** can manage tasks and coordinate response efforts
- **NGOs** can manage and distribute resources
- **Government** can oversee operations and send alerts

## 🛠 Tech Stack

- **Frontend**: React Native with Expo
- **Backend**: Node.js with Express
- **Database**: MySQL

## ✅ Prerequisites

Before you start, make sure you have:

- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **MySQL** (v8.0 or higher) - [Download](https://dev.mysql.com/downloads/)
- **Expo Go** app on your phone - [Android](https://play.google.com/store/apps/details?id=host.exp.exponent) | [iOS](https://apps.apple.com/app/expo-go/id982107779)
- **Git** (to clone the repository)

## 🚀 Quick Start Guide

### Step 1: Clone the Repository

```bash
git clone <your-repo-url>
cd "Disaster Management"
```

### Step 2: Database Setup

1. **Create MySQL Database:**
   ```sql
   CREATE DATABASE disaster_relief_db;
   ```

2. **Import Database Schema:**
   - Open MySQL Workbench or command line
   - Run the SQL queries from `Querry for db .txt` file
   - This will create all necessary tables

### Step 3: Backend Setup

1. **Navigate to Backend folder:**
   ```bash
   cd Backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Database:**
   - Open `Backend/config/db.js`
   - Update database credentials:
     ```javascript
     host: 'localhost',
     user: 'your_mysql_username',
     password: 'your_mysql_password',
     database: 'disaster_relief_db'
     ```

4. **Start Backend Server:**
   ```bash
   npm start
   ```
   
   Server will run on `http://localhost:3000`

### Step 4: Frontend Setup

1. **Open a NEW terminal window** (keep backend running)

2. **Navigate to Frontend folder:**
   ```bash
   cd Frontend
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Configure API URL:**
   - Find your computer's IP address:
     - **Windows**: Open PowerShell and run `ipconfig`
     - **Mac/Linux**: Run `ifconfig`
     - Look for IPv4 address (e.g., `192.168.1.174`)
   
   - Open `Frontend/src/api/client.ts`
   - Update line 14 with your IP:
     ```typescript
     const DEVICE_IP = '192.168.1.174'; // Your computer's IP
     ```

5. **Start Expo Development Server:**
   ```bash
   npm start
   ```
   
   Or:
   ```bash
   npx expo start
   ```

### Step 5: Run on Your Phone (Expo Go)

1. **Make sure your phone and computer are on the same Wi-Fi network**

2. **Open Expo Go app** on your phone

3. **Scan the QR code** that appears in the terminal

4. **Wait for the app to load** (first time may take a minute)

## 📋 Application Flow

### For Citizens:
1. Register/Login → 2. Report Emergency → 3. View Shelters → 4. View Resources

### For Rescue Workers:
1. Login → 2. View All Emergencies → 3. Update Status → 4. Manage Tasks

### For NGOs:
1. Login → 2. Add Resources → 3. Distribute Resources → 4. Track Distribution

### For Government:
1. Login → 2. Manage All Operations → 3. Create Notifications → 4. View Analytics

## 🔧 Troubleshooting

### Backend won't start
- Check if MySQL is running
- Verify database credentials in `Backend/config/db.js`
- Make sure port 3000 is not in use

### Frontend can't connect to backend
- **Check IP address**: Make sure IP in `client.ts` matches your computer's IP
- **Check network**: Phone and computer must be on same Wi-Fi
- **Check backend**: Backend server must be running
- **Check firewall**: Allow Node.js through Windows Firewall

### Expo Go shows "Unable to connect"
- Restart Expo server: Press `r` in terminal
- Clear cache: `npx expo start --clear`
- Check Wi-Fi connection on both devices

### Database connection error
- Verify MySQL is running
- Check database name, username, and password
- Make sure database exists and tables are created

## 📁 Project Structure

```
Disaster Management/
├── Backend/          # Node.js API server
│   ├── config/      # Database configuration
│   ├── controllers/ # Request handlers
│   ├── routes/      # API routes
│   └── server.js    # Main server file
│
├── Frontend/         # React Native app
│   ├── app/         # App screens (Expo Router)
│   ├── src/         # Source code
│   │   ├── api/     # API client & services
│   │   ├── components/ # UI components
│   │   └── context/ # React context
│   └── package.json
│
└── README.md         # This file
```

## 🔐 Default User Roles

- **Role 1**: Citizen
- **Role 2**: Rescue Worker
- **Role 3**: NGO
- **Role 4**: Government

## 📝 Important Notes

- **Development Mode**: This setup is for development/testing only
- **Production**: For production deployment, backend needs to be hosted on a server with public URL
- **Database**: Make sure to backup your database regularly
- **Network**: For testing, both devices must be on the same network

## 🆘 Need Help?

1. Check the troubleshooting section above
2. Verify all prerequisites are installed
3. Make sure backend is running before starting frontend
4. Check console logs for error messages

## 📄 License

ISC License

---

**Happy Coding! 🚀**
