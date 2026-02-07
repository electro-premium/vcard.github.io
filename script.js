// Кнопка "Сохранить контакт"
document.addEventListener('DOMContentLoaded', function() {
    const saveBtn = document.getElementById('saveBtn');
    if (saveBtn) {
        saveBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            const link = document.createElement('a');
            link.href = 'contact.vcf';
            link.download = 'vitaliy_elektrik.vcf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            // Фидбек пользователю
            const originalText = saveBtn.innerHTML;
            saveBtn.innerHTML = '✅ Контакт скачан!';
            saveBtn.style.background = 'linear-gradient(135deg, #4CAF50 0%, #45a049 100%)';
            
            setTimeout(() => {
                saveBtn.innerHTML = originalText;
                saveBtn.style.background = 'linear-gradient(135deg, #4caf50 0%, #45a049 100%)';
            }, 2000);
        });
    }
});