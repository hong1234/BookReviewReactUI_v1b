import React from 'react';

const BookDetail = ({state, dispatch}) => {

  if (!state.showDetail) {
    return null;
  }

  console.log('book-detail rendering ..')
  return (
    <div>
      <div className="card text-white bg-success mb-3">
        <div className="card-header">Detail</div>
        <div className="card-body">
          <h5 className="card-title">Title: {state.book.title}</h5>
          <p className="card-text">Content: {state.book.content}</p>
          <button type="button" onClick={() => dispatch({type: 'showReviewForm', payload: !state.showReviewForm})} className="btn btn-secondary">{
            state.showReviewForm ? ( "Remove ReviewForm" ) : ( "Add Review")
          }</button>
          <br/><br/>
          <h5 className="card-text">Reviews:</h5>
          {state.book.reviews.map((review) =><p key={review.id} className="">{review.email} - {review.content}</p>)}
        </div>
      </div>
    </div>
  )
}

export default BookDetail;