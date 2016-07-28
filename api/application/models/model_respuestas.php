<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Model_respuestas extends CI_Model {

 public function __construct()
	{
		parent::__construct();
	}

	public function getRespuestas($id = null)
	{
		if ($id == null) {
			$query=$this->db
				->select("*")
				->from("respuestas")				
				->get();
		}
		return $query->result();
	}
}

/* End of file model_respuestas.php */
/* Location: ./application/models/model_respuestas.php */