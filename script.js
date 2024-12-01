const input = document.getElementById('input');
const bar = document.getElementById('bar');
const text = document.getElementById('text');

input.addEventListener('input', StrengthChecker);

function StrengthChecker(){
    const password = input.value;
    const strength = calculateStrength(password);
    
    bar.style.width = `${strength}%`;
    bar.style.backgroundColor = Color(strength);

    text.textContent = Text(strength);
}

function calculateStrength(password){
    let score = 0;
    if (password.length >= 8){
        score += 20;}
    if (password.length >= 12){
        score += 10;}
    if (/[A-Z]/.test(password)) 
        score += 20; 
    if (/[a-z]/.test(password)) 
        score += 20; 
    if (/[0-9]/.test(password)) 
        score += 20;
    if (/[^A-Za-z0-9]/.test(password)) 
        score += 10;
    return score;
}

function Color(score)    {
    if (score < 40) return '#ff4d4d';     
    if (score < 70) return '#ffaa00';    
    return '#4CAF50';                   
}

function Text(score){
    if (score < 40) return 'Weak Password';
    if (score < 70) return 'Medium Password';
    return 'Strong Password';
}
