interface Book {
  title: string;
  author: string;
  note: string;
  genre: string;
}

export default function BookCard({ book }: { book: Book }) {
  return (
    <article className="card book-card">
      <div className="card__body">
        <div className="card__header">
          <h3 className="card__title card__title--display">
            <em>{book.title}</em>
          </h3>
          <span className="tag tag--genre">{book.genre}</span>
        </div>
        <p className="card__author">{book.author}</p>
        <p className="card__description">{book.note}</p>
      </div>
    </article>
  );
}
