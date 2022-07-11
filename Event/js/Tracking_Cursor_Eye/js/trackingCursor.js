const eyes = document.querySelectorAll('.eye');
const leftEyeCoord = eyes[0].getBoundingClientRect();
const rightEyeCoord = eyes[1].getBoundingClientRect();
let totalWidth = document.documentElement.clientWidth;
let totalHeight = document.documentElement.clientHeight;

window.onresize = () => {
	let totalWidth = document.documentElement.clientWidth;
	let totalHeight = document.documentElement.clientHeight;
};

function drawLeftEye(coord) {
	let {x, y} = coord;
	eyes[0].style.left = `${x}%`;
	eyes[0].style.top = `${y}%`;
	
}

function drawRightEye(coord) {
	let {x, y} = coord;
	eyes[1].style.left = `${x}%`;
	eyes[1].style.top = `${y}%`;
}

function calcCoord(cursor, eye) {
	let x, y;
	if (cursor.x <= eye.x) {
		x = 25 - (eye.x - cursor.x);
		if (x < 0 + eye.width / 2) {
			x = 0 + eye.width / 2;
		}
	} else {
		x = 25 + (cursor.x - eye.x)
		if (x > 51 - eye.width / 4) {
			x = 51 - eye.width / 4;
		}
	};
	if (cursor.y <= eye.y) {
		y = 25 - (eye.y - cursor.y);
		if (y < 0 + eye.height / 2) {
			y = 0 + eye.height / 2;
		}
	} else {
		y = 25 + (cursor.y - eye.y)
		if (y > 51 - eye.height / 4) {
			y = 51 - eye.height / 4;
		}
	};
	return {'x': x, 'y': y}
}

function drawEyes(event) {
	drawLeftEye(calcCoord(event, leftEyeCoord));
	drawRightEye(calcCoord(event, rightEyeCoord));
}


function trottle(callback, delay) {
	let isWaiting = false;
	return function() {
		if (!isWaiting) {
			callback.apply(this, arguments);
			isWaiting = true;
			setTimeout(() => {
				isWaiting = false;
			}, delay);
		}
	}
};

document.addEventListener('mousemove', 
	(event) => trottle(drawEyes(event), 16)
);
