<?php
/**
 * Theme functions and definitions
*/


/* theme menu */
add_action( 'after_setup_theme', 'theme_setup' );
if ( ! function_exists( 'theme_setup' ) ):
function theme_setup() {
	add_editor_style();
	add_theme_support( 'post-thumbnails' );
	register_nav_menus( array(
		'primary' => __( 'Primary Navigation', 'twentyten' ),
		'secondary' => __( 'Secondary Navigation', 'twentyten' ),
	) );
}
endif;




/* styles & scripts */
function et_enqueue()
{
	wp_enqueue_style('font-awesome', get_bloginfo('template_url') . '/css/bootstrap.min.css');
	wp_enqueue_style('font-awesome', get_bloginfo('template_url') . '/css/bootstrap.min.css'); 
	wp_localize_script( 'scripts_js', 'myAjax', array( 'ajaxurl' => admin_url( 'admin-ajax.php' )));  
}
add_action('wp_enqueue_scripts','et_enqueue');


