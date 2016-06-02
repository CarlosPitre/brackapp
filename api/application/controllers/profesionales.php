<?php
defined('BASEPATH') OR exit('No direct script access allowed');

require APPPATH . '/libraries/REST_Controller.php';

class Profesionales extends REST_Controller {

	public function __construct()
	{
		parent::__construct();
		$this->load->model('model_profesional');
	}

	public function profesionales_get()
	{
		
	}

	public function profesionalesByServicio_get($idServicio)
	{
		$profesionales = $this->model_profesional->getProfesionalesByServicio($idServicio);
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

}

/* End of file profesionales.php */
/* Location: ./application/controllers/profesionales.php */