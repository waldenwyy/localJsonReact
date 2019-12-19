# Documentation

## Environment

This app is powered by NodeJS 10.16.0, lower versions of NodeJS may work but not recommended.

## Available Scripts

In the project directory, you can run:

## `npm i`

Installs all dependencies to your local.

Change the `url-loader` limit to 1000 in node_modules/react-scripts/config/webpack.config.js, or webpack will generate all small images into base64 format for efficiency.

### `npm start`

Runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

You will also see any lint errors in the console.


### `yarn build`

Builds the app for production to the `build` folder.

It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


## File Structure

`src/assets` contains all react code to build the app.

- `src/assets/pages` contains all pages of the app which initialize the props and pass them to components.

- `src/assets/components` contains all reusable parts of the app, they won't work on their own unless they are called and passed props by pages.

`src/scss/pages` contains all sass files for the site.

- `src/scss/pages/_styleguide.scss` contains all sass code for styleguide only.

`src/App.js` contains routing setup and any new page needs to be registered here.

`public/index.html` is the shell of the app which contains all meta data and cdn for styleguide app.

`public/img` contains all image files.

`public/CodeFiles` contains all code view files that will display when clicking on `view code` icon of the styleguide. It has both html and scss format.


