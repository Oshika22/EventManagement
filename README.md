# Project Name

## Description
A MERN stack project that allows users to upload Excel files, extract data from specific columns, and store them in MongoDB. The project organizes data into different tables based on the event, ensuring structured and queryable storage.

## Features
- Upload Excel files
- Extract data from specific columns
- Store data in MongoDB
- Organize data into different tables based on event type
- Navigate through stored data
- Add new events dynamically
- Run queries to fetch specific data

## Tech Stack
- **Frontend:** React, Vite
- **Backend:** Flask
- **Database:** MongoDB
- **File Handling:** Pandas

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/Oshika22/EventManagementAutomated.git
   ```
2. Navigate to the project directory:
   ```sh
   cd EventManagementAutomated
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

## Usage
1. Upload an Excel file via the frontend.
2. The backend processes the file and extracts required data.
3. Data is stored in MongoDB under different collections based on event type.
4. Navigate through different events using the frontend.
5. Add new events through a dedicated form.
6. Execute queries to retrieve specific event data.

## API Endpoints
- `POST /upload` - Uploads an Excel file and processes it.
- `GET /data/:eventType` - Retrieves stored data for a specific event.
- `POST /event` - Adds a new event to the database.
- `GET /query/:filter` - Runs a query to retrieve filtered data.


## License
This project is licensed under the MIT License.
