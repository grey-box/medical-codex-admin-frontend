const lastResort = async (
  selectedMedicine: string,
  targetLanguage: string,
  NEXT_PUBLIC_API_URL: string | undefined
): Promise<string> => {
  if (!NEXT_PUBLIC_API_URL) {
    throw new Error("Backend URL is undefined");
  }

  const requestBody = {
    medicine: selectedMedicine,
    target_language: targetLanguage,
  };

  console.log("Making request to:", `${NEXT_PUBLIC_API_URL}/last-resort/`);
  console.log("Request body:", requestBody);

  try {
    const response = await fetch(`${NEXT_PUBLIC_API_URL}/last-resort/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`Last Resort HTTP error! Status: ${response.status}, Message: ${errorMessage}`);
    }

    const lastResortData = await response.json();

    const translatedMedicine = lastResortData.translated_medicine;

    if (translatedMedicine) {
      return translatedMedicine;
    }

    throw new Error("No translation results available from last resort.");
  } catch (error) {
    console.error("Error occurred:", error);
    throw error;
  }
};

export default lastResort;
