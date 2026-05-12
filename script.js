function launchDRK() {
    // 3 saniye sonra splash ekranını kapat
    setTimeout(() => {
        const splash = document.getElementById('splash');
        const mainContent = document.getElementById('main-content');
        
        splash.style.opacity = '0';
        
        setTimeout(() => {
            splash.style.display = 'none';
            mainContent.style.opacity = '1';
        }, 1000); // 1 saniyelik kararma efekti
    }, 3000); // 3 saniye bekleme süresi
}
