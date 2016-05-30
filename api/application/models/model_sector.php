<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Model_sector extends CI_Model {

	public function __construct()
	{
		parent::__construct();
	}

	public function getSectores($id = null)
	{
		if ($id == null) {
			$query=$this->db
				->select("*")
				->from("sector")				
				->get();
		}
		return $query->result();
	}

}

/* End of file model_sector.php */
/* Location: ./application/models/model_sector.php */