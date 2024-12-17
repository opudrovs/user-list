# User List Viewer

## Project Overview

This is a take-home project originally built in 2018 according to the interviewer's specifications.

- **Tech Stack**:
   - **React.js** The project was initially set up with **Create React App** (now deprecated) and later re-built with **Vite**.
   - **Node.js**
   - **Webpack** for bundling
   - **CSS Modules** for styling

- **Main Requirements**:
   1. Display a list of users.
   2. Show individual user information when selecting a user from the list.
   3. Implement basic searching functionality for the user list (without debouncing or throttling).

## Features

- Fetches and displays user data from the Randomuser.me REST API.  
- Supports searching users by name.
- Responsive UI: Designed to work on desktop as per specifications, with additional responsiveness added to enhance usability.
- Click on a user in the list to view detailed user information.

## Setup Instructions

To set up the project locally, clone the repository and run the following commands:

```bash
git clone git@github.com:opudrovs/user-list-sample.git
cd user-list-sample
npm install
npm run dev
```

## Demo

[Live Demo](https://opudrovs.github.io/user-list-sample/)
