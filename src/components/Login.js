import React from "react";
import {
  Card,
  CardContent,
  Button,
  TextField,
  Box,
  Typography,
} from "@mui/material";
import Center from "./Center";
import useForm from "../hooks/useForm";

const getFreshModelObject = () => ({
  email: "",
  name: "",
});

export default function Login() {
  const { values, setValues, errors, setErrors, handleInputChange } =
    useForm(getFreshModelObject);

  const login = (e) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <Center>
      <Card
        sx={{
          width: 400,
        }}
      >
        <CardContent sx={{ textAlign: "center" }}>
          <Typography variant="h3" sx={{ my: 3 }}>
            Quizz
          </Typography>
          <Typography variant="h5" sx={{ my: 3 }}>
            Please, login to your account
          </Typography>
          <Box
            sx={{
              "& .MuiTextField-root": {
                m: 1,
                width: "90%",
              },
            }}
          >
            <form noValidate autoComplete="off" onSubmit={login}>
              <TextField
                label="Email"
                name="email"
                value={values.email}
                onChange={handleInputChange}
                variant="outlined"
              />
              <TextField
                label="Name"
                name="name"
                value={values.name}
                onChange={handleInputChange}
                variant="outlined"
              />
              <Button
                type="submit"
                variant="contained"
                size="large"
                sx={{
                  m: 1,
                  width: "90%",
                }}
              >
                Start
              </Button>
            </form>
          </Box>
        </CardContent>
      </Card>
    </Center>
  );
}
