import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import BankIcon from "@material-ui/icons/AccountBalance";
import LibraryIcon from "@material-ui/icons/LibraryBooks";
import BarChartIcon from "@material-ui/icons/BarChart";
import AssignmentIcon from "@material-ui/icons/Assignment";
import { Link } from "react-router-dom";

export const mainListItems = (
  <div>
    <ListItem button component={Link} to={"/"} style={{ paddingLeft: 24 }}>
      <ListItemIcon>
        <DashboardIcon fill="white" />
      </ListItemIcon>
      <ListItemText primary="Overview" />
    </ListItem>
    <ListItem
      button
      component={Link}
      to={"/transactions"}
      style={{ paddingLeft: 24 }}
    >
      <ListItemIcon>
        <BankIcon />
      </ListItemIcon>
      <ListItemText primary="Transactions" />
    </ListItem>
    <ListItem
      button
      component={Link}
      to={"/insights"}
      style={{ paddingLeft: 24 }}
    >
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Insights" />
    </ListItem>
    <ListItem
      button
      component={Link}
      to={"/guides"}
      style={{ paddingLeft: 24 }}
    >
      <ListItemIcon>
        <LibraryIcon />
      </ListItemIcon>
      <ListItemText primary="Guides" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem>
  </div>
);
