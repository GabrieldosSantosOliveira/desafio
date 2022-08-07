const handleChangeLeft = () => {
  const coordenadas = document.getElementById("location").textContent;
  const lat = coordenadas.split(",");

  switch (lat[2]) {
    case "N":
      lat[2] = "W";
      break;
    case "S":
      lat[2] = "E";
      break;
    case "E":
      lat[2] = "N";
      break;
    case "W":
      lat[2] = "S";
      break;
  }
  document.getElementById("location").innerText = lat.join(",");
};
const handleChangeRight = () => {
  const coordenadas = document.getElementById("location").textContent;
  const lat = coordenadas.split(",");

  switch (lat[2]) {
    case "N":
      lat[2] = "E";
      break;
    case "S":
      lat[2] = "W";
      break;
    case "E":
      lat[2] = "S";
      break;
    case "W":
      lat[2] = "N";
      break;
  }
  document.getElementById("location").innerText = lat.join(",");
};
const handleChangePosition = () => {
  const coordenadas = document.getElementById("location").textContent;
  const lat = coordenadas.split(",");

  switch (lat[2]) {
    case "N":
      if (lat[1] < 5) {
        lat[1]++;
      }
      break;
    case "S":
      if (lat[1] > 0) {
        lat[1]--;
      }
      break;
    case "E":
      if (lat[0] < 5) {
        lat[0]++;
      }
      break;
    case "W":
      if (lat[0] > 0) {
        lat[0]--;
      }
      break;
  }

  document.getElementById("location").innerText = lat.join(",");
};
function control() {
  const coordenadas = document.getElementById("control").value;

  const lat = coordenadas.split("");
  for (let i = 0; i < lat.length; i++) {
    if (lat[i] === "L") {
      handleChangeLeft();
    } else if (lat[i] === "R") {
      handleChangeRight();
    } else if (lat[i] === "M") {
      handleChangePosition();
    }
  }
}
