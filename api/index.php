<?php
require 'vendor/autoload.php';

error_reporting(-1);//tell me stuff

$app = new \Slim\Slim();

$app->get('/home', function(){}); //so far nothing for home

$app->post('/contact', function(){
  //send message in content
  $message = $_POST['name'];
  $message .= $_POST['phone'];
  $message .= $_POST['message'];

  echo $message;
});

$app->run();
