<?php
defined('BASEPATH') OR exit('No direct script access allowed');

require APPPATH . '/libraries/REST_Controller.php';

class Clientes extends REST_Controller {

	public function __construct()
	{
		parent::__construct();
	}

	public function clientes_get()
	{
		$clientes = array(
			"0" => array(
				"id" => "01",
				"cedula" => "10654567",
				"nombres" => "Carlos",
				"apellidos" => "Pitre",
			),
			"1" => array(
				"id" => "02",
				"cedula" => "10654567",
				"nombres" => "Carlos",
				"apellidos" => "Pitre",
			)
		);
		$this->response($clientes, REST_Controller::HTTP_OK);
	}

}

/* End of file clientes.php */
/* Location: ./application/controllers/clientes.php */