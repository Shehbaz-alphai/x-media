(function($) {
    'use strict';
    theme.PluginScrollToTop.initialize = function() {};
    if (typeof LocomotiveScroll !== 'undefined') {
        window.scrollTo(0, 0);
        setTimeout(function() {
            let scroller;
            let initLocoScroll = function() {
                window.scrollTo(0, 0);
                scroller = new LocomotiveScroll({
                    el: document.querySelector('[data-scroll-container]'),
                    smooth: true,
                    direction: (window.innerWidth > 1199 ? "horizontal" : "vertical"),
                    mobile: {
                        breakpoint: 0,
                        smooth: true,
                        direction: (window.innerWidth > 1199 ? "horizontal" : "vertical")
                    },
                    tablet: {
                        breakpoint: 0,
                        smooth: true,
                        direction: (window.innerWidth > 1199 ? "horizontal" : "vertical")
                    }
                });
                scroller.on("scroll", function() {
                    ScrollTrigger.update();
                });
            }
            initLocoScroll();
            $('[data-hash]').off().on('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                const anchor = $($(this).attr('href')).get(0);
                scroller.scrollTo(anchor);
            });
            $(window).afterResize(function() {
                scroller.destroy();
                initLocoScroll();
            });
        }, 100);
        window.onbeforeunload = function() {
            window.scrollTo(0, 0);
        };
    } else {
        theme.fn.showErrorMessage('Failed to Load File', 'Failed to load: Locomotive Scroll - Include the following file(s): (vendor/locomotive-scroll/locomotive-scroll.min.js)');
    }
}).apply(this, [jQuery]);