import { useState, useEffect } from "react";
import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false })

const options: ApexOptions = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      '2023-02-17T00:00:00.000Z',
      '2023-02-18T00:00:00.000Z',
      '2023-02-19T00:00:00.000Z',
      '2023-02-20T00:00:00.000Z',
      '2023-02-21T00:00:00.000Z',
      '2023-02-22T00:00:00.000Z',
      '2023-02-23T00:00:00.000Z',
    ],
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3
    }
  }
}

const series = [
  { name: 'series1', data: [56, 34, 23, 76, 98, 37, 109] }
]

export default function Dashboard() {
  const [assembleGraphics, setAssembleGraphics] = useState(false);

  useEffect(() => {
    setAssembleGraphics(true)
  }, [])

  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex
        w="100%"
        my="6"
        maxWidth={1480}
        mx="auto"
        px="6"
      >
        <Sidebar />

        {assembleGraphics && (
          <SimpleGrid
            flex="1"
            gap="4"
            minChildWidth="320px"
            alignItems="flex-start"
          >
            <Box
              p={["6", "8"]}
              bg="gray.800"
              borderRadius={8}
              pb="4"
            >
              <Text fontSize="lg" mb="4">Inscritos da semana</Text>
              <Chart
                options={options}
                series={series}
                type="area"
                height={160}
                width="100%"
              />
            </Box>
            <Box
              p={["6", "8"]}
              bg="gray.800"
              borderRadius={8}
              pb="4"
            >
              <Text fontSize="lg" mb="4">Taxa de abertura</Text>
              <Chart
                options={options}
                series={series}
                type="area"
                height={160}
                width="100%"
              />
            </Box>
          </SimpleGrid>
        )}
      </Flex>
    </Flex>
  )
}