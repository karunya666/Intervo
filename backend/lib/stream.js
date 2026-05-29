import { StreamChat } from 'stream-chat';
import { StreamClient } from '@stream-io/node-sdk';
import { ENV } from './env.js';

const apiKey = ENV.STREAM_API_KEY;
const apiSecret = ENV.STREAM_API_SECRET;

if (!apiKey || !apiSecret) {
  console.error('Stream API key and secret must be set in environment variables');
}

export const chatClient = StreamChat.getInstance(apiKey, apiSecret); // This will be used for chat features
export const streamClient = new StreamClient(apiKey, apiSecret); // This will be used for video calls

export const upsertStreamUser = async(userData) => {
  try {
    await chatClient.upsertUser(userData);
    console.log(`Stream user upserted successfully ${userData.id}.`);
  } catch (error) {
    console.error('Error upserting Stream user:', error);
  }
};

export const deleteStreamUser = async(userId) => {
  try {
    await chatClient.deleteUser(userId);
    console.log(`Stream user with ID ${userId} deleted successfully.`);
  } catch (error) {
    console.error('Error deleting Stream user:', error);
  }
};