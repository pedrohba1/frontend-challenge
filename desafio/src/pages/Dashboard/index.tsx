import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { TweenMax } from 'gsap';
import { api, auth } from '../../services/api';
import Playlist from '../../components/Playlist';

const Dashboard: React.FC = () => {
  const [featured, setFeatured] = useState<PlaylistItem[]>([]);
  const [categories, setCategories] = useState<PlaylistItem[]>([]);

  useEffect(() => {
    const getPlaylists = async () => {
      await auth();
      const res = await api.get<Playlists>('browse/featured-playlists', {
        params: {}
      });
      console.log(res.data);

      setFeatured([...res.data.playlists.items]);
    };

    getPlaylists();
  }, []);

  return (
    <>
      <h1>Featured Playlists</h1>
      <br />
      <Grid container spacing={3}>
        {featured.map((playlist) => (
          <Grid item lg={2} md={4} xs={12}>
            <Playlist key={playlist.id} playlist={playlist} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Dashboard;
