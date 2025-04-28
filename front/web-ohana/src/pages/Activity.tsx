import React from "react";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";

function Activity() {
  const { id } = useParams<{ id: string }>();

  return (
    <>
      <Navbar />

      <main>
        {" "}
        <h1>Taller {id}</h1>
      </main>
    </>
  );
}

export default Activity;
