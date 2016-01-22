<div class="wrap">
	<h2><?php _e('Email settings', 'wp-better-emails'); ?></h2>

	<form method="post" action="options.php" id="wpbe_options_form">
		<?php settings_fields('wpbe_full_options'); ?>

		<!-- Sender options -->
		<h3 class="wpbe_title"><?php _e('Sender Options', 'wp-better-emails'); ?></h3>
		<p style="margin-bottom: 0;"><?php _e('Set your own sender name and email address. Default WordPress values will be used if empty.', 'wp-better-emails'); ?></p>
		<table class="form-table">
			<tr valign="top">
				<th scope="row"><label for="wpbe_from_name"><?php _e('Name', 'wp-better-emails'); ?></label></th>
				<td><input type="text" id="wpbe_from_name" class="regular-text" name="wpbe_options[from_name]" value="<?php esc_attr_e($this->options['from_name']); ?>" /></td>
			</tr>
			<tr valign="top">
				<th scope="row"><label for="wpbe_from_email"><?php _e('Email address', 'wp-better-emails'); ?></label></th>
				<td><input type="text" id="wpbe_from_email" class="regular-text" name="wpbe_options[from_email]" value="<?php echo esc_attr_e($this->options['from_email']); ?>" /></td>
			</tr>
		</table>

		<!-- Template -->
		<h3 class="wpbe_title"><?php _e('HTML Template', 'wp-better-emails'); ?>
		<?php if( version_compare($wp_version, '3.1', '>') ): ?>
			<a class="button" title="<?php esc_attr_e('Live template preview', 'wp-better-emails'); ?>" id="wpbe_preview_template" href="<?php echo plugins_url('preview.html?keepThis=true&TB_iframe=true&height=400&width=700', __FILE__); ?>"><?php _e('Live preview', 'wp-better-emails'); ?></a>
		<?php endif; ?>
		</h3>
		<p><?php _e('Edit the HTML template if you want to customize it. You might have a look at the <a href="#" class="wpbe_help">help tab</a> for further information.', 'wp-better-emails'); ?></p>
		<div id="wpbe_template_container">
			<?php $this->template_editor() ?>
		</div>

		<!-- Plain-text template -->
		<h3 class="wpbe_title"><?php _e('Plain-text Template', 'wp-better-emails'); ?></h3>
		<p><?php _e('Edit the plain-text template if you want to customize it. You might have a look at the <a href="#" class="wpbe_help">help tab</a> for further information.', 'wp-better-emails'); ?></p>
		<div id="wpbe_plaintext_template_container">
			<?php $this->plaintext_template_editor(); ?>
		</div>

		<!-- Preview -->
		<h3 class="wpbe_title"><?php _e('Preview', 'wp-better-emails'); ?></h3>
		<div id="wpbe_preview_message"></div>
		<table class="form-table">
			<tr valign="top">
				<th scope="row">
					<label for="wpbe_email_preview_field"><?php _e('Send an email preview to', 'wp-better-emails'); ?></label>
				</th>
				<td>
					<input type="text" id="wpbe_email_preview_field" name="wpbe_preview_email" class="regular-text" value="<?php esc_attr_e(get_option('admin_email')); ?>" />
					<a href="javascript:void(0);" class="button" id="wpbe_send_preview"><?php _e('Send', 'wp-better-emails'); ?></a><span id="wpbe_loading"></span>
					<img src="<?php echo admin_url('images/wpspin_light.gif'); ?>" id="wpbe_ajax_loading" style="visibility: hidden;" alt="Loading" />
					<br /><span class="description"><?php _e('You must save your template before sending an email preview.', 'wp-better-emails'); ?></span>
				</td>
			</tr>
		</table>
		<p class="submit">
			<input type="submit" class="button-primary" value="<?php _e('Save Changes', 'wp-better-emails') ?>" />
		</p>
	</form>
	<!-- Support -->
	<div id="wpbe_support">
		<h3><?php _e('Support & bug report', 'wp-better-emails'); ?></h3>
		<p><?php printf(__('If you have any idea to improve this plugin or any bug to report, please email me at : <a href="%1$s">%2$s</a>', 'wp-better-emails'), 'mailto:wpbetteremails@helloni.co?subject=[wp-better-emails]', 'wpbetteremails@helloni.co'); ?></p>
		<?php $donation_link = 'https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=7Q49VJQNRCQ8E&lc=FR&item_name=ArtyShow&item_number=wp%2dbetter%2demails&currency_code=EUR&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted'; ?>
		<p><?php printf(__('You like this plugin ? You use it in a business context ? Please, consider a <a href="%s" target="_blank" rel="external">donation</a>.', 'wp-better-emails'), $donation_link ); ?></p>
		<p><?php printf(__('You can still provide some support by <a href="%1$s" target="_blank">voting for it</a> and/or says that <a href="%2$s" target="_blank">it works</a> for your WordPress installation on the official WordPress plugins repository.', 'wp-better-emails'), 'http://wordpress.org/plugins/wp-better-emails/', 'http://wordpress.org/plugins/wp-better-emails/'); ?></p>
	</div>
</div>
