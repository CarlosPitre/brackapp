<?php
defined('BASEPATH') OR exit('No direct script access allowed');

require APPPATH . '/libraries/REST_Controller.php';

class Sectores extends REST_Controller {

	public function __construct()
	{
		parent::__construct();
		$this->load->model('model_sector');
	}

	public function sectores_get($id = null)
	{
		if ($id == null) {
			$sectores = $this->model_sector->getSectores();
		}
		if ($sectores) {
			$this->response($sectores, REST_Controller::HTTP_OK);
		}else{
	        $this->response([
       			'status' => FALSE,
        		'message' => 'No users were found'
            ], REST_Controller::HTTP_NOT_FOUND); 
		};
	}

}

/* End of file sectores.php */
/* Location: ./application/controllers/sectores.php */