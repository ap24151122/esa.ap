// Functions for drawing economic model graphs

// Draw AD-AS model graph
function drawADASGraph(graphData) {
    const canvas = document.getElementById('adAsCanvas');
    const ctx = canvas.getContext('2d');
    
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Size canvas properly (important for clear rendering)
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    
    // Set canvas dimensions
    const width = canvas.width;
    const height = canvas.height;
    
    // Margins for graph
    const margin = {
        top: 15,
        right: 15,
        bottom: 25,
        left: 35
    };
    
    // Drawing area
    const drawWidth = width - margin.left - margin.right;
    const drawHeight = height - margin.top - margin.bottom;
    
    // Draw axes
    ctx.beginPath();
    ctx.strokeStyle = '#2c3e50';
    ctx.lineWidth = 1.5;
    
    // Y-axis (Price Level)
    ctx.moveTo(margin.left, margin.top);
    ctx.lineTo(margin.left, height - margin.bottom);
    
    // X-axis (Real GDP)
    ctx.moveTo(margin.left, height - margin.bottom);
    ctx.lineTo(width - margin.right, height - margin.bottom);
    ctx.stroke();
    
    // Add axis labels
    ctx.fillStyle = '#2c3e50';
    ctx.font = '10px Roboto';
    ctx.textAlign = 'center';
    
    // X-axis label
    ctx.fillText('Real GDP', width / 2, height - 5);
    
    // Y-axis label (rotated)
    ctx.save();
    ctx.translate(10, height / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText('Price Level', 0, 0);
    ctx.restore();
    
    // Draw grid lines
    ctx.beginPath();
    ctx.strokeStyle = '#ecf0f1';
    ctx.lineWidth = 0.5;
    
    // Horizontal grid lines
    for (let i = 1; i < 5; i++) {
        const y = margin.top + (drawHeight / 5) * i;
        ctx.moveTo(margin.left, y);
        ctx.lineTo(width - margin.right, y);
    }
    
    // Vertical grid lines
    for (let i = 1; i < 5; i++) {
        const x = margin.left + (drawWidth / 5) * i;
        ctx.moveTo(x, margin.top);
        ctx.lineTo(x, height - margin.bottom);
    }
    ctx.stroke();
    
    // Draw initial curves
    const centerX = margin.left + drawWidth / 2;
    const centerY = margin.top + drawHeight / 2;
    
    // Draw AD curve
    ctx.beginPath();
    ctx.strokeStyle = '#3498db'; // Blue for AD
    ctx.lineWidth = 2;
    
    // Draw a downward sloping curve for AD
    ctx.moveTo(margin.left, margin.top + drawHeight * 0.2);
    ctx.bezierCurveTo(
        centerX - drawWidth * 0.2, margin.top + drawHeight * 0.3,
        centerX + drawWidth * 0.2, margin.top + drawHeight * 0.7,
        width - margin.right, height - margin.bottom - drawHeight * 0.2
    );
    ctx.stroke();
    
    // Label the AD curve
    ctx.fillStyle = '#3498db';
    ctx.font = '10px Roboto';
    ctx.fillText('AD', margin.left + 20, margin.top + drawHeight * 0.25);
    
    // Draw AS curve
    ctx.beginPath();
    ctx.strokeStyle = '#e74c3c'; // Red for AS
    ctx.lineWidth = 2;
    
    // Draw an upward sloping curve for AS
    ctx.moveTo(margin.left, height - margin.bottom - drawHeight * 0.2);
    ctx.bezierCurveTo(
        centerX - drawWidth * 0.2, height - margin.bottom - drawHeight * 0.5,
        centerX + drawWidth * 0.2, margin.top + drawHeight * 0.5,
        width - margin.right, margin.top + drawHeight * 0.2
    );
    ctx.stroke();
    
    // Label the AS curve
    ctx.fillStyle = '#e74c3c';
    ctx.font = '10px Roboto';
    ctx.fillText('AS', width - margin.right - 20, margin.top + drawHeight * 0.25);
    
    // Draw equilibrium point
    ctx.beginPath();
    ctx.arc(centerX, centerY, 4, 0, Math.PI * 2);
    ctx.fillStyle = '#2c3e50';
    ctx.fill();
    
    // Add shifted curve if applicable
    if (graphData.shift !== 'none') {
        const offset = graphData.shift === 'right' ? 30 : -30;
        
        if (graphData.curve === 'AD') {
            // Draw shifted AD curve
            ctx.beginPath();
            ctx.strokeStyle = '#3498db'; // Blue for AD
            ctx.lineWidth = 2;
            ctx.setLineDash([3, 3]); // Dashed line for shifted curve
            
            // Draw a shifted downward sloping curve for AD
            ctx.moveTo(margin.left + offset, margin.top + drawHeight * 0.2);
            ctx.bezierCurveTo(
                centerX - drawWidth * 0.2 + offset, margin.top + drawHeight * 0.3,
                centerX + drawWidth * 0.2 + offset, margin.top + drawHeight * 0.7,
                width - margin.right + offset, height - margin.bottom - drawHeight * 0.2
            );
            ctx.stroke();
            ctx.setLineDash([]); // Reset dash
            
            // Label the shifted AD curve
            ctx.fillStyle = '#3498db';
            ctx.font = '10px Roboto';
            ctx.fillText('AD\'', margin.left + 20 + offset, margin.top + drawHeight * 0.25);
            
            // Draw new equilibrium point
            const newEquilibriumX = centerX + offset * 0.6;
            const newEquilibriumY = centerY + offset * 0.1;
            
            ctx.beginPath();
            ctx.arc(newEquilibriumX, newEquilibriumY, 4, 0, Math.PI * 2);
            ctx.fillStyle = '#27ae60';
            ctx.fill();
            
            // Draw arrow indicating movement
            ctx.beginPath();
            ctx.strokeStyle = '#27ae60';
            ctx.lineWidth = 1.5;
            ctx.setLineDash([2, 2]);
            ctx.moveTo(centerX, centerY);
            ctx.lineTo(newEquilibriumX, newEquilibriumY);
            ctx.stroke();
            ctx.setLineDash([]);
        }
        
        if (graphData.curve === 'AS') {
            // Draw shifted AS curve
            ctx.beginPath();
            ctx.strokeStyle = '#e74c3c'; // Red for AS
            ctx.lineWidth = 2;
            ctx.setLineDash([3, 3]); // Dashed line for shifted curve
            
            // Draw a shifted upward sloping curve for AS
            ctx.moveTo(margin.left + offset, height - margin.bottom - drawHeight * 0.2);
            ctx.bezierCurveTo(
                centerX - drawWidth * 0.2 + offset, height - margin.bottom - drawHeight * 0.5,
                centerX + drawWidth * 0.2 + offset, margin.top + drawHeight * 0.5,
                width - margin.right + offset, margin.top + drawHeight * 0.2
            );
            ctx.stroke();
            ctx.setLineDash([]); // Reset dash
            
            // Label the shifted AS curve
            ctx.fillStyle = '#e74c3c';
            ctx.font = '10px Roboto';
            ctx.fillText('AS\'', width - margin.right - 20 + offset, margin.top + drawHeight * 0.25);
            
            // Draw new equilibrium point
            const newEquilibriumX = centerX + offset * 0.6;
            const newEquilibriumY = centerY - offset * 0.1;
            
            ctx.beginPath();
            ctx.arc(newEquilibriumX, newEquilibriumY, 4, 0, Math.PI * 2);
            ctx.fillStyle = '#27ae60';
            ctx.fill();
            
            // Draw arrow indicating movement
            ctx.beginPath();
            ctx.strokeStyle = '#27ae60';
            ctx.lineWidth = 1.5;
            ctx.setLineDash([2, 2]);
            ctx.moveTo(centerX, centerY);
            ctx.lineTo(newEquilibriumX, newEquilibriumY);
            ctx.stroke();
            ctx.setLineDash([]);
        }
    }
}

// Draw IS-LM model graph
function drawISLMGraph(graphData) {
    const canvas = document.getElementById('isLmCanvas');
    const ctx = canvas.getContext('2d');
    
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Size canvas properly
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    
    // Set canvas dimensions
    const width = canvas.width;
    const height = canvas.height;
    
    // Margins for graph
    const margin = {
        top: 15,
        right: 15,
        bottom: 25,
        left: 35
    };
    
    // Drawing area
    const drawWidth = width - margin.left - margin.right;
    const drawHeight = height - margin.top - margin.bottom;
    
    // Draw axes
    ctx.beginPath();
    ctx.strokeStyle = '#2c3e50';
    ctx.lineWidth = 1.5;
    
    // Y-axis (Interest Rate)
    ctx.moveTo(margin.left, margin.top);
    ctx.lineTo(margin.left, height - margin.bottom);
    
    // X-axis (Income/Output)
    ctx.moveTo(margin.left, height - margin.bottom);
    ctx.lineTo(width - margin.right, height - margin.bottom);
    ctx.stroke();
    
    // Add axis labels
    ctx.fillStyle = '#2c3e50';
    ctx.font = '10px Roboto';
    ctx.textAlign = 'center';
    
    // X-axis label
    ctx.fillText('Income/Output', width / 2, height - 5);
    
    // Y-axis label (rotated)
    ctx.save();
    ctx.translate(10, height / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText('Interest Rate', 0, 0);
    ctx.restore();
    
    // Draw grid lines
    ctx.beginPath();
    ctx.strokeStyle = '#ecf0f1';
    ctx.lineWidth = 0.5;
    
    // Horizontal grid lines
    for (let i = 1; i < 5; i++) {
        const y = margin.top + (drawHeight / 5) * i;
        ctx.moveTo(margin.left, y);
        ctx.lineTo(width - margin.right, y);
    }
    
    // Vertical grid lines
    for (let i = 1; i < 5; i++) {
        const x = margin.left + (drawWidth / 5) * i;
        ctx.moveTo(x, margin.top);
        ctx.lineTo(x, height - margin.bottom);
    }
    ctx.stroke();
    
    // Draw initial curves
    const centerX = margin.left + drawWidth / 2;
    const centerY = margin.top + drawHeight / 2;
    
    // Draw IS curve
    ctx.beginPath();
    ctx.strokeStyle = '#3498db'; // Blue for IS
    ctx.lineWidth = 2;
    
    // Draw a downward sloping curve for IS
    ctx.moveTo(margin.left, margin.top + drawHeight * 0.2);
    ctx.bezierCurveTo(
        centerX - drawWidth * 0.2, margin.top + drawHeight * 0.3,
        centerX + drawWidth * 0.2, margin.top + drawHeight * 0.7,
        width - margin.right, height - margin.bottom - drawHeight * 0.2
    );
    ctx.stroke();
    
    // Label the IS curve
    ctx.fillStyle = '#3498db';
    ctx.font = '10px Roboto';
    ctx.fillText('IS', margin.left + 20, margin.top + drawHeight * 0.25);
    
    // Draw LM curve
    ctx.beginPath();
    ctx.strokeStyle = '#e74c3c'; // Red for LM
    ctx.lineWidth = 2;
    
    // Draw an upward sloping curve for LM
    ctx.moveTo(margin.left, height - margin.bottom - drawHeight * 0.2);
    ctx.bezierCurveTo(
        centerX - drawWidth * 0.2, height - margin.bottom - drawHeight * 0.4,
        centerX + drawWidth * 0.2, margin.top + drawHeight * 0.7,
        width - margin.right, margin.top + drawHeight * 0.1
    );
    ctx.stroke();
    
    // Label the LM curve
    ctx.fillStyle = '#e74c3c';
    ctx.font = '10px Roboto';
    ctx.fillText('LM', width - margin.right - 20, margin.top + drawHeight * 0.15);
    
    // Draw equilibrium point
    ctx.beginPath();
    ctx.arc(centerX, centerY, 4, 0, Math.PI * 2);
    ctx.fillStyle = '#2c3e50';
    ctx.fill();
    
    // Add shifted curve if applicable
    if (graphData.shift !== 'none') {
        const offset = graphData.shift === 'right' ? 30 : -30;
        
        if (graphData.curve === 'IS') {
            // Draw shifted IS curve
            ctx.beginPath();
            ctx.strokeStyle = '#3498db'; // Blue for IS
            ctx.lineWidth = 2;
            ctx.setLineDash([3, 3]); // Dashed line for shifted curve
            
            // Draw a shifted downward sloping curve for IS
            ctx.moveTo(margin.left + offset, margin.top + drawHeight * 0.2);
            ctx.bezierCurveTo(
                centerX - drawWidth * 0.2 + offset, margin.top + drawHeight * 0.3,
                centerX + drawWidth * 0.2 + offset, margin.top + drawHeight * 0.7,
                width - margin.right + offset, height - margin.bottom - drawHeight * 0.2
            );
            ctx.stroke();
            ctx.setLineDash([]); // Reset dash
            
            // Label the shifted IS curve
            ctx.fillStyle = '#3498db';
            ctx.font = '10px Roboto';
            ctx.fillText('IS\'', margin.left + 20 + offset, margin.top + drawHeight * 0.25);
            
            // Draw new equilibrium point
            const newEquilibriumX = centerX + offset * 0.7;
            const newEquilibriumY = centerY + offset * 0.2;
            
            ctx.beginPath();
            ctx.arc(newEquilibriumX, newEquilibriumY, 4, 0, Math.PI * 2);
            ctx.fillStyle = '#27ae60';
            ctx.fill();
            
            // Draw arrow indicating movement
            ctx.beginPath();
            ctx.strokeStyle = '#27ae60';
            ctx.lineWidth = 1.5;
            ctx.setLineDash([2, 2]);
            ctx.moveTo(centerX, centerY);
            ctx.lineTo(newEquilibriumX, newEquilibriumY);
            ctx.stroke();
            ctx.setLineDash([]);
        }
        
        if (graphData.curve === 'LM') {
            // Draw shifted LM curve
            ctx.beginPath();
            ctx.strokeStyle = '#e74c3c'; // Red for LM
            ctx.lineWidth = 2;
            ctx.setLineDash([3, 3]); // Dashed line for shifted curve
            
            // Draw a shifted upward sloping curve for LM
            ctx.moveTo(margin.left + offset, height - margin.bottom - drawHeight * 0.2);
            ctx.bezierCurveTo(
                centerX - drawWidth * 0.2 + offset, height - margin.bottom - drawHeight * 0.4,
                centerX + drawWidth * 0.2 + offset, margin.top + drawHeight * 0.7,
                width - margin.right + offset, margin.top + drawHeight * 0.1
            );
            ctx.stroke();
            ctx.setLineDash([]); // Reset dash
            
            // Label the shifted LM curve
            ctx.fillStyle = '#e74c3c';
            ctx.font = '10px Roboto';
            ctx.fillText('LM\'', width - margin.right - 20 + offset, margin.top + drawHeight * 0.15);
            
            // Draw new equilibrium point
            const newEquilibriumX = centerX + offset * 0.7;
            const newEquilibriumY = centerY - offset * 0.1;
            
            ctx.beginPath();
            ctx.arc(newEquilibriumX, newEquilibriumY, 4, 0, Math.PI * 2);
            ctx.fillStyle = '#27ae60';
            ctx.fill();
            
            // Draw arrow indicating movement
            ctx.beginPath();
            ctx.strokeStyle = '#27ae60';
            ctx.lineWidth = 1.5;
            ctx.setLineDash([2, 2]);
            ctx.moveTo(centerX, centerY);
            ctx.lineTo(newEquilibriumX, newEquilibriumY);
            ctx.stroke();
            ctx.setLineDash([]);
        }
    }
}

// Draw Phillips Curve
function drawPhillipsGraph(graphData) {
    const canvas = document.getElementById('phillipsCanvas');
    const ctx = canvas.getContext('2d');
    
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Size canvas properly
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    
    // Set canvas dimensions
    const width = canvas.width;
    const height = canvas.height;
    
    // Margins for graph
    const margin = {
        top: 15,
        right: 15,
        bottom: 25,
        left: 35
    };
    
    // Drawing area
    const drawWidth = width - margin.left - margin.right;
    const drawHeight = height - margin.top - margin.bottom;
    
    // Draw axes
    ctx.beginPath();
    ctx.strokeStyle = '#2c3e50';
    ctx.lineWidth = 1.5;
    
    // Y-axis (Inflation)
    ctx.moveTo(margin.left, margin.top);
    ctx.lineTo(margin.left, height - margin.bottom);
    
    // X-axis (Unemployment)
    ctx.moveTo(margin.left, height - margin.bottom);
    ctx.lineTo(width - margin.right, height - margin.bottom);
    ctx.stroke();
    
    // Add axis labels
    ctx.fillStyle = '#2c3e50';
    ctx.font = '10px Roboto';
    ctx.textAlign = 'center';
    
    // X-axis label
    ctx.fillText('Unemployment', width / 2, height - 5);
    
    // Y-axis label (rotated)
    ctx.save();
    ctx.translate(10, height / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText('Inflation', 0, 0);
    ctx.restore();
    
    // Draw grid lines
    ctx.beginPath();
    ctx.strokeStyle = '#ecf0f1';
    ctx.lineWidth = 0.5;
    
    // Horizontal grid lines
    for (let i = 1; i < 5; i++) {
        const y = margin.top + (drawHeight / 5) * i;
        ctx.moveTo(margin.left, y);
        ctx.lineTo(width - margin.right, y);
    }
    
    // Vertical grid lines
    for (let i = 1; i < 5; i++) {
        const x = margin.left + (drawWidth / 5) * i;
        ctx.moveTo(x, margin.top);
        ctx.lineTo(x, height - margin.bottom);
    }
    ctx.stroke();
    
    // Draw initial Phillips curve
    const centerX = margin.left + drawWidth / 2;
    
    ctx.beginPath();
    ctx.strokeStyle = '#9b59b6'; // Purple for Phillips curve
    ctx.lineWidth = 2;
    
    // Draw a downward sloping curve for Phillips Curve
    ctx.moveTo(margin.left + drawWidth * 0.1, margin.top + drawHeight * 0.2);
    ctx.bezierCurveTo(
        centerX - drawWidth * 0.2, margin.top + drawHeight * 0.4,
        centerX + drawWidth * 0.1, margin.top + drawHeight * 0.7,
        width - margin.right - drawWidth * 0.1, height - margin.bottom - drawHeight * 0.2
    );
    ctx.stroke();
    
    // Label the Phillips curve
    ctx.fillStyle = '#9b59b6';
    ctx.font = '10px Roboto';
    ctx.fillText('PC', margin.left + 25, margin.top + drawHeight * 0.3);
    
    // Mark the current equilibrium point
    const equilibriumX = centerX;
    const equilibriumY = margin.top + drawHeight / 2;
    
    ctx.beginPath();
    ctx.arc(equilibriumX, equilibriumY, 4, 0, Math.PI * 2);
    ctx.fillStyle = '#2c3e50';
    ctx.fill();
    
    // Add shifted curve if applicable
    if (graphData.shift !== 'none') {
        const offset = graphData.shift === 'right' ? 30 : -30;
        const vertOffset = graphData.shift === 'right' ? 20 : -20;
        
        // Draw shifted Phillips curve
        ctx.beginPath();
        ctx.strokeStyle = '#9b59b6'; // Purple for Phillips curve
        ctx.lineWidth = 2;
        ctx.setLineDash([3, 3]); // Dashed line for shifted curve
        
        // Draw a shifted curve
        ctx.moveTo(margin.left + drawWidth * 0.1, margin.top + drawHeight * 0.2 + vertOffset);
        ctx.bezierCurveTo(
            centerX - drawWidth * 0.2, margin.top + drawHeight * 0.4 + vertOffset,
            centerX + drawWidth * 0.1, margin.top + drawHeight * 0.7 + vertOffset,
            width - margin.right - drawWidth * 0.1, height - margin.bottom - drawHeight * 0.2 + vertOffset
        );
        ctx.stroke();
        ctx.setLineDash([]); // Reset dash
        
        // Label the shifted curve
        ctx.fillStyle = '#9b59b6';
        ctx.font = '10px Roboto';
        ctx.fillText('PC\'', margin.left + 25, margin.top + drawHeight * 0.3 + vertOffset);
        
        // Draw new equilibrium point
        const newEquilibriumX = equilibriumX + offset * 0.3;
        const newEquilibriumY = equilibriumY + vertOffset * 0.5;
        
        ctx.beginPath();
        ctx.arc(newEquilibriumX, newEquilibriumY, 4, 0, Math.PI * 2);
        ctx.fillStyle = '#27ae60';
        ctx.fill();
        
        // Draw arrow indicating movement
        ctx.beginPath();
        ctx.strokeStyle = '#27ae60';
        ctx.lineWidth = 1.5;
        ctx.setLineDash([2, 2]);
        ctx.moveTo(equilibriumX, equilibriumY);
        ctx.lineTo(newEquilibriumX, newEquilibriumY);
        ctx.stroke();
        ctx.setLineDash([]);
    }
}

// Draw Production Possibilities Frontier (PPF)
function drawPPFGraph(graphData) {
    const canvas = document.getElementById('ppfCanvas');
    const ctx = canvas.getContext('2d');
    
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Size canvas properly
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    
    // Set canvas dimensions
    const width = canvas.width;
    const height = canvas.height;
    
    // Margins for graph
    const margin = {
        top: 15,
        right: 15,
        bottom: 25,
        left: 35
    };
    
    // Drawing area
    const drawWidth = width - margin.left - margin.right;
    const drawHeight = height - margin.top - margin.bottom;
    
    // Draw axes
    ctx.beginPath();
    ctx.strokeStyle = '#2c3e50';
    ctx.lineWidth = 1.5;
    
    // Y-axis (Good Y)
    ctx.moveTo(margin.left, margin.top);
    ctx.lineTo(margin.left, height - margin.bottom);
    
    // X-axis (Good X)
    ctx.moveTo(margin.left, height - margin.bottom);
    ctx.lineTo(width - margin.right, height - margin.bottom);
    ctx.stroke();
    
    // Add axis labels
    ctx.fillStyle = '#2c3e50';
    ctx.font = '10px Roboto';
    ctx.textAlign = 'center';
    
    // X-axis label
    ctx.fillText('Consumer Goods', width / 2, height - 5);
    
    // Y-axis label (rotated)
    ctx.save();
    ctx.translate(10, height / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText('Capital Goods', 0, 0);
    ctx.restore();
    
    // Draw grid lines
    ctx.beginPath();
    ctx.strokeStyle = '#ecf0f1';
    ctx.lineWidth = 0.5;
    
    // Horizontal grid lines
    for (let i = 1; i < 5; i++) {
        const y = margin.top + (drawHeight / 5) * i;
        ctx.moveTo(margin.left, y);
        ctx.lineTo(width - margin.right, y);
    }
    
    // Vertical grid lines
    for (let i = 1; i < 5; i++) {
        const x = margin.left + (drawWidth / 5) * i;
        ctx.moveTo(x, margin.top);
        ctx.lineTo(x, height - margin.bottom);
    }
    ctx.stroke();
    
    // Draw the PPF curve
    ctx.beginPath();
    ctx.strokeStyle = '#f39c12'; // Orange for PPF
    ctx.lineWidth = 2;
    
    // Draw a concave curve from top-left to bottom-right
    ctx.moveTo(margin.left, margin.top + drawHeight * 0.1);
    ctx.quadraticCurveTo(
        margin.left + drawWidth * 0.8, margin.top + drawHeight * 0.1,
        width - margin.right - drawWidth * 0.1, height - margin.bottom - drawHeight * 0.1
    );
    ctx.stroke();
    
    // Label the PPF curve
    ctx.fillStyle = '#f39c12';
    ctx.font = '10px Roboto';
    ctx.fillText('PPF', margin.left + 50, margin.top + drawHeight * 0.25);
    
    // Draw a point on the PPF (efficient production)
    const pointX = margin.left + drawWidth * 0.7;
    const pointY = margin.top + drawHeight * 0.4;
    
    ctx.beginPath();
    ctx.arc(pointX, pointY, 4, 0, Math.PI * 2);
    ctx.fillStyle = '#2c3e50';
    ctx.fill();
    
    // Add shifted curve if applicable
    if (graphData.shift !== 'none') {
        const offset = graphData.shift === 'outward' ? 20 : -20;
        
        // Draw shifted PPF curve
        ctx.beginPath();
        ctx.strokeStyle = '#f39c12'; // Orange for PPF
        ctx.lineWidth = 2;
        ctx.setLineDash([3, 3]); // Dashed line for shifted curve
        
        // Draw a shifted concave curve
        ctx.moveTo(margin.left, margin.top + drawHeight * 0.1 - offset);
        ctx.quadraticCurveTo(
            margin.left + drawWidth * 0.8, margin.top + drawHeight * 0.1 - offset,
            width - margin.right - drawWidth * 0.1 + offset, height - margin.bottom - drawHeight * 0.1 - offset
        );
        ctx.stroke();
        ctx.setLineDash([]); // Reset dash
        
        // Label the shifted PPF curve
        ctx.fillStyle = '#f39c12';
        ctx.font = '10px Roboto';
        ctx.fillText('PPF\'', margin.left + 50, margin.top + drawHeight * 0.25 - offset);
        
        // Draw new point on the shifted PPF
        const newPointX = pointX + offset * 0.4;
        const newPointY = pointY - offset * 0.4;
        
        ctx.beginPath();
        ctx.arc(newPointX, newPointY, 4, 0, Math.PI * 2);
        ctx.fillStyle = '#27ae60';
        ctx.fill();
        
        // Draw arrow indicating movement
        ctx.beginPath();
        ctx.strokeStyle = '#27ae60';
        ctx.lineWidth = 1.5;
        ctx.setLineDash([2, 2]);
        ctx.moveTo(pointX, pointY);
        ctx.lineTo(newPointX, newPointY);
        ctx.stroke();
        ctx.setLineDash([]);
    }
}