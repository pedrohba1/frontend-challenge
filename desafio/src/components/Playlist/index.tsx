import React, { useEffect, useState } from 'react';
import { api, auth } from '../../services/api';

import { Container } from './style';

const Playlist: React.FC<PlaylistProp> = ({ playlist }) => {
  return (
    <Container>
      <img src={playlist.images[0].url} alt={playlist?.description} />
    </Container>
  );
};

export default Playlist;
