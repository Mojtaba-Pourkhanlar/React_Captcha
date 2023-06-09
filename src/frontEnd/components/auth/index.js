import { useState } from "react";
import {
  Alert,
  Box,
  Button,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import DivLayout from "../../helpers/DivLayout";
import { Captcha } from "../captcha";
import { box, divLayout } from "../../styles";

export const LoginComponents = () => {
  // Snackbar
  const [open, setOpen] = useState(false);
  // Username , Password , Captcha
  const [captchaMatch, setCaptchaMatch] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [userNameError, setUserNameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [captchaError, setCaptchaError] = useState(false);

  const [userNameHelper, setUserNameHelper] = useState("");
  const [passwordHelper, setPasswordHelper] = useState("");
  const [captchaHelper, setCaptchaHelper] = useState("");

  const setUserNameInput = (event) => {
    let number = event.target.value.trim();
    setUserName(number);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleSubmit = () => {
    let error = false;
    if (userName.length < 6) {
      setUserNameHelper("The characters should be more than 6");
      setUserNameError(true);
      error = true;
    }
    if (password.length < 6) {
      setPasswordHelper("The characters should be more than 6");
      setPasswordError(true);
      error = true;
    }
    if (!captchaMatch) {
      setCaptchaHelper("The entered value is not correct");
      setCaptchaError(true);
      error = true;
    }
    if (!error) {
      setOpen(true);
    }
  };

  return (
    <DivLayout style={divLayout}>
      <Box sx={box}>
        <Typography variant="h3">Login_Captcha</Typography>

        <div>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            onChange={(e) => {
              setUserNameInput(e);
              setUserNameError(false);
              setUserNameHelper("");
            }}
            error={userNameError}
            helperText={userNameHelper}
          />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            sx={{ mt: "15px" }}
            onChange={(e) => {
              setPassword(e.target.value);
              setPasswordError(false);
              setPasswordHelper("");
            }}
            error={passwordError}
            helperText={passwordHelper}
          />
          <Captcha
            placeholder={""}
            length={5}
            onChange={(match) => {
              setCaptchaMatch(match);
              setCaptchaError(false);
              setCaptchaHelper("");
            }}
            onRefresh={() => {
              setCaptchaMatch(false);
              setCaptchaError(false);
              setCaptchaHelper("");
            }}
            helper={captchaHelper}
            error={captchaError}
          />
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            sx={{ mt: "30px", height: "50px" }}
            onClick={handleSubmit}
          >
            Login
          </Button>
        </div>
      </Box>

      <div>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Login Successfully!
          </Alert>
        </Snackbar>
      </div>
    </DivLayout>
  );
};
