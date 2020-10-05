<p><?php _e('Some dynamic tags can be included in your email template :', 'wp-better-emails'); ?></p>
<ul>
    <li><?php _e('<strong>%content%</strong> : will be replaced with the message content.', 'wp-better-emails'); ?><br />
    <span class="description"> <?php _e('NOTE: The content tag is <strong>required</strong>, WP Better Emails will be automatically desactivated if no content tag is found.', 'wp-better-emails'); ?></span></li>
    <li><?php _e('<strong>%blog_url%</strong> : will be replaced with your blog URL.', 'wp-better-emails'); ?></li>
    <li><?php _e('<strong>%home_url%</strong> : will be replaced with your home URL.', 'wp-better-emails'); ?></li>
    <li><?php _e('<strong>%blog_name%</strong> : will be replaced with your blog name.', 'wp-better-emails'); ?></li>
    <li><?php _e('<strong>%blog_description%</strong> : will be replaced with your blog description.', 'wp-better-emails'); ?></li>
    <li><?php _e('<strong>%admin_email%</strong> : will be replaced with admin email.', 'wp-better-emails'); ?></li>
    <li><?php _e('<strong>%date%</strong> : will be replaced with current date', 'as formatted in <a href="options-general.php">general options</a>.', 'wp-better-emails'); ?></li>
    <li><?php _e('<strong>%time%</strong> : will be replaced with current time', 'as formatted in <a href="options-general.php">general options</a>.', 'wp-better-emails'); ?></li>
</ul>
