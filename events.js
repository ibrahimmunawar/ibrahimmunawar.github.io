// register our component
AFRAME.registerComponent('markerhandler', {

    init: function() {
        const animatedMarker = document.querySelector("#animated-marker");

        animatedMarker.addEventListener('click', function(ev){
            if (animatedMarker.object3D.visible == true && ev.detail.cursorEl) {
                const entity = document.querySelector('#animated-model');
                const scale = entity.getAttribute('scale');
                Object.keys(scale).forEach((key) => scale[key] = scale[key] + 1);
                
                // every click, we make our model grow in size
                entity.setAttribute('scale', scale);
            }
        });
}});

