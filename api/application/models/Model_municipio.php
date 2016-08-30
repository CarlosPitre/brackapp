<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Model_municipio extends CI_Model {



	public function __construct()
	{
		parent::__construct();
	}

	public function getMunicipio($id = null)
	{

         if ($id == null) {
			$query=$this->db
				->select('*')
				->from('municipio')
				->get();
		}
		return $query->result();
		
    }
}