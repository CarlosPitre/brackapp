<?php
defined('BASEPATH') OR exit('No direct script access allowed');

require APPPATH . '/libraries/REST_Controller.php';

class Profesionales extends REST_Controller {

	public function __construct()
	{
		parent::__construct();
		$this->load->model('model_profesional');
	}

	public function profesionales_get($id = null)
	{
		if ($id != null) {
			$profesional = $this->model_profesional->getprofesional($id);
		}
		if ($profesional) {
			$this->response($profesional, REST_Controller::HTTP_OK);
		}else{
	        $this->response([
       			'status' => FALSE,
        		'message' => 'No users were found'
            ], REST_Controller::HTTP_NOT_FOUND); 
		};
	}

	/*

		Busqueda en todas las tablas de marca, sectores, servicios, profesionales y productos
		Recibo por json los parametros de busqueda, obtengo el campo tipo que es el que me va a 
		ayudar a saber en que tabla debo buscar por medio de un switch, retorno el profesional final.

	*/


	public function busquedaGeneralProfesionales_post()
	{

		$tipo = $this->post("tipo");

		switch ($tipo) {
			case 'Sector':
				$id = $this->post("idSector");
				$profesionales = $this->model_profesional->getProfesionalesBySector($id); 
				break;
			case 'Marca':
				$id = $this->post("idMarca");
				$profesionales = $this->model_profesional->getProfesionalesByMarca($id);				
				break;
			case 'Servicio':
				$id = $this->post("idServicio");
				$profesionales = $this->model_profesional->getProfesionalesByServicio($id);
				break;
			case 'Empresa':
				$id = $this->post("idProfesional");
				$profesionales = $this->model_profesional->getProfesionalesByProfesional($id);
				break;
			case 'Producto':
				$id = $this->post("idProducto");
				$profesionales = $this->model_profesional->getProfesionalesByProducto($id);
				break;			
			default:
				# code...
				break;
		} 

		for ($i=0; $i < count($profesionales); $i++) { 
			$profesionales[$i]->status = FALSE;
			$profesionales[$i]->button = "Ver Mas";
			$profesionales[$i]->mapa = FALSE;
		}

		if ($profesionales) {			
			$this->response([
       			'status' => 1,
        		'profesionales' => $profesionales
            ], REST_Controller::HTTP_OK); 
		}else{
	        $this->response([
       			'status' => 0,
        		'message' => 'No hay Empleados Con Ese Servicios'
            ], REST_Controller::HTTP_NOT_FOUND); 
		};
	}



		public function profesionales_put()
	{
		$datos = array(
			"razonSocial" => $this->put("razonSocial"),
			"identificacion"=>$this->put("identificacion"),
			"correo"=>$this->put("correo"),
			"telefono"=>$this->put("telefono"),
			"experiencia"=>$this->put("experiencia")
		);
		$guardar= $this->model_profesional->update($datos,$this->put("id"));
		if ($guardar) {
			$message = "Datos Guardados Correctamente";
			$this->response($message, REST_Controller::HTTP_CREATED);
		}else{
			$message = "Error";
			$this->response($message, REST_Controller::HTTP_BAD_REQUEST);
		};
	}


}

/* End of file profesionales.php */
/* Location: ./application/controllers/profesionales.php */