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
// import MenuItem from "@mui/material/MenuItem";
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

  const [msValue, setMsValue] = React.useState("");
  const [occupation, setOccupation] = React.useState("");
  const [miValue, setMiValue] = React.useState("");
  const [ecValue, setecValue] = React.useState("");
  const [ageValue, setAgeValue] = React.useState("");

  const clear = () => {
    setAgeValue("");
    setMsValue("");
    setOccupation("");
    setMiValue("");
    setecValue("");
  };

  return (
    <Box sx={{ flexGrow: 1, bgcolor: "#efefef" }}>
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
          p: 1,
          m: 1,
          borderRadius: 1,
        }}
      >
        <Card sx={{ minWidth: "200px", maxWidth: "700px" }}>
          <CardMedia
            component="img"
            height="350"
            image="https://www.jotform.com/blog/wp-content/uploads/2020/05/How-to-start-a-food-delivery-business.png"
            alt="food delivery guy"
            sx={{ objectFit: "fill" }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Predict Re-ordering
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Provide your details to analyze if the person will reorder or not
            </Typography>
            <form>
              <Divider>User Details</Divider>
              <Grid container spacing={2} sx={{ my: 1 }}>
                <Grid item xs={6} md={4}>
                  <TextField
                    id="age"
                    label="Age"
                    variant="outlined"
                    sx={{ width: 180 }}
                    value={ageValue}
                    onChange={(e) => setAgeValue(e.target.value)}
                  />
                </Grid>
                <Grid item xs={6} md={4}>
                  <FormControl sx={{ width: 180 }}>
                    <InputLabel id="ms">Marital Status</InputLabel>
                    <NativeSelect
                      labelId="ms"
                      label="Marital Status"
                      value={msValue}
                      onChange={(e) => setMsValue(e.target.value)}
                    >
                      <option value=""></option>
                      <option value={10}>Married</option>
                      <option value={20}>Single (Hinge?)</option>
                    </NativeSelect>
                  </FormControl>
                </Grid>
                <Grid item xs={6} md={4}>
                  <FormControl sx={{ width: 180 }}>
                    <InputLabel id="occ">Occupation</InputLabel>
                    <NativeSelect
                      labelId="occ"
                      label="Occupation"
                      value={occupation}
                      onChange={(e) => setOccupation(e.target.value)}
                    >
                      <option value=""></option>
                      <option value={1}>Employee</option>
                      <option value={2}>Self-Employeed</option>
                      <option value={3}>Student</option>
                      <option value={5}>House-wife</option>
                    </NativeSelect>
                  </FormControl>
                </Grid>
                <Grid item xs={6} md={4}>
                  <FormControl sx={{ width: 180 }}>
                    <InputLabel id="mi">Monthly Income</InputLabel>
                    <NativeSelect
                      labelId="mi"
                      label="Monthly Income"
                      value={miValue}
                      onChange={(e) => setMiValue(e.target.value)}
                    >
                      <option value=""></option>
                      <option value={10}>No Income</option>
                      <option value={20}>Below Rs. 10,000</option>
                      <option value={20}>More than Rs. 5,000</option>
                    </NativeSelect>
                  </FormControl>
                </Grid>
              </Grid>
              <Divider>User Preference</Divider>
              {/* Second Row 
              <Grid container spacing={2} sx={{ my: 1 }}>
                <Grid item xs={6} md={4}>
                  <FormControl sx={{ width: 180 }}>
                    <InputLabel id="ec">Ease and convenient</InputLabel>
                    <NativeSelect
                      labelId="ec"
                      label="Ease and convenient"
                      value={eCValue}
                      onChange={(e) => seteCValue(e.target.value)}
                    >
                      <option value=""></option>
                      <option value={10}>Agree</option>
                      <option value={20}>Disagree</option>
                      <option value={20}>Neutral</option>
                    </NativeSelect>
                  </FormControl>
                </Grid>
                <Grid item xs={6} md={4}>
                  <FormControl sx={{ width: 180 }}>
                    <InputLabel id="ts">Time Saving</InputLabel>
                    <NativeSelect
                      labelId="ts"
                      label="Time Saving"
                      value={null}
                      onChange={null}
                    >
                      <option value=""></option>
                      <option value={10}>Agree</option>
                      <option value={20}>Disagree</option>
                      <option value={20}>Neutral</option>
                    </NativeSelect>
                  </FormControl>
                </Grid>
                <Grid item xs={6} md={4}>
                  <FormControl sx={{ width: 180 }}>
                    <InputLabel id="mrc">More restaurant choices</InputLabel>
                    <NativeSelect
                      labelId="mrc"
                      label="More restaurant choices"
                      value={miValue}
                      onChange={(e) => setMiValue(e.target.value)}
                    >
                      <option value=""></option>
                      <option value={10}>Agree</option>
                      <option value={20}>Disagree</option>
                      <option value={20}>Neutral</option>
                    </NativeSelect>
                  </FormControl>
                </Grid>
                <Grid item xs={6} md={4}>
                  <FormControl sx={{ width: 180 }}>
                    <InputLabel id="epo">Easy Payment option</InputLabel>
                    <NativeSelect
                      labelId="epo"
                      label="Easy Payment option"
                      value={eCValue}
                      onChange={(e) => seteCValue(e.target.value)}
                    >
                      <option value=""></option>
                      <option value={10}>Agree</option>
                      <option value={20}>Disagree</option>
                      <option value={20}>Neutral</option>
                    </NativeSelect>
                  </FormControl>
                </Grid>
                <Grid item xs={6} md={4}>
                  <FormControl sx={{ width: 180 }}>
                    <InputLabel id="mod">More Offers and Discount </InputLabel>
                    <NativeSelect
                      labelId="mod"
                      label="More Offers and Discount"
                      value={null}
                      onChange={null}
                    >
                      <option value=""></option>
                      <option value={10}>Agree</option>
                      <option value={20}>Disagree</option>
                      <option value={20}>Neutral</option>
                    </NativeSelect>
                  </FormControl>
                </Grid>
                <Grid item xs={6} md={4}>
                  <FormControl sx={{ width: 180 }}>
                    <InputLabel id="gfq">Good Food quality</InputLabel>
                    <NativeSelect
                      labelId="gfq"
                      label="Good Food quality"
                      value={null}
                      onChange={null}
                    >
                      <option value=""></option>
                      <option value={10}>Agree</option>
                      <option value={20}>Disagree</option>
                      <option value={20}>Neutral</option>
                    </NativeSelect>
                  </FormControl>
                </Grid>
                <Grid item xs={6} md={4}>
                  <FormControl sx={{ width: 180 }}>
                    <InputLabel id="gts">Good Tracking system</InputLabel>
                    <NativeSelect
                      labelId="gts"
                      label="Good Tracking system"
                      value={eCValue}
                      onChange={(e) => seteCValue(e.target.value)}
                    >
                      <option value=""></option>
                      <option value={10}>Agree</option>
                      <option value={20}>Disagree</option>
                      <option value={20}>Neutral</option>
                    </NativeSelect>
                  </FormControl>
                </Grid>
                <Grid item xs={6} md={4}>
                  <FormControl sx={{ width: 180 }}>
                    <InputLabel id="delay">
                      Delay of delivery person getting assigned
                    </InputLabel>
                    <NativeSelect
                      labelId="delay"
                      label="Delay of delivery person getting assigned"
                      value={null}
                      onChange={null}
                    >
                      <option value=""></option>
                      <option value={10}>Agree</option>
                      <option value={20}>Disagree</option>
                      <option value={20}>Neutral</option>
                    </NativeSelect>
                  </FormControl>
                </Grid>
                <Grid item xs={6} md={4}>
                  <FormControl sx={{ width: 180 }}>
                    <InputLabel id="mwt">Maximum wait time</InputLabel>
                    <NativeSelect
                      labelId="mwt"
                      label="Maximum wait time"
                      value={null}
                      onChange={null}
                    >
                      <option value=""></option>
                      <option value={10}>Agree</option>
                      <option value={20}>Disagree</option>
                      <option value={20}>Neutral</option>
                    </NativeSelect>
                  </FormControl>
                </Grid>
                <Grid item xs={6} md={4}>
                  <FormControl sx={{ width: 180 }}>
                    <InputLabel id="calls">Number of calls</InputLabel>
                    <NativeSelect
                      labelId="calls"
                      label="Number of calls"
                      value={null}
                      onChange={null}
                    >
                      <option value=""></option>
                      <option value={10}>Agree</option>
                      <option value={20}>Disagree</option>
                      <option value={20}>Neutral</option>
                    </NativeSelect>
                  </FormControl>
                </Grid>
              </Grid>
      */}
              <Grid container spacing={2} sx={{ my: 1 }}>
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
                              value={10}
                              checked={ecValue === 10}
                              onChange={(e) => setecValue(e.target.value)}
                            />
                          </TableCell>
                          <TableCell align="center">
                            <Radio
                              checked={ecValue === 20}
                              onChange={(e) => setecValue(e.target.value)}
                            />
                          </TableCell>
                          <TableCell align="center">
                            <Radio
                              checked={ecValue === 20}
                              onChange={(e) => setecValue(e.target.value)}
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
              Predict
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
