import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import "./fixed.scss";

const routes = [
  "/",
  "/group",
  "/insurance",
  "/health",
  "/outpatient",
  "/thankyou",
];

const FixedFooter = () => {
  const dispatch = useDispatch();
  const step = useSelector((state) => state.steps.step);

  let navigate = useNavigate();
  const handleNext = () => {
    const nextStep = step + 1;
    dispatch({
      type: "NEXT_STEP",
      payload: nextStep,
    });
    navigate(routes[nextStep]);
  };

  return (
    <div className="footer">
      <div className="flex fr">
        <div>
          <Button
            variant="contained"
            onClick={handleNext}
            className="round arial font-bold text-capital"
            component="span"
          >
            {" "}
            Next{" "}
          </Button>
        </div>
        <div className="ml4">
          <Button
            variant="text"
            onClick={() => navigate(-1)}
            className="arial font-bold btn-padding text-grey-6 text-capital"
          >
            Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FixedFooter;
