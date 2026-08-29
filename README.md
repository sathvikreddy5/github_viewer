# GitHub Profile Explorer

A simple web application that allows users to search for a GitHub username and explore their public profile and repositories using the GitHub API.

## Features

* Search GitHub users by username
* Display GitHub profile information
* Display profile avatar
* Show name, username, bio, followers, following, and public repositories
* Fetch and display public repositories
* Sort repositories by number of stars
* Display repository stars and forks
* Direct links to repositories

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript
* GitHub REST API


##  Project Structure

```text
github_viewer/
│
├── index.html
├── style.css
└── app.js
```

## ⚙️ How It Works

1. Enter a GitHub username in the search box.
2. Click **Search** .
3. The application sends a request to the GitHub REST API.
4. The API returns the user's profile information and repositories.
5. JavaScript processes the response.
6. The profile and repositories are dynamically displayed on the webpage.

##  API Endpoints

The project uses GitHub's public REST API:

```text
GET /users/{username}
GET /users/{username}/repos
```

No backend server is required for this version of the project.

## ▶️ Running the Project

Clone the repository:

```bash
git clone YOUR_REPOSITORY_URL
```

Open the project folder and launch `index.html` in a browser.

Alternatively, use an extension such as **Live Server** in VS Code for local development.


##  Future Improvements

Possible improvements for future versions:

* Repository language indicators
* Repository search and filtering
* Pagination
* GitHub contribution/activity information
* Better loading animation
* Dark/light theme toggle
* Improved accessibility
* React version
* Backend with Node.js and Express
* MongoDB integration for saving search history

##  What I Learned

This project helped me understand how frontend JavaScript communicates with external APIs, processes JSON data, handles asynchronous operations, and dynamically updates the DOM based on API responses.

## 👨‍💻 Author

**Sathvik Reddy**
