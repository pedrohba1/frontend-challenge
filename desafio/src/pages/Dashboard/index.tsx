import React, { useEffect, useState } from 'react';
import { api, auth } from '../../services/api';

const Dashboard: React.FC = () => {
  const [playlists, setPlaylists] = useState<Playlists[]>([]);

  useEffect(() => {
    const getFeatured = async () => {
      await auth();
      const res = await api.get<Playlists>('browse/featured-playlists');
      console.log(res.data.playlists.items);
      setPlaylists([...res.data.playlists.items]);
    };

    getFeatured();
  }, []);

  return <h1> dashboard</h1>;
};

export default Dashboard;
