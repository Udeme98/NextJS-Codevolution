import { notFound } from "next/navigation";

type ReviewsDetailsProps = {
  params: {
    productId: string;
    reviewId: string;
  };
};

const ReviewsDetails = ({ params }: ReviewsDetailsProps) => {
  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }
  return (
    <div>
      Review {params.reviewId} for Product {params.productId}
    </div>
  );
};
export default ReviewsDetails;
