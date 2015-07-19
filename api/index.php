<?php
require 'vendor/autoload.php';
require 'classes/indeed.php';

error_reporting(-1);//tell me stuff

$app = new \Slim\Slim();

$app->get('/home', function(){}); //so far nothing for home

$app->get('/selection/:job/:location', function($job,$location){
  $client = new Indeed("4779755742469402");

  $params = array(
      "q" => "php",
      "l" => $location,
      "userip" => $_SERVER['REMOTE_ADDR'],
      "useragent" => $_SERVER['HTTP_USER_AGENT'],
      "limit" => "25"
  );

  $results = $client->search($params);

  echo json_encode($results);

}); //so far nothing for home

$app->post('/contact', function(){
  //send message in content
  $message = $_POST['name'];
  $message .= $_POST['phone'];
  $message .= $_POST['message'];

  echo $message;
});

$app->run();
