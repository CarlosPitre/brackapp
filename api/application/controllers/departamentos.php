<?php
defined('BASEPATH') OR exit('No direct script access allowed');

require APPPATH . '/libraries/REST_Controller.php';

class Departamentos extends REST_Controller {

	public function __construct()
	{
		parent::__construct();
		$this->load->model('Model_departamento');
	}


    public function departamento_get($id = null)
	{
		if ($id == null) {
			$Departamentos = $this->model_departamento->getDepartamentos();
		}
		if ($Departamentos) {
			$this->response($Departamentos, REST_Controller::HTTP_OK);
		}else{
	        $this->response([
       			'status' => FALSE,
        		'message' => 'No users were found'
            ], REST_Controller::HTTP_NOT_FOUND);
		};
	}
}
