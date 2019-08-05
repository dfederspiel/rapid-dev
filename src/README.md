This is where all your template source files should live.

-- fonts
-- images
-- js
	All scripts, separated out however you wish.  The gulp process will pick up anything here and bundle it.
-- markup
	Static templates - this is not part of the build, but is a master static implementation of your template (which will eventually be implemneted in Sitefinity under ResourcePackages/{Bootstrap}/MVC/Views/Layouts)
	These can be build any way you want as long as you wind up with an exact semantic match in sitefinity.
-- styles
	All CSS/LESS/SASS files.  By convention, break your styles up into individual files that represent the various pieces of your site.
	-- main - core styles, fonts, colors, layouts
	-- widgetA - all styles pertaining to WidgetA
	-- widgetB - all styles pertaining to WidgetB
	