import React, { Component } from "react";

class TableHeader extends Component {
  raiseSort = (path) => {
    const sortColoumn = { ...this.props.sortColoumn };
    if (sortColoumn.path === path) {
      sortColoumn.order = sortColoumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColoumn.path = path;
      sortColoumn.order = "asc";
    }
    this.props.onSort(sortColoumn);
  };
  renderSortIcon = (coloumn) => {
    const { sortColoumn } = this.props;
    if (coloumn.path !== sortColoumn.path) {
      return null;
    } else if (sortColoumn.order === "asc") {
      return <i className="fa fa-sort-asc"></i>;
    } else {
      return <i className="fa fa-sort-desc"></i>;
    }
  };
  render() {
    return (
      <thead>
        <tr>
          {this.props.coloumns.map((col) => (
            <th
              style={{ cursor: "pointer" }}
              onClick={() => this.raiseSort(col.path)}
              key={col.path || col.key}
            >
              {col.label}
              {this.renderSortIcon(col)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
