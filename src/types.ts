export type PlaylistId = "abstraction" | "the-basics" | "perfect-programming-process";

export type CodeReference = {
  id: string;
  title: string;
  repo: string;
  branch: string;
  file: string;
  startLine: number;
  endLine: number;
  url: string;
  note: string;
  code: string;
};

export type ArticleSection = {
  heading: string;
  body: string[];
};

export type VideoArticle = {
  id: string;
  playlistId: PlaylistId;
  playlistTitle: string;
  order: number;
  title: string;
  articleTitle: string;
  videoUrl: string;
  thumbnailUrl: string;
  transcriptPath: string;
  lede: string;
  sections: ArticleSection[];
  takeaways: string[];
  codeRefIds: string[];
  concepts: string[];
};

export type Playlist = {
  id: PlaylistId;
  title: string;
  playlistUrl: string;
  description: string;
  videoIds: string[];
};

export type SiteData = {
  playlists: Playlist[];
  videos: VideoArticle[];
  codeReferences: CodeReference[];
};
