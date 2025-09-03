2do4lazy is a modern task management application built with React and Vite. It uses Google’s Gemini API to intelligently parse natural language input into structured tasks with title, time, venue, and category. The app also includes a regex fallback extractor so tasks can still be added if the API is unavailable.

Features

Add tasks using natural language input

Example: Meeting about Python dependencies in AB1-324 at 9pm

Automatic task parsing with Gemini AI

Regex-based fallback task extraction

Task categorization into: Work, School, Chores, and Projects

Persistent storage with localStorage

Dark mode and light mode toggle

Responsive sidebar with category filtering

Beautiful UI with a matrix-style animated background

Interactive features

Mark tasks as completed

Delete tasks

Filter tasks by category

Tech Stack

React 19 for the UI

Vite 7 for fast builds and hot reload

lucide-react for icons

Google Gemini API for natural language processing

localStorage for persistence

Installation

Clone this repository:

git clone https://github.com/your-username/smart-todo-app.git
cd smart-todo-app


Install dependencies:

npm install


Install missing icon library (if needed):

npm install lucide-react


Add your Gemini API key. In SmartTodoApp.jsx, replace the placeholder with your actual key:

const GEMINI_API_KEY = "your-api-key-here";

Development

Run the app locally:

npm run dev


The app will start on http://localhost:5173 (default Vite port).

Build

To create a production build:

npm run build


Preview the production build locally:

npm run preview

Task Extraction Logic

With Gemini:
Gemini returns a JSON object with fields:

{
  "title": "short task summary",
  "time": "9pm",
  "venue": "AB1-324",
  "category": "work"
}


Fallback (regex):
If Gemini is unavailable or returns invalid output, the regex fallback extracts title, time, venue, and assigns a best-guess category.

Project Structure
src/
  App.jsx          // main SmartTodoApp component
  main.jsx         // app entry point
  index.css        // global styles

Notes

The demo warning appears if you are using the provided API key directly in the code. Replace it with your own Gemini API key for production use.

Categories are hardcoded as: Work, School, Chores, Projects.

The matrix background effect is purely visual and can be removed if desired.
