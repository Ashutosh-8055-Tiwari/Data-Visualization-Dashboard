import React, { useState } from 'react';
import { PolarArea } from 'react-chartjs-2';
import { Box, Heading, Select } from '@chakra-ui/react';

const TopicsPolarAreaChart = ({ data }) => {
  const [selectedTopic, setSelectedTopic] = useState('');

  // Get unique list of topics
  const topics = Array.from(new Set(data.map(item => item.topic)));

  // Filter data based on the selected topic
  const filteredData = selectedTopic ? data.filter(item => item.topic === selectedTopic) : data;

  const chartData = {
    labels: filteredData.map(item => item.topic),
    datasets: [
      {
        data: filteredData.map(item => item.relevance),
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)',
          'rgba(255, 159, 64, 0.6)',
          'rgba(255, 205, 86, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(153, 102, 255, 0.6)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 205, 86, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    scale: {
      ticks: {
        beginAtZero: true,
        stepSize: 1,
        max: 5,
      },
    },
  };

  // Handle topic filter change
  const handleTopicChange = (event) => {
    setSelectedTopic(event.target.value);
  };

  return (
    <Box>
      <Heading as="h2" mb={4}>
        Topics Chart
      </Heading>
      {/* Topic filter dropdown */}
      <Select value={selectedTopic} onChange={handleTopicChange} mb={4}>
        <option value="">All Topics</option>
        {/* Generate options for each unique topic */}
        {topics.map(topic => (
          <option key={topic} value={topic}>{topic}</option>
        ))}
      </Select>
      {/* Polar area chart */}
      <PolarArea data={chartData} options={chartOptions} />
    </Box>
  );
};

export default TopicsPolarAreaChart;
