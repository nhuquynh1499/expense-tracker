import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import "./style.css";
import { FormControl, InputAdornment, makeStyles } from "@material-ui/core";

InputField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
};

InputField.defaultProps = {
  type: "text",
};

const useStyles = makeStyles(theme => ({
  input: {
    marginTop: theme.spacing(2)
  },
}));

function InputField(props) {
  const classes = useStyles();
  
  const { field, type, label, placeholder, startAdornment } = props;
  const { name } = field;
  return (
    <FormControl variant="outlined" fullWidth className={classes.input}>
      <TextField
        variant="outlined"
        id={name}
        {...field}
        type={type}
        label={label}
        placeholder={placeholder}
        InputProps={{
          startAdornment:(
            <InputAdornment position="start">
              {startAdornment}
            </InputAdornment>
          )
        }}
        // endAdornment={endAdornment}
      />
    </FormControl>
  );
}

export default InputField;
