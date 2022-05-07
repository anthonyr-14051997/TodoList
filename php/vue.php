<?php
$bdd = new PDO('mysql:host=localhost;dbname=bdd_todolist', 'phpmyadmin', 'azz0Lan12');
$recupProd_not_complete = $bdd->query('SELECT * FROM task WHERE task_etat = 1');

$tab = [];

function while_not_complete($recupProd_not_complete){
    while ($respo = $recupProd_not_complete->fetch()) {
        $tab[] .= $respo['task_name'];
    }
    for ($i=0; $i < count($tab); $i++) { 
        echo $tab[$i] . " | ";
    }
}

echo while_not_complete($recupProd_not_complete);
?>
