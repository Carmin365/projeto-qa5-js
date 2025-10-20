function simulateLoad() {
    const profile = document.getElementById('network-profile').value;
    const resultsDiv = document.getElementById('results');
    
  
    const profileData = {
        fast: { time: 1.5, threshold: 3 },
        '3g': { time: 5.2, threshold: 8 },
        slow: { time: 18.5, threshold: 15 } 
    };
    
    const { time, threshold } = profileData[profile];
    const isPass = time <= threshold;

    document.getElementById('tested-profile').textContent = profile.toUpperCase();
    document.getElementById('load-time').textContent = `${time.toFixed(2)} segundos`;

    const statusElement = document.getElementById('performance-status');
    
    if (isPass) {
        statusElement.textContent = "Passou (Qualidade OK)";
        statusElement.className = 'status-ok';
    } else {
        statusElement.textContent = `FALHA! Tempo (${time}s) excede o limite de ${threshold}s.`;
        statusElement.className = 'status-fail';
    }

    resultsDiv.style.display = 'block';
}
