<?php
defined('BASEPATH') OR exit('No direct script access allowed');

require APPPATH . '/libraries/REST_Controller.php';

class Servicios extends REST_Controller {

	public function __construct()
	{
		parent::__construct();
		$this->load->model('model_servicio');	
	}

	public function servicios_get($id = null)
	{
		if ($id == null) {
			$servicio = $this->model_servicio->getServicio();
		}else{
			$servicio = $this->model_servicio->getServicio($id);
		}
		if ($servicio) {
			$this->response($servicio, REST_Controller::HTTP_OK);
		}else{
	        $this->response([
       			'status' => FALSE,
        		'message' => 'No users were found'
            ], REST_Controller::HTTP_NOT_FOUND); 
		};
	}

}

/* End of file servicios.php */
/* Location: ./application/controllers/servicios.php */