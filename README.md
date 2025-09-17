# Container App

Container App for the Microfrontend POC — consumes remote UI components (Header, Card, Button) exposed by the Remote App via Module Federation. Deployed on Firebase Hosting.

## Repository
https://github.com/nitinmaram/container-app

## Quick Git + Local Commands

- Clone repository:  
  `git clone https://github.com/nitinmaram/container-app.git && cd container-app`

- Create a feature branch:  
  `git checkout -b feature/JiraStoryID`

- Install dependencies:  
  `npm install`

- Run development server:  
  `npm run dev`

- Build production assets:  
  `npm run build`

- Deploy to Firebase Hosting (must be logged in with firebase CLI):  
  `npm run deploy`

- Commit & push changes:  
  `git add . && git commit -m "JiraStoryID: your message" && git push -u origin feature/your-change`

(After PR review, merge to `main` and tag/release as needed.)
