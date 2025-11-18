# Deploying a Vite project on Combell

This guide will walk you through the steps to deploy a Vite project on Combell. You can also deploy a Vite project on other hosting providers by following similar steps.

You can find more information about Vite builds/deployment in the [official Vite documentation](https://vitejs.dev/guide/static-deploy.html).

On [devine.workflows.be](https://devinekask.github.io/workflows/deployment/ftp/01-ftp-client/) you can find everything about Combell & FileZilla.

The most important steps are described below.

## 1. Check your directory

First check your current working directory to ensure you are in the right place:

```bash
pwd
```

You should see the path to your Vite project. If not, navigate to your project directory using the `cd` command.

## 2. Install dependencies

Make sure all your project dependencies are installed. You can do this by running:

```bash
npm install
```

or

```bash
npm i
```

Don't forget to run your local development server to ensure everything is working correctly:

```bash
npm run dev
```

## 3. Build the project

Building a project means creating an optimized version of your application that is ready for deployment. To create a production build of your Vite project, run the following command in your project directory:

```bash
npm run build
```

You will see a new folder named `dist` created in your project directory. This folder contains all the files needed for deployment.

Open some of the CSS and JS files in the `dist` folder to see what we mean with optimized files.

## 4. Preview the build

To preview the production build locally, you can use the following command:

Do know that if you update your code. The dist folder will not be updated automatically. You will need to run `npm run build` again to create a new production build.

```bash
npm run preview
```

This will start a local server that serves the files from the `dist` folder, allowing you to test the production build before deploying it.

## 5. Deploy to Combell

To deploy your Vite project on Combell, you need to upload the contents of the `dist` folder to your Combell hosting account. You can do this using an FTP client like FileZilla or through the Combell control panel.

Open FileZilla and connect to your Combell hosting account using your FTP credentials.

Once connected, navigate to the root directory of your website called  `www`.

Create a new directory, because we want to host multiple projects on your Combell account. For example, you can create a directory named `fake-door`.

Upload the contents of the `dist` folder to the `fake-door` directory.

**Only upload the contents** of the `dist` folder, not the folder itself.

Once the upload is complete, your Vite project should be live! You can access it by navigating to `http://yourdomain.com/fake-door` in your web browser.

### 6. Where is my CSS, JS and assets?

Normally your website will not look like expected. What is missing? Your CSS, JS and assets are not loading correctly.

Since our Vite project is deployed in a subdirectory (`/fake-door`), we have to make sure that the `base` option in your `vite.config.js` file is set correctly. Otherwise Vite will look for the assets in the root directory.

If we dont deploy in a subdirectory, we don't have to change anything and can leave the `base` option as is.

Create a vite.config.js file in the root of your project (if you don't have one already) and add the following configuration:

```javascript
export default {
  base: '/fake-door/', // Replace '/fake-door/' with your subdirectory path
}

```

This configuration ensures that all asset paths are correctly prefixed with the subdirectory path, allowing your CSS, JS, and other assets to load properly.

After making this change, rebuild your project by running `npm run build` again and re-upload the contents of the `dist` folder to your Combell hosting account.

Now the CSS, JS and assets should load correctly on your deployed Vite project.

## 7. Conclusion

You have successfully deployed your Vite project on Combell!

Do know you can deploy Vite projects on other hosting providers as well by following similar steps!
