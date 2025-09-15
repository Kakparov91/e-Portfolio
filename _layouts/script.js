document.getElementById('mlButton').addEventListener('click', function(event) {
    event.preventDefault();  // Butonun varsayılan davranışını engelle
    
    // "ml.md" dosyasını fetch ile al
    fetch('ml.md')
        .then(response => {
            if (!response.ok) {
                throw new Error('Markdown file not found');
            }
            return response.text();
        })
        .then(data => {
            // Markdown içeriğini HTML'e dönüştür
            let htmlContent = marked(data);
            // Sayfadaki ana içeriği güncelle
            document.getElementById('content').innerHTML = htmlContent;
        })
        .catch(error => {
            console.error('Hata:', error);
            document.getElementById('content').innerHTML = '<p>İçerik yüklenemedi.</p>';
        });
});
