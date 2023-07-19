import { useEffect, useState } from "react";
import axios from "axios";
const IntitalStats = {
    totalQuestions: 0,
    totalSolved: 0,
    easySolved: 0,
    mediumSolved: 0,
    hardSolved: 0,
    ranking: 0,
    reputation: 0
}
export default function useFetchLeetcodedata() {
    const [stats, setStats] = useState(IntitalStats);
    useEffect(() => {
  
      const handleStatsLocally = () => {
        const statsFromStorage = localStorage.getItem('stats');
        if (!statsFromStorage) return;
        setStats(JSON.parse(statsFromStorage));
      }
      const fetchStats = async () => {
        const data = await axios.get('https://leetcode-stats-api.herokuapp.com/rakeshdhariwal61')
          .then((res) => res.data).catch((err) => err);
        const statsData = {
          totalQuestions: data.totalQuestions,
          totalSolved: data.totalSolved,
          easySolved: data.easySolved,
          mediumSolved: data.mediumSolved,
          hardSolved: data.hardSolved,
          ranking: data.ranking,
          reputation: data.reputation
        }
        localStorage.setItem('stats', JSON.stringify(statsData));
        setStats(statsData);
      }
      handleStatsLocally();
      fetchStats();
    }, []);
    return stats;
}
