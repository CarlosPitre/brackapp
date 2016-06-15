<?php
defined('BASEPATH') OR exit('No direct script access allowed');

require APPPATH . '/libraries/REST_Controller.php';

class Servicios extends REST_Controller {

	public function __construct()
	{
		parent::__construct();
		$this->load->model('model_servicios');
	}

	public function servicios_get($id = null)
	{
		if ($id == null) {
			$servicios = $this->model_servicios->getServicios();
		}
		if ($servicios) {
			$this->response($servicios, REST_Controller::HTTP_OK);
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
			"idTipo"=> $this->post("idTipo"),
			"estado" => "ACTIVO"
		);
		$guardar= $this->model_servicios->save($datos);
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
			"idTipo"=>$this->put("idTipo")
		);
		$guardar= $this->model_servicios->update($datos,$this->put("id"));
		if ($guardar) {
			$message = "Datos Guardados Correctamente";
			$this->response($message, REST_Controller::HTTP_CREATED);
		}else{
			$message = "Error";
			$this->response($message, REST_Controller::HTTP_BAD_REQUEST);
		};
	}

	public function servicios_delete($id)
	{
		$datos = array(
			"estado" => "Inactivo",
		);
		$guardar= $this->model_servicios->update($datos,$id);
		if ($guardar) {
			$message = "Datos eliminado Correctamente";
			$this->response($message, REST_Controller::HTTP_CREATED);
		}else{
			$message = "Error";
			$this->response($message, REST_Controller::HTTP_BAD_REQUEST);
		};
	}

	public function getJson_get()
	{
		$json = array();
		$profesionales = $this->model_servicios->getProfesionales();
		$sectores = $this->model_servicios->getSectores();
		$marcas = $this->model_servicios->getMarca();
		$servicios = $this->model_servicios->getServicio();
		$productos = $this->model_servicios->getProducto();

		$index = 0;
		for ($i=0; $i < count($sectores); $i++) { 
			$json[] = array(
				"id" => $index,
				"idSector" => $sectores[$i]->id,
				"descripcion" => $sectores[$i]->descripcion,
				"tipo" => "Sector"
			);
			$index = $index + 1;
		}

		for ($i=0; $i < count($marcas); $i++) { 
			$json[] = array(
				"id" => $index,
				"idMarca" => $marcas[$i]->id,
				"descripcion" => $marcas[$i]->descripcion,
				"tipo" => "Marca"
			);
			$index = $index + 1;
		}

		for ($i=0; $i < count($servicios); $i++) { 
			$json[] = array(
				"id" => $index,
				"idServicio" => $servicios[$i]->id,
				"descripcion" => $servicios[$i]->descripcion,
				"tipo" => "Servicio"
			);
			$index = $index + 1;
		}

		for ($i=0; $i < count($profesionales); $i++) { 
			$json[] = array(
				"id" => $index,
				"idProfesional" => $profesionales[$i]->id,
				"descripcion" => $profesionales[$i]->razonSocial,
				"tipo" => "Empresa"
			);
			$index = $index + 1;
		}

		for ($i=0; $i < count($productos); $i++) { 
			$json[] = array(
				"id" => $index,
				"idProducto" => $productos[$i]->id,
				"descripcion" => $productos[$i]->descripcion,
				"tipo" => "Producto"
			);
			$index = $index + 1;
		}
		
		$this->response($json, REST_Controller::HTTP_CREATED);
	}

}