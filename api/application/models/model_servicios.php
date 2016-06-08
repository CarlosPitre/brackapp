<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Model_servicios extends CI_Model {

	public function __construct()
	{
		parent::__construct();
	}

	public function getServicios($id = null)
	{
		if ($id == null) {
			$query=$this->db
				->select('s.*,t.tipo')
				->from('servicio s')
				->join('tiposservicios t', ' s.idTipo = t.id', 'inner')				
				->get();
		}
		return $query->result();
	}

	public function save($datos = array())
	{
		$this->db->insert('servicio', $datos);
		return true;
	}

	public function update($datos = array(), $id)
	{
		$this->db->where('id', $id);
		$this->db->update('servicio', $datos);
		return true;
	}

}