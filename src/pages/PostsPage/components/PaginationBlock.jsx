
function PaginationBlock({
  currentPageNumber,
  totalPagesNumber,
  onPageChange,
}) {
  return (
      <div className="post__pagination pagination">
        {totalPagesNumber > 1 ? (
          <button
            disabled={currentPageNumber === 1}
            onClick={() => onPageChange(currentPageNumber - 1)}
            className="pagination__btn btn"
          >
            Попередня
          </button>
        ) : null}
        {Array.from({ length: totalPagesNumber }).map((_, index) => (
          <button
            key={index}
            onClick={() => onPageChange(index + 1)}
            className={`pagination__btn btn
            ${index + 1 === currentPageNumber ? "btn--active" : ""}
          `}
          >
            {index + 1}
          </button>
        ))}
        {totalPagesNumber > 1 ? (
          <button
            disabled={currentPageNumber === totalPagesNumber}
            onClick={() => onPageChange(currentPageNumber + 1)}
            className="pagination__btn btn"
          >
            Наступна
          </button>
        ) : null}
      </div>
  );
}

export default PaginationBlock;
