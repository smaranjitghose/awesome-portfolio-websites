particlesJS('particles-js', {
	particles: {
		number: { value: 80, density: { enable: true, value_area: 800 } },
		color: { value: ['#C00C57','#2CD600','#3AD0ED','#ECB528'] },
		shape: {
			type: 'circle',
			stroke: { width: 0, color: '#000000' },
			polygon: { nb_sides: 5 },
			image: { src: 'img/github.svg', width: 1000, height: 1000 }
		},
		opacity: { value: 4, random: false, anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false } },
		size: { value: 3, random: true, anim: { enable: false, speed: 40, size_min: 0.1, sync: false } },
		line_linked: { enable: true, distance: 150, color: '#ffffff', opacity: 0.4, width: 1 },
		move: {
			enable: true,
			speed: 6,
			direction: 'none',
			random: false,
			straight: false,
			direction: 'top',
			out_mode: 'out',
			bounce: false,
			attract: { enable: false, rotateX: 600, rotateY: 1200 }
		}
	},
	interactivity: {
		detect_on: 'canvas',
		events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' }, resize: true },
		modes: {
			grab: { distance: 400, line_linked: { opacity: 1 } },
			bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
			repulse: { distance: 200, duration: 0.4 },
			push: { particles_nb: 4 },
			remove: { particles_nb: 2 }
		}
	},
	retina_detect: true
});


/* Card designing*/

class parallaxTiltEffect {

	constructor({element, tiltEffect}) {
  
	  this.element = element;
	  this.container = this.element.querySelector(".container");
	  this.size = [300, 360];
	  [this.w, this.h] = this.size;
  
	  this.tiltEffect = tiltEffect;
  
	  this.mouseOnComponent = false;
  
	  this.handleMouseMove = this.handleMouseMove.bind(this);
	  this.handleMouseEnter = this.handleMouseEnter.bind(this);
	  this.handleMouseLeave = this.handleMouseLeave.bind(this);
	  this.defaultStates = this.defaultStates.bind(this);
	  this.setProperty = this.setProperty.bind(this);
	  this.init = this.init.bind(this);
  
	  this.init();
	}
  
	handleMouseMove(event) {
	  const {offsetX, offsetY} = event;
  
	  let X;
	  let Y;
  
  
		X = (-(offsetX - (this.w/2)) / 3) / 3;
		Y = ((offsetY - (this.h/2)) / 3) / 3;
	  
  
	  this.setProperty('--rY', X.toFixed(2));
	  this.setProperty('--rX', Y.toFixed(2));
  
	  this.setProperty('--bY', (80 - (X/4).toFixed(2)) + '%');
	  this.setProperty('--bX', (50 - (Y/4).toFixed(2)) + '%');
	}
  
	handleMouseEnter() {
	  this.mouseOnComponent = true;
	  this.container.classList.add("container--active");
	}
  
	handleMouseLeave() {
	  this.mouseOnComponent = false;
	  this.defaultStates();
	}
  
	defaultStates() {
	  this.container.classList.remove("container--active");
	  this.setProperty('--rY', 0);
	  this.setProperty('--rX', 0);
	  this.setProperty('--bY', '80%');
	  this.setProperty('--bX', '50%');
	}
  
	setProperty(p, v) {
	  return this.container.style.setProperty(p, v);
	}
  
	init() {
	  this.element.addEventListener('mousemove', this.handleMouseMove);
	  this.element.addEventListener('mouseenter', this.handleMouseEnter);
	  this.element.addEventListener('mouseleave', this.handleMouseLeave);
	}
  
  }
  
  const $ = e => document.querySelector(e);
  
  const wrap1 = new parallaxTiltEffect({
	element: $('.section1'),
	tiltEffect: 'normal'
  });

  const wrap2 = new parallaxTiltEffect({
	element: $('.section2'),
	tiltEffect: 'normal'
  });

  const wrap3 = new parallaxTiltEffect({
	element: $('.section3'),
	tiltEffect: 'normal'
  });

  const wrap4 = new parallaxTiltEffect({
	element: $('.section4'),
	tiltEffect: 'normal'
  });

  const wrap5 = new parallaxTiltEffect({
	element: $('.section5'),
	tiltEffect: 'normal'
  });

  const wrap6 = new parallaxTiltEffect({
	element: $('.section6'),
	tiltEffect: 'normal'
  });