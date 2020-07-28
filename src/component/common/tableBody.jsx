import React, { Component } from "react";
import _ from "lodash";

class TableBody extends Component {
  renderCell(movie, coloumn) {
    if (coloumn.content) {
      return coloumn.content(movie);
    }
    return _.get(movie, coloumn.path);
  }
  render() {
    const { movies, coloumns } = this.props;
    return (
      <tbody>
        {movies.map((movie) => (
          <tr key={movie._id}>
            {coloumns.map((coloumn) => (
              <td key={movie._id + (coloumn.path || coloumn.key)}>
                {this.renderCell(movie, coloumn)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
