"use strict";
document.addEventListener('DOMContentLoaded', function() {
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
            SPEED: 20,
            DIRECTION: wheelDown.toRight,
            //direction: wheelDown.toLeft
        }

        //DO NOT TOUCH
        document.addEventListener("wheel", function(e) {
            let y = e.deltaY;
            
            //Prevent the browser's default settings
            e.preventDefault();
    
            //Checks the direction of the scroll
            switch(SETTINGS.DIRECTION) {
                case (y < 0):
                    document.body.scrollLeft += SETTINGS.SPEED;
                    break;
                case (y > 0):
                    document.body.scrollLeft -= SETTINGS.SPEED;
                    break;
            }
        });  
          
});