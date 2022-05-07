<?php

$bdd = new PDO('mysql:host=localhost;dbname=bdd_todolist', 'phpmyadmin', 'azz0Lan12');
$recupProd = $bdd->query('SELECT * FROM task INNER JOIN task_not_complete ON task.task_etat = task_not_complete.etat_not_complete');

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
