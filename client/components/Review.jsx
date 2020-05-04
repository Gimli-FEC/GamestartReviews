function Review({review}) {
  return (
    <li className="review">
      <img src={review.avatar} />
      <p><span>{review.rating_overall}</span>
      <span>{review.rating_overall}</span>
      <span>{review.name}</span>
      <span>{review.age}</span>
      <span>{review.date}</span>
      <span>{review.title}</span>
      <span>{review.body}</span>
      <span>{review.recommended}</span>
      <span>{review.purchase_type}</span>
      <span>{review.rating_overall}</span>
      <span>{review.rating_graphics}</span>
      <span>{review.rating_gameplay}</span>
      <span>{review.rating_appeal}</span>
      </p>
    </li>      
  )
}

export default Review;
