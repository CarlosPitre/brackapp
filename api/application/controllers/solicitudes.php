<?php
defined('BASEPATH') OR exit('No direct script access allowed');

require APPPATH . '/libraries/REST_Controller.php';

class Solicitudes extends REST_Controller{

  public function __construct()
  {
    parent::__construct();
    $this->load->model('model_solicitudes');
  }

  public function solicitudes_post()
  {
    $datos = array(
      "idCliente" => $this->post("idCliente"),
      "idProfesional" => $this->post("idProfesional"),
      "idProducto" => $this->post("idProducto"),
      "idServicio" => $this->post("idServicio")
    );
    $guardar= $this->model_solicitudes->save($datos);
		if ($guardar) {
			$message = "Datos Guardados Correctamente";
			$this->response($message, REST_Controller::HTTP_CREATED);
		}else{
			$message = "Error";
			$this->response($message, REST_Controller::HTTP_BAD_REQUEST);
		};
  }

}