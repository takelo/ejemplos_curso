    <?php include_once "includes/templates/header.php" ?>

  <main>


  <!-- <a href="tel:5555555555">LLAMAR</a> -->

  <section class="papa-video">
    <div class="contenedor-video">
      <video autoplay loop muted poster="img/bg-talleres.jpg">
        <source src="video/video.mp4" type="video/mp4">
          <source src="video/video.ogv" type="video/ogv">
      </video>
    </div><!-- contenedor video -->
    <div class="contenido-video">
      <div class="contenedor">
        <div class="programa-evento ">
          <h2>Lorem Ipsum</h2>
          <nav class="menu-programa">
              <a href="#talleres"><i class="fas fa-shuttle-van"></i>Empresa</a>
              <a href="#conferencia"><i class="fas fa-fighter-jet"></i>Tecnologia</a>
              <a href="#seminarios"><i class="fas fa-car"></i>Eficiencia</a>
          </nav>
          <div id="talleres" class="info-curso ocultar clearfix">
              <div class="detalle-evento clearfix">
                <h3>Lorem Ipsum</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sollicitudin et nisl et commodo. Vivamus scelerisque ante leo, vitae vulputate arcu iaculis ut.</p>
                <img src="./img/camiones.jpg" alt="camiones">
                <!-- <p><i class="fas fa-clock"></i>16:00 hrs</p>
                <p><i class="fas fa-calendar"></i>10 de Octubre</p>
                <p><i class="fas fa-user"></i>Juan Manuel Echeverria</p> -->
                <a href="#" class="button float-right">Ver mas</a>
              </div>
          </div><!-- talleres -->

        </div><!-- programa-evento -->
      </div><!-- contenedor -->
    </div><!-- contenedor -->
  </section><!-- programa -->

    <!-- mapa -->
    <section class="seccion pad-top-80 clearfix">
      <h2>Ubicacion</h2>
      <div class="mapa">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1293.1520443957133!2d2.6473606688107156!3d39.567471172263886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2ses!4v1479334018963" width="100%" height="350" frameborder="0" style="border:0" allowfullscreen></iframe>
      </div>
    </section><!-- fin seccion carrusel -->

    <!-- unidades -->
    <section class="invitados contenedor seccion">
      <h2>Nuestros unidades</h2>
      <ul class="lista-invitados clearfix">
        <li>
          <div class="invitado">
            <img src="img/1.jpg" alt="imagen invitado">
            <p>Logistica</p>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor tortor ante, nec elementum mauris suscipit eu. Sed tempus pulvinar quam, quis sodales ligula pharetra ac. Praesent ut augue lobortis, dictum tortor dignissim, sodales velit. Praesent fermentum consectetur augue vel feugiat. Curabitur dictum feugiat mattis.</p>
        </li>
        <li>
          <div class="invitado">
            <img src="img/2.jpg" alt="imagen invitado">
            <p>Calidad</p>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor tortor ante, nec elementum mauris suscipit eu. Sed tempus pulvinar quam, quis sodales ligula pharetra ac. Praesent ut augue lobortis, dictum tortor dignissim, sodales velit. Praesent fermentum consectetur augue vel feugiat. Curabitur dictum feugiat mattis.</p>
        </li>
        <li>
          <div class="invitado">
            <img src="img/3.jpg" alt="imagen invitado">
            <p>Compromiso</p>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor tortor ante, nec elementum mauris suscipit eu. Sed tempus pulvinar quam, quis sodales ligula pharetra ac. Praesent ut augue lobortis, dictum tortor dignissim, sodales velit. Praesent fermentum consectetur augue vel feugiat. Curabitur dictum feugiat mattis.</p>
        </li>
      </ul>
    </section><!--invitados-->
    <!-- formulario contacto -->
    <div class="contenedor caja">
        <h2>Contacto</h2>
        <form action="https://formspree.io/factorzero@gmail.com" method="POST" class="contact_form clearfix">
          <div class="campo clearfix" >
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" placeholder="Tu Nombre">
          </div>
          <div class="campo clearfix">
            <label for="mail">Mail:</label>
            <input type="email" id="mail" name="mail" placeholder="Tu mail">
          </div>
          <div class="campo">
            <label for="nombre">Mensaje:</label>
            <textarea name="mensaje"></textarea>
          </div>
          <div class="center">
            <input type="submit" value="Send" class="boton">
          </div>

        </form>
      </div>



</main>


    <?php include_once "includes/templates/footer.php" ?>
