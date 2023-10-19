"use client";
import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";

export default function Home() {
  const [msValue, setMsValue] = React.useState("");
  const [occupation, setOccupation] = React.useState("");
  const [miValue, setMiValue] = React.useState("");

  const handleMsChange = (event) => {
    setMsValue(event.target.value);
  };

  const handleOccupationChange = (event) => {
    setOccupation(event.target.value);
  };

  const handleMiChange = (event) => {
    setMiValue(event.target.value);
  };

  return (
    <Box sx={{ flexGrow: 1, bgcolor: "#efefef", height: "100vh" }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Food Delivery Analysis
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          p: 1,
          m: 1,
          borderRadius: 1,
        }}
      >
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Predict Re-ordering
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Provide your details to analysis if the person will reorder or not
            </Typography>
            <form>
              {/* First Row */}
              <Grid container spacing={2}>
                <Grid item xs={6} md={4}>
                  <TextField
                    id="age"
                    label="Age"
                    variant="outlined"
                    sx={{ width: 180 }}
                  />
                </Grid>
                <Grid item xs={6} md={4}>
                  <FormControl sx={{ width: 180 }}>
                    <InputLabel id="ms">Marital Status</InputLabel>
                    <Select
                      labelId="ms"
                      label="Marital Status"
                      value={msValue}
                      onChange={handleMsChange}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Married</MenuItem>
                      <MenuItem value={20}>Single (Hinge?)</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={6} md={4}>
                  <FormControl sx={{ width: 180 }}>
                    <InputLabel id="occ">Occupation</InputLabel>
                    <Select
                      labelId="occ"
                      label="Occupation"
                      value={occupation}
                      onChange={handleOccupationChange}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={1}>Employee</MenuItem>
                      <MenuItem value={2}>Self-Employeed</MenuItem>
                      <MenuItem value={3}>Student</MenuItem>
                      <MenuItem value={5}>House-wife</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
              {/* Second Row */}
              <Grid container spacing={2} sx={{ mt: 1 }}>
                <Grid item xs={6} md={4}>
                  <FormControl sx={{ width: 180 }}>
                    <InputLabel id="mi">Monthly Income</InputLabel>
                    <Select
                      labelId="mi"
                      label="Monthly Income"
                      value={miValue}
                      onChange={handleMiChange}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>No Income</MenuItem>
                      <MenuItem value={20}>Below Rs. 10,000</MenuItem>
                      <MenuItem value={20}>More than Rs. 5,000</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={6} md={4}>
                  <FormControl sx={{ width: 180 }}>
                    <InputLabel id="ms">Marital Status</InputLabel>
                    <Select
                      labelId="ms"
                      label="Marital Status"
                      value={msValue}
                      onChange={handleMsChange}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Married</MenuItem>
                      <MenuItem value={20}>Single (Hinge?)</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={6} md={4}>
                  <FormControl sx={{ width: 180 }}>
                    <InputLabel id="occ">Occupation</InputLabel>
                    <Select
                      labelId="occ"
                      label="Occupation"
                      value={occupation}
                      onChange={handleOccupationChange}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={1}>Employee</MenuItem>
                      <MenuItem value={2}>Self-Employeed</MenuItem>
                      <MenuItem value={3}>Student</MenuItem>
                      <MenuItem value={5}>House-wife</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </form>
            {/*
Monthly Income                                0
Ease and convenient                           1
Time saving                                   1
More restaurant choices                       0
Easy Payment option                           0
More Offers and Discount                      1
Good Food quality                             0
Good Tracking system                          1
Delay of delivery person getting assigned     0
Maximum wait time                            60
Number of calls                               0 */}
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              color="success"
              sx={{ marginLeft: "auto" }}
            >
              Submit
            </Button>
          </CardActions>
        </Card>
      </Box>
    </Box>
  );
}
