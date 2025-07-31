/*
 * Magazine sample
*/

// function addPage(page, book) {

// 	var id, pages = book.turn('pages');

// 	// Create a new element for this page
// 	var element = $('<div />', {});

// 	// Add the page to the flipbook
// 	if (book.turn('addPage', element, page)) {

// 		// Add the initial HTML
// 		// It will contain a loader indicator and a gradient
// 		element.html('<div class="gradient"></div><div class="loader"></div>');

// 		// Load the page
// 		loadPage(page, element);
// 	}

// }

function addPage(page, book) {

	var id, pages = book.turn('pages');

	if (!book.turn('hasPage', page)) {

		var element = $('<div />',
			{
				// 'class': 'own-size',
				css: ({ width: '100%', height: '100%' })
				// css: { width: 460, height: 460 }
			}).
			html('<div class="loader"></div>');

		if (book.turn('addPage', element, page)) {
			loadPage(page, element);
		}

	}
}


// function loadPage(page, pageElement) {

// 	// Create an image element

// 	var img = $('<img />');

// 	img.mousedown(function(e) {
// 		e.preventDefault();
// 	});

// 	img.load(function() {

// 		// Set the size
// 		$(this).css({width: '100%', height: '100%'});

// 		// Add the image to the page after loaded

// 		$(this).appendTo(pageElement);

// 		// Remove the loader indicator

// 		pageElement.find('.loader').remove();
// 	});

// 	// Load the page

// 	img.attr('src', 'pages/' +  page + '.jpg');

// 	loadRegions(page, pageElement);

// }

function loadPage(page, pageElement) {

	pageElement.find('.loader').remove();
	// $.ajax({ url: 'pages/page' + page + '.html' }).
	// 	done(function (pageHtml) {
	// 		$(pageElement).html(pageHtml.replace('samples/steve-jobs/', ''));
	// 	});

	$(pageElement).load('pages/page' + page + '.html');


}

function loadScript() {
	// Verifica se já existe o script dentro da div
	if ($('.atividade').find('script[src="js/script.js"]').length > 0) {
		// console.log('Script já carregado. Nada a fazer.');
		return;
	}

	// console.log('Nenhum script encontrado. Carregando novo script.');

	// Cria e insere a nova tag script
	var scriptTag = $('<script />', {
		type: 'text/javascript',
		src: 'js/script.js'
	});

	scriptTag.appendTo('.atividade');
}

// Zoom in / Zoom out

function zoomTo(event) {
	setTimeout(function () {
		if ($('.magazine-viewport, atividade').data().regionClicked) {
			$('.magazine-viewport, atividade').data().regionClicked = false;
		} else {
			if ($('.magazine-viewport, atividade').zoom('value') == 1) {
				$('.magazine-viewport, atividade').zoom('zoomIn', event);
			} else {
				$('.magazine-viewport, atividade').zoom('zoomOut');
			}
		}
	}, 1);

}

// Load regions

function loadRegions(page, element) {

	$.getJSON('pages/' + page + '-regions.json').
		done(function (data) {

			$.each(data, function (key, region) {
				addRegion(region, element);
			});
		});
}

// Add region

function addRegion(region, pageElement) {
	var reg = $('<div />', { 'class': 'region ' + region['class'] }),
		options = $('.magazine').turn('options'),
		pageWidth = options.width / 2,
		pageHeight = options.height;

	reg.css({
		top: Math.round(region.y / pageHeight * 100) + '%',
		left: Math.round(region.x / pageWidth * 100) + '%',
		width: Math.round(region.width / pageWidth * 100) + '%',
		height: Math.round(region.height / pageHeight * 100) + '%'
	});

	console.log(region.data);

	if (region.data && region.data.url) {
		reg.attr('region-data', 'url=' + region.data.url);
	}

	reg.appendTo(pageElement);
}


// Process click on a region

