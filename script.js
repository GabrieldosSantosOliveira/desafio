const handleChangeLeft = () => {
  const currentCordinates = document.getElementById("location").textContent;
  const nowCordinates = currentCordinates.split(",");

  switch (nowCordinates[2]) {
    case "N":
      nowCordinates[2] = "W";
      break;
    case "S":
      nowCordinates[2] = "E";
      break;
    case "E":
      nowCordinates[2] = "N";
      break;
    case "W":
      nowCordinates[2] = "S";
      break;
  }
  document.getElementById("location").innerText = nowCordinates.join(",");
};
const handleChangeRight = () => {
  const currentCordinates = document.getElementById("location").textContent;
  const nowCordinates = currentCordinates.split(",");

  switch (nowCordinates[2]) {
    case "N":
      nowCordinates[2] = "E";
      break;
    case "S":
      nowCordinates[2] = "W";
      break;
    case "E":
      nowCordinates[2] = "S";
      break;
    case "W":
      nowCordinates[2] = "N";
      break;
  }
  document.getElementById("location").innerText = nowCordinates.join(",");
};
const handleChangePosition = () => {
  const currentCordinates = document.getElementById("location").textContent;
  const nowCordinates = currentCordinates.split(",");

  switch (nowCordinates[2]) {
    case "N":
      if (nowCordinates[1] < 5) {
        nowCordinates[1]++;
      }
      break;
    case "S":
      if (nowCordinates[1] > 0) {
        nowCordinates[1]--;
      }
      break;
    case "E":
      if (nowCordinates[0] < 5) {
        nowCordinates[0]++;
      }
      break;
    case "W":
      if (nowCordinates[0] > 0) {
        nowCordinates[0]--;
      }
      break;
  }

  document.getElementById("location").innerText = nowCordinates.join(",");
};
function control() {
  const confirmedCoordinates = document.getElementById("control").value;
  const newCoordinates = confirmedCoordinates.split("");
  for (let i = 0; i < newCoordinates.length; i++) {
    if (newCoordinates[i] === "L") {
      handleChangeLeft();
    } else if (newCoordinates[i] === "R") {
      handleChangeRight();
    } else if (newCoordinates[i] === "M") {
      handleChangePosition();
    }
  }
}
