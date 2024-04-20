import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import { Box, Heading, Select, useColorModeValue } from "@chakra-ui/react";

const PieChart = ({ data }) => {
  const [selectedSector, setSelectedSector] = useState('');

  // Filter data based on selected sector
  const filteredData = selectedSector ? data.filter(entry => entry.sector === selectedSector) : data;

  const sectors = {};

  filteredData.forEach((entry) => {
    if (!sectors[entry.sector]) {
      sectors[entry.sector] = 0;
    }
    sectors[entry.sector] += entry.intensity;
  });

  const getRandomColor = (index) => {
    const colors = [
      "#FF0080",
      "#00BFFF",
      "#FFD700",
      "#32CD32",
      "#FF4500",
      "#9400D3",
      // Add more colors as needed
    ];
    return colors[index % colors.length];
  };

  const chartData = {
    labels: Object.keys(sectors),
    datasets: [
      {
        data: Object.values(sectors),
        backgroundColor: Object.keys(sectors).map((_, index) =>
          getRandomColor(index)
        ),
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        position: "average",
      },
    },
  };

  // Handle sector filter change
  const handleSectorChange = (event) => {
    setSelectedSector(event.target.value);
  };

  return (
    <Box
      p={6}
      borderRadius={20}
      boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)"
      mt={50}
      ml={50}
      shadow="md"
      pb={100}
      bg={useColorModeValue("white", "gray.800")}
      maxHeight={700}
      overflow="hidden"
    >
      <Heading as="h2" mb={4}>
        Sector Chart
      </Heading>
      {/* Sector filter dropdown */}
      <Select value={selectedSector} onChange={handleSectorChange} mb={4}>
        <option value="">All Sectors</option>
        {/* Generate options for each unique sector */}
        {Array.from(new Set(data.map(entry => entry.sector))).map(sector => (
          <option key={sector} value={sector}>{sector}</option>
        ))}
      </Select>
      {/* Pie chart */}
      <Pie data={chartData} options={chartOptions} />
    </Box>
  );
};

export default PieChart;
