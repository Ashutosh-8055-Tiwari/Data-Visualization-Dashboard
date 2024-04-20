import React, { useState, useEffect } from "react";
import axios from "axios";
import IntensityChart from "./IntensityChart";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import Navbar from "./Navbar";
import RegionChart from "./RegionChart";
import { ChakraProvider, Flex, Box, Grid } from "@chakra-ui/react";
import RelevanceBubbleChart from "./Relevance";
import TopicsRadarChart from "./TopicChart";
import PieChart from "./SectorChart";
import CountryChart from "./Country";
import LikelihoodRadarChart from "./LikelihoodChart";
import Sidebar from "../Sidebar/Sidebar";
import { IoReorderThreeOutline } from "react-icons/io5";


Chart.register(CategoryScale);

const Main = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchDataFromApi = async () => {
     
      try {
        const response = await axios.get("https://data-visualization-dashboard-fer0.onrender.com/api/get-data");
        setData(response.data);
      
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    console.log(data);

    fetchDataFromApi();
  }, []);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    
    <ChakraProvider>
 
      <Navbar />
      
      <div
        className="mt-10 p-2"
        style={{ position: "relative", marginLeft: isSidebarOpen ? "250px" : "0" }}
      >
      <button
          onClick={toggleSidebar}
          style={{
            position: "fixed",
            top: "20px",
            left: "20px",
            zIndex: 1000,
            marginTop: "7px"
          }}
        >
          <IoReorderThreeOutline />
        </button>
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
  
      <IntensityChart data={data} />
      <Flex direction={{ base: "column", md: "row" }} m={50}>
        <Box
          flex={{ base: "1", md: "0.5" }}
          maxW="50%"
          p={5}
          m={2}
          boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)"
          borderRadius={20}
        >
          <RegionChart data={data} />
        </Box>
        <Box
          flex={{ base: "1", md: "0.5" }}
          maxW="50%"
          p={5}
          m={2}
          boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)"
          borderRadius={20}
        >
          <TopicsRadarChart data={data} />
        </Box>
      </Flex>
      <RelevanceBubbleChart data={data} />
      <Grid  templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={4}>
        <Box>
          <PieChart data={data} />
        </Box>
        <Box>
          <LikelihoodRadarChart data={data} />
        </Box>
      </Grid>
      <CountryChart data={data} />

             
      </div>
    </ChakraProvider>
  );
};

export default Main;
