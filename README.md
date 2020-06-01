# About

In this repo, I had created the `CLONE` of popular [YELP](https://www.yelp.com/) web application using create-react-app as a base from scratch using `React (functional component & Custom Hooks)`, `Yelp Fusion REST AP`. In addition to the latter technologies, I had styled the application using`Bulma CSS` and `flexbox` methodology.

# Screenshots

![Yelp](https://user-images.githubusercontent.com/33395312/83405933-541ea700-a42d-11ea-831b-c23a89d9e2aa.png)

# Installation & Set Up

1. Install and use the correct version of Node

```
npm install
or
yarn install
```

2. Installed dependencies

```
- npm/yarn install bulma-start

- npm/yarn install query-string

- npm/yarn install --save react-background-slider

- npm/yarn install react react-dom

- npm/yarn install --save react-rating

- npm/yarn install --save react-router-dom

- npm/yarn install use-react-router
```

3. Start the development server

```
npm start
or
yarn start
```

# Set Up for Yelp API

It leverages the free Yelp Fusion REST API for which you need an API key.

1. Head over to the [Yelp Fusion API documentation](https://www.yelp.com/developers/documentation/v3).
2. Click on `Create App` and sign in if you haven't done so already
3. Once you have signed in, click on the `Get Started` button. If you already have an app, then you will already see the API key
4. Copy the generated `API key`. This is a [bearer token](https://stackoverflow.com/questions/25838183/what-is-the-oauth-2-0-bearer-token-exactly/25843058) that must be put inside the header of each request
5. Navigate to the `.env` file and assign the `BEARER_TOKEN` variable the following content
   `REACT_APP_YELP_API_KEY = <your-token-here>`
6. Run the app with `npm start` or `yarn start`

# Limitations

- This app uses the CORS Anywhere because the Yelp Fusion REST API is meant for server to server communication and does not support CORS
- For my practical purpose, I decided to proxy all requests through CORS Anywhere so I can focus on building the frontend part of the application.

# Technologies used

- React / create-react-app
  - only functional components
  - communication with web servers with React Hooks only
  - no higher order or class-based components
- React router with useReactRouter
- Bulma
- Flexbox
- Yelp API

#### If you find this repo useful don't forget to give star

#### #🚀HappyCoding
