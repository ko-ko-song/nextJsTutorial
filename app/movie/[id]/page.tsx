import React from "react";

function Movie({ params: { id } }: { params: { id: string } }) {
  return <div>Movie page {id}</div>;
}

export default Movie;
