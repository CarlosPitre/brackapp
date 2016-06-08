<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Model_profesional extends CI_Model {

	public function __construct()
	{
		parent::__construct();	
	}

	public function getProfesionalesByServicio($idServicio)
	{
		$query = $this->db->select('p.*, c.*, m.nombre as municipio')
							->from('profesional p')
							->join('cliente c', ' p.idCliente = c.id', 'inner')
							->join('profesionalServicio ps', 'ps.idProfesional = p.id','inner')
							->join('servicio s', 's.id = ps.idServicio', 'inner')
							->join('municipio m', 'm.id = p.idMunicipio', 'inner')
							->where('s.id', $idServicio)
							->get();
		return $query->result();
	}

	public function getprofesional($id)
	{
		$query=$this->db
					->select('*')
					->from("profesional")
					->where("id",$id)
					->get();
		return $query->row();
	}

}

/* End of file model_profesional.php */
/* Location: ./application/models/model_profesional.php */