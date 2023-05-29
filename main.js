




const shareData = {
    title: "MDN",
    text: "Learn web development on MDN!",
    url: "https://developer.mozilla.org",
  };
  
  const btn = document.querySelector("#button-share");
  const resultPara = document.querySelector("#result");
  
  btn.addEventListener("click", async () => {
    try {
      await navigator.share(shareData);
      resultPara.textContent = "MDN partilhado com sucesso";
    } catch (err) {
      resultPara.textContent = `Error: ${err}`;
      console.log(err)
    }
  });







const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
};
  
function success(pos) {
    const crd = pos.coords;

    let apresentarLocal = document.getElementById("apresentar-local")

    apresentarLocal.innerHTML = 
      `Latitude : <b>${crd.latitude} </b> <br> Longitude: <b>${crd.longitude} </b> <br> Mais ou menos <b>${crd.accuracy} metros</b>`

}
  
function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
}
  











const batteryStatusBtn = document.getElementById("battery-status-button")

batteryStatusBtn.addEventListener("click", () => {
  if ('getBattery' in navigator) {
    const batteryPromise = navigator.getBattery();
  
    batteryPromise.then((battery) => {
      const updateBatteryStatus = () => {
        let apresentarBattery = document.getElementById("apresentar-battery")

        apresentarBattery.innerHTML = 
          `
            Nível de carga: <b>${battery.level * 100}% </b> <br>
            Conectado à fonte de energia: <b>${battery.charging ? "Sim" : "Não"} </b> <br>
            Tempo restante de carga: <b>${battery.chargingTime} segundos </b> <br>
            Tempo restante de descarga : <b>${battery.dischargingTime} segundos </b>
          `
      };
  
      updateBatteryStatus();
  
      battery.addEventListener('levelchange', updateBatteryStatus);
      battery.addEventListener('chargingchange', updateBatteryStatus);
      battery.addEventListener('chargingtimechange', updateBatteryStatus);
      battery.addEventListener('dischargingtimechange', updateBatteryStatus);
    });
  } else {
    console.log('A API Battery Status não é suportada neste navegador.');
  }
})











