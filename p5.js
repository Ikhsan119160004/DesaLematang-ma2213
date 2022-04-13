// PENDIDIKAN
$.ajax(
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQwTQiG9rymUFFvqzzoc9pZO0433J_cQ1J90CDOhIg3KNUaptBOeIoddIYjZY7oVCPu4wUllKMxkl_k/pub?gid=531718279&output=csv"
).done(function (result) {
  const data = result.split("\r\n");
  let object = [];
  for (let i = 1; i < data.length; i++) {
    const materi = data[i].split(",");
    object.push({
      [data[0].split(",")[0]]: materi[0],
      [data[0].split(",")[1]]: materi[1],
    });
  }
  pendidikanChart(object);
});

// USIA
$.ajax(
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQwTQiG9rymUFFvqzzoc9pZO0433J_cQ1J90CDOhIg3KNUaptBOeIoddIYjZY7oVCPu4wUllKMxkl_k/pub?gid=205387307&output=csv"
).done(function (result) {
  const data = result.split("\r\n");
  let object = [];
  for (let i = 1; i < data.length; i++) {
    const materi = data[i].split(",");
    object.push({
      [data[0].split(",")[0]]: materi[0],
      [data[0].split(",")[1]]: materi[1],
    });
  }
  usiaChart(object);
});

// JENIS KELAMIN
$.ajax(
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQwTQiG9rymUFFvqzzoc9pZO0433J_cQ1J90CDOhIg3KNUaptBOeIoddIYjZY7oVCPu4wUllKMxkl_k/pub?gid=1971355802&output=csv"
).done(function (result) {
  const data = result.split("\r\n");
  let object = [];
  for (let i = 1; i < data.length; i++) {
    const materi = data[i].split(",");
    object.push({
      [data[0].split(",")[0]]: materi[0],
      [data[0].split(",")[1]]: materi[1],
    });
  }
  jkChart(object);
});

// Agama
$.ajax(
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQwTQiG9rymUFFvqzzoc9pZO0433J_cQ1J90CDOhIg3KNUaptBOeIoddIYjZY7oVCPu4wUllKMxkl_k/pub?gid=1796534364&output=csv"
).done(function (result) {
  const data = result.split("\r\n");
  let object = [];
  for (let i = 1; i < data.length; i++) {
    const materi = data[i].split(",");
    object.push({
      [data[0].split(",")[0]]: materi[0],
      [data[0].split(",")[1]]: materi[1],
    });
  }
  agamaChart(object);
});

// Pekerjaan
$.ajax(
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQwTQiG9rymUFFvqzzoc9pZO0433J_cQ1J90CDOhIg3KNUaptBOeIoddIYjZY7oVCPu4wUllKMxkl_k/pub?gid=0&output=csv"
).done(function (result) {
  const data = result.split("\r\n");
  let object = [];
  for (let i = 1; i < data.length; i++) {
    const materi = data[i].split(",");
    object.push({
      [data[0].split(",")[0]]: materi[0],
      [data[0].split(",")[1]]: materi[1],
    });
  }
  pekerjaanChart(object);
});

function pendidikanChart(dataPendidikan) {
  const labels = dataPendidikan.map((value) => value["Tingkat Pendidikan"]);

  const data = {
    labels: labels,
    datasets: [
      {
        data: dataPendidikan.map((value) => value["Jumlah"]),
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 205, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(201, 203, 207, 1)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const config = {
    type: "bar",
    data: data,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  };
  const myChart = new Chart(
    document.getElementById("pendidikan-chart"),
    config
  );
}

function usiaChart(dataUsia) {
  const data = {
    labels: dataUsia.map((value) => value["Usia"]),
    datasets: [
      {
        data: dataUsia.map((value) => value["Jumlah"]),
        backgroundColor: [
          "rgb(104, 153, 79)",
          "rgb(54, 102, 74)",
          "rgb(219, 217, 201)",
          "rgb(48, 11, 6)",
          "rgb(82, 84, 74)",
          "rgb(1, 43, 39)",
          "rgb(33, 31, 3)",
        ],
        hoverOffset: 4,
      },
    ],
  };
  const config = {
    type: "pie",
    data: data,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "bottom",
        },
      },
    },
  };
  const myChart = new Chart(document.getElementById("usia-chart"), config);
}

