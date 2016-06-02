<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Model_profesional extends CI_Model {

	public function __construct()
	{
		parent::__construct();	
	}

	public function getProfesionalesByServicio($idServicio)
	{
		$query = $this->db->select('p.*, c.*')
							->from('profesional p')
							->join('cliente c', ' p.idCliente = c.id', 'inner')
							->join('profesionalServicio ps', 'ps.idProfesional = p.id','inner')
							->join('servicio s', 's.id = ps.idServicio', 'inner')
							->where('s.id', $idServicio)
							->get();
		return $query->result();
	}

}

/* End of file model_profesional.php */
/* Location: ./application/models/model_profesional.php */