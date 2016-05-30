<?php
defined('BASEPATH') OR exit('No direct script access allowed');


$route['default_controller'] = 'welcome';
$route['404_override'] = '';
$route['translate_uri_dashes'] = FALSE;


/*
	route['app/{recurso}']
	'controlador/controlador'

*/

$route['app/clientes']  = 'clientes/clientes';
$route['app/menu'] = 'menu/menu'; 
$route['app/perfil/(:num)/menu']  = 'menu/menu/$1'; 
