import React from "react";
import { Card, CardContent, Button, TextField, Box } from "@mui/material";
import Center from "./Center";

export default function Login() {
  return (
    <Center>
      <Card
        sx={{
          width: "50%",
        }}
      >
        <CardContent>
          <Box
            sx={{
              "& .MuiTextField-root": {
                m: 1,
                width: 400,
              },
            }}
          >
            <form noValidate autoComplete="off">
              <TextField label="Email" name="email" variant="outlined" />
              <TextField label="Name" name="name" variant="outlined" />
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
