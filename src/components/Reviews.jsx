import "../Reviews.css"; // Asegúrate de crear un archivo CSS para las reseñas

const Reviews = ({ reviews }) => {
  return (
    <div className="reviews-section">
      <h3>Reseñas</h3>
      {reviews.length > 0 ? (
        reviews.map((review, index) => (
          <div key={index} className="review">
            <p>
              <strong>{review.user}</strong>: {review.comment}
            </p>
            <p>Rating: {review.rating} / 5</p>
          </div>
        ))
      ) : (
        <p>No hay reseñas aún.</p>
      )}
    </div>
  );
};

export default Reviews;
