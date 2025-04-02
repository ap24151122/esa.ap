// Main application logic for the Economic Shock Simulator

document.addEventListener('DOMContentLoaded', function() {
    // Add event listeners for direction options
    document.getElementById('increaseOption').addEventListener('click', function() {
        document.getElementById('directionIncrease').checked = true;
        this.classList.add('selected-increase');
        document.getElementById('decreaseOption').classList.remove('selected-decrease');
    });
    
    document.getElementById('decreaseOption').addEventListener('click', function() {
        document.getElementById('directionDecrease').checked = true;
        this.classList.add('selected-decrease');
        document.getElementById('increaseOption').classList.remove('selected-increase');
    });
    
    // Initially add the selected class to increase option
    document.getElementById('increaseOption').classList.add('selected-increase');
    
    // Populate shock types dropdown
    const select = document.getElementById('shockType');
    shocks.forEach(shock => {
        const option = document.createElement('option');
        option.value = shock.id;
        option.textContent = shock.name;
        select.appendChild(option);
    });
    
    // Handle form submission
    document.getElementById('simulatorForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const shockType = document.getElementById('shockType').value;
        const direction = document.querySelector('input[name="direction"]:checked').value;
        
        // Simulate the shock
        simulateShock(shockType, direction);
    });
});

// Function to simulate economic shock and display results
function simulateShock(shockType, direction) {
    // Get the results for this shock type and direction
    const data = shockImpacts[shockType][direction];
    
    if (!data) {
        console.error(`No data found for shock type: ${shockType}, direction: ${direction}`);
        return;
    }
    
    const resultsDiv = document.getElementById('results');
    const resultsContent = document.getElementById('resultsContent');
    
    // Clear previous results
    resultsContent.innerHTML = '';
    
    // Display results
    data.results.forEach((result, index) => {
        let effectClass = 'neutral';
        let arrowIcon = '';
        
        if (result.effect.includes('INCREASE')) {
            effectClass = 'increase';
            arrowIcon = '↑';
        } else if (result.effect.includes('DECREASE')) {
            effectClass = 'decrease';
            arrowIcon = '↓';
        } else {
            arrowIcon = '↔';
        }
        
        resultsContent.innerHTML += `
            <div class="result-item" style="animation-delay: ${0.1 * (index + 1)}s;">
                <h3>${result.indicator}</h3>
                <p class="result-effect ${effectClass}">
                    <span class="icon-container">${arrowIcon}</span>
                    ${result.effect}
                </p>
                <p>${result.description}</p>
            </div>
        `;
    });
    
    // Draw all the economic model graphs
    // Set timeout to allow the results div to be displayed first
    setTimeout(() => {
        drawADASGraph(data.graph_data["AD_AS"]);
        drawISLMGraph(data.graph_data["IS_LM"]);
        drawPhillipsGraph(data.graph_data["Phillips"]);
        drawPPFGraph(data.graph_data["PPF"]);
    }, 100);
    
    // Show results container
    resultsDiv.style.display = 'block';
    
    // Display conclusion if available
    const conclusionSection = document.getElementById('conclusionSection');
    if (data.conclusion) {
        document.getElementById('shortTermConclusion').textContent = data.conclusion.short_term;
        document.getElementById('longTermConclusion').textContent = data.conclusion.long_term;
        conclusionSection.style.display = 'block';
    } else {
        conclusionSection.style.display = 'none';
    }
    
    // Scroll to results
    resultsDiv.scrollIntoView({ behavior: 'smooth' });
}