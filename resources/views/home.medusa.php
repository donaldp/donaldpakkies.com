{% using('layouts.app') %}

{% section('title') %}

  Donald Pakkies

{% endsection %}

{% section('main') %}

  <div class="columns-block">
    <div class="left-col-block blocks">
      <header class="header">
        <div class="content text-center">
          <h1>Hi, I'm Donald Pakkies!</h1>

          <p class="lead">Software Engineer</p>
          <ul class="social-icon">
            <li><a href="{{ config('social.twitter') }}"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
            <li><a href="{{ config('social.linkedin') }}"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
            <li><a href="{{ config('social.github') }}"><i class="fa fa-github" aria-hidden="true"></i></a></li>
          </ul>
        </div>
        <div class="profile-img"></div>
      </header>
      <!-- .header-->
    </div>

    <home-view></home-view>
  </div>

{% endsection %}
