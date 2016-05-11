<!doctype html>
<html class="no-js" lang="en">

<head>
    <meta charset="utf-8">
    <title>gulp angular requirejs</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>

<body>
    <!-- 
    	<div class="view" data-ng-view>
			<div class="loading-indicator"></div>
		</div>	
	 -->
    <ul class="menu">
        <li><a ui-sref="route1">Route 1</a></li>
        <li><a ui-sref="route2">Route 2</a></li>
    </ul>
    <div ui-view></div>
    <!-- build:js main.js -->
    <script src="bower_components/requirejs/require.js"></script>
    <script src="app/config/dev-config.js"></script>
    <script src="app/main.js"></script>
    <!-- endbuild -->
</body>

</html>
