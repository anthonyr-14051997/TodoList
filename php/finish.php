<?php

$bdd = new PDO('mysql:host=localhost;dbname=bdd_todolist', 'phpmyadmin', 'azz0Lan12');
$recupProd = $bdd->query('SELECT * FROM task');
$data = $_POST['element'];

$recupElem = $bdd->prepare('SELECT task_etat FROM task WHERE task_name = ?');
$recupElem->execute(array($data));
$val = $recupElem->fetch();

$finish = 1;
$load = 2;

if ($val['task_etat'] == 2) {
    $updateprod = $bdd->prepare('UPDATE task SET task_etat = ? WHERE task_name = ?');
    $updateprod->execute(array($finish, $data));
    echo json_encode($finish);
} else {
    $updateprod = $bdd->prepare('UPDATE task SET task_etat = ? WHERE task_name = ?');
    $updateprod->execute(array($load, $data));
    echo json_encode($load);
}

?>
