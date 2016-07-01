<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Model_productos extends CI_Model {

	public function __construct()
	{
		parent::__construct();
	}

	public function getProductos($id = null)
	{
		if ($id == null) {
			$query=$this->db
				->select('s.*, ps.porcentaje')
				->from('producto s')
				->join('profesionalproducto ps', 'ps.idProducto = s.id', 'inner')
				->get();
		}
		return $query->result();
	}

	public function save($datos = array())
	{
		$this->db->insert('producto', $datos);
		return $this->db->insert_id();
	}

	public function saveProfesional($datos = array())
	{
		$this->db->insert('profesionalservicio', $datos);
		return true;
	}

	public function update($datos = array(), $id)
	{
		$this->db->where('id', $id);
		$this->db->update('productos', $datos);
		return true;
	}

   public function delete($idServicio,$idProfesional)
   {
   		$this->db->where('idServicio', $idServicio);
   		$this->db->where('idProfesional', $idProfesional);
   		$this->db->delete('profesionalservicio');
   		return true;
   }
}

