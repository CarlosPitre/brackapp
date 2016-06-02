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
$route['app/sectores']  = 'sectores/sectores';
$route['app/servicios']  = 'servicios/servicios';
$route['app/sectores/(:num)'] = 'sectores/sectores/$1';
$route['app/menu'] = 'menu/menu'; 
$route['app/perfil/(:num)/menu']  = 'menu/menu/$1'; 
