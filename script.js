// Import the required module
const { WebClient } = require('@slack/web-api');

// Replace the token with your own personal access token
const token = 'YOUR_PERSONAL_ACCESS_TOKEN';

// Replace the channel ID with the desired Slack channel ID
const channelId = 'YOUR_SLACK_CHANNEL_ID';

// The message you want to send
const message = 'Your custom text message here';

// Initialize the Slack WebClient with your token
const web = new WebClient(token);

// Function to send a message to a user
async function sendDirectMessage(userId, message) {
  try {
    const imResponse = await web.conversations.open({
      users: userId,
    });

    await web.chat.postMessage({
      channel: imResponse.channel.id,
      text: message,
      as_user: true,
    });

    console.log(`Message sent to ${userId}`);
  } catch (error) {
    console.error(`Error sending message to ${userId}: ${error}`);
  }
}

// Function to send the message to all members of the channel
async function sendToChannelMembers(channelId, message) {
  try {
    const channelInfo = await web.conversations.info({ channel: channelId });
    const members = channelInfo.channel.members;

    for (const member of members) {
      await sendDirectMessage(member, message);
    }

    console.log('Message sent to all channel members.');
  } catch (error) {
    console.error(`Error sending message to channel members: ${error}`);
  }
}

// Send the message to all members of the channel
sendToChannelMembers(channelId, message);
