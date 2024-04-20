import React, { useState } from "react";
import { Radar } from "react-chartjs-2";
import { Box, useColorModeValue, Heading, Select } from "@chakra-ui/react";

const LikelihoodRadarChart = ({ data }) => {
  const [filterParameter, setFilterParameter] = useState("country");

  // Extract unique values for each parameter from the data
  const filterOptions = data.length > 0 ? Object.keys(data[0]) : [];

  const chartData = {
    labels: data.map(entry => entry[filterParameter]),
    datasets: [
      {
        label: "Likelihood",
        data: data.map(entry => entry.likelihood),
        backgroundColor: useColorModeValue(
          "rgba(79, 59, 169, 0.7)",
          "rgba(144, 104, 190, 0.7)"
        ),
        borderColor: useColorModeValue(
          "rgba(79, 59, 169, 1)",
          "rgba(144, 104, 190, 1)"
        ),
        borderWidth: 2,
        pointBackgroundColor: useColorModeValue("white", "black"),
        pointBorderColor: useColorModeValue(
          "rgba(79, 59, 169, 1)",
          "rgba(144, 104, 190, 1)"
        ),
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scale: {
      ticks: {
        beginAtZero: true,
        min: 0,
        max: 5,
        stepSize: 1,
      },
    },
  };

  const handleFilterChange = (event) => {
    setFilterParameter(event.target.value);
  };

  return (
    <Box
      borderRadius={20}
      pt={6}
      boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)"
      mt={50}
      shadow="md"
      pb={100}
      bg={useColorModeValue("white", "gray.800")}
      maxHeight={700} 
      overflow="hidden" 
    >
      <Heading as="h2" mb={4} ml={6}>
        Likelihood Chart
      </Heading>

      <Select value={filterParameter} onChange={handleFilterChange} mb={4} ml={6} w="200px">
        {filterOptions.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </Select>

      <Radar data={chartData} options={chartOptions} />
    </Box>
  );
};

export default LikelihoodRadarChart;
