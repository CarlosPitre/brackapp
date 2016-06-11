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

	public function profesionalesByServicio_get($idServicio)
	{
		$profesionales = $this->model_profesional->getProfesionalesByServicio($idServicio); 

		/*for ($i=0; $i < count($profesionales); $i++) { 
			array_push($profesionales[$i], "status" => FALSE)
		}*/

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