if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      console.log("Latitude: " + position.coords.latitude);
      console.log("Longitude: " + position.coords.longitude);
    },
    function (error) {
      console.error("Erro ao obter localização: " + error.message);
    }
  );
} else {
  console.error("Geolocalização não suportada pelo navegador.");
}

const watchId = navigator.geolocation.watchPosition(
  function (position) {
    console.log("Latitude: " + position.coords.latitude);
    console.log("Longitude: " + position.coords.longitude);
  },
  function (error) {
    console.error("Erro ao obter localização: " + error.message);
  }
);

// Para parar o monitoramento
navigator.geolocation.clearWatch(watchId);

const options = {
  enableHighAccuracy: true, // Melhora a precisão, mas pode consumir mais bateria
  timeout: 5000, // Tempo máximo de espera (5 segundos)
  maximumAge: 0 // Não usa uma localização em cache
};

navigator.geolocation.getCurrentPosition(successCallback, errorCallback, options);