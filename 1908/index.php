<?php include "header.php"; ?>
<?php include "dados.php"; ?>

<main>
    <h1>Séries em destaques</h1>
    <div class="grid">
        <?php
            $i = 0;
            shuffle($series);
            foreach ( $series as $serie ) {

                $i++;
                $id = $serie["id"];
                $nome = $serie["nome"];
                $imagem = $serie["imagem"];

                echo "<div class='coluna'>
               <img src='imagens/{$imagem}'>
               <p><strong>{$nome}</strong></p>
               <p>
                <a href='serie.php?id={$id}'>
                    Detalhes
               </p>
            
                </div>";
            }
        ?>
    </div>
</main>
<?php include "footer.php"; ?>  
