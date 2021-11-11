# ui

This is a project to practice setting up user authentication. It uses okta to manage the users.

## How to run

### Setup Okta

1. Sign in / Create an Okta developer account: https://developer.okta.com/login
2. In the Admin Console, go to `Applications` > `Applications`
3. Click `Create App Integration`
4. Select `OIDC - OpenID Connect` as the `Sign-in method`
5. Select `Single-Page Application` as the `Application type` and click `Next`
6. Enter a name for your app
7. Select `Authorization Code` and `Refresh Token` as the `Grant type`
8. Enter values for the `Sign-in redirect URIs` (this app is configured for: `http://localhost:3000/login/callback`)
9. In `Trusted Origins` add the `Base URI` as `http://localhost:3000`
10. In `Assignments` select `Allow everyone in your organization to access`
11. Click `Save`
12. In the `General` tab, scroll to `General Settings` and click `Edit`.
13. In the `LOGIN` section, specify an `Initiate login URI` to have Okta initiate the sign-in flow.
14. Click `Save`

### Setup your local environment

1. Create a `.env` file at the root of the `ui` directory
2. Add the following:
    ```
    REACT_APP_DOMAIN=<your-dev-okta-domain>
    REACT_APP_CLIENT_ID=<your-client-id>
    ```

### Run locally

1. `npm install`
2. `npm run start`
3. The app should now open in the browser, and you should see a screen with a login button.
4. Click on the login button, and you can now log in as a user!
5. After you successfully log in, you will be redirected to the `/profile` page.
