import { comments } from "../data";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const commentFound = comments.find(
    (comment) => comment.id === parseInt(params.id)
  );
  return Response.json(commentFound);
}
