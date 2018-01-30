<?php
  include "conn_sql.php";
  include "header.php";
  $pdo = ConnMySQL::makeConnect();
  date_default_timezone_set("PRC");
  $now = date('yyyy-mm-dd');
?>