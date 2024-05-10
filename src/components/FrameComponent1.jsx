import { useMemo } from "react";
import styles from "./FrameComponent1.module.css";

const FrameComponent1 = ({ propFlex, propMinWidth, propAlignSelf }) => {
  const formValidationStyle = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propFlex, propMinWidth]);

  const searchBarStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  return 
  0;  
};

export default FrameComponent1;
