import React from "react";
import { Link } from "react-router-dom";

import { Table, Button } from "react-bootstrap";

const CoincapTable = ({ data }) => {
  return (
    <Table striped bordered hover style={{ margin: "50px auto", width: "80%" }}>
      <thead>
        <tr>
          <th>Ranking</th>
          <th>Name</th>
          <th>Symbol</th>
          <th>$USD</th>
          <th>More</th>
        </tr>
      </thead>
      <tbody>
        {data.map(coin => (
          <tr key={coin.id}>
            <td>{coin.rank}</td>
            <td>{coin.name}</td>
            <td>{coin.symbol}</td>
            <td>{parseFloat(coin.priceUsd).toFixed(2)}</td>
            <td>
              <Button variant="danger">
                <Link to={`/details/${coin.id}`}>More</Link>
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default CoincapTable;
