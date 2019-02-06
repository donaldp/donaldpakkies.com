<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">

  <link href="https://fonts.googleapis.com/css?family=Hind:300,400,500,600,700" rel="stylesheet">

  <!-- font-awesome -->
  <link href="css/font-awesome.min.css" rel="stylesheet">

  <!-- CSRF Token -->
  <meta name='csrf-token' content="{{ $csrf_token }}"/>
  <title>{% yield('title') %}</title>

  <!-- Styles -->
  <link rel="stylesheet" href="{{ mix('/css/app.css') }}">

  <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
  <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
  <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>
<body id="page-top" data-spy="scroll" data-target=".navbar">
  <div id="main-wrapper">
    <div id="app">

      <!-- Page Preloader -->
      <div id="preloader">
        <div id="status">
          <div class="status-mes"></div>
        </div>
      </div>

      {% yield('main') %}
    </div>
  </div>
  <script src="{{ mix('/js/app.js') }}"></script>
</body>
</html>
