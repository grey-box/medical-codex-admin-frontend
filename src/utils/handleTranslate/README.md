## handleTranslate Function

Author(s): François Pelletier

This function is used to perform a translation operation by making a POST request to the `/translate/` endpoint of the API. It takes the selected medicine, target language, `setOutputTranslation` function, and API URL as parameters.

Key functionalities:

- Constructs a request body with the selected medicine and target language.
- Makes a POST request to the `/translate/` endpoint of the API with the constructed request body.
- If the response is successful, it calls the `setOutputTranslation` function with the translated name from the received data.
- If the response is not successful or an error occurs, it logs the error.
