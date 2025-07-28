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
    "You are an AI travel agent who help travelers with their itinerary for the specific destination and the number of travel days asked. You provide short yet specific activities, and at the end of the itinerary you also add an estimated cost of the travel. Add what the costs include (e.g, domestic flights, accommodation, food, etc). Make a separate line from day 1 of the itinerary from the travel destination. Make a new line, <br />, per day of itinerary. Make sure to follow the travel instructions.";
  let prompt = `Travel instructions: Generate a travel itinerary about ${instructionsInput.value} with an estimated cost. Make a separate line from day 1 of the itinerary from the travel destination. Add <br /> per day of itinerary.`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  itineraryElement.classList.remove("hidden");
  itineraryElement.innerHTML = `Generating a travel itinerary for "<strong>${instructionsInput.value}</strong>"<span class="loading-dots"><span>.</span><span>.</span><span>.</span>
    </span>`;

  //build API URL
  //Make a call to the API
  axios.get(apiUrl).then(displayItinerary);
  //Display the generate poem
}

let travelFormElement = document.querySelector("#travel-input");
travelFormElement.addEventListener("submit", generateItinerary);
