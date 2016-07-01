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
				->select('s.*, ps.*,m.descripcion as marca')
				->from('producto s')
				->join('profesionalproducto ps', 'ps.idProducto = s.id', 'inner')
				->join('marca m', 'ps.idMarca = m.id', 'inner')
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
		$this->db->insert('profesionalproducto', $datos);
		return true;
	}

   public function delete($idProducto,$idMarca,$idProfesional)
   {
   		$this->db->where('idProducto', $idProducto);
   		$this->db->where('idMarca', $idMarca);
   		$this->db->where('idProfesional', $idProfesional);
   		$this->db->delete('profesionalproducto');
   		return true;
   }
}

