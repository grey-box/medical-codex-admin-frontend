## handleLastResort Function

Author(s): Thayer Picart

This function is used to perform a fallback translation operation by making a POST request to the `/last-resort/` endpoint of the API. It takes the selected medicine, target language, and API URL as parameters.

Key functionalities:

- **Backend URL Check**: Validates that the `NEXT_PUBLIC_API_URL` is defined; throws an error if it is not.
- **Request Body Construction**: Constructs a request body containing the selected medicine and target language.
- **POST Request**: Makes a POST request to the `/last-resort/` endpoint of the API with the constructed request body.
- **Response Handling**:
  - If the response is successful, it checks for translated results in the `results` field.
  - Returns the first translated result if available; otherwise, it throws an error indicating that no translation results are available.
- **Error Logging**: Logs any errors encountered during the process, both for request failures and when no translation results are found.
