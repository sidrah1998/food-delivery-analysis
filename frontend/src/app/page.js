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
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Home() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [showAlert, setshowAlert] = React.useState(false);

  // User Details
  const [ageValue, setAgeValue] = React.useState("");
  const [msValue, setMsValue] = React.useState("");
  const [occupation, setOccupation] = React.useState("");
  const [miValue, setMiValue] = React.useState("");
  const [resValue, setresValue] = React.useState(null);

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
  const [politeValue, setpoliteValue] = React.useState("");

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
    setpoliteValue("");
    setshowAlert(false);
  };

  const handleSubmit = async () => {
    setshowAlert(false);
    if (
      ecValue === "" ||
      tsValue === "" ||
      mrcValue === "" ||
      epoValue === "" ||
      modValue === "" ||
      gfqValue === "" ||
      gtsValue === "" ||
      mwtValue === "" ||
      ncValue === "" ||
      politeValue === "" ||
      delayValue === ""
    ) {
      setshowAlert(true);
      return;
    }
    const data = {
      age: ageValue,
      martial_status: msValue,
      occupation: occupation,
      monthly_income: miValue,
      ease_convenient: ecValue,
      max_wait_time: mwtValue,
      time_saving: tsValue,
      more_res_choices: mrcValue,
      easy_pay_opt: epoValue,
      more_offers_and_dis: modValue,
      good_food_quality: gfqValue,
      good_tracking_system: gtsValue,
      number_calls: ncValue,
      delay_person: delayValue,
      politeness: politeValue,
    };
    const res = await fetch("http://localhost:8000/api/get-results", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const pred = await res.json();

    setresValue(pred.results);
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
            {showAlert && (
              <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                All fields are mandatory — <strong>check it out!</strong>
              </Alert>
            )}
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
                      <option value={"0"}>Married</option>
                      <option value={"1"}>Single (Hinge?)</option>
                      <option value={"2"}>Prefer not to say</option>
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
                      <option value={"1"}>Employeed</option>
                      <option value={"0"}>Unemployeed</option>
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
                      <option value={"1"}>Yes</option>
                      <option value={"0"}>No</option>
                    </NativeSelect>
                  </FormControl>
                </Grid>
              </Grid>
              <Divider>User Preference</Divider>
              <Typography gutterBottom variant="h6" component="div">
                Will these options affect your next order?
              </Typography>
              <Grid
                container
                spacing={2}
                sx={{ mt: 1, p: 0, display: "flex", justifyContent: "center" }}
              >
                <Grid
                  item
                  xs={6}
                  md={4}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <FormControl sx={{ width: 180 }}>
                    <InputLabel id="mwt">Maximum wait time</InputLabel>
                    <NativeSelect
                      labelid="mwt"
                      label="Maximum wait time"
                      value={mwtValue}
                      onChange={(e) => setmwtValue(e.target.value)}
                    >
                      <option value=""></option>
                      <option value={"15"}>15 Mins</option>
                      <option value={"30"}>30 Mins</option>
                      <option value={"45"}>45 Mins</option>
                      <option value={"60"}>60 Mins</option>
                      <option value={"70"}>More than 60 Mins</option>
                    </NativeSelect>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={12} sx={{ p: 0 }}>
                  <TableContainer>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell align="center">Option</TableCell>
                          <TableCell align="center">Agree</TableCell>
                          <TableCell align="center">Neutral</TableCell>
                          <TableCell align="center">Disagree</TableCell>
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
                              value={"0"}
                              checked={ecValue === "0"}
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
                              value={"0"}
                              checked={tsValue === "0"}
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
                              value={"0"}
                              checked={mrcValue === "0"}
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
                              value={"0"}
                              checked={epoValue === "0"}
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
                              value={"0"}
                              checked={modValue === "0"}
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
                              value={"0"}
                              checked={gfqValue === "0"}
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
                              value={"0"}
                              checked={gtsValue === "0"}
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
                              value={"0"}
                              checked={ncValue === "0"}
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
                              value={"0"}
                              checked={delayValue === "0"}
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
                        </TableRow>
                        <TableRow>
                          <TableCell align="center">Politeness</TableCell>
                          <TableCell align="center">
                            <Radio
                              value={"1"}
                              checked={politeValue === "1"}
                              onChange={(e) => setpoliteValue(e.target.value)}
                            />
                          </TableCell>
                          <TableCell align="center">
                            <Radio
                              value={"0"}
                              checked={politeValue === "0"}
                              onChange={(e) => setpoliteValue(e.target.value)}
                            />
                          </TableCell>
                          <TableCell align="center">
                            <Radio
                              value={"2"}
                              checked={politeValue === "2"}
                              onChange={(e) => setpoliteValue(e.target.value)}
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
            <Button
              variant="contained"
              sx={{ marginLeft: "auto" }}
              onClick={handleSubmit}
            >
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

      <Modal
        open={resValue !== null}
        onClose={() => setresValue(null)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Prediction Results
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            According to your inputs the person{" "}
            <b>will {resValue === 0 ? " not " : " "}</b>
            reorder
          </Typography>
        </Box>
      </Modal>
    </Box>
  );
}
