const { WebClient } = require('@slack/web-api');

// Replace with your Slack API token
const token = 'xoxp-YOUR-TOKEN-HERE';

// Replace with the ID of the channel you want to send messages to its members
const channelId = 'CHANNEL_ID';

// Replace with the text message you want to send
const message = 'YOUR_MESSAGE_HERE';

const web = new WebClient(token);

async function sendMessageToUser(userId) {
  try {
    const result = await web.conversations.open({
      users: userId,
    });

    await web.chat.postMessage({
      channel: result.channel.id,
      text: message,
    });

    console.log(`Message sent to user ${userId}`);
  } catch (error) {
    console.error(`Failed to send message to user ${userId}:`, error);
  }
}

async function sendMessagesToChannelMembers() {
  try {
    const { members } = await web.conversations.members({ channel: channelId });

    for (const userId of members) {
      await sendMessageToUser(userId);
    }

    console.log('All messages sent.');
  } catch (error) {
    console.error('Failed to get channel members:', error);
  }
}

sendMessagesToChannelMembers();
