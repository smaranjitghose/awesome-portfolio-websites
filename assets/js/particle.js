/* ---- particles.js config ---- */

particlesJS('particles-js', {
	particles: {
		number: {
			value: 200,
			density: {
				enable: true,
				value_area: 800
			}
		},
		color: {
			value: [ '#2EB67D', '#ECB22E', '#E01E5B', '#36C5F0' ]
		},
		shape: {
			type: 'circle',
			stroke: {
				width: 1,
				color: '#fff'
			}
		},
		opacity: {
			value: 1,
			random: true,
			anim: {
				enable: false,
				speed: 1
			}
		},
		size: {
			value: 5,
			random: true,
			anim: {
				enable: false,
				speed: 30
			}
		},
		line_linked: {
			enable: true,
			distance: 150,
			color: '#808080',
			opacity: 0.4,
			width: 1
		},
		move: {
			enable: true,
			speed: 5,
			direction: 'none',
			random: false,
			straight: false
		}
	},
	interactivity: {
		detect_on: 'window',
		events: {
			onhover: {
				enable: true,
				mode: 'repulse'
			},
			onclick: {
				enable: true,
				mode: 'push'
			},
			resize: true
		},
		modes: {
			'repulse' : {
				distance: 70,
				duration: 0.4
			},
			'push' : {
				particles_nb: 4
			}
		}
	}
});
const allElements = document.querySelectorAll('.animated-text');

// It checks if there is at least one element
if (allElements.length > 0) {
	//It runs the script for each found element
	allElements.forEach((element) => {
		const txtElement = element,
			wordsList = txtElement.getAttribute('data-words'),
			words = wordsList.split(', '); // It makes an array of words from data attribute

		let wordsCount = 0;

		entry();

		// Initial function
		function entry() {
			if (wordsCount < words.length) {
				// It runs the code for each word
				let word = words[wordsCount],
					txtArr = word.split(''), // It makes an array of letters in the word
					count = 0;

				txtElement.textContent = ''; // It removes the previous text from the element

				// For each letter in the array
				txtArr.forEach((letter) => {
					// It replaces the empty space for the "non-break-space" HTML...
					// ... This is needed to separate the words properly
					let _letter = letter === ' ' ? '&nbsp;' : letter;

					// It wraps every letter with a "span" and puts all they back to the element
					txtElement.innerHTML += `<span>${_letter}</span>`;
				});

				let spans = txtElement.childNodes;

				// It sets the interval between each letter showing
				const letterInterval = setInterval(activeLetter, 70);

				function activeLetter() {
					spans[count].classList.add('active');
					count++;

					if (count === spans.length) {
						clearInterval(letterInterval);

						// It waits 4 seconds to start erasing the word
						setTimeout(() => {
							eraseText();
						}, 600);
					}
				}

				function eraseText() {
					// It sets the interval between each letter hiding
					let removeInterval = setInterval(removeLetter, 40);
					count--;

					function removeLetter() {
						spans[count].classList.remove('active');
						count--;

						if (count === -1) {
							clearInterval(removeInterval);
							wordsCount++;

							// After removing the last letter, call the initial function again
							entry();
						}
					}
				}
			} else {
				// If the code reaches the last word
				// It resets the words counter...
				wordsCount = 0;
				// ...and calls the initial function again.
				entry();
			}
		}
	});
}