function regionClick(event) {

	var region = $(event.target);

	if (region.hasClass('region')) {

		$('.magazine-viewport').data().regionClicked = true;

		setTimeout(function () {
			$('.magazine-viewport').data().regionClicked = false;
		}, 100);

		var regionType = $.trim(region.attr('class').replace('region', ''));

		return processRegion(region, regionType);

	}

}

// Process the data of every region

function processRegion(region, regionType) {

	data = decodeParams(region.attr('region-data'));

	switch (regionType) {
		case 'link':
			// console.log(region[0].attributes['region-data'].value);

			// // window.open(region[0].attributes['region-data'].value.split('=')[1]);
			// window.open(data.url);

			var fullData = region[0].attributes['region-data'].value;
			var match = fullData.match(/url=(.+)/);

			if (match) {
				var finalUrl = decodeURIComponent(match[1]);
				console.log(finalUrl); // Teste no console para garantir que a URL está correta
				window.open(finalUrl, '_blank');
			}

			break;
		case 'zoom':

			var regionOffset = region.offset(),
				viewportOffset = $('.magazine-viewport').offset(),
				pos = {
					x: regionOffset.left - viewportOffset.left,
					y: regionOffset.top - viewportOffset.top
				};

			$('.magazine-viewport').zoom('zoomIn', pos);

			break;
		case 'to-page':

			$('.magazine').turn('page', data.page);

			break;
	}

}

// Load large page

function loadLargePage(page, pageElement) {

	// var img = $('<img />');

	// img.load(function () {

	// 	var prevImg = pageElement.find('img');
	// 	$(this).css({ width: '100%', height: '100%' });
	// 	$(this).appendTo(pageElement);
	// 	prevImg.remove();

	// });

	// // Loadnew page

	// img.attr('src', 'pages/' + page + '-large.jpg');
}

// Load small page

function loadSmallPage(page, pageElement) {

	// var img = pageElement.find('img');

	// img.css({ width: '100%', height: '100%' });

	// img.unbind('load');
	// // Loadnew page

	// img.attr('src', 'pages/' + page + '.jpg');
}

// http://code.google.com/p/chromium/issues/detail?id=128488

function isChrome() {

	return navigator.userAgent.indexOf('Chrome') != -1;

}

function disableControls(page) {

	if (page == 1)
		$('.previous-button').hide();
	else
		$('.previous-button').show();

	if (page == $('.magazine').turn('pages'))
		$('.next-button').hide();
	else
		$('.next-button').show();


}

// Set the width and height for the viewport

function resizeViewport() {

	var width = $(window).width(),
		height = $(window).height(),
		options = $('.magazine').turn('options');

	$('.magazine').removeClass('animated');

	$('.magazine-viewport').css({
		width: width,
		height: height
	}).
		zoom('resize');


	if ($('.magazine').turn('zoom') == 1) {
		var bound = calculateBound({
			width: options.width,
			height: options.height,
			boundWidth: Math.min(options.width, width),
			boundHeight: Math.min(options.height, height)
		});

		if (bound.width % 2 !== 0)
			bound.width -= 1;


		if (bound.width != $('.magazine').width() || bound.height != $('.magazine').height()) {

			$('.magazine').turn('size', bound.width, bound.height);

			if ($('.magazine').turn('page') == 1)
				$('.magazine').turn('peel', 'br');

			$('.next-button').css({ top: '30%', height: '50%', backgroundPosition: '-38px ' + '50%' });
			$('.previous-button').css({ top: '30%', height: '50%', backgroundPosition: '-4px ' + '50%' });
			// $('.next-button').css({ height: bound.height, backgroundPosition: '-38px ' + (bound.height / 2 - 32 / 2) + 'px' });
			// $('.previous-button').css({ height: bound.height, backgroundPosition: '-4px ' + (bound.height / 2 - 32 / 2) + 'px' });
		}

		$('.magazine').css({ top: -bound.height / 2, left: -bound.width / 2 });
	}

	var magazineOffset = $('.magazine').offset(),
		boundH = height - magazineOffset.top - $('.magazine').height(),
		marginTop = (boundH - $('.thumbnails > div').height()) / 2;

	if (marginTop < 0) {
		$('.thumbnails').css({ height: 1 });
	} else {
		$('.thumbnails').css({ height: boundH });
		$('.thumbnails > div').css({ marginTop: marginTop });
	}

	if (magazineOffset.top < $('.made').height())
		$('.made').hide();
	else
		$('.made').show();

	$('.magazine').addClass('animated');

}


