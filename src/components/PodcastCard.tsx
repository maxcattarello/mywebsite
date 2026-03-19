interface Podcast {
  name: string;
  host: string;
  note: string;
  topic: string;
}

export default function PodcastCard({ podcast }: { podcast: Podcast }) {
  return (
    <article className="card podcast-card">
      <div className="card__body">
        <div className="card__header">
          <h3 className="card__title">{podcast.name}</h3>
          <span className="tag">{podcast.topic}</span>
        </div>
        <p className="card__author">Hosted by {podcast.host}</p>
        <p className="card__description">{podcast.note}</p>
      </div>
    </article>
  );
}
