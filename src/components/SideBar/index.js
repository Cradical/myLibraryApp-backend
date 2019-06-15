import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

import "./sideBarMenu.css";

export default class SidebarMenu extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <h2 className="sidebar-header"> Sidebar Menu </h2>{" "}
        <ListGroup className="sidebar-list">
          <ListGroupItem> Cras justo odio </ListGroupItem>{" "}
          <ListGroupItem> Dapibus ac facilisis in </ListGroupItem>{" "}
          <ListGroupItem> Morbi leo risus </ListGroupItem>{" "}
          <ListGroupItem> Porta ac consectetur ac </ListGroupItem>{" "}
          <ListGroupItem> Vestibulum at eros </ListGroupItem>{" "}
        </ListGroup>{" "}
      </div>
    );
  }
}
