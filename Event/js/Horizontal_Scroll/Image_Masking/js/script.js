//*** SHIM ***
window.requestAnimFrame = (function() {
  return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function(callback) {
      window.setTimeout(callback, 1000 / 60);
    };
})();

(function() {
	"use strict";
	
	// 변수 설정
	var _Canvas;
	let _frontImageSrc = 'http://insidedown.com/codepen/stock/mountain-tan.jpg';
	let _backImageSrc = 'http://insidedown.com/codepen/stock/mountain.jpg';
	let _frontImage;
	let _backImage;
	let _blackMask;
	let _mouseX = 0;
	let _mouseY = 0;
	let _maskCount = 25;
	let _tweenTime = 0.5;
	let _pauseTime = 0.25;
	let _delayTime = 0.08;
	let _maskArray = [];
  // 번지는 효과 소스 3가지
	let _srcArray = ["http://insidedown.com/codepen/stock/newstain1.png", "http://insidedown.com/codepen/stock/newstain2.png", "http://insidedown.com/codepen/stock/newstain3.png"];
	
	// CANVAS 함수
	function init() {
		_Canvas = new Canvas({stage:document.getElementById('stage')});
		_backImage = new MaskedImage({src:_backImageSrc});
		_frontImage = new MaskedImage({src:_frontImageSrc});
		
		for(let i = 0; i < _maskCount; i++){
      // 랜덤으로 번지는 효과 3가지 중 하나가 나오게 함
			let ranSrc = _srcArray[Math.floor(Math.random() * _srcArray.length)];
      // 해당 번지는 효과를 25번째까지 300크기로 만든다.
			let mask = new MaskedImage({src:ranSrc, delay:i, width:300});
      // 빈 배열 _maskArray에 위에서 생성한 이미지를 추가함
			_maskArray.push(mask);
		}
		addListeners();
	}
	
	//EVENTS
	function addListeners() {
		_Canvas.el.addEventListener('mousemove', onCanvasMouseMove);
		_Canvas.el.addEventListener('mouseout', onCanvasMouseOut);
	}
	
  // 마우스가 움직일 때 실행되는 이벤트
	function onCanvasMouseMove(event) {
    // 현재 페이지 X, Y축의 좌표값에서 이미지의 크기를 빼서 커서위치에 이미지의 가운데가 위치하도록 함
		_mouseX = event.pageX - $(this).offset().left;
		_mouseY = event.pageY - $(this).offset().top;
	}
	
	function onCanvasMouseOut(event) {
	}
	
  // 캔버스 영역 내로 들어왔을 때
	function onEnterFrame() {
			_Canvas.clearStage();
			drawStage();
			window.requestAnimFrame(onEnterFrame, 60);
	}
	
	function drawStage() {
		_Canvas.context.save();
		
		for(let i = 0; i < _maskCount; i++){
			let mask = _maskArray[i];
			mask.tweenDraw();
		}
		
		//_blackMask.draw(_mouseX,_mouseY);
		_Canvas.context.globalCompositeOperation = 'source-in';
		_backImage.draw();
		_Canvas.context.globalCompositeOperation = 'destination-over';
		_frontImage.draw();
		_Canvas.context.restore();
	}
	
	//CLASSES
	
  // 이미지 세부사항에 대해 정의하는 CLASS
	class MaskedImage {
		constructor(options) {
      // 기본 상태를 false로 설정
			this.hasImg = false;
      // 새로운 이미지 생성
			this.img = new Image();
			this.empty = {scale:0, alpha:1, x:0, y:0};
			this.delay = options.delay;
      // 이미지가 가질 로테이션값을 360도를 기준으로 랜덤 설정
			this.rotation = Math.random() * 360;
			this.width = options.width;
			this.halfWidth = this.width/2;
			this.img.src = options.src;
      // 이미지가 로드되면
			this.img.onload = function() {
        // 상태를 true로 전환
				this.hasImg = true;
				if(this.delay){ 
					setTimeout(function() {this.scale();}.bind(this), this.delay*(_delayTime * 1000));
				}
				this.draw(); 
			}.bind(this);
		}
		
    // x와 y가 0이라면(설정되어있지 않은 상태)
		draw(x = 0, y = 0) {
			if(this.hasImg) {
        // 해당 이미지를 x, y 위치에 전개
				_Canvas.context.drawImage(this.img, x, y);
			}
		}
		
		tweenDraw() {
			if(this.hasImg) {
				let curWidth = this.width * this.empty.scale; 
				_Canvas.context.save();
				_Canvas.context.globalAlpha = this.empty.alpha;
				
				_Canvas.context.translate(this.empty.x, this.empty.y);
				_Canvas.context.rotate(this.rotation * Math.PI / 180);
				_Canvas.context.scale(1.5 * (curWidth/this.width), 1.5*(curWidth/this.width));
				_Canvas.context.translate(-this.empty.x, -this.empty.y);
				_Canvas.context.drawImage(this.img,this.empty.x-this.halfWidth,this.empty.y-this.halfWidth);
				_Canvas.context.globalAlpha = 1;
				_Canvas.context.restore();
			}
		}
		
		scale() {
			this.empty.x = _mouseX;
			this.empty.y = _mouseY;
			this.rotation = Math.random() * 360;
			TweenMax.fromTo(this.empty, _tweenTime, {alpha:1, scale:0},{alpha:1, scale:1, onComplete:function(){
				setTimeout(this.fadeOut.bind(this), _pauseTime * 1000);
			}.bind(this)
			});
		}
		
		fadeOut() {
			TweenMax.to(this.empty, _tweenTime,{alpha:0, onComplete:this.scale.bind(this)});
		}
		
	}
	
	class Canvas {
		constructor(options) {
			this._stage = options.stage;
			this._stageWidth = this._stage.width = window.innerWidth;
			this._stageHeight = this._stage.height = window.innerHeight;
			this._stageContext = this._stage.getContext('2d');
		}
		
		// clear stage of current content
		clearStage(options) {
			if(typeof options === "undefined") {
				this._stageContext.clearRect(0,0,this._stageWidth, this._stageHeight);
			}
		}
		
		get width() { return this._stageWidth; }
		get height() { return this._stageHeight; }
		get el() {return this._stage; }
		get context() {return this._stageContext; }
	} //end Canvas class
	
	init();
	onEnterFrame();
	
})();