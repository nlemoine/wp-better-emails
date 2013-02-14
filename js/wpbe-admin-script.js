jQuery(document).ready(function($){

	// Send email preview
	$('#wpbe_send_preview').click(function(e) {
		e.preventDefault();
		var email = $('#wpbe_email_preview_field').val(), message = $('#wpbe_preview_message'), loading = $('#wpbe_ajax_loading');
		$.ajax({
			type: 'post',
			url: wpbe_ajax_vars.url,
			data: {
				action: wpbe_ajax_vars.action,
				preview_email: email,
				_ajax_nonce: wpbe_ajax_vars.nonce
			},
			beforeSend: function() {
				loading.css('visibility', 'visible');
			},
			complete: function() {
				loading.css('visibility', 'hidden');
			},
			success: function(data) {
				message.append(data);
			}
		});
	});
	
	// Trigger help
	$('.wpbe_help').bind('click', function(e){
		e.preventDefault();
		$('a#contextual-help-link').trigger('click');
	});
    
	// Thickbox preview
	$('#wpbe_preview_template').live('click', function(e) {
		e.preventDefault();
		var preview_iframe = $('#TB_iframeContent');
		if( preview_iframe.length ) {
			var template;
			if (typeof(tinyMCE) != 'undefined') {
				if( tinyMCE.activeEditor && !tinyMCE.activeEditor.isHidden() )
					template = tinyMCE.activeEditor.getContent();
				else
					template = $('.wpbe_template').val();
			}
			preview_iframe = preview_iframe[preview_iframe.length - 1].contentWindow || frame[preview_iframe.length - 1];
			preview_iframe.document.open();
			preview_iframe.document.write( template );
			preview_iframe.document.close();
		}
	});

});
