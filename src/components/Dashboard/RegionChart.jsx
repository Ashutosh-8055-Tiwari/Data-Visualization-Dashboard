import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Box, Heading, Select } from '@chakra-ui/react';

const RegionChart = ({ data }) => {
  const [selectedRegion, setSelectedRegion] = useState('');

  // Filter data based on selected region
  const filteredData = selectedRegion ? data.filter(item => item.region === selectedRegion) : data;

  // Count occurrences of each region in the filtered data
  const regionCounts = {};
  filteredData.forEach(item => {
    if (item.region in regionCounts) {
      regionCounts[item.region]++;
    } else {
      regionCounts[item.region] = 1;
    }
  });

  // Chart data
  const chartData = {
    labels: Object.keys(regionCounts),
    datasets: [
      {
        data: Object.values(regionCounts),
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4CAF50',
          '#FF9800',
          '#9C27B0',
          '#3F51B5',
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4CAF50',
          '#FF9800',
          '#9C27B0',
          '#3F51B5',
        ],
      },
    ],
  };

  // Handle region filter change
  const handleRegionChange = (event) => {
    setSelectedRegion(event.target.value);
  };

  return (
    <Box>
      <Heading as="h2" mb={4}>
        Region Distribution
      </Heading>
      {/* Region filter dropdown */}
      <Select value={selectedRegion} onChange={handleRegionChange} mb={4}>
        <option value="">All Regions</option>
        {/* Generate options for each unique region */}
        {Array.from(new Set(data.map(item => item.region))).map(region => (
          <option key={region} value={region}>{region}</option>
        ))}
      </Select>
      {/* Doughnut chart */}
      <Doughnut data={chartData} />
    </Box>
  );
};

export default RegionChart;
