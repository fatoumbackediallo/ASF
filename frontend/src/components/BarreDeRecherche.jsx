import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/barreDeRecherche.css";

const sports = [
  "aikido",
  "athletisme",
  "badminton",
  "basketball",
  "boxe thailandaise",
  "capoeira",
  "ecole de danse",
  "ecole des sports",
  "escrime",
  "fitness",
  "football",
  "gymnastique artistique",
  "gymnastique rhytmique",
  "handball",
  "judo",
  "ju jutsu",
  "karate",
  "kung fu",
  "natation",
  "parkour",
  "petanque",
  "rugby",
  "tae kwon do",
  "tennis",
  "tennis de table",
  "volley ball",
  "yoga",
];

const toUrlFriendly = (str) => str.replace(/\s+/g, "").toLowerCase();

const BarreDeRecherche = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [debouncedQuery, setDebouncedQuery] = useState([]);
  const navigate = useNavigate();

  //Debouncing
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [query]);

  const filteredSuggestions = useMemo(() => {
    if (debouncedQuery.length > 0) {
      return sports.filter((sport) =>
        sport.toLowerCase().includes(debouncedQuery.toLowerCase())
      );
    } else {
      return [];
    }
  }, [debouncedQuery]);

  useEffect(() => {
    setSuggestions(filteredSuggestions);
  }, [filteredSuggestions]);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length > 0) {
      const filteredSuggestions = sports.filter((sport) =>
        sport.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion);
    setSuggestions([]);
    navigate(`/${toUrlFriendly(suggestion)}`);
  };

  return (
    <div className="barre-de-recherches-container">
      <div className="barre-de-recherches">
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Rerchercher un sport"
        />
      </div>

      {suggestions.length > 0 && (
        <ul>
          {suggestions.map((suggestion, index) => (
            <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BarreDeRecherche;
