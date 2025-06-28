# Eventra – Event & Startup Data Automation Platform

Eventra is a real-time event management system designed to automate participant data extraction from Excel files, structure the data into MongoDB, and provide organizers with a powerful dashboard for participant tracking, winner selection, and startup evaluation using AI.

Pre-incubated at AIC MUJ, Eventra supports efficient event execution across multiple organizations and enables forecasting and insight generation.

---

## 🔧 Features

- 📥 Upload Excel registration forms
- 📊 Automatically extract and structure participant data
- 🧠 Integrated AI chatbot (Pitchpal) to simulate investor-style feedback on startup submissions
- 📂 Organize data into collections by event name
- 🧮 Analytics-ready dashboard with filters and winner selection
- 🔍 Smart query system to filter and retrieve specific participants
- 📈 (WIP) Forecast participant trends and event success metrics using ML

---

## 🧑‍💻 Tech Stack

| Layer        | Tech                          |
|--------------|-------------------------------|
| Frontend     | React.js, Vite, TailwindCSS   |
| Backend      | Flask (Python)                |
| Database     | MongoDB                       |
| Data Handling| Pandas, NumPy                 |
| AI Layer     | OpenAI LLM (via API)          |

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/Oshika22/EventManagementAutomated.git
cd EventManagementAutomated


## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/Oshika22/EventManagementAutomated.git
   ```
2. Navigate to the project directory:
   ```sh
   cd EventManagement
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the backend server:
   ```sh
   npm run server
   ```
5. Start the frontend:
   ```sh
   npm run dev
   ```

## Environment Variables
Create a `.env` file in the root directory and add the following:
```sh
MONGO_URI=your_mongodb_connection_string
PORT=5000
JWT_SECRET=your_secret_key
```

## API Endpoints
- `POST /upload` - Uploads an Excel file and processes it.
- `GET /data/:eventType` - Retrieves stored data for a specific event.
- `POST /event` - Adds a new event to the database.
- `GET /query/:filter` - Runs a query to retrieve filtered data.


## License
This project is licensed under the MIT License.
