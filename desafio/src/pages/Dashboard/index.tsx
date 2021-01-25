import React, { useEffect } from 'react';
import { api, auth } from '../../services/api';

const Dashboard: React.FC = () => {
  useEffect(() => {
    const getFeatured = async () => {
      await auth();
      const res = await api.get('browse/featured-playlists');
      console.log(res);
    };

    getFeatured();
  });

  return <h1> dashboard</h1>;
};

export default Dashboard;
