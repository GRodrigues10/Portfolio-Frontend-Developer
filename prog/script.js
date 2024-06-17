document.getElementById('meuForm').addEventListener('submit', (event) => {
    var submitBtn = document.getElementById('submitBtn');
    var loadingIndicator = document.getElementById('loading');
    
    submitBtn.disabled = true;
    loadingIndicator.style.display = 'block';
});