# React Timer App

A React-based timer application that allows you to create and manage multiple types of timers in a queue. Perfect for workouts, productivity sessions, or any activity requiring sequential timing.

## Features

- **Multiple Timer Types**: Stopwatch, Countdown, XY, and Tabata timers
- **Timer Queue Management**: Add, reorder, and remove timers in a sequential queue
- **Global Controls**: Start, pause, reset, and fast-forward through your entire timer queue
- **Total Time Tracking**: Real-time display of total remaining time for all queued timers
- **Individual Timer Controls**: Edit timer settings, move timers up/down in the queue
- **Visual Feedback**: Color-coded borders (green for running, red for finished, black for idle)
- **Persistent State**: Timer state managed through React Context API

## Timer Types

### Stopwatch
Counts up from 00:00 to a specified time limit.
- Set minutes and seconds
- Add custom descriptions
- Visual indicator when running

### Countdown
Counts down from a specified time to 00:00.
- Set minutes and seconds
- Add custom descriptions
- Automatically advances to next timer when complete

### XY Timer
Repeats a countdown for a specified number of rounds.
- Set minutes and seconds per round
- Configure 1-10 rounds
- Displays current round progress
- Ideal for interval training

### Tabata Timer
Alternates between work and rest periods for a specified number of sets.
- Set work time (seconds)
- Set rest time (seconds)
- Configure 1-10 rounds
- Color-coded phases (green for work, purple for rest)
- Perfect for HIIT workouts

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/cliffdboan/react_timer_app.git

# Navigate to project directory
cd react_timer_app

# Install dependencies
npm install

# Start the development server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Usage

1. **Add Timers**: Navigate to the "Add Timer" page and configure your desired timer type
2. **Build Queue**: Add multiple timers to create a workout or productivity sequence
3. **Reorder**: Use the up/down arrows to rearrange timers in the queue
4. **Edit**: Click "Edit Timer" to modify settings for any timer in the queue
5. **Run**: Click "Start" to begin the timer sequence
6. **Control**: Use Pause, Reset, or FF (Fast Forward) to control the queue

## Project Structure

```
src/
├── components/
│   ├── generic/          # Reusable UI components (Button, SetTimes)
│   └── timers/           # Timer implementations (Stopwatch, Countdown, XY, Tabata)
├── utils/
│   ├── helpers.js        # Utility functions
│   ├── timerProvider.js  # Context API for global timer state
│   ├── useLoadIfAdd.js   # Custom hook for route detection
│   └── useRunTimers.js   # Custom hook for timer logic
├── views/
│   ├── AddPage.js        # Timer selection and configuration page
│   ├── TimersView.js     # Main timer queue display
│   └── DocumentationView.js  # Documentation page
└── App.js                # Main app component with routing
```

## Available Scripts

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000).

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run build`
Builds the app for production to the `build` folder.

### `npm run eject`
Ejects from Create React App (one-way operation).

## Technologies Used

- **React 18** - UI library
- **React Router DOM** - Client-side routing
- **Styled Components** - CSS-in-JS styling
- **React Icons** - Icon library
- **React Error Boundary** - Error handling
- **React Context API** - Global state management
- **React Hooks** - State and lifecycle management

## Key Features Implementation

- **Context API**: Global timer state management across components
- **Custom Hooks**: Reusable timer logic (useRunTimers, useLoadIfAdd)
- **Sequential Execution**: Automatic progression through timer queue
- **Real-time Updates**: Live countdown and progress tracking
- **Responsive Design**: Styled Components for consistent UI

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.
