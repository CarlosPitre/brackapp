<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Model_solicitudes extends CI_Model{

  public function __construct()
  {
    parent::__construct();

  }

  	public function getSolicitudes($id = null)
	{
		if ($id != null) {
			$query=$this->db
				->select('ss.*,s.descripcion as servicio,t.descripcion as producto,c.nombres as cliente')
				->from('servicio s')
				->join('solicitud ss', 's.id = ss.idServicio', 'inner')
				->join('producto t', ' t.id = ss.idProducto', 'inner')
				->join('cliente c', ' c.id = ss.idCliente', 'inner')
				->where('ss.idProfesional', $id)
				->get();
		}
		return $query->result();
	}

  public function save($datos = array())
  {
    $this->db->insert('solicitud', $datos);
    return true;
  }

}
