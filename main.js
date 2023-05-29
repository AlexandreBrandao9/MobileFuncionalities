




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
      resultPara.textContent = "MDN shared successfully";
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
      `Latitude : ${crd.latitude}<br> Longitude: ${crd.longitude}<br> More or less ${crd.accuracy} meters.`

}
  
function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
}
  








