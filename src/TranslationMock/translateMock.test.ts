import { useState } from 'react';
import translateMock from './translateMock';

// import translationData from './TranslationTestData.json';

/**
 * Test the translateMock function
 * 
 * This test suite checks that the translateMock function behaves as expected.
 * It tests the following scenarios:
 * - The function translates English to Ukrainian correctly
 * - The function handles invalid input gracfully
 */
const mockState = {
  outputTranslation: "",
  outputSource: "",
  outputMarkReview: "",
};

const mockSetOutputTranslation = jest.fn((value) => {
  mockState.outputTranslation = value;
});

const mockSetOutputSource = jest.fn((value) => {
  mockState.outputSource = value;
});

const mockSetOutputMarkReview = jest.fn((value) => {
  mockState.outputMarkReview = value;
});



describe('translateMock', () => {

  

  
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

    
    expect(mockState.outputTranslation[0]).toBe("Аспірин");

  });

 

  test('should handle invalid input gracefully', async () => {

    const inputSearch = 'Test';

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

 
    expect(mockState.outputTranslation).toEqual(["Тестостерон"]);


  });


});