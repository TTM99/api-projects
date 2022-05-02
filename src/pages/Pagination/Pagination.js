import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import axios from "axios";
import { Container } from "../../components/styles/Container.styled";
import PaginationCard from "../../components/PaginationCard/PaginationCard";
import {
  StyledCardContainer,
  StyledContainer,
  StyledPageLoad,
  StyledPaginationContainer,
} from "./Pagination.styled";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

const PaginationPage = () => {
  const [totalPages, setTotalPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(0);
  const [loading, setLoading] = useState(true);
  const [airlineData, setAirlineData] = useState([]);
  const [pageLoad, setPageLoad] = useState(10);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        `https://api.instantwebtools.net/v1/passenger?page=${pageNumber}&size=${pageLoad}`
      );
      setTotalPages(data.totalPages);
      setAirlineData(data.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [pageNumber, pageLoad]);

  return (
    <Container>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <StyledContainer>
          <StyledPageLoad>
            <p>Select how many data you want to render at a time:</p>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={pageLoad}
              label="10"
              onChange={(e) => setPageLoad(e.target.value)}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </StyledPageLoad>
          <StyledCardContainer>
            {airlineData.map((item, index) => (
              <PaginationCard key={item._id} data={item} />
            ))}
          </StyledCardContainer>
          <StyledPaginationContainer>
            <Pagination
              count={totalPages}
              variant="outlined"
              shape="rounded"
              defaultPage={1}
              onChange={(event, page) => setPageNumber(page - 1)}
            />
          </StyledPaginationContainer>
        </StyledContainer>
      )}
    </Container>
  );
};

export default PaginationPage;
