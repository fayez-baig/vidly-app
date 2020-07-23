import React from "react";
import Table from "react-bootstrap/Table";
import TableHeader from "../common/tableHeader";
import TableBody from "../common/tableBody";
const Tables = (props) => {
  const { coloumns, sortColoumn, onSort, movies, onDelete, onLike } = props;
  return (
    <Table responsive>
      <TableHeader
        coloumns={coloumns}
        sortColoumn={sortColoumn}
        onSort={onSort}
      />
      <TableBody
        movies={movies}
        onDelete={onDelete}
        onLike={onLike}
        coloumns={coloumns}
      />
    </Table>
  );
};

export default Tables;
