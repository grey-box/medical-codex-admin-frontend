## handleSearch Function

Author(s): François Pelletier

This function is used to perform a search operation by making a POST request to the `/fuzzymatching/` endpoint of the API. It takes the search query, target language, source language, `setMedicines` function, API URL, and `setSearchError` function as parameters.

Key functionalities:

- Constructs a request body with the search query, target language, and source language.
- Makes a POST request to the `/fuzzymatching/` endpoint of the API with the constructed request body.
- If the response is successful, it calls the `setMedicines` function with the received data and sets the search error to null.
- If the response is not successful or an error occurs, it logs the error and calls the `setSearchError` function with an error message.
