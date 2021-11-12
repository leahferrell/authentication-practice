# ui

This is a project to practice setting up user authentication. It uses okta to manage the users.

## How to run

1. Create a `.env` file at the root of the `ui` directory and add the following:
    ```
    REACT_APP_DOMAIN=<your-dev-okta-domain>
    REACT_APP_CLIENT_ID=<your-client-id>
    ```
2. `npm install`
3. `npm run start`
4. The app should now open in the browser, and you should see a screen with a login button.
5. Click on the login button, and you can now log in as a user!
6. After you successfully log in, you will be redirected to the `/profile` page.
