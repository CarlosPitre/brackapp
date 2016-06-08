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
$route['app/servicios/(:num)']  = 'servicios/servicios/$1';
$route['app/tiposservicios']  = 'tiposservicios/tiposservicios';
$route['app/sectores/(:num)'] = 'sectores/sectores/$1';
$route['app/menu'] = 'menu/menu'; 
$route['app/perfil/(:num)/menu']  = 'menu/menu/$1'; 
$route['app/servicio/(:num)/profesionales'] = 'profesionales/profesionalesByServicio/$1';
<<<<<<< HEAD

=======
$route['app/usuario/login'] = 'usuario/login';
$route['app/profesionales/(:num)'] = 'profesionales/profesionales/$1';
$route['app/profesionales'] = 'profesionales/profesionales';
>>>>>>> 52584d387cc392a2586fc656b6302a7649d106d3
