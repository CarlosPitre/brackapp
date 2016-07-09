<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Model_solicitudes extends CI_Model{

  public function __construct()
  {
    parent::__construct();

  }

  public function save($datos = array())
  {
    $this->db->insert('solicitud', $datos);
    return true;
  }

}
