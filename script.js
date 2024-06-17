// script.js

// Sample flight data
const flightData = [
    {
      from: 'New York',
      to: 'Los Angeles',
      departureDate: '2024-06-15',
      returnDate: '2024-06-22',
      price: 500
    },
    {
      from: 'Chicago',
      to: 'Miami',
      departureDate: '2024-07-01',
      returnDate: '2024-07-08',
      price: 400
    },
    {
      from: 'Seattle',
      to: 'Boston',
      departureDate: '2024-08-10',
      returnDate: '2024-08-17',
      price: 600
    },
    
  ];
  
  // Get the form and flight results container elements
  const flightBookingForm = document.getElementById('flight-booking-form');
  const flightResultsContainer = document.getElementById('flight-results-container');
  
  // Add event listener to the form
  flightBookingForm.addEventListener('submit', (event) => {
    event.preventDefault();
  
    // Get the form data
    const formData = new FormData(event.target);
    const from = formData.get('from');
    const to = formData.get('to');
    const departureDate = formData.get('departure-date');
    const returnDate = formData.get('return-date');
    const passengers = formData.get('passengers');
  
    // Filter the flight data based on the form inputs
    const filteredFlights = flightData.filter((flight) => {
      return (
        flight.from.toLowerCase() === from.toLowerCase() &&
        flight.to.toLowerCase() === to.toLowerCase() &&
        flight.departureDate === departureDate &&
        flight.returnDate === returnDate
      );
    });
  
    // Display the filtered flights
    displayFlightResults(filteredFlights);
  });
  
  // Function to display the flight results
  function displayFlightResults(flights) {
    flightResultsContainer.innerHTML = '';
  
    if (flights.length === 0) {
      flightResultsContainer.innerHTML = '<p>No flights found.</p>';
      return;
    }
  
    flights.forEach((flight) => {
      const flightResult = document.createElement('div');
      flightResult.classList.add('flight-result');
  
      const flightDetails = `
        <h3>From: ${flight.from} to ${flight.to}</h3>
        <p>Departure Date: ${flight.departureDate}</p>
        <p>Return Date: ${flight.returnDate}</p>
        <p>Price: $${flight.price}</p>
        <button>Book Now</button>
      `;
  
      flightResult.innerHTML = flightDetails;
      flightResultsContainer.appendChild(flightResult);
    });
  }