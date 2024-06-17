const axios = require('axios');

const sendWebhook = async () => {
  const payload = {
    event: 'user_signup',
    user: {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com'
    }
  };

  try {
    const response = await axios.post('http://localhost:3000/webhook', payload);
    console.log('Webhook sent:', response.data);
  } catch (error) {
    console.error('Error sending webhook:', error.message);
  }
};

sendWebhook();
