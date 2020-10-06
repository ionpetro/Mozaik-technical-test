// Script to transform images from jpeg to webp

const imagemin = require("%PERSONAL-DATA%\\AppData\\Roaming\\npm\\node_modules\\imagemin");
const imageminWebp = require("%PERSONAL-DATA%\\AppData\\Roaming\\npm\\node_modules\\imagemin-webp");

(async () => {
	await imagemin(['images1/*.{jpg,png}'], {
		destination: 'results',
		plugins: [
			imageminWebp({quality: 50})
		]
	});

	console.log('Images optimized');
})();