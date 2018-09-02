"use strict";
document.addEventListener('DOMContentLoaded', function() {
    (function(window, document) {
        const wheelDown = {
            toRight: false, 
            toLeft: true
        };

        /**
         * Make adjustments to the mousewheel's functionality by modifying the values below
         * 
         * @speed The scrolling speed of the wheel. Default value is 20px
         * @direction The scrolling direction of the wheel
         */
        const SETTINGS = {
            speed: 20,
            direction: wheelDown.toRight,
            //direction: wheelDown.toLeft
        }

        //DO NOT TOUCH
        document.addEventListener("wheel", function(e) {
            let y = e.deltaY;
    
            //Checks the direction of the scroll
            switch(SETTINGS.direction) {
                case (y < 0):
                    document.body.scrollLeft += SETTINGS.speed;
                    break;
                case (y > 0):
                    document.body.scrollLeft += (-SETTINGS.speed);
                    break;
            }

            //Prevent the browser's default settings
            e.preventDefault();
        });
    
    })(window, document);
});