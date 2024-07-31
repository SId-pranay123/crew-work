

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)

## Installation

Follow these steps to install and set up the project locally.

### Prerequisites

- Node.js (version 20.X or above)
- npm or yarn


### Backend Setup

```bash
cd backend
npm install           # Install dependencies
tsc -b
```

### Environment Variables

Create a `.env` file in the backend directory and fill in the necessary environment variables:

```
DB_URI=mongodb://localhost:27017/myapp
SECRET_KEY=your_secret_key_here
```

### Frontend Setup

```bash
cd frontend
npm install           # Install dependencies
```

## Usage

### Running the Backend

```bash
cd backend
node dist/index.js      # Start the backend server
```

### Running the Frontend

```bash
cd frontend
npm run dev           # Start the Next.js development server
```

Visit `http://localhost:3000` to view the frontend.

## Development

### Backend

The backend is a Node.js server. The entry point is `index.js`. Add your business logic to the controllers, routes, and models as per your application's requirements.

### Frontend

The frontend is built with Next.js. Start adding pages under the `pages` directory. Use the `public` directory for static assets like images, and the `styles` directory to customize CSS.

