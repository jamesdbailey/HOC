# Experiment with Higher-Order Components

Trying to understand using higher-order components as Providers for child nodes. Started with various online sources \
that used `const WrappedComponent = higherOrderComponent(component);` as a too simple solution.

This project uses two higher-order components as nested providers to supply a globals object and to filter the props.data \
for a search function. This should work for both a single nested component or many nested children.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### any of the other npm scripts produced by `npx create-react-app appname`
