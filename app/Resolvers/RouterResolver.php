<?php

namespace App\Resolvers;

use Modulus\Framework\Upstart\Service;

class RouterResolver extends Service
{
  /**
   * Register application routes
   *
   * @param object $app
   * @return void
   */
  protected function boot($app) : void
  {
    $this->webRoutes($app);
  }

  /**
   * Load webRoutes
   *
   * @param object $app
   * @return void
   */
  protected function webRoutes($app) : void
  {
    $app->route->make(base_path('routes/web.php'))
        ->middleware('web')
        ->register();
  }
}
