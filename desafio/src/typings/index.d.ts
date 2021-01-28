interface Playlists {
  playlists: { items: Arra<PlaylistItem> };
}

interface PlaylistItem {
  description: string;
  external_urls: {
    href: string;
    id: string;
  };
  id: string;
  images: Array<Image>;
}

interface PlaylistProp {
  playlist: PlaylistItem;
}

interface Image {
  heigh: number;
  width: number;
  url: string;
}