// Number of views in a flipbook

function numberOfViews(book) {
	return book.turn('pages') / 2 + 1;
}

// Current view in a flipbook

function getViewNumber(book, page) {
	return parseInt((page || book.turn('page')) / 2 + 1, 10);
}

function moveBar(yes) {
	if (Modernizr && Modernizr.csstransforms) {
		$('#slider .ui-slider-handle').css({ zIndex: yes ? -1 : 10000 });
	}
}

function setPreview(view) {
	var scale = 0.2,
		imgWidth = 1082,
		imgHeight = 1082,
		previewSrc = 'pages/preview.jpg',
		preview = $(_thumbPreview.children(':first')),
		previewWidth,
		previewHeight = imgHeight / 2 * scale, // altura sempre de uma página
		offsetX = 0,
		offsetY = 0,
		numPages = (view === 1 || view === $('#slider').slider('option', 'max')) ? 1 : 2;

	// Define previewWidth com base no número de páginas
	if (numPages === 1) {
		previewWidth = (imgWidth / 2) * scale;
	} else {
		previewWidth = imgWidth * scale;
	}

	// Cálculo do background-position baseado na página
	const pageIndex = view - 1;

	if (numPages === 1) {
		offsetX = 0;
		offsetY = -pageIndex * previewHeight;
	} else {
		const row = Math.floor((view - 2)) + 1;
		offsetX = 0;
		offsetY = -row * previewHeight;
		// console.log({ view, row, offsetY })
	}

	// Atualiza _thumbPreview
	_thumbPreview
		.addClass('no-transition')
		.css({
			width: previewWidth + 15,
			height: previewHeight + 15,
			top: -previewHeight - 30,
			left: ($($('#slider').children(':first')).width() - previewWidth - 15) / 2
		});

	// Atualiza preview
	preview.css({
		width: previewWidth,
		height: previewHeight,
		backgroundSize: `${imgWidth * scale}px auto`,
		backgroundPosition: `${offsetX}px ${offsetY}px`
	});

	// Carrega imagem se necessário
	if (preview.css('background-image') === '' || preview.css('background-image') === 'none') {
		preview.css({ backgroundImage: 'url(' + previewSrc + ')' });

		setTimeout(function () {
			_thumbPreview.removeClass('no-transition');
		}, 0);
	}
}

// Width of the flipbook when zoomed in

function largeMagazineWidth() {

	return 2214;

}

// decode URL Parameters

function decodeParams(data) {

	var parts = data.split('&'), d, obj = {};

	for (var i = 0; i < parts.length; i++) {
		d = parts[i].split('=');
		obj[decodeURIComponent(d[0])] = decodeURIComponent(d[1]);
	}

	return obj;
}

// Calculate the width and height of a square within another square

function calculateBound(d) {

	var bound = { width: d.width, height: d.height };

	if (bound.width > d.boundWidth || bound.height > d.boundHeight) {

		var rel = bound.width / bound.height;

		if (d.boundWidth / rel > d.boundHeight && d.boundHeight * rel <= d.boundWidth) {

			bound.width = Math.round(d.boundHeight * rel);
			bound.height = d.boundHeight;

		} else {

			bound.width = d.boundWidth;
			bound.height = Math.round(d.boundWidth / rel);

		}
	}

	return bound;
}