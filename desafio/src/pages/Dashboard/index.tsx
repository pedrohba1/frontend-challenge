import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { api, auth } from '../../services/api';
import Playlist from '../../components/Playlist';

const Dashboard: React.FC = () => {
  const [playlists, setPlaylists] = useState<PlaylistItem[]>([]);

  useEffect(() => {
    const getFeatured = async () => {
      await auth();
      const res = await api.get<Playlists>('browse/featured-playlists', {
        params: {}
      });
      console.log(res.data);
      setPlaylists([...res.data.playlists.items]);
    };

    getFeatured();
  }, []);

  return (
    <>
      <h1>Featured Playlists</h1>
      <Grid container spacing={3}>
        {playlists.map((playlist) => (
          <Grid item lg={2} md={4} xs={12}>
            <Playlist key={playlist.id} playlist={playlist} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Dashboard;
