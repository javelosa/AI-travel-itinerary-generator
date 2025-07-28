function displayItinerary(response) {
  new Typewriter("#travel", {
    strings: response.data.answer,
    autoStart: true,
    delay: 10,
    cursor: "",
  });
}

function generateItinerary(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#topic-instructions");
  let itineraryElement = document.querySelector("#itinerary");
  let apiKey = "04a6b97ba438oct66060d748685ff445";
  let context =
    "You are an AI poet and everytime gives you a topic, you tell a four line poem about the topic. Separate each line with a <br />. Make sure to follow the topic instructions.";
  let prompt = `Topic instructions: Generate a poem about ${instructionsInput.value}.`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  itineraryElement.classList.remove("hidden");
  itineraryElement.innerHTML = `Generating budget travel itinerary about "<strong>${instructionsInput.value}</strong>"<span class="loading-dots"><span>.</span><span>.</span><span>.</span>
    </span>`;

  //build API URL
  //Make a call to the API
  axios.get(apiUrl).then(displayItinerary);
  //Display the generate poem
}

let travelFormElement = document.querySelector("#travel-creator");
poemFormElement.addEventListener("submit", generateItinerary);
