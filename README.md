# Todos Task App

This is a test to apply for a job.

## Requirements

- Node version v18.16.0
- Docker

## Run project locally

- Clone the project
- cd into folder
- Copy `.env.example` to `.env`
- Set `RECAPTCHA_SITE_KEY` and `RECAPTCHA_SECRET` with your [google recaptcha v3 console keys](https://www.google.com/recaptcha/about/)
- run $ docker build -t `image-name` .
- run $ docker run -dp `port-you-want`:3000 `image-name`

## Run project as development to run tests

- Clone the project
- cd into folder
- Copy `.env.example` to `.env`
- Set `RECAPTCHA_SITE_KEY` and `RECAPTCHA_SECRET` with your [google recaptcha v3 console keys](https://www.google.com/recaptcha/about/)
- run $ npm i
- run $ npm run dev

### Cypress tests

- run $ npx cypress open
- Execute listed tests

### Jest tests

- run $ npm test

## Working demo

Check out the [demo](https://todos-app.cp.murrudev.com/) for more information.
