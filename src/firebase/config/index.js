const { NODE_ENV } = process.env;

const config = {
  apiKey: NODE_ENV === 'development' ? window.API_KEY : process.env.REACT_APP_API_KEY,
  authDomain: NODE_ENV === 'development' ? window.AUTH_DOMAIN : process.env.REACT_APP_AUTH_DOMAIN,
  projectId: NODE_ENV === 'development' ? window.PROJECT_ID : process.env.REACT_APP_PROJECT_ID,
  storageBucket:
    NODE_ENV === 'development' ? window.STORAGE_BUCKET : process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId:
    NODE_ENV === 'development'
      ? window.MESSAGING_SENDER_ID
      : process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: NODE_ENV === 'development' ? window.APP_ID : process.env.REACT_APP_APP_ID,
};

export default config;
