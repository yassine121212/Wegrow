import React from "react";
import { Box, Grid, Paper } from "@material-ui/core";
import { styles } from "../common/styles";
import "./step1.css"
import {
  renderButton,
  renderInputField,
  renderSelect,
  renderText,
} from "../common/DisplayComponent";

const Step1 = ({ state, handleChange, handleNext }) => {
  return (
    <Paper style={styles.steps}>
      <Box mt={2} mb={2}>
        {renderText({
          label: "Choisir option",
          type: "h6",
          color: "textPrimary",
          align: "center",
        })}
      </Box>
        <div className="menu1">
          <div className="cat">
            Eau
          </div>
          <div className="cat">
             Electricite
          </div>
        </div>

       
       
        
    </Paper>
  );
};

export default Step1;
