
import iconReaction from '../images/icon-reaction.svg';
import iconMemory from '../images/icon-memory.svg';
import iconVerbal from '../images/icon-verbal.svg';
import iconVisual from '../images/icon-visual.svg';


interface SummaryItem {
    category: string;
    score: number;
    icon: string;
  }
  
  const jsonData: SummaryItem[] = [
    {
      category: "Reaction",
      score: 80,
      icon: iconMemory
    },
    {
      category: "Memory",
      score: 92,
      icon: iconReaction
    },
    {
      category: "Verbal",
      score: 61,
      icon: iconVerbal
    },
    {
      category: "Visual",
      score: 72,
      icon: iconVisual
    }
  ];
  
  export default jsonData;
  