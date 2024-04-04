const ctx = document.getElementById("myChart");
const equityGrowth = document.getElementById("equityGrowthChart");

const myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    datasets: [
      {
        data: [4, 8, 10, 13, 17, 20],
        borderColor: "#167807",
        borderWidth: 2,
        tension: 0.8,
      },
      {
        data: [8, 12, 15, 17, 20, 25],
        borderColor: "#225CCB",
        borderWidth: 2,
        tension: 0.8,
      },
      {
        data: [2, 5, 7, 10, 15, 18],
        borderColor: "#F0191C",
        borderWidth: 2,
        tension: 0.8,
      },
    ],
  },
  options: {
    responsive: false,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          // Include a dollar sign in the ticks
          callback: function (value, index, ticks) {
            return "$" + value;
          },
        },
      },
      x: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Years",
        },
      },
    },
    plugins: {
      legend: {
        display: true, // Set to false to hide the legend
        align: "center",
        labels: {
          usePointStyle: true,
          textAlign: "center",
        },
      },
      tooltip: {
        enabled: true,
        mode: "index",
        intersect: true,
        xAlign: "center",
        yAlign: "center",
        backgroundColor: "white",
        titleColor: "black",
        callbacks: {
          labelColor: function (context) {
            // Set borderColor and dynamically change backgroundColor based on the dataset label
            return {
              borderColor: getColorBasedOnLabel(context.datasetIndex),
              backgroundColor: getColorBasedOnLabel(context.datasetIndex),
              borderWidth: 3,
              borderRadius: 3,
            };
          },
          labelTextColor: function (context) {
            return "black";
          },
          label: function (context) {
            // Display different labels for each dataset
            var datasetLabel;
            if (context.datasetIndex === 0) {
              datasetLabel = "5% for Dataset 1";
            } else if (context.datasetIndex === 1) {
              datasetLabel = "7% for Dataset 2";
            } else if (context.datasetIndex === 2) {
              datasetLabel = "10% for Dataset 3";
            } else {
              datasetLabel = "";
            }
            return datasetLabel;
          },
          // Add yPadding for top margin
          beforeLabel: function (tooltipItem) {
            tooltipItem.yPadding = 15; // Adjust the value as needed
          },
        },
      },
    },
  },
});

// Function to get the color based on the dataset label (percentage)
function getColorBasedOnLabel(label) {
  // Use label (percentage) to determine the background color dynamically
  // For example, you can set different colors based on different percentage values
  if (label === 0) {
    return "#167807"; // Set color for 5%
  } else if (label === 1) {
    return "#225CCB"; // Set color for 7.5%
  } else if (label === 2) {
    return "#F0191C"; // Set color for 10%
  } else {
    return "black"; // Default color
  }
}
//equity-growth chart
const equityGrowthChart = new Chart(equityGrowth, {
  type: "line",
  data: {
    labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    datasets: [
      {
        data: [4, 8, 10, 13, 18, 22],
        borderColor: "#167807",
        borderWidth: 2,
        tension: 0.8,
      },
      {
        data: [8, 12, 15, 17, 20, 25],
        borderColor: "#225CCB",
        borderWidth: 2,
        tension: 0.8,
      },
      {
        data: [2, 5, 7, 10, 15, 18],
        borderColor: "#F0191C",
        borderWidth: 2,
        tension: 0.8,
      },
    ],
  },
  options: {
    responsive: false,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          // Include a dollar sign in the ticks
          callback: function (value, index, ticks) {
            return "$" + value;
          },
        },
      },
      x: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Years",
        },
      },
    },
    plugins: {
      legend: {
        display: true, // Set to false to hide the legend
        align: "center",
        labels: {
          usePointStyle: true,
          textAlign: "center",
        },
      },
      tooltip: {
        enabled: true,
        mode: "index",
        intersect: true,
        xAlign: "center",
        yAlign: "center",
        backgroundColor: "white",
        titleColor: "black",
        callbacks: {
          labelColor: function (context) {
            // Set borderColor and dynamically change backgroundColor based on the dataset label
            return {
              borderColor: getColorBasedOnLabel(context.datasetIndex),
              backgroundColor: getColorBasedOnLabel(context.datasetIndex),
              borderWidth: 3,
              borderRadius: 3,
            };
          },
          labelTextColor: function (context) {
            return "black";
          },
          label: function (context) {
            // Display different labels for each dataset
            var datasetLabel;
            if (context.datasetIndex === 0) {
              datasetLabel = "5% for Dataset 1";
            } else if (context.datasetIndex === 1) {
              datasetLabel = "7% for Dataset 2";
            } else if (context.datasetIndex === 2) {
              datasetLabel = "10% for Dataset 3";
            } else {
              datasetLabel = "";
            }
            return datasetLabel;
          },
          // Add yPadding for top margin
          beforeLabel: function (tooltipItem) {
            tooltipItem.yPadding = 15; // Adjust the value as needed
          },
        },
      },
    },
  },
});
