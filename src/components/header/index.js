import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import "./header.scss";
import { useLocation } from "react-router";
import { useDispatch } from "react-redux";
import { setParamsFromURL } from "../../redux/actions/org-detail";

const TopNav = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const [urlQueryParams, setURLQueryParams] = useState(null);

  useEffect(() => {
    if (location.search) {
      const search = location.search.split("&")[1];
      if (search.length) {
        const queryParams = {};
        search.forEach((queryParam) => {
          const paramValue = queryParam.split("=");
          if (paramValue.length) {
            queryParams[paramValue[0]] = paramValue[1];
          }
        });
        setURLQueryParams(queryParams);
      }
    }
  }, [location]);

  useEffect(() => {
    if (urlQueryParams) {
      dispatch(setParamsFromURL(urlQueryParams));
    }
  }, [urlQueryParams]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={7} lg={7}>
        <div className="logo">
          <img src="/images/logo.png" />
        </div>
      </Grid>
      <Grid item xs={12} sm={6} md={5} lg={5}>
        <div className="company-info">
          <h1 className="font-24-bold ma0">AWG INSURANCE BROKERS PTE LTD</h1>
          <p className="para-14 text-black">
            BUSINESS REGISTRATION NO: 199002234G GST NO: 199002234G 240
            Macpherson Road #08-01, Pines Building, Singapore 348574 Tel: 65
            6294 6688 / Fax: 65 6282 6188 / Email: awg@awginsurance.com
          </p>
        </div>
      </Grid>
    </Grid>
  );
};

export default TopNav;
