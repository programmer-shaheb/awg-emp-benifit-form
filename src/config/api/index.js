import axios from "axios";

const API = axios.create({
  baseURL: "https://dev4.agiliux.com/weblink_api",
  headers: {
    Accept: "application/json",
    "Content-type": "application/json",
    "Access-Control-Allow-Credentials": true,
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    "Cache-Control": "no-cache",
    Pragma: "no-cache",
    Expires: "0",
    tenant_id: process.env.REACT_APP_TENANT_ID,
  },
});

export const createInquiryDetail = (detail) =>
  API.post("/inquiry/detail", detail);

export const createInsurerList = (instanceName) =>
  API.post("/insurer/list", { instance: instanceName });

export const createQuestionDetail = (inData) =>
  API.post("/question/question_detail", inData);

export const getOrgDetails = (instanceName) =>
  API.post("/organization/detail", { instance: instanceName });

export const getRecordDetails = (token, instanceName) =>
  API.post("/inquiry/detail_inquiry_weblink", {
    token,
    instance: instanceName,
  });

export const updateInquiry = (inData) => API.post("/inquiry/update", inData);

export const updateInquiryQuestion = (inData) =>
  API.post("/question/question_create", inData);
