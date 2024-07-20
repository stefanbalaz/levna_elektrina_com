// PriceChart.tsx
"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const AreaChart = dynamic(
  () => import("@tremor/react").then((mod) => mod.AreaChart),
  { ssr: false }
);

interface PriceChartProps {
  fetchUrl: string;
  priceLabel: string;
}

export default function PriceChart({ fetchUrl, priceLabel }: PriceChartProps) {
  const [chartData, setChartData] = useState([]);
  const [unitSource, setUnitSource] = useState({ unit: "", source: "" });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(fetchUrl);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        console.log("Data fetched:", data);

        const formattedData = data.data.map((item: any) => {
          const dateParts = item.den.split("-");
          const formattedDate = `${dateParts[2]}.${dateParts[1]}.${dateParts[0]}`;
          return {
            date: formattedDate,
            [priceLabel]: item.hodnota,
            currency: item.mena,
          };
        });

        setChartData(formattedData);
        const unitSource = {
          unit: data.jednotka,
          source: data.url,
        };
        setUnitSource(unitSource);

        console.log("unitSource", unitSource);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  /* }, [fetchUrl, priceLabel]); */

  const dataFormatter = (number: number) =>
    `CZK ${Intl.NumberFormat("us").format(number).toString()}`;

  return (
    /*  <div
      className="flex flex-col text-lg text-center w-100 sm:w-3/4 mx-auto 
    text-1xl leading-relaxed sm:text-1xl sm:leading-relaxed md:text-2xl md:leading-relaxed lg:text-2xl lg:leading-relaxed xl:text-3xl xl:leading-relaxed 2xl:text-3xl 2xl:leading-loose 
    mb-4 sm:mb-4 md:mb-6 lg:mb-10 xl:mb-14 2xl:mb-16"
    > */
    <div
      className="
      w-full
  text-1xl leading-relaxed sm:text-1xl sm:leading-relaxed md:text-2xl md:leading-relaxed lg:text-2xl lg:leading-relaxed xl:text-3xl xl:leading-relaxed 2xl:text-3xl 2xl:leading-loose 
  mb-4 sm:mb-4 md:mb-6 lg:mb-10 xl:mb-14 2xl:mb-16"
    >
      <div
        className="
      self-end text-blue
      text-1xl leading-relaxed sm:text-1xl sm:leading-relaxed md:text-2xl md:leading-relaxed lg:text-2xl lg:leading-relaxed xl:text-3xl xl:leading-relaxed 2xl:text-3xl 2xl:leading-loose 
      mb-1 sm:mb-1 md:mb-2 lg:mb-3 xl:mb-4 2xl:mb-5
      "
      >
        Jednotka: {unitSource.unit}
      </div>
      <AreaChart
        data={chartData}
        index="date"
        categories={[priceLabel]}
        colors={["#393c95"]}
        valueFormatter={dataFormatter}
        yAxisWidth={110}
        showAnimation={true}
        autoMinValue={true}
        curveType="monotone"
        showLegend={false}
        tickGap={20}
      />
      <div
        className="self-end text-blue
      text-sm leading-relaxed sm:text-sm sm:leading-relaxed md:text-base md:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed 2xl:text-lg 2xl:leading-loose 
      mt-1 sm:mt-1 md:mt-2 lg:mt-3 xl:mt-4 2xl:mt-5
      "
      >
        Zdroj:{" "}
        <a href={unitSource.source} target="_blank">
          {" "}
          Kurzy.cz
        </a>
      </div>
    </div>
  );
}
