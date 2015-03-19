/*
  Calculates a ratio to be used in the particle counts, distances, etc.
  Borrowed from UCLA's LAHacks 2015 site
*/

var particleRatio = Math.sqrt($(window).width() * $(window).height()) / 1120.0;
loadParticles(particleRatio);


/*
  Enable Particles.js
*/
function loadParticles(ratio){
  /* 
    Vars for easy adjustment
    This idea was also borrowed from UCLA
  */
  var MAX_PARTICLES      = 300;
  var MAX_DISTANCE       = 75;
  var MAX_MOUSE_DISTANCE = 300;
  var MAX_SIZE           = 7;
  var MAX_SPEED          = 7;
  var PARTICLE_COLOR = '21d0f5';

  /* Particles function */
  particlesJS('particles-js', {
  particles: {
    color: PARTICLE_COLOR,
    color_random: false,
    shape: 'circle', // "circle", "edge" or "triangle"
    opacity: {
      opacity: 1,
      anim: {
        enable: true,
        speed: Math.floor(ratio * MAX_SPEED),
        opacity_min: 0,
        sync: false
      }
    },
    size: Math.floor(ratio * MAX_SIZE),
    size_random: true,
    nb: Math.floor(ratio * MAX_PARTICLES),
    line_linked: {
      enable_auto: true,
      distance: Math.floor(ratio * MAX_DISTANCE),
      color: PARTICLE_COLOR,
      opacity: 1,
      width: 1,
      condensed_mode: {
        enable: false,
        rotateX: 600,
        rotateY: 600
      }
    },
    anim: {
      enable: true,
      speed: 1
    }
  },
  interactivity: {
    enable: false,
    mouse: {
      distance: Math.floor(ratio * MAX_MOUSE_DISTANCE)
    },
    detect_on: 'canvas', // "canvas" or "window"
    mode: 'grab', // "grab" of false
    line_linked: {
      opacity: .5
    },
    events: {
      onclick: {
        enable: true,
        mode: 'push', // "push" or "remove"
        nb: Math.floor(ratio * MAX_SIZE)
      },
      onresize: {
        enable: true,
        mode: 'out', // "out" or "bounce"
        density_auto: false,
        density_area: 100 // nb_particles = particles.nb * (canvas width *  canvas height / 1000) / density_area
      }
    }
  },
  /* Retina Display Support */
  retina_detect: true
  });
}