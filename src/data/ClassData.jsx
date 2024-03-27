function ClassData() {
  const classCss = [
    {
      id: 0,
      classContainer: "co2",
      classChart: "chart-container",
      classDescription: "description-co2",
      colorLoader: "red",
    },
    {
      id: 1,
      classContainer: "methane",
      classChart: "methane-chart",
      classDescription: "description-methane",
      colorLoader: "blue",
    },
    {
      id: 2,
      class: "nitrous nitrous-chart description-nitrous",
      classContainer: "nitrous",
      classChart: "nitrous-chart",
      classDescription: "description-nitrous",
      colorLoader: "yellow",
    },
    {
      id: 3,
      class: "temperature temperature-chart description-temperature",
      classContainer: "temperature",
      classChart: "temperature-chart",
      classDescription: "description-temperature",
      colorLoader: "red",
    },
    {
      id: 4,
      class: "arctic arctic-chart description-arctic",
      classContainer: "arctic",
      classChart: "arctic-chart",
      classDescription: "description-arctic",
      colorLoader: "blue",
    },
  ];

  return { classCss };
}

export default ClassData;
