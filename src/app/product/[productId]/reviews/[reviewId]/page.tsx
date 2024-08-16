type ReviewsDetailsProps = {
  params: {
    productId: string;
    reviewId: string;
  };
};

const ReviewsDetails = ({ params }: ReviewsDetailsProps) => {
  return (
    <div>
      Review {params.reviewId} for Product {params.productId}
    </div>
  );
};
export default ReviewsDetails;
