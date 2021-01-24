import React, { useEffect, useState } from "react";
import clsx from "clsx";
import "./App.css";

// Material UI related imports:
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsIcon from "@material-ui/icons/Notifications";
import List from "@material-ui/core/List";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import Container from "@material-ui/core/Container";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import CssBaseline from "@material-ui/core/CssBaseline";

// React Router related imports:
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Pages:
import { TransactionsPage } from "./pages/TransactionsPage";
import { OverviewPage } from "./pages/OverviewPage";
import { InsightsPage } from "./pages/InsightsPage";
import { LoginPage } from "./pages/LoginPage";
import { GuidesPage } from "./pages/GuidesPage";

// Firebase related imports:
import { LoginContext } from "./LoginContext";
import firebase from "firebase/app";
import fire from "./firebase";
import "firebase/auth";

// Misc.
import { mainListItems } from "./listItems";

const drawerWidth = 220;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: "#2B3036",
    color: "white",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: "#1F2428",
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    backgroundColor: "#1F2428",
    color: "white",
    border: "none",
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
  divider: {
    border: "1px solid #2B3036",
  },
}));

function App() {
  const [currentTime, setCurrentTime] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [open, setOpen] = React.useState(true);

  // Theming:
  const classes = useStyles();
  const darkTheme = createMuiTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#232A35",
      },
      secondary: {
        main: "#FF922B",
      },
    },
  });

  fire.auth().onAuthStateChanged((u: firebase.User | null) => {
    u ? setIsLoggedIn(true) : setIsLoggedIn(false);
    console.log("Updated isLoggedIn", isLoggedIn);
  });

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    fetch("https://fisci-iqk43m4jga-ew.a.run.app/time")
      .then((res) => res.json())
      .then((data) => {
        setCurrentTime(data.time);
      })
      .catch((e) => console.error("Error fetching time from API", e));
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <LoginContext.Provider value={isLoggedIn}>
        <Router>
          <div className={classes.root}>
            <CssBaseline />
            <AppBar
              position="absolute"
              className={clsx(classes.appBar, open && classes.appBarShift)}
              elevation={0}
            >
              <Toolbar className={classes.toolbar}>
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  className={clsx(
                    classes.menuButton,
                    open && classes.menuButtonHidden
                  )}
                >
                  <MenuIcon />
                </IconButton>
                <Typography
                  component="h1"
                  variant="h6"
                  color="inherit"
                  noWrap
                  className={classes.title}
                >
                  Fisci
                </Typography>
                <IconButton color="inherit">
                  <Badge badgeContent={4} color="secondary">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
              </Toolbar>
            </AppBar>
            <Drawer
              variant="permanent"
              classes={{
                paper: clsx(
                  classes.drawerPaper,
                  !open && classes.drawerPaperClose
                ),
              }}
              open={open}
            >
              <div className={classes.toolbarIcon}>
                <IconButton onClick={handleDrawerClose}>
                  <ChevronLeftIcon />
                </IconButton>
              </div>
              <Divider className={classes.divider} />
              <List>{mainListItems}</List>
            </Drawer>
            <main className={classes.content}>
              <div className={classes.appBarSpacer} />
              <Container maxWidth="lg" className={classes.container}>
                <Switch>
                  <Route path={"/login"}>
                    <LoginPage />
                  </Route>
                  <Route path={"/transactions"}>
                    <TransactionsPage />
                  </Route>
                  <Route path={"/insights"}>
                    <InsightsPage />
                  </Route>
                  <Route path={"/guides"}>
                    <GuidesPage />
                  </Route>
                  <Route path={"/"}>
                    <OverviewPage />
                  </Route>
                </Switch>
                <p id={"api-test"}>
                  <code>API TEST: </code>The current time is{" "}
                  {new Date(currentTime * 1000).toLocaleTimeString()}
                </p>
              </Container>
            </main>
          </div>
        </Router>
      </LoginContext.Provider>
    </ThemeProvider>
  );
}

export default App;
