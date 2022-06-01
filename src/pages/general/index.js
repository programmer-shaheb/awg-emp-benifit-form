import React, { useEffect, useReducer } from "react";
import { EventNote } from "@mui/icons-material";
import { Grid } from "@mui/material";
import SkeletonDiv from "../../components/skeleton";
import Inputs from "../../components/input";
import RadioBtn from "../../components/input/radio";
import AddMember from "../../components/add-member";
import TableData from "./table";
import "./general.scss";
import {
  inquiryDetailAPI,
  insurerListAPI,
  questionDetailAPI,
} from "../../redux/actions/form-detail";
import { useDispatch, useSelector } from "react-redux";
import { getOrgDetailsAPI } from "../../redux/actions/org-detail";

const General = () => {
  const member1 = [
    {
      num: "1.",
      note: "Note: Participation is voluntary if employees or dependants are given the choice to opt for the cover(s), subject to a minimum participation level.",
      question:
        " Are there any members currently in hospital or requires frequent admission (e.g. hospital admission more than 2 times per year) to hospital?",
    },
    {
      num: "2.",
      note: "Note: The insurer will not reimburse the hospital claims for any member in hospital at the time of application.",
      question:
        "  Has any member suffered or is suffering from any serious condition such as cancer, organ failure, heart disease, stroke, liver disorder, arthritis or any other disorder that causes progressive irreversible functional or physical disability?",
    },
    {
      num: "3.",
      note: "Note: The insurer will not reimburse the hospital claims for any member in hospital at the time of application.",
      question: "Is there any member based outside Singapore?",
    },
    {
      num: "4.",
      note: "Note: The insurer will not reimburse the hospital claims for any member in hospital at the time of application.",
      question:
        "Are there any limitations or exclusions imposed on the coverage on any members?",
    },
    {
      num: "5.",
      note: "Note: The insurer will not reimburse the hospital claims for any member in hospital at the time of application.",
      question: "Is there any member engaged in hazardous occupation? ",
    },
    {
      num: "6.",
      note: "Note: The insurer will not reimburse the hospital claims for any member in hospital at the time of application.",
      question:
        "To the best of your knowledge, is there any member engaged in hazardous sports?",
    },
  ];

  const userForm = [
    {
      id: "request",
      icon: <EventNote />,
      labelName: "REQUEST FOR QUOTATION was submitted on",
      label: "REQUEST FOR QUOTATION was submitted on",
    },
    {
      id: "form",
      labelName: "REQUEST FROM",
      label: "Name of Insurance Company",
    },
  ];

  const userFormB = [
    {
      id: "name",
      labelName: "NAME OF COMPANY",
      label: "Name of Company",
    },
    {
      id: "business",
      labelName: "NATURE OF BUSINESS",
      label: "NATURE OF BUSINESS",
    },
  ];

  const userFormC = [
    {
      id: "insure",
      labelName: "NAME OF CURRENT INSURER",
      label: "Name Of Current Insurer",
    },
    {
      id: "policy",
      labelName: "TYPE OF POLICY",
      label: "Type of Policy",
    },
  ];

  const initialState = {
    request: "",
    from: "",
    name: "",
    business: "",
    radio: "",
    insure: "",
    policy: "",
  };
  const [state, setState] = useReducer((oldProps, newProps) => ({
    ...oldProps,
    ...newProps,
  }));

  const dispatch = useDispatch();
  const { orgDetails, queryParams, recDetails } = useSelector(
    (store) => store.orgReducer
  );
  const { createInsurerList } = useSelector((store) => store.formDetail);

  const id = orgDetails[0].id;

  const {
    potential_id,
    inquiryquestion_id,
    insuranceclass_id,
    parent_insuranceclass_id,
  } = recDetails;

  const organizationDetails = async (instance) => {
    dispatch(getOrgDetailsAPI(instance));
  };

  const insurerList = async (instance) => {
    dispatch(insurerListAPI(instance));
  };

  const inquiryDetails = async (id, instance) => {
    dispatch(inquiryDetailAPI({ id, instance }));
  };

  const questionDetail = async (questionDetailValue) => {
    dispatch(questionDetailAPI(questionDetailValue));
  };

  useEffect(() => {
    if (queryParams) {
      if (queryParams.instance) {
        organizationDetails(queryParams.instance);
        insurerList(queryParams.instance);
      }
    }
  }, [queryParams]);

  useEffect(() => {
    if (id && queryParams) {
      inquiryDetails(id, queryParams.instance);
    }
  }, [id, queryParams]);

  useEffect(() => {
    if (potential_id) {
      questionDetail({
        potential_id,
        inquiryquestion_id,
        insuranceclass_id,
        parent_insuranceclass_id,
        instance: queryParams.instance,
      });
    }
  }, [potential_id]);

  return (
    <SkeletonDiv activeStep={0}>
      <div class="content mt4">
        <h1 className="font-30-bold text-black">
          GROUP INSURANCE FACT-FINDING FORM
        </h1>
        <p className="text-black para-18-regular">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>

        <form className="mt4 form">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Inputs
                icon={<EventNote />}
                labelName="PERIOD OF INSURANCE (FROM)"
                label="PERIOD OF INSURANCE (FROM)"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Inputs
                icon={<EventNote />}
                labelName="PERIOD OF INSURANCE (TO)"
                label="PERIOD OF INSURANCE (TO)"
              />
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={12}>
              <div className="lg-input">
                {userForm?.map((item) => (
                  <Inputs
                    key={item.key}
                    icon={item.icon}
                    onChange={(e) => setState({ [item.id]: e.target.value })}
                    label={item.label}
                    labelName={item.labelName}
                  />
                ))}
              </div>
            </Grid>
            <h2 className="font-20-bold text-primary mt3 ml2 mb1">
              GROUP OUTPATIENT INSURANCE
            </h2>

            <Grid item xs={12} sm={12} md={12} lg={12}>
              <div className="lg-input">
                {userFormB?.map((item) => (
                  <Inputs
                    key={item.key}
                    icon={item.icon}
                    onChange={(e) => setState({ [item.id]: e.target.value })}
                    label={item.label}
                    labelName={item.labelName}
                  />
                ))}
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <div className="lg-input">
                <RadioBtn labelName="PRESENTLY INSURED?" />
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <div className="lg-input">
                {userFormC?.map((item) => (
                  <Inputs
                    key={item.key}
                    icon={item.icon}
                    onChange={(e) => setState({ [item.id]: e.target.value })}
                    label={item.label}
                    labelName={item.labelName}
                  />
                ))}
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Inputs
                icon={<EventNote />}
                labelName="PERIOD OF INSURANCE (FROM)"
                label="PERIOD OF INSURANCE (FROM)"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Inputs
                icon={<EventNote />}
                labelName="PERIOD OF INSURANCE (TO)"
                label="PERIOD OF INSURANCE (TO)"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Inputs
                labelName="TOTAL NO. OF EMPLOYEES"
                label="Total No. Of Employees"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Inputs
                labelName="NO. OF EMPLOYEES TO BE INSURED"
                label="No. Of Employees To Be Insured"
              />
            </Grid>
          </Grid>
        </form>
        <p className="text-black mt3 para-18-regular">
          <b>Participation: </b>The insurer will assume that participation of
          the group insurance program is on compulsory basis unless otherwise
          stated. Please tick accordingly to the choice of the insurance product
          that you like to have a quote from us.
        </p>

        <div className="table mt4">
          <TableData />
        </div>

        <div className="mt4">
          {member1?.map((item) => (
            <AddMember item={item} />
          ))}
        </div>
      </div>
    </SkeletonDiv>
  );
};

export default General;
