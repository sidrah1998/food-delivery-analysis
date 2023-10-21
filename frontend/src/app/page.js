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
import NativeSelect from "@mui/material/NativeSelect";
import Grid from "@mui/material/Grid";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import CardMedia from "@mui/material/CardMedia";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContentText from "@mui/material/DialogContentText";
import Link from "next/link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Radio from "@mui/material/Radio";

export default function Home() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // User Details
  const [ageValue, setAgeValue] = React.useState("");
  const [msValue, setMsValue] = React.useState("");
  const [occupation, setOccupation] = React.useState("");
  const [miValue, setMiValue] = React.useState("");

  // User Preferences
  const [ecValue, setecValue] = React.useState("");
  const [tsValue, settsValue] = React.useState("");
  const [mrcValue, setmrcValue] = React.useState("");
  const [epoValue, setepoValue] = React.useState("");
  const [modValue, setmodValue] = React.useState("");
  const [gfqValue, setgfqValue] = React.useState("");
  const [gtsValue, setgtsValue] = React.useState("");
  const [mwtValue, setmwtValue] = React.useState("");
  const [ncValue, setncValue] = React.useState("");
  const [delayValue, setdelayValue] = React.useState("");

  const clear = () => {
    setAgeValue("");
    setMsValue("");
    setOccupation("");
    setMiValue("");
    setecValue("");
    settsValue("");
    setmrcValue("");
    setepoValue("");
    setmodValue("");
    setgfqValue("");
    setgtsValue("");
    setmwtValue("");
    setncValue("");
    setdelayValue("");
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundImage: `url(${"/bg.png"})`,
      }}
    >
      <AppBar position="sticky" sx={{ bgcolor: "#f02b2a" }}>
        <Toolbar>
          <DeliveryDiningIcon fontSize="large" />
          <Typography
            variant="h6"
            component="div"
            sx={{
              mx: 3,
              fontWeight: "bold",
              letterSpacing: ".1rem",
              color: "white",
              textDecoration: "none",
            }}
          >
            Food Delivery Analysis
          </Typography>
          <Link href="/" style={{ textDecoration: "none" }}>
            <Typography
              variant="h6"
              component="div"
              noWrap
              sx={{
                mx: 3,
                fontSize: "1.2rem",
                textDecoration: "none",
                color: "white",
              }}
            >
              Prediction
            </Typography>
          </Link>
          <Link
            href="https://public.tableau.com/app/profile/sidrah.ahmad/viz/Fooddeliverysurveydashboard/Dashboard1#1"
            target="_blank"
            style={{ textDecoration: "none", flexGrow: 1 }}
          >
            <Typography
              variant="h6"
              component="div"
              noWrap
              sx={{
                mx: 3,
                fontSize: "1.2rem",
                textDecoration: "none",
                color: "white",
              }}
            >
              Tableau
            </Typography>
          </Link>
          <Chip
            onClick={handleOpen}
            sx={{
              color: "red",
              fontSize: "1.2rem",
              padding: "5px",
              bgcolor: "#ffffff",
              fontWeight: "800",
              background: `rgba(255, 255, 255, 0.8)` /* Green background with 30% opacity */,
            }}
            label="Model"
          ></Chip>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          p: 2,
          mt: 1,
          borderRadius: 1,
        }}
      >
        <Card sx={{ minWidth: "200px", maxWidth: "700px" }}>
          <CardMedia
            component="img"
            height="400"
            image="https://www.jotform.com/blog/wp-content/uploads/2020/05/How-to-start-a-food-delivery-business.png"
            alt="food delivery guy"
            sx={{ objectFit: "fill" }}
          />
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              Predict Re-ordering
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Provide your details to analyze if the person will reorder or not
            </Typography>
            <form>
              <Divider>User Details</Divider>
              <Grid container spacing={2} sx={{ my: 1 }}>
                <Grid
                  item
                  xs={6}
                  md={4}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <TextField
                    id="age"
                    label="Age"
                    variant="standard"
                    sx={{ width: 180 }}
                    value={ageValue}
                    onChange={(e) => setAgeValue(e.target.value)}
                  />
                </Grid>
                <Grid
                  item
                  xs={6}
                  md={4}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <FormControl sx={{ width: 180 }}>
                    <InputLabel id="ms">Marital Status</InputLabel>
                    <NativeSelect
                      labelid="ms"
                      label="Marital Status"
                      value={msValue}
                      onChange={(e) => setMsValue(e.target.value)}
                    >
                      <option value=""></option>
                      <option value={"Married"}>Married</option>
                      <option value={"Single"}>Single (Hinge?)</option>
                    </NativeSelect>
                  </FormControl>
                </Grid>
                <Grid
                  item
                  xs={6}
                  md={4}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <FormControl sx={{ width: 180 }}>
                    <InputLabel id="occ">Occupation</InputLabel>
                    <NativeSelect
                      labelid="occ"
                      label="Occupation"
                      value={occupation}
                      onChange={(e) => setOccupation(e.target.value)}
                    >
                      <option value=""></option>
                      <option value={"Emp"}>Employee</option>
                      <option value={"SM"}>Self-Employeed</option>
                      <option value={"Stu"}>Student</option>
                      <option value={"HW"}>House-wife</option>
                    </NativeSelect>
                  </FormControl>
                </Grid>
                <Grid
                  item
                  xs={6}
                  md={4}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <FormControl sx={{ width: 180 }}>
                    <InputLabel id="mi">Monthly Income</InputLabel>
                    <NativeSelect
                      labelid="mi"
                      label="Monthly Income"
                      value={miValue}
                      onChange={(e) => setMiValue(e.target.value)}
                    >
                      <option value=""></option>
                      <option value={"1"}>No Income</option>
                      <option value={"2"}>Below Rs. 10,000</option>
                      <option value={"3"}>10,001 to 25,000</option>
                      <option value={"4"}> 25,001 to 50,000</option>
                      <option value={"5"}>More than Rs. 50,000</option>
                    </NativeSelect>
                  </FormControl>
                </Grid>
              </Grid>
              <Divider>User Preference</Divider>
              <Grid container spacing={2} sx={{ mt: 1 }}>
                <Grid item xs={12} md={12}>
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell align="center">Option</TableCell>
                          <TableCell align="center">Agree</TableCell>
                          <TableCell align="center">Disagree</TableCell>
                          <TableCell align="center">Neutral</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow>
                          <TableCell align="center">
                            Ease and convenient
                          </TableCell>
                          <TableCell align="center">
                            <Radio
                              value={"1"}
                              checked={ecValue === "1"}
                              onChange={(e) => setecValue(e.target.value)}
                            />
                          </TableCell>
                          <TableCell align="center">
                            <Radio
                              value={"2"}
                              checked={ecValue === "2"}
                              onChange={(e) => setecValue(e.target.value)}
                            />
                          </TableCell>
                          <TableCell align="center">
                            <Radio
                              value={"3"}
                              checked={ecValue === "3"}
                              onChange={(e) => setecValue(e.target.value)}
                            />
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell align="center">Time Saving</TableCell>
                          <TableCell align="center">
                            <Radio
                              value={"1"}
                              checked={tsValue === "1"}
                              onChange={(e) => settsValue(e.target.value)}
                            />
                          </TableCell>
                          <TableCell align="center">
                            <Radio
                              value={"2"}
                              checked={tsValue === "2"}
                              onChange={(e) => settsValue(e.target.value)}
                            />
                          </TableCell>
                          <TableCell align="center">
                            <Radio
                              value={"3"}
                              checked={tsValue === "3"}
                              onChange={(e) => settsValue(e.target.value)}
                            />
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell align="center">
                            More restaurant choices
                          </TableCell>
                          <TableCell align="center">
                            <Radio
                              value={"1"}
                              checked={mrcValue === "1"}
                              onChange={(e) => setmrcValue(e.target.value)}
                            />
                          </TableCell>
                          <TableCell align="center">
                            <Radio
                              value={"2"}
                              checked={mrcValue === "2"}
                              onChange={(e) => setmrcValue(e.target.value)}
                            />
                          </TableCell>
                          <TableCell align="center">
                            <Radio
                              value={"3"}
                              checked={mrcValue === "3"}
                              onChange={(e) => setmrcValue(e.target.value)}
                            />
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell align="center">
                            Easy Payment option
                          </TableCell>
                          <TableCell align="center">
                            <Radio
                              value={"1"}
                              checked={epoValue === "1"}
                              onChange={(e) => setepoValue(e.target.value)}
                            />
                          </TableCell>
                          <TableCell align="center">
                            <Radio
                              value={"2"}
                              checked={epoValue === "2"}
                              onChange={(e) => setepoValue(e.target.value)}
                            />
                          </TableCell>
                          <TableCell align="center">
                            <Radio
                              value={"3"}
                              checked={epoValue === "3"}
                              onChange={(e) => setepoValue(e.target.value)}
                            />
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell align="center">
                            More Offers and Discount
                          </TableCell>
                          <TableCell align="center">
                            <Radio
                              value={"1"}
                              checked={modValue === "1"}
                              onChange={(e) => setmodValue(e.target.value)}
                            />
                          </TableCell>
                          <TableCell align="center">
                            <Radio
                              value={"2"}
                              checked={modValue === "2"}
                              onChange={(e) => setmodValue(e.target.value)}
                            />
                          </TableCell>
                          <TableCell align="center">
                            <Radio
                              value={"3"}
                              checked={modValue === "3"}
                              onChange={(e) => setmodValue(e.target.value)}
                            />
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell align="center">
                            Good Food quality
                          </TableCell>
                          <TableCell align="center">
                            <Radio
                              value={"1"}
                              checked={gfqValue === "1"}
                              onChange={(e) => setgfqValue(e.target.value)}
                            />
                          </TableCell>
                          <TableCell align="center">
                            <Radio
                              value={"2"}
                              checked={gfqValue === "2"}
                              onChange={(e) => setgfqValue(e.target.value)}
                            />
                          </TableCell>
                          <TableCell align="center">
                            <Radio
                              value={"3"}
                              checked={gfqValue === "3"}
                              onChange={(e) => setgfqValue(e.target.value)}
                            />
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell align="center">
                            Good Tracking system
                          </TableCell>
                          <TableCell align="center">
                            <Radio
                              value={"1"}
                              checked={gtsValue === "1"}
                              onChange={(e) => setgtsValue(e.target.value)}
                            />
                          </TableCell>
                          <TableCell align="center">
                            <Radio
                              value={"2"}
                              checked={gtsValue === "2"}
                              onChange={(e) => setgtsValue(e.target.value)}
                            />
                          </TableCell>
                          <TableCell align="center">
                            <Radio
                              value={"3"}
                              checked={gtsValue === "3"}
                              onChange={(e) => setgtsValue(e.target.value)}
                            />
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell align="center">
                            Maximum wait time
                          </TableCell>
                          <TableCell align="center">
                            <Radio
                              value={"1"}
                              checked={mwtValue === "1"}
                              onChange={(e) => setmwtValue(e.target.value)}
                            />
                          </TableCell>
                          <TableCell align="center">
                            <Radio
                              value={"2"}
                              checked={mwtValue === "2"}
                              onChange={(e) => setmwtValue(e.target.value)}
                            />
                          </TableCell>
                          <TableCell align="center">
                            <Radio
                              value={"3"}
                              checked={mwtValue === "3"}
                              onChange={(e) => setmwtValue(e.target.value)}
                            />
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell align="center">Number of calls</TableCell>
                          <TableCell align="center">
                            <Radio
                              value={"1"}
                              checked={ncValue === "1"}
                              onChange={(e) => setncValue(e.target.value)}
                            />
                          </TableCell>
                          <TableCell align="center">
                            <Radio
                              value={"2"}
                              checked={ncValue === "2"}
                              onChange={(e) => setncValue(e.target.value)}
                            />
                          </TableCell>
                          <TableCell align="center">
                            <Radio
                              value={"3"}
                              checked={ncValue === "3"}
                              onChange={(e) => setncValue(e.target.value)}
                            />
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell align="center">
                            Delay of delivery person getting assigned
                          </TableCell>
                          <TableCell align="center">
                            <Radio
                              value={"1"}
                              checked={delayValue === "1"}
                              onChange={(e) => setdelayValue(e.target.value)}
                            />
                          </TableCell>
                          <TableCell align="center">
                            <Radio
                              value={"2"}
                              checked={delayValue === "2"}
                              onChange={(e) => setdelayValue(e.target.value)}
                            />
                          </TableCell>
                          <TableCell align="center">
                            <Radio
                              value={"3"}
                              checked={delayValue === "3"}
                              onChange={(e) => setdelayValue(e.target.value)}
                            />
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Grid>
              </Grid>
            </form>
          </CardContent>
          <CardActions>
            <Button
              onClick={clear}
              variant="contained"
              color="error"
              sx={{ marginLeft: "auto" }}
            >
              Clear
            </Button>
            <Button variant="contained" sx={{ marginLeft: "auto" }}>
              🥡 Predict
            </Button>
          </CardActions>
        </Card>
      </Box>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Model Summary"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Idhar modal ka summary aayega
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Got It
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
