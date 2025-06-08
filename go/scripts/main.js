'use strict';

// $.noConflict();


$(document).ready(function () {

  // =========================================
  //  *** partial slider ***
  // =========================================
  $('.partial-nav-dots').on('click', function () {
    $('.navbar-nav').toggleClass('pnav-open');
  });
  $('.navbar-toggler').on('click', function () {
    $('.cntrlogo-navmenu').toggleClass('open');
  });

  // =========================================
  //  *** footer | Customer Review Slider ***
  // =========================================
  if ($('.cus-review').length) {
    $('.vertical').slick({
      dots: true,
      vertical: true,
      arrows: false,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [{
        breakpoint: 1199,
        settings: {
          slidesToShow: 2
        }
      }, {
        breakpoint: 767,
        settings: {
          slidesToShow: 1
        }
      }]
    });
  }

  // =========================================
  //  *** Review-slider ***
  // =========================================
  if ($('.review-slider').length) {
    $('.review-slider').slick({
      dots: true,
      horizontal: true,
      arrows: false,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [{
        breakpoint: 1440,
        settings: {
          slidesToShow: 3
        }
      }, {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2
        }
      }, {
        breakpoint: 767,
        settings: {
          slidesToShow: 1
        }
      }]
    });
  }

  // =========================================
  //  *** Restaurent slider ***
  // =========================================
  if ($('.restturant-slider').length) {
    $('.restturant-slider').slick({
      dots: true,
      infinite: false,
      speed: 600,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [{
        breakpoint: 1920,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }, {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }, {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    });
  }

  // =========================================
  //  *** Features Hotel Slider ***
  // =========================================
  $('.featureshotel-slider').slick({
    dots: false,
    arrows: false,
    infinite: false,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [{
      breakpoint: 1920,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true
      }
    }, {
      breakpoint: 1440,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true
      }
    }, {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });

  // =========================================
  //  *** Travel News Slider ***
  // =========================================
  if ($('.travelnews-slider').length) {
    $('.travelnews-slider').slick({
      dots: false,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1200,
      responsive: [{
        breakpoint: 1920,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true
        }
      }, {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true
        }
      }, {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    });
  }

  // =========================================
  //  ***  pb calendar  ***
  // =========================================
  if ($('.holidayclder').length) {
    var current_yyyymm_ = moment().format('YYYYMM');

    jQuery('#pb-calendar').pb_calendar({
      schedule_list: function schedule_list(callback_, yyyymm_) {
        var temp_schedule_list_ = {};

        temp_schedule_list_[current_yyyymm_ + '03'] = [{ 'ID': 1, style: 'red' }];

        temp_schedule_list_[current_yyyymm_ + '10'] = [{ 'ID': 2, style: 'red' }, { 'ID': 3, style: 'blue' }];

        temp_schedule_list_[current_yyyymm_ + '20'] = [{ 'ID': 4, style: 'red' }, { 'ID': 5, style: 'blue' }, { 'ID': 6, style: 'green' }];
        callback_(temp_schedule_list_);
      },
      schedule_dot_item_render: function schedule_dot_item_render(dot_item_el_, schedule_data_) {
        dot_item_el_.addClass(schedule_data_['style'], true);
        return dot_item_el_;
      }
    });
  }

  // =========================================
  //  ***  switch box ***
  // =========================================
  if ($('.trip-switch').length) {
    $('.oneway').on('click', function () {
      $(this).addClass('active');
      $(this).parent().find('.roundtrip').removeClass('active');
      $(this).parent().addClass('oneway');
      $('.formbox-square').addClass('oneway');

      $(this).parent().removeClass('roundtrip');
      $('.formbox-square').removeClass('roundtrip');
    });

    $('.roundtrip').on('click', function () {
      $(this).addClass('active');
      $(this).parent().find('.oneway').removeClass('active');

      $(this).parent().addClass('roundtrip');
      $('.formbox-square').addClass('roundtrip');

      $(this).parent().removeClass('oneway');
      $('.formbox-square').removeClass('oneway');
    });
  }

  // =========================================
  //  *** Search By Country ***
  // =========================================
  if ($('.explore-dest').length) {
    $('select').formSelect();
  }

  if ($('.formbox, .formbox-square, .formbox-polyround, .cab-formbox').length) {
    $('select').formSelect(); //.formSelect({'classes':'test1'})
    $('.select-wrapper .select-dropdown').addClass('inputype1');
    $('.select-wrapper svg').addClass('remove');
  }

  // =========================================
  //  *** Travel blog slider  ***
  // =========================================
  if ($('.tb-slider').length) {
    var moveDown = function moveDown(currentSlide) {

      var nextSlide = currentSlide.next();
      var currentSlideUp = currentSlide.find('.txt');
      var currentSlideDown = currentSlide.find('.img');
      var nextSlideUp = nextSlide.find('.img');
      var nextSlideDown = nextSlide.find('.txt');
      var currentCopy = currentSlide.find('.copy');
      var nextCopy = nextSlide.find('.copy');

      if (nextSlide.length !== 0) {

        counter = counter + 1;

        if (counter % 2 === 0) {

          TweenMax.to(number, 0.3, { x: '-100%' });
          TweenMax.to(currentSlideUp, 0.4, { y: '-100%', delay: 0.15 });
          TweenMax.to(currentSlideDown, 0.4, { y: '100%', delay: 0.15 });
          setTimeout(function () {
            number.html('');
          }, 300);
        } else {

          number.html('0' + counter);
          TweenMax.to(number, 0.3, { x: '0%', delay: 1 });
          TweenMax.to(currentSlideUp, 0.4, { y: '100%', delay: 0.15 });
          TweenMax.to(currentSlideDown, 0.4, { y: '-100%', delay: 0.15 });
        }

        TweenMax.to(currentCopy, 0.3, { autoAlpha: 0, delay: 0.15 });
        TweenMax.to(nextCopy, 0.3, { autoAlpha: 1, delay: 1 });
        TweenMax.to(nextSlideUp, 0.4, { y: '0%', delay: 0.15 });
        TweenMax.to(nextSlideDown, 0.4, { y: '0%', delay: 0.15 });

        $(currentSlide).removeClass('active');
        $(nextSlide).addClass('active');
      }
    };

    var moveUp = function moveUp(currentSlide) {

      var prevSlide = currentSlide.prev();
      var currentSlideUp = currentSlide.find('.img');
      var currentSlideDown = currentSlide.find('.txt');
      var prevSlideUp = prevSlide.find('.txt');
      var prevSlideDown = prevSlide.find('.img');
      var currentCopy = currentSlide.find('.copy');
      var prevCopy = prevSlide.find('.copy');

      if (prevSlide.length !== 0) {

        counter = counter - 1;

        if (counter % 2 === 0) {

          TweenMax.to(number, 0.3, { x: '-100%' });
          TweenMax.to(currentSlideUp, 0.4, { y: '-100%', delay: 0.15 });
          TweenMax.to(currentSlideDown, 0.4, { y: '100%', delay: 0.15 });
          setTimeout(function () {
            number.html('');
          }, 300);
        } else {

          number.html('0' + counter);
          TweenMax.to(number, 0.3, { x: '0%', delay: 1 });
          TweenMax.to(currentSlideUp, 0.4, { y: '100%', delay: 0.15 });
          TweenMax.to(currentSlideDown, 0.4, { y: '-100%', delay: 0.15 });
        }

        TweenMax.to(currentCopy, 0.3, { autoAlpha: 0, delay: 0.15 });
        TweenMax.to(prevCopy, 0.3, { autoAlpha: 1, delay: 1 });
        TweenMax.to(prevSlideUp, 0.4, { y: '0%', delay: 0.15 });
        TweenMax.to(prevSlideDown, 0.4, { y: '0%', delay: 0.15 });

        $(currentSlide).removeClass('active');
        $(prevSlide).addClass('active');
      }
    };

    var hideNav = function hideNav() {

      if (counter == $('.slide').length) {
        TweenMax.to($('.nav-down'), 0.5, { autoAlpha: 0, delay: 0.5 });
      } else {
        TweenMax.to($('.nav-down'), 0.5, { autoAlpha: 1, delay: 0.5 });
      }
      if (counter === 1) {
        TweenMax.to($('.nav-up'), 0.5, { autoAlpha: 0, delay: 0.5 });
      } else {
        TweenMax.to($('.nav-up'), 0.5, { autoAlpha: 1, delay: 0.5 });
      }
    };

    var up = $('.nav-up');
    var down = $('.nav-down');
    var counter = 1;
    var number = $('.number');

    down.on('click', function () {

      var currentSlide = $('.active');
      moveDown(currentSlide);
      hideNav();
    });

    up.on('click', function () {

      var currentSlide = $('.active');
      moveUp(currentSlide);
      hideNav();
    });
  }

  // ====================================
  //  *** Explore Destination slider  ***
  // ====================================
  if ($('.top-destination').length) {
    // var menu = []
    var swiper = new Swiper('.product-slider', {
      spaceBetween: 30,
      effect: 'fade',
      loop: false,
      autoplay: false,
      // autoplay: {
      //   delay: 5000,
      // },

      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },

      on: {
        init: function init() {
          var index = this.activeIndex;
          var target = $('.product-slider__item').eq(index).data('target');
          // console.log(index);
          $('.product-img__item').removeClass('active');
          $('.product-img__item#' + target).addClass('active');
        }
      }

    });

    swiper.on('slideChange', function () {

      var index = this.activeIndex;
      $('.product-slider + .counter .current-item').html('0' + ++swiper.activeIndex);

      // console.log(index, swiper.activeIndex);
      var target = $('.product-slider__item').eq(index).data('target');

      $('.product-img__item').removeClass('active');
      $('.product-img__item#' + target).addClass('active');

      if (swiper.isEnd) {
        $('.prev').removeClass('disabled');
        $('.next').addClass('disabled');
      } else {
        $('.next').removeClass('disabled');
      }

      if (swiper.isBeginning) {
        $('.prev').addClass('disabled');
      } else {
        $('.prev').removeClass('disabled');
      }
    });

    var totalItems = $('.product-slider .product-slider__item').length;
    $('.tot-item').html('<i>' + '/' + '</i>' + ' ' + '0' + totalItems);

    // var wndWidth = window.width();
    var expPrdcImgHeight = $('.product-img__item').outerHeight();
    var productSliderHeight = $('.product-slider').outerHeight();

    var calHeight = expPrdcImgHeight * 0.9;
    var tdWrapperHeight = expPrdcImgHeight + productSliderHeight + 50;

    // console.log(tdWrapperHeight);

    var mq = window.matchMedia('(min-width: 960px)');
    if (mq.matches) {
      $('.product-slider').css('top', 0);
    } else {
      $('.product-slider').css('top', calHeight);
      $('.destination-sec').css('height', tdWrapperHeight);
    }
  }

  // ====================================
  // *** Travel Store ***
  // ====================================
  if ($('.travel-blog').length) {
    // $('.slide-nav').on('click', function(e) {
    //   e.preventDefault();

    //   // get current slide
    //   var current = $('.flex--active').data('slide'),

    //   // get button data-slide
    //   next = $(this).data('slide');

    //   $('.slide-nav').removeClass('active');
    //   $(this).addClass('active');

    //   if (current === next) {
    //     return false;
    //   } else {
    //     $('.travel-store-slider').find('.flex__container[data-slide=' + next + ']').addClass('flex--preStart');
    //     $('.flex--active').addClass('animate--end');
    //     setTimeout(function() {
    //       $('.flex--preStart').removeClass('animate--start flex--preStart').addClass('flex--active');
    //       $('.animate--end').addClass('animate--start').removeClass('animate--end flex--active');
    //     }, 800);
    //   }

    // });

    var totSlide = $('.flex__container').length;
    // console.log(totSlide);

    // .travel-store-slider
    $('#next').on('click', function (e) {
      e.preventDefault();
      // get current slide
      var current = $('.flex--active').data('slide'),

      // get button data-slide
      next = $('.flex--active').next().data('slide');
      if (!next) {
        next = 1;
      }
      if (current === next) {
        return false;
        // next = $('.flex--active').first().data('slide');
      } else {
        $('.travel-store-slider').find('.flex__container[data-slide=' + next + ']').addClass('flex--preStart');
        $('.flex--active').addClass('animate--end');
        setTimeout(function () {
          $('.flex--preStart').removeClass('animate--start flex--preStart').addClass('flex--active');
          $('.animate--end').addClass('animate--start').removeClass('animate--end flex--active');
        }, 800);
      }

      // if(next == totSlide ) {
      //   next = $('.flex--active').first().data('slide');
      // }
    });

    $('#pre').on('click', function (e) {
      e.preventDefault();

      // get current slide
      var current = $('.flex--active').data('slide'),


      // get button data-slide
      pre = $('.flex--active').prev().data('slide');
      if (!pre) {
        pre = $('.travel-store-slider > .flex__container').length;
      }

      if (current === next) {
        return false;
      } else {
        $('.travel-store-slider').find('.flex__container[data-slide=' + pre + ']').addClass('flex--preStart');
        $('.flex--active').addClass('animate--end');
        setTimeout(function () {
          $('.flex--preStart').removeClass('animate--start flex--preStart').addClass('flex--active');
          $('.animate--end').addClass('animate--start').removeClass('animate--end flex--active');
        }, 800);
      }
    });
  }

  // =========================================
  //  *** Advisors slider ***
  // =========================================
  if ($('.advisors').length) {
    (function ($, window, undefined) {
      'use strict';

      function throttle(func, delay) {
        var timer = null;

        return function () {
          var context = this,
              args = arguments;

          if (timer === null) {
            timer = setTimeout(function () {
              func.apply(context, args);
              timer = null;
            }, delay);
          }
        };
      }

      // Check for browser CSS support and cache the result for subsequent calls.
      var checkStyleSupport = function () {
        var support = {};
        return function (prop) {
          if (support[prop] !== undefined) {
            return support[prop];
          }

          var div = document.createElement('div'),
              style = div.style,
              ucProp = prop.charAt(0).toUpperCase() + prop.slice(1),
              prefixes = ['webkit', 'moz', 'ms', 'o'],
              props = (prop + ' ' + prefixes.join(ucProp + ' ') + ucProp).split(' ');

          for (var i in props) {
            if (props[i] in style) {
              return support[prop] = props[i];
            }
          }

          return support[prop] = false;
        };
      }();

      var $window = $(window),
          transformSupport = checkStyleSupport('transform'),
          defaults = {
        itemContainer: 'ul',
        // [string|object]
        // Selector for the container of the flippin' items.

        itemSelector: 'li',
        // [string|object]
        // Selector for children of `itemContainer` to flip

        start: 'center',
        // ['center'|number]
        // Zero based index of the starting item, or use 'center' to start in the middle

        fadeIn: 400,
        // [milliseconds]
        // Speed of the fade in animation after items have been setup

        loop: false,
        // [true|false|number]
        // Loop around when the start or end is reached
        // If number, this is the number of items that will be shown when the beginning or end is reached

        autoplay: false,
        // [false|milliseconds]
        // If a positive number, Flipster will automatically advance to next item after that number of milliseconds

        pauseOnHover: true,
        // [true|false]
        // If true, autoplay advancement will pause when Flipster is hovered

        style: 'coverflow',
        // [coverflow|carousel|flat|...]
        // Adds a class (e.g. flipster--coverflow) to the flipster element to switch between display styles
        // Create your own theme in CSS and use this setting to have Flipster add the custom class

        spacing: -0.6,
        // [number]
        // Space between items relative to each item's width. 0 for no spacing, negative values to overlap

        click: true,
        // [true|false]
        // Clicking an item switches to that item

        keyboard: true,
        // [true|false]
        // Enable left/right arrow navigation

        scrollwheel: true,
        // [true|false]
        // Enable mousewheel/trackpad navigation; up/left = previous, down/right = next

        touch: true,
        // [true|false]
        // Enable swipe navigation for touch devices

        nav: false,
        // [true|false|'before'|'after']
        // If not false, Flipster will build an unordered list of the items
        // Values true or 'before' will insert the navigation before the items, 'after' will append the navigation after the items

        buttons: false,
        // [true|false|'custom']
        // If true, Flipster will insert Previous / Next buttons with SVG arrows
        // If 'custom', Flipster will not insert the arrows and will instead use the values of `buttonPrev` and `buttonNext`

        buttonPrev: 'Previous',
        // [text|html]
        // Changes the text for the Previous button

        buttonNext: 'Next',
        // [text|html]
        // Changes the text for the Next button

        onItemSwitch: false
        // [function]
        // Callback function when items are switched
        // Arguments received: [currentItem, previousItem]
      },
          classes = {
        main: 'flipster',
        active: 'flipster--active',
        container: 'flipster__container',

        nav: 'flipster__nav',
        navChild: 'flipster__nav__child',
        navItem: 'flipster__nav__item',
        navLink: 'flipster__nav__link',
        navCurrent: 'flipster__nav__item--current',
        navCategory: 'flipster__nav__item--category',
        navCategoryLink: 'flipster__nav__link--category',

        button: 'flipster__button',
        buttonPrev: 'flipster__button--prev',
        buttonNext: 'flipster__button--next',

        item: 'flipster__item',
        itemCurrent: 'flipster__item--current',
        itemPast: 'flipster__item--past',
        itemFuture: 'flipster__item--future',
        itemContent: 'flipster__item__content'
      },
          classRemover = new RegExp('\\b(' + classes.itemCurrent + '|' + classes.itemPast + '|' + classes.itemFuture + ')(.*?)(\\s|$)', 'g'),
          whiteSpaceRemover = new RegExp('\\s\\s+', 'g');

      $.fn.flipster = function (options) {
        var isMethodCall = typeof options === 'string' ? true : false;

        if (isMethodCall) {
          var args = Array.prototype.slice.call(arguments, 1);
          return this.each(function () {
            var methods = $(this).data('methods');
            if (methods[options]) {
              return methods[options].apply(this, args);
            } else {
              return this;
            }
          });
        }

        var settings = $.extend({}, defaults, options);

        return this.each(function () {

          var self = $(this),
              methods,
              _container,
              _containerWidth,
              _items,
              _itemOffsets = [],
              _currentItem,
              _currentIndex = 0,
              _nav,
              _navItems,
              _navLinks,
              _playing = false,
              _startDrag = false;

          function buildButtonContent(dir) {
            var text = dir === 'next' ? settings.buttonNext : settings.buttonPrev;

            if (settings.buttons === 'custom' || !svgSupport) {
              return text;
            }

            return '<svg viewBox="0 0 13 20" xmlns="' + svgNS + '" aria-labelledby="title"><title>' + text + '</title><polyline points="10,3 3,10 10,17"' + (dir === 'next' ? ' transform="rotate(180 6.5,10)"' : '') + '/></svg>';
          }

          function buildButton(dir) {
            dir = dir || 'next';

            return $('<button class="' + classes.button + ' ' + (dir === 'next' ? classes.buttonNext : classes.buttonPrev) + '" role="button" />').html(buildButtonContent(dir)).on('click', function (e) {
              jump(dir);
              e.preventDefault();
            });
          }

          function buildButtons() {
            if (settings.buttons && _items.length > 1) {
              self.find('.' + classes.button).remove();
              self.append(buildButton('prev'), buildButton('next'));
            }
          }

          function buildNav() {
            var navCategories = {};

            if (!settings.nav || _items.length <= 1) {
              return;
            }

            if (_nav) {
              _nav.remove();
            }

            _nav = $('<ul class="' + classes.nav + '" role="navigation" />');
            _navLinks = $('');

            _items.each(function (i) {
              var item = $(this),
                  category = item.data('flip-category'),
                  itemTitle = item.data('flip-title') || item.attr('title') || i,
                  navLink = $('<a href="#" class="' + classes.navLink + '">' + itemTitle + '</a>').data('index', i);

              _navLinks = _navLinks.add(navLink);

              if (category) {

                if (!navCategories[category]) {

                  var categoryItem = $('<li class="' + classes.navItem + ' ' + classes.navCategory + '">');
                  var categoryLink = $('<a href="#" class="' + classes.navLink + ' ' + classes.navCategoryLink + '" data-flip-category="' + category + '">' + category + '</a>').data('category', category).data('index', i);

                  navCategories[category] = $('<ul class="' + classes.navChild + '" />');

                  _navLinks = _navLinks.add(categoryLink);

                  categoryItem.append(categoryLink, navCategories[category]).appendTo(_nav);
                }

                navCategories[category].append(navLink);
              } else {
                _nav.append(navLink);
              }

              navLink.wrap('<li class="' + classes.navItem + '">');
            });

            _nav.on('click', 'a', function (e) {
              var index = $(this).data('index');
              if (index >= 0) {
                jump(index);
                e.preventDefault();
              }
            });

            if (settings.nav === 'after') {
              self.append(_nav);
            } else {
              self.prepend(_nav);
            }

            _navItems = _nav.find('.' + classes.navItem);
          }

          function updateNav() {
            if (settings.nav) {

              var category = _currentItem.data('flip-category');

              _navItems.removeClass(classes.navCurrent);

              _navLinks.filter(function () {
                return $(this).data('index') === _currentIndex || category && $(this).data('category') === category;
              }).parent().addClass(classes.navCurrent);
            }
          }

          function noTransition() {
            self.css('transition', 'none');
            _container.css('transition', 'none');
            _items.css('transition', 'none');
          }

          function resetTransition() {
            self.css('transition', '');
            _container.css('transition', '');
            _items.css('transition', '');
          }

          function calculateBiggestItemHeight() {
            var biggestHeight = 0,
                itemHeight;

            _items.each(function () {
              itemHeight = $(this).height();
              if (itemHeight > biggestHeight) {
                biggestHeight = itemHeight;
              }
            });
            return biggestHeight;
          }

          function resize(skipTransition) {
            if (skipTransition) {
              noTransition();
            }

            _containerWidth = _container.width();
            _container.height(calculateBiggestItemHeight());

            _items.each(function (i) {
              var item = $(this),
                  width,
                  left;

              item.attr('class', function (i, c) {
                return c && c.replace(classRemover, '').replace(whiteSpaceRemover, ' ');
              });

              width = item.outerWidth();

              if (settings.spacing !== 0) {
                item.css('margin-right', width * settings.spacing + 'px');
              }

              left = item.position().left;
              _itemOffsets[i] = -1 * (left + width / 2 - _containerWidth / 2);

              if (i === _items.length - 1) {
                center();
                if (skipTransition) {
                  setTimeout(resetTransition, 1);
                }
              }
            });
          }

          function center() {
            var total = _items.length,
                loopCount = settings.loop !== true && settings.loop > 0 ? settings.loop : false,
                item,
                newClass,
                zIndex,
                past,
                offset;

            if (_currentIndex >= 0) {

              _items.each(function (i) {
                item = $(this);
                newClass = ' ';

                if (i === _currentIndex) {
                  newClass += classes.itemCurrent;
                  zIndex = total + 2;
                } else {
                  past = i < _currentIndex ? true : false;
                  offset = past ? _currentIndex - i : i - _currentIndex;

                  if (loopCount) {
                    if (_currentIndex <= loopCount && i > _currentIndex + loopCount) {
                      past = true;
                      offset = total + _currentIndex - i;
                    } else if (_currentIndex >= total - loopCount && i < _currentIndex - loopCount) {
                      past = false;
                      offset = total - _currentIndex + i;
                    }
                  }

                  newClass += past ? classes.itemPast + ' ' + classes.itemPast + '-' + offset : classes.itemFuture + ' ' + classes.itemFuture + '-' + offset;

                  zIndex = total - offset;
                }

                item.css('z-index', zIndex * 2).attr('class', function (i, c) {
                  return c && c.replace(classRemover, '').replace(whiteSpaceRemover, ' ') + newClass;
                });
              });

              if (!_containerWidth || _itemOffsets[_currentIndex] === undefined) {
                resize(true);
              }

              if (transformSupport) {
                _container.css('transform', 'translateX(' + _itemOffsets[_currentIndex] + 'px)');
              } else {
                _container.css('left', _itemOffsets[_currentIndex] + 'px');
              }
            }

            updateNav();
          }

          function jump(to) {
            var _previous = _currentIndex;

            if (_items.length <= 1) {
              return;
            }

            if (to === 'prev') {
              if (_currentIndex > 0) {
                _currentIndex--;
              } else if (settings.loop) {
                _currentIndex = _items.length - 1;
              }
            } else if (to === 'next') {
              if (_currentIndex < _items.length - 1) {
                _currentIndex++;
              } else if (settings.loop) {
                _currentIndex = 0;
              }
            } else if (typeof to === 'number') {
              _currentIndex = to;
            } else if (to !== undefined) {
              // if object is sent, get its index
              _currentIndex = _items.index(to);
            }

            _currentItem = _items.eq(_currentIndex);

            if (_currentIndex !== _previous && settings.onItemSwitch) {
              settings.onItemSwitch.call(self, _items[_currentIndex], _items[_previous]);
            }

            center();

            return self;
          }

          function play(interval) {
            settings.autoplay = interval || settings.autoplay;

            clearInterval(_playing);

            _playing = setInterval(function () {
              var prev = _currentIndex;
              jump('next');
              if (prev === _currentIndex && !settings.loop) {
                clearInterval(_playing);
              }
            }, settings.autoplay);

            return self;
          }

          function pause() {
            clearInterval(_playing);
            if (settings.autoplay) {
              _playing = -1;
            }

            return self;
          }

          function show() {
            resize(true);
            self.hide().css('visibility', '').addClass(classes.active).fadeIn(settings.fadeIn);
          }

          function index() {

            _container = self.find(settings.itemContainer).addClass(classes.container);

            _items = _container.find(settings.itemSelector);

            if (_items.length <= 1) {
              return;
            }

            _items.addClass(classes.item)
            // Wrap inner content
            .each(function () {
              var item = $(this);
              if (!item.children('.' + classes.itemContent).length) {
                item.wrapInner('<div class="' + classes.itemContent + '" />');
              }
            });

            // Navigate directly to an item by clicking
            if (settings.click) {
              _items.on('click.flipster touchend.flipster', function (e) {
                if (!_startDrag) {
                  if (!$(this).hasClass(classes.itemCurrent)) {
                    e.preventDefault();
                  }
                  jump(this);
                }
              });
            }

            // Insert navigation if enabled.
            buildButtons();
            buildNav();

            if (_currentIndex >= 0) {
              jump(_currentIndex);
            }

            return self;
          }

          function keyboardEvents(elem) {
            if (settings.keyboard) {
              elem[0].tabIndex = 0;
              elem.on('keydown.flipster', throttle(function (e) {
                var code = e.which;
                if (code === 37 || code === 39) {
                  jump(code === 37 ? 'prev' : 'next');
                  e.preventDefault();
                }
              }, 250, true));
            }
          }

          function wheelEvents(elem) {
            if (settings.scrollwheel) {
              var _wheelInside = false,
                  _actionThrottle = 0,
                  _throttleTimeout = 0,
                  _delta = 0,
                  _dir,
                  _lastDir;

              elem.on('mousewheel.flipster wheel.flipster', function () {
                _wheelInside = true;
              }).on('mousewheel.flipster wheel.flipster', throttle(function (e) {

                // Reset after a period without scrolling.
                clearTimeout(_throttleTimeout);
                _throttleTimeout = setTimeout(function () {
                  _actionThrottle = 0;
                  _delta = 0;
                }, 300);

                e = e.originalEvent;

                // Add to delta (+=) so that continuous small events can still get past the speed limit, and quick direction reversals get cancelled out
                _delta += e.wheelDelta || (e.deltaY + e.deltaX) * -1; // Invert numbers for Firefox

                // Don't trigger unless the scroll is decent speed.
                if (Math.abs(_delta) < 25) {
                  return;
                }

                _actionThrottle++;

                _dir = _delta > 0 ? 'prev' : 'next';

                // Reset throttle if direction changed.
                if (_lastDir !== _dir) {
                  _actionThrottle = 0;
                }
                _lastDir = _dir;

                // Regular scroll wheels trigger less events, so they don't need to be throttled. Trackpads trigger many events (inertia), so only trigger jump every three times to slow things down.
                if (_actionThrottle < 6 || _actionThrottle % 3 === 0) {
                  jump(_dir);
                }

                _delta = 0;
              }, 50));

              // Disable mousewheel on window if event began in elem.
              $window.on('mousewheel.flipster wheel.flipster', function (e) {
                if (_wheelInside) {
                  e.preventDefault();
                  _wheelInside = false;
                }
              });
            }
          }

          function touchEvents(elem) {
            if (settings.touch) {
              var _startDragY = false,
                  _touchJump = throttle(jump, 300),
                  x,
                  y,
                  offsetY,
                  offsetX;

              elem.on({
                'touchstart.flipster': function touchstartFlipster(e) {
                  e = e.originalEvent;
                  _startDrag = e.touches ? e.touches[0].clientX : e.clientX;
                  _startDragY = e.touches ? e.touches[0].clientY : e.clientY;
                  //e.preventDefault();
                },

                'touchmove.flipster': throttle(function (e) {
                  if (_startDrag !== false) {
                    e = e.originalEvent;

                    x = e.touches ? e.touches[0].clientX : e.clientX;
                    y = e.touches ? e.touches[0].clientY : e.clientY;
                    offsetY = y - _startDragY;
                    offsetX = x - _startDrag;

                    if (Math.abs(offsetY) < 100 && Math.abs(offsetX) >= 30) {
                      _touchJump(offsetX < 0 ? 'next' : 'prev');
                      _startDrag = x;
                      e.preventDefault();
                    }
                  }
                }, 100),

                'touchend.flipster touchcancel.flipster ': function touchendFlipsterTouchcancelFlipster() {
                  _startDrag = false;
                }
              });
            }
          }

          function init() {

            var style;

            self.css('visibility', 'hidden');

            index();

            if (_items.length <= 1) {
              self.css('visibility', '');
              return;
            }

            style = settings.style ? 'flipster--' + settings.style.split(' ').join(' flipster--') : false;

            self.addClass([classes.main, transformSupport ? 'flipster--transform' : ' flipster--no-transform', style, // 'flipster--'+settings.style : '' ),
            settings.click ? 'flipster--click' : ''].join(' '));

            // Set the starting item
            if (settings.start) {
              // Find the middle item if start = center
              _currentIndex = settings.start === 'center' ? Math.floor(_items.length / 2) : settings.start;
            }

            jump(_currentIndex);

            var images = self.find('img');

            if (images.length) {
              var imagesLoaded = 0;

              // Resize after all images have loaded.
              images.on('load', function () {
                imagesLoaded++;
                if (imagesLoaded >= images.length) {
                  show();
                }
              });

              // Fallback to show Flipster while images load in case it takes a while.
              setTimeout(show, 750);
            } else {
              show();
            }

            // Attach event bindings.
            $window.on('resize.flipster', throttle(resize, 400));

            if (settings.autoplay) {
              play();
            }

            if (settings.pauseOnHover) {
              _container.on('mouseenter.flipster', pause).on('mouseleave.flipster', function () {
                if (_playing === -1) {
                  play();
                }
              });
            }

            keyboardEvents(self);
            wheelEvents(_container);
            touchEvents(_container);
          }

          // public methods
          methods = {
            jump: jump,
            next: function next() {
              return jump('next');
            },
            prev: function prev() {
              return jump('prev');
            },
            play: play,
            pause: pause,
            index: index
          };
          self.data('methods', methods);

          // Initialize if flipster is not already active.
          if (!self.hasClass(classes.active)) {
            init();
          }
        });
      };
    })(jQuery, window);

    var flipContainer = $('.flipster'),
        flipItemContainer = flipContainer.find('.flip-items'),
        flipItem = flipContainer.find('li');

    flipContainer.flipster({
      itemContainer: flipItemContainer,
      itemSelector: flipItem,
      loop: 2,
      start: 0,
      style: 'infinite-carousel',
      spacing: 0,
      scrollwheel: false,
      //nav: 'after',
      buttons: false
    });
  }

  // =========================================
  //  ***  select box  ***
  // =========================================
  (function () {
    $(document).ready(function () {
      var walkthrough;
      walkthrough = {
        index: 0,
        nextScreen: function nextScreen() {
          if (this.index < this.indexMax()) {
            this.index++;
            return this.updateScreen();
          }
        },
        prevScreen: function prevScreen() {
          if (this.index > 0) {
            this.index--;
            return this.updateScreen();
          }
        },
        updateScreen: function updateScreen() {
          this.reset();
          this.goTo(this.index);
          return this.setBtns();
        },
        setBtns: function setBtns() {
          var $lastBtn, $nextBtn, $prevBtn;
          $nextBtn = $('.next-screen');
          $prevBtn = $('.prev-screen');
          $lastBtn = $('.finish');
          if (walkthrough.index === walkthrough.indexMax()) {
            $nextBtn.prop('disabled', true);
            $prevBtn.prop('disabled', false);
            return $lastBtn.addClass('active').prop('disabled', false);
          } else if (walkthrough.index === 0) {
            $nextBtn.prop('disabled', false);
            $prevBtn.prop('disabled', true);
            return $lastBtn.removeClass('active').prop('disabled', true);
          } else {
            $nextBtn.prop('disabled', false);
            $prevBtn.prop('disabled', false);
            return $lastBtn.removeClass('active').prop('disabled', true);
          }
        },
        goTo: function goTo(index) {
          $('.screen').eq(index).addClass('active');
          return $('.dot').eq(index).addClass('active');
        },
        reset: function reset() {
          return $('.screen, .dot').removeClass('active');
        },
        indexMax: function indexMax() {
          return $('.screen').length - 1;
        },
        closeModal: function closeModal() {
          var _this = this;

          $('.walkthrough, .shade').removeClass('reveal');
          return setTimeout(function () {
            $('.walkthrough, .shade').removeClass('show');
            _this.index = 0;
            return _this.updateScreen();
          }, 200);
        },
        openModal: function openModal() {
          $('.walkthrough, .shade').addClass('show');
          setTimeout(function () {
            return $('.walkthrough, .shade').addClass('reveal');
          }, 200);
          return this.updateScreen();
        } };

      $('.next-screen').on('click', function () {
        return walkthrough.nextScreen();
      });
      $('.prev-screen').on('click', function () {
        return walkthrough.prevScreen();
      });
      $('.close').on('click', function () {
        return walkthrough.closeModal();
      });
      $('.open-walkthrough').on('click', function () {
        return walkthrough.openModal();
      });
      walkthrough.openModal();

      // Optionally use arrow keys to navigate walkthrough
      return $(document).keydown(function (e) {
        switch (e.which) {
          case 37:
            // left
            walkthrough.prevScreen();
            break;
          case 38:
            // up
            walkthrough.openModal();
            break;
          case 39:
            // right
            walkthrough.nextScreen();
            break;
          case 40:
            // down
            walkthrough.closeModal();
            break;
          default:
            return;}

        e.preventDefault();
      });
    });
  }).call(this);

  // =========================================
  //  ***  Mosaic JS | happy clients section ***
  // =========================================
  if ($('.happy-traveller').length) {
    $(document).ready(function () {
      var test = { size: 1920, columns: 10, rows: 10 };
      var test2 = { size: 1440, columns: 10, rows: 10 };
      var test3 = { size: 1366, columns: 11, rows: 11 };
      var test4 = { size: 992, columns: 7, rows: 7 };
      var test5 = { size: 767, columns: 11, rows: 11 };
      var test6 = { size: 480, columns: 7, rows: 7 };
      var test7 = { size: 320, columns: 2, rows: 10 };
      var grid = $('#mosaic-grid').mosaic({
        tileModel: '.sizer',
        gutter: 0,
        heightFromWidth: true,
        breakpoints: [test, test2, test3, test4, test5, test6, test7]
      });

      $('.link').on('click', function () {
        $('.active').removeClass('active');
        $(this).addClass('active');
      });
    });
  }
  // $(window).resize(function(){
  var cntHeight = $('.happy-traveller').innerHeight();
  var mtHeight = $('.mosaic-tile').innerHeight();
  console.log(cntHeight);
  console.log(mtHeight);

  var htHeight = cntHeight - mtHeight;
  console.log(htHeight);

  $('.happy-traveller').css('height', htHeight + 'px');
  // });


  // =========================================
  //  ***  Dotted map area | flightbookinglist ***
  // =========================================
  if ($('.venue-map , .cruise-tripmap').length) {
    window.onload = function () {
      var mapLength = document.getElementsByTagName('circle').length - 1;
      var currentCircle = '';
      var previousCircle = '';

      function rnd(a, z) {
        return Math.floor(Math.random() * (z - a) + a);
      }

      var randomCircle = rnd(0, mapLength);
      currentCircle = randomCircle;
      var a = document.getElementsByTagName('circle')[currentCircle];
      previousCircle = currentCircle;

      var circleCloneFirst = a.cloneNode(true);
      var circleCloneSecond = a.cloneNode(true);
      var circleCloneThird = a.cloneNode(true);
      a.classList.add('active');
      circleCloneFirst.classList.add('active-first');
      circleCloneSecond.classList.add('active-second');
      circleCloneThird.classList.add('active-third');
      circleCloneFirst.classList.remove('active');
      circleCloneSecond.classList.remove('active');
      circleCloneThird.classList.remove('active');
      circleCloneFirst.setAttribute('r', 10);
      circleCloneSecond.setAttribute('r', 25);
      circleCloneThird.setAttribute('r', 40);
      document.getElementsByClassName('b-header__map')[0].appendChild(circleCloneFirst);
      document.getElementsByClassName('b-header__map')[0].appendChild(circleCloneSecond);
      document.getElementsByClassName('b-header__map')[0].appendChild(circleCloneThird);

      (function () {

        if (previousCircle != '') {
          document.getElementsByTagName('circle')[previousCircle].classList.remove('active');
        }
        var randomCircle = rnd(0, mapLength);
        currentCircle = randomCircle;
        var a = document.getElementsByTagName('circle')[currentCircle];
        a.classList.add('active');

        circleCloneFirst.setAttribute('cx', a.getAttribute('cx'));
        circleCloneSecond.setAttribute('cx', a.getAttribute('cx'));
        circleCloneThird.setAttribute('cx', a.getAttribute('cx'));
        circleCloneFirst.setAttribute('cy', a.getAttribute('cy'));
        circleCloneSecond.setAttribute('cy', a.getAttribute('cy'));
        circleCloneThird.setAttribute('cy', a.getAttribute('cy'));

        previousCircle = currentCircle;
        setTimeout(arguments.caller, 3000);
      })();
    };
  }

  // =========================================
  //  ***  Dotted line ***
  // =========================================
  if ($('.cruise-tripmap').length) {
    var tl = new TimelineMax({ repeat: -1, repeatDelay: 4 });
    tl.from('#line', 5, { drawSVG: 0 });
    tl.from('#path2', 4, { strokeDasharray: '0,40' });
  }

  // =========================================
  //  ***  Water ripper js ***
  // =========================================
  if ($('.cruise-tripmap').length) {
    try {
      $('.cruise-tripmap').ripples({
        resolution: 512,
        perturbance: 0.04
      });
    } catch (e) {
      $('.error').show().text(e);
    }
  }

  if ($('#water-wave').length) {
    var timeline = new TimelineMax({
      repeat: -1,
      yoyo: true }),
        feTurb = document.querySelector('#feturbulence');

    timeline.add(TweenMax.to(feTurb, 15, {
      onUpdate: function onUpdate() {
        var bfX = this.progress() * 0.005 + 0.015,
            //base frequency x
        bfY = this.progress() * 0.05 + 0.1; //base frequency y
        feTurb.setAttribute('baseFrequency', bfX + ' ' + bfY);
      } }), 0);
  }

  // =========================================
  //  ***  Button animation ***
  // =========================================
  if ($('.booking').length) {
    var _progress = function progress($btn) {
      var percent = $btn.attr('data-percent') ? Number($btn.attr('data-percent')) + 1 : 0;
      if (percent >= 0 && percent <= 100) {
        $btn.attr('data-percent', percent);
      } else {
        $btn.removeAttr('data-percent').removeClass('loader loading').addClass('success');
        clearInterval(_progress);
      }
    };

    $('.submit:not(disabled)').on('click', function () {
      var $this = $(this);
      $this.prop('disabled', true).addClass('loader').on('transitionend', function () {
        setInterval(function () {
          return _progress($this);
        }, 30);
        $(this).addClass('loading').off('transitionend');
      });
    });
  }

  // =========================================
  //  *** lottei  ***
  // =========================================
  $('.animated-logo').each(function () {
    var file_path = $(this).data('json');
    var ele_id = '#' + $(this).attr('id');
    var animation = bodymovin.loadAnimation({
      container: this, // Required
      path: 'images/lottie-animation/logo.json', // Required
      renderer: 'svg', // Required
      loop: true, // Optional
      autoplay: true // Optional
    });
  });

  $('.animated-gt-airplane').each(function () {
    var file_path = $(this).data('json');
    var ele_id = '#' + $(this).attr('id');

    var animation = bodymovin.loadAnimation({
      container: this, // Required
      path: 'images/lottie-animation/flight-icon.json', // Required
      renderer: 'svg', // Required
      loop: true, // Optional
      autoplay: true // Optional
      // name: "Hello World", // Name for future reference. Optional.
    });
  });

  $('.animated-gt-train').each(function () {
    var file_path = $(this).data('json');
    var ele_id = '#' + $(this).attr('id');

    var animation = bodymovin.loadAnimation({
      container: this, // Required
      path: 'images/lottie-animation/train.json', // Required
      renderer: 'svg', // Required
      loop: true, // Optional
      autoplay: true // Optional
      // name: "Hello World", // Name for future reference. Optional.
    });
  });

  $('.animated-gt-door-sign').each(function () {
    var file_path = $(this).data('json');
    var ele_id = '#' + $(this).attr('id');
    var animation = bodymovin.loadAnimation({
      container: this, // Required
      path: 'images/lottie-animation/hotel.json', // Required
      renderer: 'svg', // Required
      loop: true, // Optional
      autoplay: true // Optional
      // name: "Hello World", // Name for future reference. Optional.
    });
  });

  $('.animated-gt-plate').each(function () {
    var file_path = $(this).data('json');
    var ele_id = '#' + $(this).attr('id');
    var animation = bodymovin.loadAnimation({
      container: this, // Required
      path: 'images/lottie-animation/restaurant.json', // Required
      renderer: 'svg', // Required
      loop: true, // Optional
      autoplay: true // Optional
      // name: "Hello World", // Name for future reference. Optional.
    });
  });

  $('.animated-gt-cruise').each(function () {
    var file_path = $(this).data('json');
    var ele_id = '#' + $(this).attr('id');
    var animation = bodymovin.loadAnimation({
      container: this, // Required
      path: 'images/lottie-animation/cruise.json', // Required
      renderer: 'svg', // Required
      loop: true, // Optional
      autoplay: true // Optional
      // name: "Hello World", // Name for future reference. Optional.
    });
  });

  $('.animated-gt-cab').each(function () {
    var file_path = $(this).data('json');
    var ele_id = '#' + $(this).attr('id');
    var animation = bodymovin.loadAnimation({
      container: this, // Required
      path: 'images/lottie-animation/cab.json', // Required
      renderer: 'svg', // Required
      loop: true, // Optional
      autoplay: true // Optional
      // name: "Hello World", // Name for future reference. Optional.
    });
  });

  // =========================================
  //  ***  select box  ***
  // =========================================
  // $('.mdb-select').materialSelect();

  // =========================================
  //  *** rescalendar | dailyfare-cal Script ***
  // =========================================
  if ($('.dailyfare-cal').length) {
    $('#my_calendar_en').rescalendar({
      id: 'my_calendar_en',
      format: 'YYYY-MM-DD',
      refDate: '2019-03-08',
      jumpSize: 15,
      // disabledDays: ['2019-01-01', '2019-01-07', '2019-04-18', '2019-04-19', '2019-05-01', '2019-05-02', '2019-05-13', '2019-08-15', '2019-10-12', '2019-11-01', '2019-12-06', '2019-12-09', '2019-12-20', '2019-12-24', '2019-12-25', '2019-12-31'],
      disabledWeekDays: [5, 6],
      data: [{
        id: 1,
        name: 'item1',
        startDate: '03-01',
        endDate: '03-03',
        customClass: 'greenClass'
      }, {
        id: 2,
        name: 'item2',
        startDate: '03-05',
        endDate: '03-15',
        customClass: 'blueClass',
        title: 'Title 2 en'
      }, {
        id: 3,
        name: 'item5',
        startDate: '03-05',
        endDate: '03-08',
        customClass: 'greenClass'
      }],

      dataKeyField: 'name',
      dataKeyValues: ['item1']
      // dataKeyValues: ['item1', 'item2', 'item3','item4','item5']

    });
  }

  // =========================================
  //  *** price graph for dailyfare-cal  ***
  // =========================================
  $('#graphLine').waypoint(function () {
    if ($('.mainSVG').length) {
      var updateTimeline = function updateTimeline() {

        // perc = nullDot._gsTransform.x / 770;
        //console.log(perc)

        tl.progress(perc);
        TweenMax.to(tl, 0.5, {
          progress: perc
        });
      };

      var updateGraph = function updateGraph() {

        boxPos.x = dragger._gsTransform.x - box.getBBox().width / 2;
        boxPos.y = dragger._gsTransform.y - box.getBBox().height * 3;
        TweenMax.to(box, 1, {
          x: boxPos.x,
          y: boxPos.y,
          ease: Elastic.easeOut.config(0.7, 0.7)
        });

        boxLabel.textContent = parseInt(600 - dragger._gsTransform.y) - 118; //.toFixed(2);
      };

      var graphPress = function graphPress() {
        isPressed = true;

        TweenMax.to(dragger, 1, {
          attr: {
            r: 40
          },
          ease: Elastic.easeOut.config(1, 0.7)
        });

        TweenMax.to(connector, 0.6, {
          attr: {
            x1: dragger._gsTransform.x,
            x2: dragger._gsTransform.x,
            y1: boxPos.y,
            y2: dragger._gsTransform.y
          }
        });
        TweenMax.to(connector, 0.1, {
          attr: {
            x1: box._gsTransform.x + 40,
            x2: boxPos.x + 40,
            y1: box._gsTransform.y + 20,
            y2: graphDot._gsTransform.y
          },
          onComplete: function onComplete() {
            //TweenMax.ticker.addEventListener('tick', connectLine);
            TweenMax.to(box, 0.8, {
              scale: 1,
              alpha: 1,
              y: boxPos.y,
              ease: Elastic.easeOut.config(1.2, 0.7)
            });
          }
        });
      };

      var graphRelease = function graphRelease() {

        isPressed = false;

        TweenMax.to(dragger, 0.3, {
          attr: {
            r: 40
          },
          ease: Elastic.easeOut.config(0.7, 0.7)
        });
        TweenMax.to(box, 0.2, {
          scale: 0,
          alpha: 0,
          y: boxPos.y + 30,
          ease: Anticipate.easeOut
        });

        //TweenMax.ticker.removeEventListener("tick", connectLine);
      };

      var connectLine = function connectLine() {

        if (isPressed) {
          TweenMax.set(connector, {
            attr: {
              x1: box._gsTransform.x + 40,
              x2: boxPos.x + 40,
              y1: box._gsTransform.y + 43,
              y2: graphDot._gsTransform.y
            }
          });
        } else {

          TweenMax.to(connector, 0.1, {
            attr: {
              x1: graphDot._gsTransform.x,
              x2: graphDot._gsTransform.x,
              y1: graphDot._gsTransform.y,
              y2: graphDot._gsTransform.y
            }
          });
        }
      };

      var init = function init() {

        Draggable.create(nullDot, {
          type: 'x',
          trigger: dragger,
          onPress: graphPress,
          bounds: {
            minX: 0,
            maxX: 770
          },
          zIndexBoost: false,
          onDrag: updateTimeline,
          onRelease: graphRelease,

          //throwProps:true,
          onThrowUpdate: updateTimeline
          //snap:[0,200, 400, 700, 770]
        });
        TweenMax.ticker.addEventListener('tick', connectLine);
        graphRelease();
      };

      var xmlns = 'http://www.w3.org/2000/svg',
          xlinkns = 'http://www.w3.org/1999/xlink',
          select = function select(s) {
        return document.querySelector(s);
      },
          selectAll = function selectAll(s) {
        return document.querySelectorAll(ds);
      },
          mainSVG = select('.mainSVG'),
          box = select('.box'),
          connector = select('#connector'),
          connectorGroup = select('#connectorGroup'),
          dragger = select('#dragger'),
          graphDot = select('#graphDot'),
          boxLabel = select('#boxLabel'),
          nullDot = select('#nullDot'),
          graphLine = select('#graphLine'),
          graphBezier = MorphSVGPlugin.pathDataToBezier(graphLine.getAttribute('d')),
          perc,
          boxPos = {
        x: 0,
        y: 0
      },

      //pt = mainSVG.createSVGPoint(),
      isPressed = false;

      TweenMax.set('svg', {
        visibility: 'visible'
      });

      TweenMax.set([dragger, graphDot, nullDot], {
        transformOrigin: '50% 50%'
      });
      TweenMax.set([box], {
        transformOrigin: '50% 100%'
      });

      var tl = new TimelineMax({
        onUpdate: updateGraph,
        paused: true
      });
      tl.to([graphDot, dragger], 5, {
        bezier: {
          type: 'cubic',
          values: graphBezier,
          autoRotate: false
        },
        ease: Linear.easeNone
      });

      updateTimeline();
      tl.progress(0.000001);
      var introTl = new TimelineMax({
        onComplete: init,
        delay: 1
      });
      introTl.staggerFrom('#horizontalLinesGroup line', 1, {
        drawSVG: '100% 100%',
        alpha: 1,
        //scaleX:-1,
        transformOrigin: '0% 100%'
      }, 0.1).staggerFrom('#graphTextGroup text', 1, {

        alpha: 0
      }, 0.1, '-=0.5').from([graphDot, dragger], 0.71, {
        attr: {
          r: 0
        },
        ease: Power1.easeOut
      }, '-=1.3').from(graphLine, 2.3, {
        drawSVG: '0% 0%',
        ease: Power3.easeInOut
      }, '-=1.73');
    }
  }, { offset: '100%' });

  // =========================================
  //  ***  videobox  ***
  // =========================================
  if ($('.mkur-holiday').length) {
    $('.play').on('click', function () {
      $('#player').addClass('window-open');
      $(this).addClass('off');
      $('.close').addClass('on');
    });

    $('.close').on('click', function () {
      $('#player').removeClass('window-open');
      $(this).removeClass('on');
      $('.play').removeClass('off');
    });
  }

  // =========================================
  //  *** play and pause button script  ***
  // =========================================
  if ($('.playbutton-area').length) {
    // play and pause SVG Animation | Great Hotel Deal 
    // ----------------------------
    var state = 'paused';
    $('.btn-start-stop').on('click', function () {
      if (state == 'paused') {
        state = 'playing';
        $('#circle').attr('class', 'play');
        $('#from_play_to_pause')[0].beginElement();
      } else {
        state = 'paused';
        $('#circle').attr('class', '');
        $('#from_pause_to_play')[0].beginElement();
      }
    });

    // play and pause control
    // ----------------------
    var running = false;
    var t = setInterval(function () {
      if (!running) {
        jQuery('.slide--right .slide__img-wrap').trigger('click');
      }
    }, 3000);

    $('.playbutton-area').on('click', function () {
      clearInterval(t);
      running = !running;
      if (!running) return;
      t = setInterval(function () {
        jQuery('.slide--right .slide__img-wrap').trigger('click');
      }, 3000);
    });

    $('.playbutton-area').appendTo('.slideshow');
  }

  // =========================================
  //  *** flight Seatbooking Page |   ***
  // =========================================
  var seatData = [{ id: 1, booked: false, type: 1 }, { id: 2, booked: false, type: 1 }, { id: 3, booked: true, type: 1 }, { id: 4, booked: true, type: 1 }, { id: 5, booked: false, type: 1 }, { id: 6, booked: false, type: 1 }, { id: 7, booked: false, type: 1 }, { id: 8, booked: false, type: 1 }, { id: 9, booked: false, type: 1 }, { id: 10, booked: false, type: 1 }, { id: 11, booked: true, type: 1 }, { id: 12, booked: false, type: 1 }, { id: 13, booked: false, type: 1 }, { id: 14, booked: false, type: 1 }, { id: 15, booked: false, type: 1 }, { id: 16, booked: false, type: 1 }, { id: 17, booked: true, type: 1 }, { id: 18, booked: false, type: 1 }, { id: 19, booked: false, type: 1 }, { id: 20, booked: false, type: 1 }, { id: 21, booked: false, type: 1 }, { id: 22, booked: false, type: 1 }, { id: 23, booked: false, type: 1 }, { id: 24, booked: false, type: 1 }, { id: 25, booked: false, type: 1 }, { id: 26, booked: false, type: 1 }, { id: 27, booked: false, type: 1 }, { id: 28, booked: false, type: 1 }, { id: 29, booked: false, type: 1 }, { id: 30, booked: false, type: 1 }, { id: 31, booked: false, type: 1 }, { id: 32, booked: false, type: 1 }, { id: 33, booked: false, type: 1 }, { id: 34, booked: true, type: 1 }, { id: 35, booked: true, type: 1 }, { id: 36, booked: true, type: 1 }, { id: 37, booked: false, type: 1 }, { id: 38, booked: false, type: 1 }, { id: 39, booked: false, type: 1 }, { id: 40, booked: false, type: 1 }, { id: 41, booked: false, type: 1 }, { id: 42, booked: false, type: 1 }, { id: 43, booked: false, type: 1 }, { id: 44, booked: false, type: 1 }, { id: 45, booked: false, type: 1 }, { id: 46, booked: false, type: 1 }, { id: 47, booked: false, type: 1 }, { id: 48, booked: true, type: 1 }, { id: 49, booked: false, type: 1 }, { id: 50, booked: false, type: 1 }, { id: 51, booked: true, type: 1 }, { id: 52, booked: false, type: 1 }, { id: 53, booked: false, type: 1 }, { id: 54, booked: false, type: 1 }, { id: 55, booked: false, type: 1 }, { id: 56, booked: false, type: 1 }, { id: 57, booked: false, type: 1 }];
  var selectedSeat = [];
  if ($('.seating-area').length) {
    var seats = $('.seating-area ul li span');
    seats.on('click', function () {
      var seat = $(this);
      var seatId = seat.attr('data-seat-id');
      var seatDataItem = seatData.find(function (seat) {
        return +seatId === seat.id;
      });

      if (!seatDataItem.booked) {
        if (selectedSeat.findIndex(function (s) {
          return s.id === +seatId;
        }) !== -1) {
          selectedSeat.push(seatDataItem);
        } else {
          selectedSeat = selectedSeat.filter(function (s) {
            return s.id !== +seatId;
          });
        }
        seat.toggleClass('seat-selected');
      }
    });

    seats.each(function (i) {
      var seat = $('.seating-area ul li span').eq(i);
      var seatId = seat.attr('data-seat-id');
      var seatItemData = seatData.find(function (s) {
        return s.id === +seatId;
      });
      if (seatItemData && seatItemData.booked) {
        // console.log(1)
        seat.addClass('seatnot-available').css('cursor', 'not-allowed');
      }
    });
  }

  // =========================================
  //  *** Menu Hamburger  ***
  // =========================================
  $('.close').on('click', function () {
    $('#menu-toggle-input').prop('checked', false);
    $('.header1').removeClass('uplayer');
  });
  $('#menu-toggle-input').on('click', function () {
    $('.header1').addClass('uplayer');
  });

  // =========================================
  //  *** Date Picker  ***
  // =========================================
  if ($('.formbox').length) {
    var datePickerRef = document.querySelector('[data-date-picker]');
    window.CarbonComponents.DatePicker.init(datePickerRef);
    var datePicker = window.CarbonComponents.DatePicker.components.get(datePickerRef);

    datePicker.calendar.set('minDate', 'today');
  }
  // let today = new Date().toISOString().substr(0, 10);
  // document.querySelector('.currentDate').value = today;

  // =========================================
  //  *** Luxury car slider  ***
  // =========================================
  if ($('.car').length) {
    var slider = new TuinSlider('#slider');
  }
  $('ul.slider-navigation').appendTo('.lcs-section .navigation-row');

  // .navigation-row
  var totCarSlide = $('.slider__container > .slider__item').length;
  $('.tot-cntr').text('0' + totCarSlide);

  $('.slider-navigation li a').click(function () {
    var currentSlide = $('.slider-navigation li a.is-active').attr('data-index');
    // console.log(currentSlide);
    $('.n-cntr').text('0' + ++currentSlide);
  });

  // var totalItems = $('.slider-navigation li a').length;
  // console.log(totalItems);

  // var currentIndex = $('.slider-navigation li .is-active').index();
  // console.log(currentIndex);
  // $('.current-item').html('0' + '' + currentIndex);
  // $('.tot-item').html( '/' + ' ' + '0' + totalItems);

  // $('.btn--nav').on('click', function() {
  //   var currentIndex = $('.btn--nav.btn--current').index() + 1;
  //   $('.current-item').html('0' + '' + currentIndex);
  // });

  // =========================================
  //  *** Smooth Scroll js  ***
  // =========================================
  // var scroll = new SmoothScroll('a[href*="#"]', {
  //   speed: 1500,
  //   speedAsDuration: true
  // });

  // =========================================
  //  *** SVG form animation  ***
  // =========================================
  if ($('.lcb-type2').length) {
    var current = null;

    document.querySelector('#email').addEventListener('focus', function (e) {
      if (current) current.pause();
      current = anime({
        targets: 'path',
        strokeDashoffset: {
          value: 0,
          duration: 700,
          easing: 'easeOutQuart'
        },
        strokeDasharray: {
          value: '240 1386',
          duration: 700,
          easing: 'easeOutQuart'
        }
      });
    });
    document.querySelector('#comments').addEventListener('focus', function (e) {
      if (current) current.pause();
      current = anime({
        targets: 'path',
        strokeDashoffset: {
          value: -336,
          duration: 700,
          easing: 'easeOutQuart'
        },
        strokeDasharray: {
          value: '240 1386',
          duration: 700,
          easing: 'easeOutQuart'
        }
      });
    });
    document.querySelector('#submit').addEventListener('focus', function (e) {
      if (current) current.pause();
      current = anime({
        targets: 'path',
        strokeDashoffset: {
          value: -730,
          duration: 700,
          easing: 'easeOutQuart'
        },
        strokeDasharray: {
          value: '530 1386',
          duration: 700,
          easing: 'easeOutQuart'
        }
      });
    });
  }

  // =========================================
  //  *** Waypoint js***
  // =========================================
  // function onScrollInit( items, trigger ) {
  //   items.each( function() {
  //   var osElement = $(this),
  //       osAnimationClass = osElement.attr('data-os-animation'),
  //       osAnimationDelay = osElement.attr('data-os-animation-delay');

  //       osElement.css({
  //           '-webkit-animation-delay':  osAnimationDelay,
  //           '-moz-animation-delay':     osAnimationDelay,
  //           'animation-delay':          osAnimationDelay
  //       });

  //       var osTrigger = ( trigger ) ? trigger : osElement;

  //       osTrigger.waypoint(function() {
  //           osElement.addClass('animated').addClass(osAnimationClass);
  //           },{
  //               triggerOnce: true,
  //               offset: '100%'
  //       });
  //   });
  // } 
  // onScrollInit( $('.os-animation') );
  // onScrollInit( $('.staggered-animation') );

  function onScrollInit(items, trigger) {
    items.each(function () {
      var osElement = $(this),
          osAnimationClass = osElement.attr('data-os-animation'),
          osAnimationDelay = osElement.attr('data-os-animation-delay');

      osElement.css({
        '-webkit-animation-delay': osAnimationDelay,
        '-moz-animation-delay': osAnimationDelay,
        'animation-delay': osAnimationDelay
      });

      var osTrigger = trigger ? trigger : osElement;

      osTrigger.waypoint(function () {
        osElement.addClass('animated').toggleClass(osAnimationClass);
      }, {
        triggerOnce: false,
        offset: '90%'
      });
    });
  }

  onScrollInit($('.os-animation'));
  onScrollInit($('.staggered-animation'));

  // =========================================
  //  *** rellax js***
  // =========================================

  // Start Rellax
  // var rellax = new Rellax('.rellax');
  // $(window).on('resize', function () {
  //   if ($(window).width() > 960) {
  //     rellax.destroy();
  //   } else {
  //     var rellax = new Rellax('.rellax');
  //   }
  // });
  let rellax = null;

  function initRellax() {
    // Destroy previous instance if any
    if (rellax && typeof rellax.destroy === 'function') {
      rellax.destroy();
    }
  
    // Re-initialize if window width is <= 960px
    if (window.innerWidth <= 960) {
      const elements = document.querySelectorAll('.rellax');
      if (elements.length > 0) {
        rellax = new Rellax('.rellax');
      }
    }
  }
  
  // Initial call
  initRellax();
  
  // Handle window resize
  $(window).on('resize', function () {
    initRellax();
  });
  
  // =========================================
  //  *** best price calander ***
  // =========================================

  // if($('.rescalendar_table').length) {
  //   $('td.day_cell').mouseenter(function() {
  //     // cell date
  //     var cellDate = $(this).find('.dia').text(); 
  //     // console.log(cellDate);

  //     // cell data - price
  //     var cellData = $(this).find('.price').text(); 
  //     // console.log(cellData);


  //     // create tooltip
  //     $(this).append(
  //       '<div class="price-tooltip">'
  //       + ' <div class="current-date">' + cellDate + '</div>'
  //       + ' <div class="current-info"> months lowest price </div>'
  //       + ' <div class="current-price">' + 'current price' + '</div>'
  //       + ' <a href="#" class="booknow-btn"> book now </a>'
  //       + '</div>'

  //       );
  //   });

  //   $('td').mouseout(function(){ 
  //     // $('.price-tooltip').remove(); 
  //   });

  // }
});