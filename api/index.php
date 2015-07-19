<?php
require 'vendor/autoload.php';

error_reporting(-1);//tell me stuff

$app = new \Slim\Slim();

$app->get('/home', function(){}); //so far nothing for home

$app->get('/selection', function(){
  echo "[
    {
      'heading': 'First one',
      'articles': [
        {'title': 1},
        {'title': 2},
        {'title': 3},
        {'title': 4}
      ]
    },{
      'heading': 'Second one',
      'articles': [
        {'title': 1},
        {'title': 2},
        {'title': 3},
        {'title': 4},
        {'title': 5},
        {'title': 6},
        {'title': 7},
        {'title': 8},
        {'title': 9},
        {'title': 10},
        {'title': 11},
        {'title': 12},
        {'title': 13},
        {'title': 14}
      ]
    },{
      'heading': 'Third one',
      'articles': [
        {'title': 1},
        {'title': 2}
      ]
    },{
      'heading': 'fourth one',
      'articles': [
        {'title': 1}
      ]
    },{
      'heading': 'fifth one',
      'articles': [
        {'title': 1}
      ]
    },{
      'heading': 'sixth one',
      'articles': [
        {'title': 1}
      ]
    },{
      'heading': 'First one',
      'articles': [
        {'title': 1},
        {'title': 2},
        {'title': 3},
        {'title': 4}
      ]
    },{
      'heading': 'Second one',
      'articles': [
        {'title': 1},
        {'title': 2},
        {'title': 3},
        {'title': 4},
        {'title': 5},
      ]
    },{
      'heading': 'Third one',
      'articles': [
        {'title': 1},
        {'title': 2}
      ]
    },{
      'heading': 'fourth one',
      'articles': [
        {'title': 1}
      ]
    },{
      'heading': 'fifth one',
      'articles': [
        {'title': 1}
      ]
    },{
      'heading': 'sixth one',
      'articles': [
        {'title': 1}
      ]
    },{
      'heading': 'First one',
      'articles': [
        {'title': 1},
        {'title': 2},
        {'title': 3},
        {'title': 4}
      ]
    },{
      'heading': 'Second one',
      'articles': [
        {'title': 1},
        {'title': 2},
        {'title': 3},
        {'title': 4},
        {'title': 5},
      ]
    },{
      'heading': 'Third one',
      'articles': [
        {'title': 1},
        {'title': 2}
      ]
    },{
      'heading': 'fourth one',
      'articles': [
        {'title': 1}
      ]
    },{
      'heading': 'fifth one',
      'articles': [
        {'title': 1}
      ]
    },{
      'heading': 'sixth one',
      'articles': [
        {'title': 1}
      ]
    },{
      'heading': 'First one',
      'articles': [
        {'title': 1},
        {'title': 2},
        {'title': 3},
        {'title': 4}
      ]
    },{
      'heading': 'Second one',
      'articles': [
        {'title': 1},
        {'title': 2},
        {'title': 3},
        {'title': 4},
        {'title': 5},
      ]
    },{
      'heading': 'Third one',
      'articles': [
        {'title': 1},
        {'title': 2}
      ]
    },{
      'heading': 'fourth one',
      'articles': [
        {'title': 1}
      ]
    },{
      'heading': 'fifth one',
      'articles': [
        {'title': 1}
      ]
    },{
      'heading': 'sixth one',
      'articles': [
        {'title': 1}
      ]
    },{
      'heading': 'First one',
      'articles': [
        {'title': 1},
        {'title': 2},
        {'title': 3},
        {'title': 4}
      ]
    },{
      'heading': 'Second one',
      'articles': [
        {'title': 1},
        {'title': 2},
        {'title': 3},
        {'title': 4},
        {'title': 5},
      ]
    },{
      'heading': 'Third one',
      'articles': [
        {'title': 1},
        {'title': 2}
      ]
    },{
      'heading': 'fourth one',
      'articles': [
        {'title': 1}
      ]
    },{
      'heading': 'fifth one',
      'articles': [
        {'title': 1}
      ]
    },{
      'heading': 'sixth one',
      'articles': [
        {'title': 1}
      ]
    }
  ]";
}); //so far nothing for home

$app->post('/contact', function(){
  //send message in content
  $message = $_POST['name'];
  $message .= $_POST['phone'];
  $message .= $_POST['message'];

  echo $message;
});

$app->run();
