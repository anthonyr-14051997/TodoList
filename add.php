<?php      
                    
$bdd = new PDO('mysql:host=localhost;dbname=bdd_todolist', 'phpmyadmin', 'azz0Lan12'); 

if (isset($_POST['task_name_value'])) {
    $name = $_POST['task_name_value'];
}

$etat = 1;

$insert = $bdd->prepare('INSERT INTO task (task_name, task_etat) VALUES (?, ?)');
$insert->execute(array($name, $etat));

?>
