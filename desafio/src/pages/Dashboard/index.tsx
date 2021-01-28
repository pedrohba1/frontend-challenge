import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { TweenMax } from 'gsap';
import { motion } from 'framer-motion';
import { api, auth } from '../../services/api';
import Playlist from '../../components/Playlist';

import MediaPlayer from '../../components/MediaPlayer';
import { Container } from './style';

const Dashboard: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

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
    <Container>
      <h1>Featured Playlists</h1>
      <br />
      <Grid container spacing={3}>
        {featured.map((playlist) => (
          <Grid item lg={2} md={4} xs={12}>
            <Playlist key={playlist.id} playlist={playlist} />
          </Grid>
        ))}
      </Grid>
      <MediaPlayer />
    </Container>
  );
};

export default Dashboard;
