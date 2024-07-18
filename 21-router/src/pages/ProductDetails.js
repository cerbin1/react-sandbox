import { Link, useParams } from "react-router-dom";

export default function ProductDetailsPage() {
  const params = useParams();

  return (
    <>
      <h1>Product Details</h1>

      <p>{params.id}</p>
      <Link to=".." relative="path">
        Back
      </Link>
    </>
  );
}
