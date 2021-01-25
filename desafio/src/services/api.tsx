import axios from 'axios';
import env from 'react-dotenv';

const clientId = env.CLIENT_ID || '';
const clientSecret = env.CLIENT_SECRET || '';
if (clientId === null || clientSecret === null) {
  // eslint-disable-next-line
  console.log('missing credentials');
}

const encodedData = Buffer.from(`${clientId}:${clientSecret}`).toString(
  'base64'
);

const api = axios.create({
  baseURL: 'https://api.spotify.com/v1/'
});

const auth = async () => {
  const params = new URLSearchParams();
  params.append('grant_type', 'client_credentials');
  const res = await axios.post(
    'https://accounts.spotify.com/api/token',
    params,
    {
      params: {
        grant_type: 'client_credentials'
      },
      headers: {
        Authorization: `Basic ${encodedData}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
  );
  const { access_token } = res.data;
  api.defaults.headers.Authorization = `Bearer ${access_token}`;
};

export { auth, api };
