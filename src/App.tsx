import {
  Archive,
  BookOpen,
  CheckCircle2,
  Code2,
  ExternalLink,
  Github,
  Library,
  ListTree,
  PlayCircle,
  Search,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { siteData } from "./data/siteData";
import type { CodeReference, Playlist, VideoArticle } from "./types";
import { cx, highlightText, normalize } from "./utils/text";

type ViewMode = "article" | "code";

const repoProfileUrl = "https://github.com/programming2point0?tab=repositories";

function initialVideoId() {
  const hash = window.location.hash.replace("#", "");
  return siteData.videos.some((video) => video.id === hash)
    ? hash
    : siteData.videos[0]?.id ?? "";
}

export default function App() {
  const [selectedVideoId, setSelectedVideoId] = useState(initialVideoId);
  const [query, setQuery] = useState("");
  const [viewMode, setViewMode] = useState<ViewMode>("article");

  const selectedVideo = useMemo(
    () => siteData.videos.find((video) => video.id === selectedVideoId) ?? siteData.videos[0],
    [selectedVideoId],
  );

  const selectedRefs = useMemo(
    () => codeRefsForVideo(selectedVideo),
    [selectedVideo],
  );

  const searchResults = useMemo(() => {
    const term = normalize(query);
    if (!term) return [];

    return siteData.videos
      .map((video) => {
        const refs = codeRefsForVideo(video);
        const articleText = [
          video.title,
          video.lede,
          video.concepts.join(" "),
          video.sections.map((section) => `${section.heading} ${section.body.join(" ")}`).join(" "),
          video.takeaways.join(" "),
          refs.map((ref) => `${ref.title} ${ref.note} ${ref.code}`).join(" "),
        ].join(" ");
        return {
          video,
          score: normalize(articleText).includes(term) ? 1 : 0,
        };
      })
      .filter((result) => result.score > 0);
  }, [query]);

  function selectVideo(id: string) {
    setSelectedVideoId(id);
    setViewMode("article");
    window.history.replaceState(null, "", `#${id}`);
  }

  useEffect(() => {
    const onHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (siteData.videos.some((video) => video.id === hash)) {
        setSelectedVideoId(hash);
      }
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return (
    <div className="app">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Programming 2.0 Notes home">
          <span className="brand-mark">2.0</span>
          <span>Programming 2.0 Notes</span>
        </a>
        <nav className="topnav" aria-label="Primary">
          <button
            className={cx("nav-button", viewMode === "article" && "is-active")}
            onClick={() => setViewMode("article")}
            type="button"
          >
            <BookOpen size={18} />
            Reader
          </button>
          <button
            className={cx("nav-button", viewMode === "code" && "is-active")}
            onClick={() => setViewMode("code")}
            type="button"
          >
            <Code2 size={18} />
            Code Map
          </button>
          <a className="nav-button" href={repoProfileUrl} target="_blank" rel="noreferrer">
            <Github size={18} />
            Repos
          </a>
        </nav>
        <label className="searchbox">
          <Search size={18} />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search articles and code..."
          />
        </label>
      </header>

      <div className="layout" id="top">
        <PlaylistRail selectedVideoId={selectedVideo.id} onSelectVideo={selectVideo} />

        <main className="reader" aria-live="polite">
          {query.trim() && (
            <SearchResults
              query={query}
              results={searchResults}
              selectedVideoId={selectedVideo.id}
              onSelectVideo={selectVideo}
            />
          )}

          {viewMode === "article" && (
            <ArticleView
              video={selectedVideo}
              refs={selectedRefs}
              query={query}
            />
          )}

          {viewMode === "code" && <CodeMapView selectedVideo={selectedVideo} />}
        </main>

        <aside className="reference-rail" aria-label="Code references">
          <ReferenceRail video={selectedVideo} refs={selectedRefs} onShowCode={() => setViewMode("code")} />
        </aside>
      </div>
    </div>
  );
}

function PlaylistRail({
  selectedVideoId,
  onSelectVideo,
}: {
  selectedVideoId: string;
  onSelectVideo: (id: string) => void;
}) {
  return (
    <aside className="playlist-rail" aria-label="Playlists">
      <div className="rail-heading">
        <ListTree size={17} />
        <span>Playlists</span>
      </div>
      {siteData.playlists.map((playlist) => (
        <PlaylistGroup
          key={playlist.id}
          playlist={playlist}
          selectedVideoId={selectedVideoId}
          onSelectVideo={onSelectVideo}
        />
      ))}
      <div className="stats-card">
        <Archive size={18} />
        <p>10 videos, 3 playlists, connected to the original code.</p>
      </div>
    </aside>
  );
}

function PlaylistGroup({
  playlist,
  selectedVideoId,
  onSelectVideo,
}: {
  playlist: Playlist;
  selectedVideoId: string;
  onSelectVideo: (id: string) => void;
}) {
  const videos = playlist.videoIds
    .map((id) => siteData.videos.find((video) => video.id === id))
    .filter(Boolean) as VideoArticle[];

  return (
    <section className="playlist-group">
      <a className="playlist-title" href={playlist.playlistUrl} target="_blank" rel="noreferrer">
        <Library size={17} />
        <span>{playlist.title}</span>
        <ExternalLink size={14} />
      </a>
      <p>{playlist.description}</p>
      <div className="video-list">
        {videos.map((video) => (
          <button
            key={video.id}
            type="button"
            className={cx("video-row", selectedVideoId === video.id && "is-selected")}
            onClick={() => onSelectVideo(video.id)}
          >
            <span className="video-number">{String(video.order).padStart(2, "0")}</span>
            <span className="video-row-text">
              <span>{video.title}</span>
              <small>Article</small>
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}

function SearchResults({
  query,
  results,
  selectedVideoId,
  onSelectVideo,
}: {
  query: string;
  results: Array<{ video: VideoArticle; score: number }>;
  selectedVideoId: string;
  onSelectVideo: (id: string) => void;
}) {
  return (
    <section className="search-results">
      <div>
        <strong>{results.length}</strong> result{results.length === 1 ? "" : "s"} for "{query}"
      </div>
      <div className="search-result-list">
        {results.map(({ video }) => (
          <button
            type="button"
            key={video.id}
            className={cx("search-result", selectedVideoId === video.id && "is-selected")}
            onClick={() => onSelectVideo(video.id)}
          >
            <span>{video.playlistTitle}</span>
            <strong>{video.title}</strong>
          </button>
        ))}
      </div>
    </section>
  );
}

function ArticleView({
  video,
  refs,
  query,
}: {
  video: VideoArticle;
  refs: CodeReference[];
  query: string;
}) {
  return (
    <article className="article">
      <div className="article-hero">
        <img src={video.thumbnailUrl} alt="" />
        <div>
          <div className="crumbs">
            <span>{video.playlistTitle}</span>
            <span>Video {String(video.order).padStart(2, "0")}</span>
          </div>
          <h1>{highlightText(video.articleTitle, query)}</h1>
          <p className="lede">{highlightText(video.lede, query)}</p>
          <div className="meta-row">
            <span>
              <BookOpen size={16} />
              Article
            </span>
            <span>
              <CheckCircle2 size={16} />
              Adapted from video material
            </span>
            <a href={video.videoUrl} target="_blank" rel="noreferrer">
              <PlayCircle size={16} />
              Watch video
            </a>
          </div>
        </div>
      </div>

      <div className="concept-strip">
        {video.concepts.map((concept) => (
          <span key={concept}>{concept}</span>
        ))}
      </div>

      <section className="note-box">
        <CheckCircle2 size={19} />
        <p>Adapted into a written guide and checked against the public code references for this lesson.</p>
      </section>

      <div className="article-body">
        {video.sections.map((section) => (
          <section key={section.heading}>
            <h2>{highlightText(section.heading, query)}</h2>
            {section.body.map((paragraph) => (
              <p key={paragraph}>{highlightText(paragraph, query)}</p>
            ))}
          </section>
        ))}
      </div>

      <section className="takeaways">
        <h2>Key Takeaways</h2>
        <ul>
          {video.takeaways.map((takeaway) => (
            <li key={takeaway}>{highlightText(takeaway, query)}</li>
          ))}
        </ul>
      </section>

      {refs.length > 0 && (
        <section className="inline-code-overview">
          <h2>Code Connected To This Article</h2>
          <div className="ref-grid">
            {refs.map((ref) => (
              <a key={ref.id} href={ref.url} target="_blank" rel="noreferrer">
                <Code2 size={18} />
                <span>
                  <strong>{ref.title}</strong>
                  <small>
                    {ref.repo}/{ref.file}
                  </small>
                </span>
              </a>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}

function CodeMapView({ selectedVideo }: { selectedVideo: VideoArticle }) {
  const selectedIds = new Set(selectedVideo.codeRefIds);
  const grouped = siteData.codeReferences.reduce<Record<string, CodeReference[]>>((acc, ref) => {
    acc[ref.repo] = acc[ref.repo] ? [...acc[ref.repo], ref] : [ref];
    return acc;
  }, {});

  return (
    <section className="code-map">
      <div className="code-map-header">
        <div>
          <div className="crumbs">
            <span>Programming 2.0</span>
            <span>Code Map</span>
          </div>
          <h1>Code Map</h1>
          <p>
            Exact snippets from public repositories, grouped by repo and linked to the branch and line
            range used by the articles.
          </p>
        </div>
      </div>

      {Object.entries(grouped).map(([repo, refs]) => (
        <section className="repo-section" key={repo}>
          <h2>
            <Github size={20} />
            {repo}
          </h2>
          <div className="code-card-stack">
            {refs.map((ref) => (
              <CodeCard key={ref.id} refData={ref} isActive={selectedIds.has(ref.id)} />
            ))}
          </div>
        </section>
      ))}
    </section>
  );
}

function ReferenceRail({
  video,
  refs,
  onShowCode,
}: {
  video: VideoArticle;
  refs: CodeReference[];
  onShowCode: () => void;
}) {
  return (
    <div className="rail-inner">
      <div className="rail-heading">
        <Code2 size={17} />
        <span>Code & References</span>
      </div>
      <div className="reference-links">
        <a href={video.videoUrl} target="_blank" rel="noreferrer">
          <PlayCircle size={16} />
          Video
          <ExternalLink size={13} />
        </a>
        <a href={repoProfileUrl} target="_blank" rel="noreferrer">
          <Github size={16} />
          Repos
          <ExternalLink size={13} />
        </a>
      </div>

      <button className="rail-action" type="button" onClick={onShowCode}>
        Open full code map
      </button>

      <div className="code-card-stack compact">
        {refs.length > 0 ? (
          refs.map((ref) => <CodeCard key={ref.id} refData={ref} compact />)
        ) : (
          <p className="empty-note">No exact code snippets are mapped to this article yet.</p>
        )}
      </div>
    </div>
  );
}

function CodeCard({
  refData,
  compact = false,
  isActive = false,
}: {
  refData: CodeReference;
  compact?: boolean;
  isActive?: boolean;
}) {
  const lines = refData.code.split("\n");

  return (
    <article className={cx("code-card", compact && "is-compact", isActive && "is-active")}>
      <header>
        <div>
          <strong>{refData.title}</strong>
          <span>
            {refData.repo} / {refData.branch} / {refData.file}
          </span>
        </div>
        <a href={refData.url} target="_blank" rel="noreferrer" aria-label={`Open ${refData.title}`}>
          <ExternalLink size={16} />
        </a>
      </header>
      <p>{refData.note}</p>
      <pre>
        {lines.map((line, index) => (
          <span className="code-line" key={`${refData.id}-${index}`}>
            <span className="line-number">{refData.startLine + index}</span>
            <code>{line || " "}</code>
          </span>
        ))}
      </pre>
    </article>
  );
}

function codeRefsForVideo(video: VideoArticle) {
  const ids = new Set(video.codeRefIds);
  return siteData.codeReferences.filter((ref) => ids.has(ref.id));
}
