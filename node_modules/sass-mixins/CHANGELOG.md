# Changelog

### HEAD

### 0.13.0 - 30.03.2020
* New builds for css
* Update grunt file and updates for modules
* Move return description to the right position
* Add default values to params from mixin x-breakpoints
* Fix examples in partials/_breakpoints.scss
* Remove unnecessary @content annotation
* Add defaulttype to boxsizing param
* Changed all documentation annotation into sassdoc format
* Add .idea folder to gitignore
* Add grunt-sassdoc
* Change deprecated `@elseif` to `@else if`

### 0.12.0 - 11.07.2015
* Add warning when x-breakpoints do not recognize breakpoint
* Add IE8 support to x-opacity
* Change default value of 1 from x-opacity to 0
* Fix potential issues with strings being used in place of length
* Fix potential edge cases in x-rem
* Simplify code output in x-multiple-colored-gradient
* Change list to arglist in x-multiple-colored-gradient

### 0.11.0 - 20.10.2014
* Use grunt-sass with libsass
* Fix for x-opacity to not throw an exception

### 0.10.0 - 02.07.2014
* Extend x-rem mixin to make it take px values and convert them to rem
* Add strip-unit function to _rem.scss partial
* Add flexbox mixins

### 0.9.0 - 03.05.2014
* Add background-size mixin
* Add multi values for transition mixin
* Add multi values for box-shadow mixin
* Use single quotes in gradient mixins
* Add mixin for calc

### 0.8.0 - 05.03.2014
* Add better example for multiple colored gradient
* Rename tests folder to `test`
* Add x-baseline mixin
* Correct indention in opacity mixin

### 0.7.1 - 11.01.2014
* Fix `x-rem` mixin to work with libsass (#28)
* Remove -ms-filter for opacity mixin

### 0.7.0 - 19.12.2013
* Add breakpoint mixin
* Update animation description
* Update placeholder mixin

### 0.6.0 - 14.10.2013
* Add mixin for placeholder color

### 0.5.0 - 29.09.2013
* Add banner for generated mixins and CSS output
* Add mixin for appearance
* Bugfix: Remove `-o-` prefix for tab-size mixin (#17)
* Remove `-o-` and `-moz-` for mulitple gradients (#17)

### 0.4.1 - 30.08.2013
* Remove `-o-` prefix for transforms, transition and tab-size (#17)
* Remove `-o-` and `-moz-` prefixes of linear gradients (#17)

### 0.4.0 - 20.08.2013
* Add mixin for opacity (with [-ms-]filter)
* Multiple backgrounds: Fix bug with empty variable `$end` and background images (#12)
* Move changelog to own file
* Remove extra -ms prefixed gradients
* Fix typo ($vaule) in mixin x-user-select
* Add docs in mixins

### 0.3.0 - 19.05.2013
* Add mixin for responsive breakpoints
* Add mixin for animations
* Remove -moz-transform since is not needed anymore
* Add mixin for user-select

### 0.2.2 - 11.05.2013
* Allow non-number values in rem mixin
* Fix double dashes in the prefixed gradient function of multiple backgrounds

### 0.2.1 - 14.04.2013
* Add Bower support
* Add mixin for multiple backgrounds
* Remove moz-prefix for transition

### 0.2.0 - 18.02.2013
* Add support for `auto` value in rem mixin
* Add example of usage to each mixin

### 0.1.3 - 03.02.2013
* Remove -ms-prefix from transitions

### 0.1.2 - 29.01.2013
* Multiple values for rem-mixin

### 0.1.1 - 26.01.2013
* Add very old webkit-gradient syntax
* Add tab mixin

### 0.1.0 - 11.09.2012
