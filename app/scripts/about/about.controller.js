'use strict';

angular.module('webapp')
  .controller('AboutCtrl', ['$scope', function ($scope) {

  var pdfs = [{
  	pdf: 'pdf/mondai.pdf',
  	title: '問題'
  },{
  	pdf: 'pdf/icih2.pdf',
  	title: '１の漢字'
  },{
  	pdf: 'pdf/ni2.pdf',
  	title: '２の漢字'
  },{
  	pdf: 'pdf/san.pdf',
  	title: '３の漢字'
  },{
  	pdf: 'pdf/shi.pdf',
  	title: '４の漢字'
  }];

  $scope.pdfName = 'Relativity: The Special and General Theory by Albert Einstein';
  $scope.scroll = 0;
  $scope.pdfUrl = 'pdf/mondai.pdf';
  $scope.title = '問題';

  var no = 0;

  $scope.pre = function () {
  	no = no - 1;
    $scope.pdfUrl = pdfs[no].pdf;
    $scope.title = pdfs[no].title;
  };

  $scope.next = function () {
    $scope.pdfUrl = pdfs[no].pdf;
    $scope.title = pdfs[no].title;
  };

  $scope.getNavStyle = function(scroll) {
    if(scroll > 100) return 'pdf-controls fixed';
    else return 'pdf-controls';
  }
  $scope.onClick = function() {
    var canvas = document.getElementById("pdf");
    var ctx = canvas.getContext("2d");
    var width = window.innerWidth;
	var height = window.innerHeight;
	var x = 0, y = 0;
	var color = "#0000ff";
	var line = 8;

	canvas.addEventListener("mousedown", touchStartHandler, false);
	canvas.addEventListener("mouseup", touchEndHandler, false);

	canvas.addEventListener("touchstart", ttouchStartHandler, false);
	canvas.addEventListener("touchend", ttouchEndHandler, false);

	function touchStartHandler(e) {
		e.preventDefault();
		getTouchPoint(e);
		ctx.beginPath();
		ctx.lineCap = "round";
		ctx.lineJoin = "round";
		ctx.moveTo(x, y);
		canvas.addEventListener("mousemove", touchMoveHandler, false);
	}

	function touchMoveHandler(e) {
		e.preventDefault();
		getTouchPoint(e);
		ctx.lineWidth = line; //線の太さ
		ctx.strokeStyle = color; //線の色
		ctx.lineTo(x, y);
		ctx.stroke();
	}

	function touchEndHandler(e) {
		e.preventDefault();
		ctx.closePath();
		canvas.removeEventListener("mousemove", touchMoveHandler, false);
	}

	function getTouchPoint(e) {
		x = e.clientX - canvas.offsetLeft;
		y = e.clientY - canvas.offsetTop;
	}

	function ttouchStartHandler(e) {
		e.preventDefault();
		getTTouchPoint(e);
		ctx.beginPath();
		ctx.lineCap = "round";
		ctx.lineJoin = "round";
		ctx.moveTo(x, y);
		canvas.addEventListener("touchmove", ttouchMoveHandler, false);
	}

	function ttouchMoveHandler(e) {
		e.preventDefault();
		getTTouchPoint(e);
		ctx.lineWidth = line; //線の太さ
		ctx.strokeStyle = color; //線の色
		ctx.lineTo(x, y);
		ctx.stroke();
	}

	function ttouchEndHandler(e) {
		e.preventDefault();
		ctx.closePath();
		canvas.removeEventListener("touchmove", ttouchMoveHandler, false);
	}

	function getTTouchPoint(e) {
		var touch = e.touches[0];
		x = touch.pageX - canvas.offsetLeft;
		y = touch.pageY - canvas.offsetTop;
	}

	function spread() {
		ctx.fillStyle = color;
		ctx.fillRect(0, 0, canvas.width, canvas.height);
	}

	function clr() {
		cntx = canvas.getContext("2d");
		cntx.clearRect(0, 0, canvas.width, canvas.height);
	}

	function change(CL) {
		color = CL.C.value;
		line = CL.L.value;
		canvas.addEventListener("mousedown", touchStartHandler, false);
		canvas.addEventListener("touchstart", ttouchStartHandler, false);
	}

  };


  }]);
