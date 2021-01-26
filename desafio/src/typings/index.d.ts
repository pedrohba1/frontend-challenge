interface Playlists {
  playlists: { items: Arra<PlaylistItem> };
}

interface PlaylistItem {
  description: string;
  external_urls: {
    href: string;
    id: string;
  };
  images: Array<Image>;
}

interface Image {
  heigh: string;
  width: string;
  url: string;
}
