import { useState, useEffect } from "react";
import "./catfacts.css";

export default function CatFacts() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [facts, setFacts] = useState([]);

  useEffect(() => {
    fetch("https://catfact.ninja/facts?limit=5")
      .then((response) => response.json())
      .then((data) => setFacts(data.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }
  return (
    <>
      <h2>catFacts</h2>
      <div className="cat-card">
        {facts.map((fact, index) => (
          <p className="cat-fact-card" key={index}>
            {fact.fact}
          </p>
        ))}
      </div>
    </>
  );
}
