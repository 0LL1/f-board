import React from "react";
import { useSelector } from "react-redux";
import String from "./String";
import { RootState } from "../helpers/state";
import { StyledFingerboard } from "../helpers/styles";

const FingerBoard: React.FC = () => {
  const { instrument } = useSelector((state: RootState) => {
    return {
      instrument: state.instrument,
    };
  });

  const strings = instrument.map((tuning, index) => (
    <String key={index} index={index} tuning={tuning} />
  ));
  return (
    <StyledFingerboard data-test="fingerboard">{strings}</StyledFingerboard>
  );
};

export default FingerBoard;
