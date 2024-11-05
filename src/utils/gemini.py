import os
import requests
from dotenv import load_dotenv

load_dotenv()

# Configure API key and base URL
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
GEMINI_API_URL = f"{os.getenv('API_URL', 'http://localhost:3000')}/gemini/"

# Function to fetch translation from Gemini API
def fetch_gemini_translation(text, source_lang, target_lang):
    try:
        headers = {
            "Authorization": f"Bearer {GEMINI_API_KEY}",
            "Content-Type": "application/json",
        }
        payload = {
            "text": text,
            "source_lang": source_lang,
            "target_lang": target_lang,
        }

        response = requests.post(GEMINI_API_URL, headers=headers, json=payload)

        if response.status_code == 200:
            data = response.json()
            return data.get("translated_text", "Translation not available")
        else:
            print(f"Error with Gemini API: {response.status_code}")
            return "Translation failed"
    except Exception as error:
        print(f"Error fetching from Gemini API: {error}")
        return "Error with Gemini API"









# import os
# import requests
# from dotenv import load_dotenv

# load_dotenv()

# # Configure API key and base URL
# GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
# NEXT_PUBLIC_API_URL = os.getenv('NEXT_PUBLIC_API_URL', 'http://localhost:8000')
# print("GEMINI_API_KEY:", GEMINI_API_KEY)
# print("NEXT_PUBLIC_API_URL:", NEXT_PUBLIC_API_URL)
# LAST_RESORT_API_URL = f"{NEXT_PUBLIC_API_URL}/last-resort/"
# GEMINI_API_URL = f"{NEXT_PUBLIC_API_URL}/gemini/"

# # Function to handle last-resort translation
# def handle_last_resort(selected_medicine, target_language):
#     if not LAST_RESORT_API_URL:
#         raise ValueError("Backend URL is undefined")

#     request_body = {
#         "medicine": selected_medicine,
#         "target_language": target_language,
#     }

#     print("Making request to:", LAST_RESORT_API_URL)
#     print("Request body:", request_body)

#     try:
#         response = requests.post(
#             LAST_RESORT_API_URL,
#             headers={"Content-Type": "application/json"},
#             json=request_body
#         )

#         if response.status_code != 200:
#             error_message = response.text
#             raise Exception(f"Last Resort HTTP error! Status: {response.status_code}, Message: {error_message}")

#         last_resort_data = response.json()
#         translated_medicine = last_resort_data.get("translated_medicine")

#         if translated_medicine:
#             return translated_medicine

#         print("No translation results available from last resort. Falling back to Gemini API...")
#         # Fall back to Gemini API
#         return fetch_gemini_translation(selected_medicine, "en", target_language)

#     except Exception as error:
#         print("Error occurred:", error)
#         raise error


# # Function to fetch translation from Gemini API
# def fetch_gemini_translation(text, source_lang, target_lang):
#     try:
#         headers = {
#             "Authorization": f"Bearer {GEMINI_API_KEY}",
#             "Content-Type": "application/json",
#         }
#         payload = {
#             "text": text,
#             "source_lang": source_lang,
#             "target_lang": target_lang,
#         }

#         response = requests.post(GEMINI_API_URL, headers=headers, json=payload)

#         if response.status_code == 200:
#             data = response.json()
#             return data.get("translated_text", "Translation not available")
#         else:
#             print(f"Error with Gemini API: {response.status_code}")
#             return "Translation failed"
#     except Exception as error:
#         print(f"Error fetching from Gemini API: {error}")
#         return "Error with Gemini API"


# # Example usage
# if __name__ == "__main__":
#     try:
#         translation = handle_last_resort("aspirin", "uk")
#         print("Translation:", translation)
#     except Exception as e:
#         print("An error occurred:", e)