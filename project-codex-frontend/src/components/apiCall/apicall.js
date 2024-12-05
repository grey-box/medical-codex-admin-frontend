// Get languages from the API
const LanguageDropdown = () => {
    const [languages, setLanguages] = useState([]);
    useEffect(() => {
      const fetchLanguages = async () => {
        try {
          const response = await fetch('http://localhost:8000/languages/');
          const data = await response.json();
          setLanguages(data.languages);
        } catch (error) {
          console.error('Error fetching languages:', error);
        }
      };

      fetchLanguages();
    }, []);
    
    return (
      <select
        className={styles.formInput}
        value={sourceLanguage}
        onChange={(e) => setSourceLanguage(e.target.value)}
        required
      >
        {languages.map((language) => (
          <option key={language} value={language}>
            {language}
          </option>
        ))}
      </select>
    );
  }