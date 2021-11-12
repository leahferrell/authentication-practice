# authentication-practice

Simple project to practice authentication with Okta OIDC

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

### Setup Backend

Follow the instructions in the backend [README.md](/backend)

### Setup UI

Follow the instructions in the ui [README.md](/ui)

### Login to the UI

Click on the `Login` button to sign in to the app. If you don't have an account yet, you can register. The account you create will be associated with the okta identity provider tied to your okta dev account.