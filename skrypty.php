<?php

class GetCMD
{
	public function __construct(string $computerName)
	{
      $this -> computerName = $computerName;
  	} 
	function getCMDInfo () 
	{
		$output = shell_exec("net user {$this -> computerName}"); // add /DOMAIN if you serch DOMAIN USER 
		$output = mb_convert_encoding($output, "UTF-8");
		echo "<pre> {$output} </pre>";
	}
}
$computerName = $_GET['computerName'];
$getCMD = new GetCMD ($computerName);
$getCMD -> getCMDInfo ($computerName);



