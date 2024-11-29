import { useState } from 'react';
import translateMock from './translateMock';

// import translationData from './TranslationTestData.json';

 

describe('translateMock', () => {

const [mockOutputTranslation, mockSetOutputTranslation] = useState("");

  const mockSetOutputSource = jest.fn();

  const mockSetOutputMarkReview = jest.fn();

  const API_URL = "http://192.168.1.20:8000"

 

  beforeEach(() => {

    jest.clearAllMocks(); // Reset mocks before each test

  });

 

  test('should handle English to Ukrainian translation correctly', async () => {

    const inputSearch = 'Aspirin';

    const selectedLangSource = 'English';

    const selectedLangTarget = 'Ukrainian';

 

    await translateMock(

      inputSearch,

      selectedLangSource,

      selectedLangTarget,

      mockSetOutputTranslation,

      mockSetOutputSource,

      mockSetOutputMarkReview,

      API_URL

    )

 

    const expectedResult = mockSetOutputTranslation(

      (result) => result.en_name === inputSearch

    );

 

    // Ensure expectedResult exists before accessing its properties

    expect(expectedResult).toBeDefined();

    if (!expectedResult) return;

 

    expect(mockSetOutputTranslation).toHaveBeenCalledWith(expectedResult.uk_name);

    expect(mockSetOutputSource).toHaveBeenCalledWith(expectedResult.source);

    expect(mockSetOutputMarkReview).toHaveBeenCalledWith(

      expect.stringContaining(expectedResult.uk_name)

    );

  });

 

  test('should handle invalid input gracefully', async () => {

    const inputSearch = 'NonExistentMedicine';

    const selectedLangSource = 'English';

    const selectedLangTarget = 'Ukrainian';

 

    await translateMock(

      inputSearch,

      selectedLangSource,

      selectedLangTarget,

      mockSetOutputTranslation,

      mockSetOutputSource,

      mockSetOutputMarkReview,

      API_URL

    );

 

    expect(mockSetOutputTranslation).toHaveBeenCalledWith('');

    expect(mockSetOutputSource).toHaveBeenCalledWith('');

    expect(mockSetOutputMarkReview).toHaveBeenCalledWith('');

  });

 

  test('should handle Ukrainian to Russian translation correctly', async () => {

    const inputSearch = 'Аспирин';

    const selectedLangSource = 'Ukrainian';

    const selectedLangTarget = 'Russian';

 

    await translateMock(

      inputSearch,

      selectedLangSource,

      selectedLangTarget,

      mockSetOutputTranslation,

      mockSetOutputSource,

      mockSetOutputMarkReview,

      API_URL

    );

 

    const expectedResult = mockSetOutputTranslation(

      (result) => result.uk_name === inputSearch

    );

 

    // Ensure expectedResult exists before accessing its properties

    expect(expectedResult).toBeDefined();

    if (!expectedResult) return;

 

    expect(mockSetOutputTranslation).toHaveBeenCalledWith(expectedResult.ru_name);

    expect(mockSetOutputSource).toHaveBeenCalledWith(expectedResult.source);

    expect(mockSetOutputMarkReview).toHaveBeenCalledWith(

      expect.stringContaining(expectedResult.ru_name)

    );

  });

});