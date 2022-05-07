
<?php

$bdd = new PDO('mysql:host=localhost;dbname=bdd_todolist', 'phpmyadmin', 'azz0Lan12');

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>
<body>
    <main>
        <section class="title">
            <img src="bg.jpg" alt="">
            <div class="bix">
                <h1>A Faire</h1>
            </div>
            <div class="box_add bax">
                <div class="circle_add circle_all"></div>
                <input class="box_text_add" type="text" placeholder="Ajouter une tâche" name="task_name_value" onKeyPress="if (event.keyCode == 13) start_create()">
            </div>
        </section>
        <section class="task">

            <?php 
                $recupProd = $bdd->query('SELECT * FROM task WHERE id = 1');
                $valeurs = $recupProd->fetch();
                
                while ($valeurs = $recupProd->fetch())
                {
                
            ?>
                    <div class="box_task box">
                        <div class="circle circle_all"><img src="complete.png" alt="" class="tchek"></div>
                        <p class="box_task_text"><?= $valeurs['task_name'] ?></p>
                    </div>

            <?php
                }
            ?>
            
            <div class="box_task box">
                <div class="circle circle_all"><img src="complete.png" alt="" class="tchek"></div>
                <p class="box_task_text">Faire des biscuits</p>
            </div>
            <div class="box_task box">
                <div class="circle circle_all"><img src="complete.png" alt="" class="tchek"></div>
                <p class="box_task_text">Trouver un stage</p>
            </div>
            <div class="box_task box">
                <div class="circle circle_all"><img src="complete.png" alt="" class="tchek"></div>
                <p class="box_task_text">Lire la doc Php</p>
            </div>
            <div class="box_task box">
                <div class="circle circle_all"><img src="complete.png" alt="" class="tchek"></div>
                <p class="box_task_text">Créer un README</p>
            </div>
            <div class="box_task box">
                <div class="circle circle_all"><img src="complete.png" alt="" class="tchek"></div>
                <p class="box_task_text">Arriver à l'heure</p>
            </div>
        </section>
        <div class="responsive">
            <div class="box_status bax shad"><p class="status_text">tâches restantes</p></div>
            <section class="menu">
                <div class="menu_text bax">
                    <p class="all">Toutes</p>
                    <p class="actually">En cours</p>
                    <p class="finish">Finies</p>
                </div>
            </section>
        </div>
    </main>
    <footer>
        <div class="collab"><p class="collab_text">2022 - Made with</p><img src="heart.svg" alt=""></div>
    </footer>
    <script src="script.js"></script>
</body>
</html>