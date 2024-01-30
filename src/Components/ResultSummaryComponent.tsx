import React, { useState, useEffect } from 'react';
import jsonData from '../data/data'; 
import './styles.css'; 

interface SummaryItem {
  category: string;
  score: number;
  icon: string;
}

const ResultsSummaryComponent: React.FC = () => {
  const [summaryData, setSummaryData] = useState<SummaryItem[]>([]);

  useEffect(() => {
    setSummaryData(jsonData);
  }, []);

  return (
    <main>
      <div className="result-summary">
        <div className="results grid-flow" data-spacing="large">
          <h1 className="section-title">Your Result</h1>
          <p className="result-score"><span>76</span> of 100</p>
          <div className="grid-flow">
            <p className="result-rank">Great</p>
            <p>You scored higher than 65% of the people who have taken these tests.</p>
          </div>
        </div>
        <div className='summary grid-flow'>
          <h2 className="section-title">Summary</h2>
          <div className="grid-flow">
            {summaryData.map((item, index) => (
              <div className="summary-item" key={item.category} data-item-type={`accent-${index + 1}`}>
                <div className="flex-group">
                  <img src={item.icon} alt={`${item.category} icon`} />
                  <h3 className="summary-item-title">{item.category}</h3>
                </div>
                <p className="summary-score"><span>{item.score}</span> / 100</p>
              </div>
            ))}
          </div>
          <button className="button">Continue</button>
        </div>
      </div>
    </main>
  );
};

export default ResultsSummaryComponent;
