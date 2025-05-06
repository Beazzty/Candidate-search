# Candidate search

## Description

Candidate search is a professional web application tailored for recruiters and hiring managers to identify potential software developers by leveraging GitHub's API. By utilizing a private GitHub API token, users can efficiently explore developer profiles, save qualified candidates, and manage their selection process with ease.

## Table of Contents

Table of contents to make it easy for users to find what they need:

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Features](#features)
- [Questions](#questions)

## Installation

Prerequisites:

Ensure you have the following installed:

-Node.js

-GitHub Personal Access Token

Set Up:

1. Clone the Repo: 

git clone https://github.com/Beazzty/Candidate-search.git

2. Navigate to the project folder:

cd Develop

3. Install dependencies:

npm i

4. Create a .env file in the root directory and add your GitHub API token:

VITE_GITHUB_TOKEN=ACCESS_TOKEN_HERE

5. Start the developement server:

npm run dev

## Usage

-Open the app in your browser (http://localhost:5173/ by default).



-View developer profiles fetched from GitHub.



-Use the green plus (+) button to save a candidate.

-Use the red minus (-) button to skip a candidate.

-When the user has gone through all available candidates, it will display that there are no new candidates to view



-Navigate to the Potential Candidates page to review saved developers.

-Click the Remove button to discard a saved candidate if necessary.

## Credits

-Also used Xpert Learning Assistance and ChatGBT to assist me in answering any questions I had throughout this project.

## Features

-Browse Developers: Fetch potential software developers' information from GitHub.

-View Candidate Profiles: Access key details such as name, username, avatar, email, company, GitHub URL, and location.

-Save Candidates: Click the green plus (+) button to add a developer to the "Potential Candidates" page.

-Reject Candidates: Click the red minus (-) button to dismiss a developer and move to the next profile.

-Manage Potential Candidates: View saved candidates on a dedicated page and remove them if necessary.

## Questions

If you have any questions, please reach out to me at [quinnbrown2004@gmail.com].
You can find more of my work at [Github.com/Beazzty](https://github.com/Github.com/Beazzty).