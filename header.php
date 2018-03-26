
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title><?php wp_title( '|', true, 'right' ); ?></title>

	<!--[if IE]>
		<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->

	<link rel="icon" type="image/png" sizes="32x32" href="<?php bloginfo( 'template_url' ); ?>/favicon.png">
	
	<link rel="stylesheet" type="text/css" media="all" href="<?php bloginfo( 'stylesheet_url' ); ?>" />
		
    <link href="https://fonts.googleapis.com/css?family=Montserrat:300,500,800&amp;subset=latin-ext" rel="stylesheet">
    <script defer src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"></script>

    <link rel="stylesheet" href="css/bootstrap.css">
    <link rel="stylesheet" type="text/css" href="css/style.css">

	<?php
		wp_head();
	?>
 
  
</head>
<body>
    





<!-- ####### Header ####### -->
<header class="et-header">
        <div class="container px-xl-0">
            <nav class="navbar navbar-expand-lg navbar-dark et-header">
                
                <!-- Logo -->
                <a class="navbar-brand" href="#"><img src="img/et_logo.png" alt="Logo"></a>

                <!-- Hamburger -->
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainMenu" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <!-- Main menu -->
                <div class="collapse navbar-collapse" id="mainMenu">
                  
                    <ul class="navbar-nav mr-auto text-uppercase et-menu">
                       
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Newsy</a>                 
                            <div class="dropdown-menu et-menu-dropdown" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#">Newsy</a>
                                <a class="dropdown-item" href="#">Artykuły</a>
                                <a class="dropdown-item" href="#">Wywiady</a>
                                <a class="dropdown-item" href="#">Felietony</a>
                            </div>
                        </li>
                        
                        <li class="nav-item">
                            <a class="nav-link" href="#">Memy</a>
                        </li>
                        
                        <li class="nav-item">
                            <a class="nav-link" href="#">Video</a>
                        </li>
                        
                    </ul>
                    
                </div>
                 
                <!-- Login -->  
                <a class="text-uppercase et-login" href="#"><i class="far fa-user mr-3 et-login-icon"></i>Zaloguj się</a>
                   
                <!-- Social -->
                <div class="et-social">
				    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="far fa-envelope"></i></a>
                </div>
                
                <!-- Search -->   
                <form class="form-inline et-search">
                    <input class="form-control" type="search" placeholder="Szukaj" aria-label="Search">
                    <button class="btn" type="submit"><i class="fas fa-search"></i></button>
                </form>
                    
            </nav>
        </div>
    </header>
    <!-- ####### End of Header ####### -->



