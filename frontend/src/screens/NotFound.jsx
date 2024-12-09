import React from "react";
import { Card } from "react-bootstrap";

const NotFound = () => {
  return (
    <>
      <Card className="mt-5">
        <div className="text-center m-5">
          <h1 className="m-3">Sorry {":("}</h1>
          <h2>This page couldn't be found</h2>
        </div>
      </Card>
    </>
  );
};

export default NotFound;
