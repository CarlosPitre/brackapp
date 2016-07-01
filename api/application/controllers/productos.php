<?php
defined('BASEPATH') OR exit('No direct script access allowed');

require APPPATH . '/libraries/REST_Controller.php';

class Productos extends REST_Controller {

	public function __construct()
	{
		parent::__construct();
		$this->load->model('model_productos');
	}

	public function productos_get($id = null)
	{
		if ($id == null) {
			$Productos = $this->model_productos->getProductos();
		}
		if ($Productos) { 
			$this->response($Productos, REST_Controller::HTTP_OK);
		}else{
	        $this->response([
       			'status' => FALSE,
        		'message' => 'No users were found'
            ], REST_Controller::HTTP_NOT_FOUND); 
		};
	}


   

	public function servicios_post()
	{
		$datos = array(
			"descripcion" => $this->post("descripcion"),
			"estado" => "ACTIVO",
			"idSector" => $this->post("idSector"),
		);
		$idServicio= $this->model_servicios->save($datos);

		$datosServicio = array(
			"idProfesional" => $this->post("idProfesional"), 	
			"idServicio" => $idServicio,
			"porcentaje" =>  $this->post("porcentaje")			
		);
		$guardar = $this->model_servicios->saveProfesional($datosServicio);
		if ($guardar) {			
			$message = "Datos Guardados Correctamente";
			$this->response($message, REST_Controller::HTTP_CREATED);
		}else{
			$message = "Error";
			$this->response($message, REST_Controller::HTTP_BAD_REQUEST);
		};
	}



	public function servicios_put()
	{
		$datos = array(
			"descripcion" => $this->put("descripcion"),
			"idSector"=>$this->put("idSector")
		);
		$guardar= $this->model_servicios->update($datos,$this->put("id"));

		$datosServicio = array(
			"idProfesional" => $this->put("idProfesional"), 	
			"idServicio" => $idServicio,
			"porcentaje" =>  $this->put("porcentaje")			
		);
		$guardar= $this->model_servicios->update($datosServicio,$this->put("id"));
         if ($guardar) {
			$message = "Datos Guardados Correctamente";
			$this->response($message, REST_Controller::HTTP_CREATED);
		}else{
			$message = "Error";
			$this->response($message, REST_Controller::HTTP_BAD_REQUEST);
		};
	}

	public function delete_post()
	{
		$idServicio = $this->post("idServicio");
		$idProfesional = $this->post("idProfesional");
		$guardar= $this->model_servicios->delete($idServicio,$idProfesional);
		if ($guardar) {
			$message = "Datos eliminado Correctamente";
			$this->response($message, REST_Controller::HTTP_CREATED);
		}else{
			$message = "Error";
			$this->response($message, REST_Controller::HTTP_BAD_REQUEST);
		};
	}
}