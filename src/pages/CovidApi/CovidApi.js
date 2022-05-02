import React, { useState, useEffect } from "react";
import {
  StyledContainer,
  StyledSearchContainer,
  StyledCardContainer,
  StyledSearchInput,
  StyledButton,
} from "./CovidApi.styled";
import { Container } from "../../components/styles/Container.styled";
import axios from "axios";
import CovidCard from "../../components/CovidCard/CovidCard";

const CovidApi = () => {
  const [covidData, setCovidData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState([]);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "https://coronavirus-19-api.herokuapp.com/countries"
      );
      setCovidData(data);
      setSearchData(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const onSearch = () => {
    if (search) {
      const filteredData = covidData.filter(
        (item) =>
          item.country.toLowerCase().indexOf(search.toLowerCase()) !== -1
      );
      setSearchData(filteredData);
    } else {
      setSearchData(covidData);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <StyledContainer>
        <StyledSearchContainer>
          <StyledSearchInput onChange={(e) => setSearch(e.target.value)} />
          <StyledButton onClick={onSearch}>Search</StyledButton>
        </StyledSearchContainer>
        <StyledCardContainer>
          {loading ? (
            <h1>Loading...</h1>
          ) : searchData.length !== 0 ? (
            //https://stackoverflow.com/questions/50252846/display-no-results-when-table-empty-in-react
            searchData.map((item) => (
              <CovidCard data={item} key={item.country} />
            ))
          ) : (
            <div>
              Sorry couldnt find any country with that name. Try Again !
            </div>
          )}
        </StyledCardContainer>
      </StyledContainer>
    </Container>
  );
};

export default CovidApi;
