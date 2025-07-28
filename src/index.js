function displayItinerary(response) {
  new Typewriter("#itinerary", {
    strings: response.data.answer,
    autoStart: true,
    delay: 10,
    cursor: "",
  });
}

function generateItinerary(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#travel-instructions");
  let itineraryElement = document.querySelector("#itinerary");
  let apiKey = "04a6b97ba438oct66060d748685ff445";
  let context =
    "You are an AI travel agent who provides an itinerary for the specific destination and the number of travel days asked. Separate each line with a <br />. Make sure to follow the travel instructions.";
  let prompt = `Travel instructions: Generate a travel itinerary about ${instructionsInput.value}.`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  itineraryElement.classList.remove("hidden");
  itineraryElement.innerHTML = `Generating a travel itinerary about "<strong>${instructionsInput.value}</strong>"<span class="loading-dots"><span>.</span><span>.</span><span>.</span>
    </span>`;

  //build API URL
  //Make a call to the API
  axios.get(apiUrl).then(displayItinerary);
  //Display the generate poem
}

let travelFormElement = document.querySelector("#travel-input");
travelFormElement.addEventListener("submit", generateItinerary);
