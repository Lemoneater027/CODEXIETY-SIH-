// Monastery360 - Virtual Tour System using Marzipano
// This creates 360° virtual tours from your panoramic images

class VirtualTourSystem {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.viewer = null;
        this.currentScene = null;
        this.scenes = new Map();
        this.hotspots = [];
        
        this.initializeViewer();
    }
    
    initializeViewer() {
        // Initialize Marzipano viewer
        this.viewer = new Marzipano.Viewer(this.container);
        
        // Add viewer controls
        this.addViewerControls();
    }
    
    // Load monastery virtual tour data
    loadMonasteryTour(monasteryId) {
        const monastery = MonasteryAPI.getMonasteryById(monasteryId);
        if (!monastery || !monastery.images.virtualTour) {
            console.error('No virtual tour data for monastery:', monasteryId);
            return;
        }
        
        this.loadTourScenes(monastery);
        this.createNavigationUI(monastery);
    }
    
    loadTourScenes(monastery) {
        const virtualTourImages = monastery.images.virtualTour;
        
        virtualTourImages.forEach((imagePath, index) => {
            const sceneData = {
                id: `scene_${index}`,
                name: this.getSceneName(imagePath, index),
                image: imagePath,
                hotspots: this.generateHotspots(index, virtualTourImages.length)
            };
            
            this.createScene(sceneData);
        });
        
        // Start with first scene
        if (this.scenes.size > 0) {
            this.switchToScene('scene_0');
        }
    }
    
    createScene(sceneData) {
        // Create image source
        const source = Marzipano.ImageUrlSource.fromString(sceneData.image);
        
        // Create geometry
        const geometry = new Marzipano.EquirectGeometry([
            { width: 4096 },
            { width: 2048 },
            { width: 1024 }
        ]);
        
        // Create view
        const view = new Marzipano.RectilinearView();
        
        // Create scene
        const scene = this.viewer.createScene({
            source: source,
            geometry: geometry,
            view: view,
            pinFirstLevel: true
        });
        
        // Add hotspots to scene
        this.addHotspotsToScene(scene, sceneData.hotspots, sceneData.id);
        
        // Store scene
        this.scenes.set(sceneData.id, {
            scene: scene,
            data: sceneData
        });
    }
    
    addHotspotsToScene(scene, hotspots, sceneId) {
        hotspots.forEach(hotspot => {
            const hotspotElement = this.createHotspotElement(hotspot, sceneId);
            
            scene.hotspotContainer().createHotspot(hotspotElement, {
                yaw: hotspot.yaw,
                pitch: hotspot.pitch
            });
        });
    }
    
    createHotspotElement(hotspot, currentSceneId) {
        const element = document.createElement('div');
        element.className = `hotspot hotspot-${hotspot.type}`;
        
        if (hotspot.type === 'info') {
            element.innerHTML = `
                <div class="hotspot-info">
                    <i class="fas fa-info-circle"></i>
                    <div class="hotspot-tooltip">${hotspot.text}</div>
                </div>
            `;
        } else if (hotspot.type === 'navigate') {
            element.innerHTML = `
                <div class="hotspot-navigate">
                    <i class="fas fa-arrow-circle-right"></i>
                    <div class="hotspot-tooltip">Go to ${hotspot.targetName}</div>
                </div>
            `;
            
            element.addEventListener('click', () => {
                this.switchToScene(hotspot.target);
            });
        } else if (hotspot.type === 'audio') {
            element.innerHTML = `
                <div class="hotspot-audio">
                    <i class="fas fa-volume-up"></i>
                    <div class="hotspot-tooltip">Play audio guide</div>
                </div>
            `;
            
            element.addEventListener('click', () => {
                this.playAudio(hotspot.audioFile);
            });
        }
        
        return element;
    }
    
    switchToScene(sceneId) {
        const sceneData = this.scenes.get(sceneId);
        if (!sceneData) {
            console.error('Scene not found:', sceneId);
            return;
        }
        
        this.currentScene = sceneId;
        sceneData.scene.switchTo({
            transitionDuration: 1000,
            transitionUpdate: Marzipano.util.tween.linear
        });
        
        this.updateNavigationUI(sceneId);
    }
    
    generateHotspots(sceneIndex, totalScenes) {
        const hotspots = [];
        
        // Add navigation hotspots
        if (sceneIndex > 0) {
            hotspots.push({
                type: 'navigate',
                yaw: -Math.PI / 2,
                pitch: 0,
                target: `scene_${sceneIndex - 1}`,
                targetName: 'Previous Area'
            });
        }
        
        if (sceneIndex < totalScenes - 1) {
            hotspots.push({
                type: 'navigate', 
                yaw: Math.PI / 2,
                pitch: 0,
                target: `scene_${sceneIndex + 1}`,
                targetName: 'Next Area'
            });
        }
        
        // Add info hotspots
        hotspots.push({
            type: 'info',
            yaw: 0,
            pitch: -Math.PI / 6,
            text: this.getSceneInfo(sceneIndex)
        });
        
        // Add audio hotspot
        hotspots.push({
            type: 'audio',
            yaw: Math.PI / 4,
            pitch: -Math.PI / 8,
            audioFile: `/audio/guides/scene_${sceneIndex}.mp3`
        });
        
        return hotspots;
    }
    
    getSceneName(imagePath, index) {
        const sceneName = imagePath.split('/').pop().split('.')[0];
        const sceneNames = {
            'entrance': 'Monastery Entrance',
            'main_hall': 'Main Prayer Hall',
            'prayer_hall': 'Prayer Hall',
            'courtyard': 'Monastery Courtyard',
            'shrine': 'Main Shrine',
            'meditation': 'Meditation Hall'
        };
        
        return sceneNames[sceneName] || `Area ${index + 1}`;
    }
    
    getSceneInfo(sceneIndex) {
        const infos = [
            "Welcome to the monastery entrance. Notice the traditional Tibetan architecture.",
            "This is the main prayer hall where monks gather for daily prayers.",
            "The prayer hall contains ancient Buddhist scriptures and artifacts.",
            "The peaceful courtyard is used for meditation and ceremonies.",
            "This shrine houses sacred statues and religious artifacts.",
            "The meditation hall offers a quiet space for contemplation."
        ];
        
        return infos[sceneIndex] || "Explore this sacred space of the monastery.";
    }
    
    createNavigationUI(monastery) {
        const navContainer = document.createElement('div');
        navContainer.className = 'vr-navigation';
        navContainer.innerHTML = `
            <div class="vr-nav-header">
                <h3>${monastery.name.english}</h3>
                <div class="vr-nav-controls">
                    <button class="vr-nav-btn" id="vrFullscreen">
                        <i class="fas fa-expand"></i>
                    </button>
                    <button class="vr-nav-btn" id="vrVRMode">
                        <i class="fas fa-vr-cardboard"></i>
                    </button>
                    <button class="vr-nav-btn" id="vrAudioToggle">
                        <i class="fas fa-volume-up"></i>
                    </button>
                </div>
            </div>
            <div class="vr-scene-list" id="vrSceneList"></div>
            <div class="vr-info-panel" id="vrInfoPanel">
                <p>Use mouse to look around. Click hotspots to navigate or get information.</p>
            </div>
        `;
        
        this.container.appendChild(navContainer);
        
        this.setupNavigationEvents();
        this.populateSceneList();
    }
    
    setupNavigationEvents() {
        // Fullscreen toggle
        document.getElementById('vrFullscreen').addEventListener('click', () => {
            this.toggleFullscreen();
        });
        
        // VR mode (if supported)
        document.getElementById('vrVRMode').addEventListener('click', () => {
            this.enterVRMode();
        });
        
        // Audio toggle
        document.getElementById('vrAudioToggle').addEventListener('click', () => {
            this.toggleAudio();
        });
    }
    
    populateSceneList() {
        const sceneList = document.getElementById('vrSceneList');
        
        this.scenes.forEach((sceneData, sceneId) => {
            const sceneBtn = document.createElement('button');
            sceneBtn.className = 'vr-scene-btn';
            sceneBtn.innerHTML = `
                <i class="fas fa-eye"></i>
                ${sceneData.data.name}
            `;
            
            sceneBtn.addEventListener('click', () => {
                this.switchToScene(sceneId);
            });
            
            sceneList.appendChild(sceneBtn);
        });
    }
    
    updateNavigationUI(currentSceneId) {
        // Update active scene button
        document.querySelectorAll('.vr-scene-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        const activeBtn = Array.from(document.querySelectorAll('.vr-scene-btn'))
            .find((btn, index) => `scene_${index}` === currentSceneId);
        
        if (activeBtn) {
            activeBtn.classList.add('active');
        }
    }
    
    addViewerControls() {
        // Add mouse and touch controls
        const controls = this.viewer.controls();
        controls.registerMethod('scroll', new Marzipano.ElementPressedMovementMethod(
            document.getElementById('vr-container'), 'mousewheel', Marzipano.util.scrollDelta
        ));
    }
    
    toggleFullscreen() {
        if (!document.fullscreenElement) {
            this.container.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    }
    
    enterVRMode() {
        // Check for WebXR support
        if (navigator.xr) {
            navigator.xr.requestSession('immersive-vr').then(session => {
                console.log('VR session started');
                // Initialize VR rendering
            }).catch(err => {
                console.log('VR not supported:', err);
                alert('VR mode not supported on this device');
            });
        } else {
            alert('WebXR not supported. Please use a VR-compatible browser.');
        }
    }
    
    playAudio(audioFile) {
        if (this.currentAudio) {
            this.currentAudio.pause();
        }
        
        this.currentAudio = new Audio(audioFile);
        this.currentAudio.play().catch(err => {
            console.log('Audio playback failed:', err);
        });
    }
    
    toggleAudio() {
        const audioBtn = document.getElementById('vrAudioToggle');
        
        if (this.currentAudio && !this.currentAudio.paused) {
            this.currentAudio.pause();
            audioBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
        } else {
            // Play ambient monastery sounds
            this.playAudio('/audio/ambient/monastery_ambient.mp3');
            audioBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
        }
    }
}

// Initialize virtual tour when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on the virtual tour page
    if (document.getElementById('vr-container')) {
        const tourSystem = new VirtualTourSystem('vr-container');
        
        // Get monastery ID from URL parameters or default
        const urlParams = new URLSearchParams(window.location.search);
        const monasteryId = urlParams.get('monastery') || 'rumtek_monastery';
        
        // Load the monastery tour
        tourSystem.loadMonasteryTour(monasteryId);
        
        // Make tour system globally available
        window.virtualTourSystem = tourSystem;
    }
});