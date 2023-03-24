Before running this script, make sure to install the Slack SDK by running npm install @slack/web-api in your project directory.
Replace 'YOUR_PERSONAL_ACCESS_TOKEN' with your personal access token and 'YOUR_SLACK_CHANNEL_ID' with the desired Slack channel ID. The message can be customized by changing the message variable.
to obtain a Personal Access Token, you can create one by following these steps:

    Go to the Slack apps page: Log in to your Slack account and go to the Slack apps page at https://api.slack.com/apps.

    Create a new app or select an existing app: Click "Create an App" to create a new app or select an existing app from the list.

    Go to "OAuth & Permissions": From your app page, find the "Features" section in the left menu and click on "OAuth & Permissions."

    Scroll down to "Scopes": In the "Scopes" section, add the necessary permissions for your token. To send messages as a user, you may need to add scopes such as chat:write       or chat:write:user.

    Create your token: Scroll up to the "Tokens for Your Workspace" section and click the "Install App to Workspace" button (if you haven't already done so). After that, you       will see your "User Token" under "OAuth Tokens for Your Workspace." This is your Personal Access Token.

Remember never to share your Personal Access Token with third parties or include it in public code or accessible repositories. If you suspect that your token is compromised, revoke it immediately and create a new one.

