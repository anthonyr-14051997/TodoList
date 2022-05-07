<?php

$bdd = new PDO('mysql:host=localhost;dbname=bdd_todolist', 'phpmyadmin', 'azz0Lan12');
$recupProd = $bdd->query('SELECT * FROM task');
$data = $_POST['task_name_value'];

if ($data != null) {

    $etat = 2;
    $name = $data;

    $insert = $bdd->prepare('INSERT INTO task (task_name, task_etat) VALUES (?, ?)');
    $insert->execute(array($name, $etat));

    while ($val = $recupProd->fetch())
    {
        ?>

        <div class="box_task box">
            <div class="circle circle_all"><img src="./img/complete.png" alt="" class="tchek"></div>
            <p class="box_task_text"><?= $val['task_name'] ?></p>
        </div>

        <?php

    }

    ?>

    <div class="box_task box">
        <div class="circle circle_all"><img src="./img/complete.png" alt="" class="tchek"></div>
        <p class="box_task_text"><?= $name ?></p>
    </div>

    <?php

} else {
    while ($val = $recupProd->fetch())
    {
        ?>

        <div class="box_task box">
            <div class="circle circle_all"><img src="./img/complete.png" alt="" class="tchek"></div>
            <p class="box_task_text"><?= $val['task_name'] ?></p>
        </div>

        <?php

    }
}

?>

<!-- test -->
