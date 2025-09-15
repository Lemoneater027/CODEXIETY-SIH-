// Register the service worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
        .then(() => console.log('✅ App can work offline now!'))
        .catch(() => console.log('❌ Offline feature failed'));
}

// Show install button
let installButton;
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    installButton = e;
    
    // Show install message
    const installDiv = document.createElement('div');
    installDiv.innerHTML = `
        <div style="position:fixed; bottom:20px; left:20px; right:20px; background:#8B4513; color:white; padding:15px; border-radius:10px; text-align:center; z-index:9999;">
            <strong>📱 Install Monastery360 App!</strong>
            <button onclick="installApp()" style="background:#FFD700; color:#000; border:none; padding:8px 15px; border-radius:5px; margin-left:10px; cursor:pointer;">Install</button>
            <button onclick="this.parentElement.parentElement.remove()" style="background:transparent; color:white; border:1px solid white; padding:8px 15px; border-radius:5px; margin-left:5px; cursor:pointer;">Later</button>
        </div>
    `;
    document.body.appendChild(installDiv);
});

function installApp() {
    if (installButton) {
        installButton.prompt();
    }
}