function jkChart(dataJk) {
  const data = {
    labels: dataJk.map((value) => value["Data Jenis Kelamin"]),
    datasets: [
      {
        data: dataJk.map((value) => value["Jumlah"]),
        backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
        hoverOffset: 4,
      },
    ],
  };
  const config = {
    type: "pie",
    data: data,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "bottom",
        },
      },
    },
  };
  const myChart = new Chart(document.getElementById("jk-chart"), config);
}

function pekerjaanChart(dataPekerjaan) {
  const data = {
    labels: dataPekerjaan.map((value) => value["Mata Pencaharian"]),
    datasets: [
      {
        data: dataPekerjaan.map((value) => value["Jumlah"]),
        backgroundColor: [
          "rgb(122, 249, 211)",
          "rgb(216, 111, 69)",
          "rgb(63, 5, 8)",
          "rgb(155, 122, 139)",
          "rgb(132, 39, 13)",
          "rgb(229, 8, 4)",
          "rgb(7, 10, 6)",
          "rgb(117, 103, 105)",
          "rgb(28, 4, 147)",
          "rgb(58, 138, 158)",
          "rgb(89, 83, 49)",
          "rgb(79, 150, 40)",
          "rgb(102, 74, 79)",
          "rgb(86, 10, 178)",
          "rgb(43, 4, 41)",
          "rgb(34, 91, 114)",
          "rgb(252, 85, 144)",
          "rgb(216, 180, 130)",
          "rgb(40, 39, 73)",
          "rgb(0, 4, 43)",
          "rgb(146, 249, 82)",
          "rgb(24, 38, 7)",
          "rgb(201, 179, 199)",
          "rgb(59, 27, 186)",
          "rgb(100, 119, 119)",
          "rgb(215, 247, 227)",
          "rgb(35, 104, 34)",
          "rgb(145, 147, 144)",
          "rgb(11, 12, 11)",
          "rgb(224, 108, 76)",
          "rgb(33, 56, 61)",
          "rgb(80, 48, 84)",
          "rgb(101, 102, 104)",
          "rgb(49, 191, 111)",
          "rgb(117, 90, 94)",
          "rgb(134, 118, 135)",
          "rgb(61, 50, 33)",
          "rgb(47, 33, 109)",
          "rgb(12, 12, 12)",
          "rgb(221, 179, 177)",
        ],
        hoverOffset: 4,
      },
    ],
  };
  const config = {
    type: "pie",
    data: data,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "bottom",
        },
      },
    },
  };
  const myChart = new Chart(document.getElementById("pekerjaan-chart"), config);
}

function agamaChart(dataAgama) {
  const data = {
    labels: dataAgama.map((value) => value["Agama"]),
    datasets: [
      {
        data: dataAgama.map((value) => value["Jumlah"]),
        backgroundColor: [
          "rgb(61, 32, 113)",
          "rgb(215, 212, 160)",
          "rgb(151, 24, 162)",
          "rgb(176, 108, 234)",
          "rgb(108, 107, 122)",
          "rgb(45, 78, 57)",
        ],
        hoverOffset: 4,
      },
    ],
  };
  const config = {
    type: "pie",
    data: data,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "bottom",
        },
      },
    },
  };
  const myChart = new Chart(document.getElementById("agama-chart"), config);
}

// MAP
var map = new ol.Map({
  target: "map",
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM(),
    }),
  ],
  view: new ol.View({
    center: ol.proj.fromLonLat([105.3478811, -5.4029041]),
    zoom: 15,
  }),
});
