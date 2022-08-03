const handleChangeL = () => {
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
const handleChangeR = () => {
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
