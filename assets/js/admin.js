const $ = jQuery;

$(document).ready(() => {

	// Send email preview
	$('#wpbe_send_preview').on('click', this, (e) => {
		e.preventDefault();
		const email = $('#wpbe_email_preview_field').val();
		const message = $('#wpbe_preview_message');
		const loading = $('#wpbe_ajax_loading');
		$.ajax({
			type: 'post',
			url: ajaxurl,
			data: {
				action: wpbe_ajax_vars.action,
				preview_email: email,
				_ajax_nonce: wpbe_ajax_vars.nonce
			},
			beforeSend: () => {
				loading.css('visibility', 'visible');
			},
			complete: () => {
				loading.css('visibility', 'hidden');
			},
			success: data => {
				message.empty();
				message.append(data);
			}
		});
	});

	// Trigger help
	$('.wpbe_help').on('click', this, e => {
		e.preventDefault();
		$('#contextual-help-link').trigger('click');
	});

	// Thickbox preview
	$('#wpbe_preview_template').on('click', e => {
		e.preventDefault();

		const $this = $(e.target);
		const title = $this.attr('title');
		const href = $this.attr('href');

		// Open TB
		tb_show(title, href);
		const $previewIframe = $('#TB_iframeContent');

		if (!$previewIframe.length) {
			return;
		}

		let template;
		if (typeof tinyMCE != 'undefined') {
			if (tinyMCE.activeEditor && !tinyMCE.activeEditor.isHidden()) {
				template = tinyMCE.activeEditor.getContent();
			} else {
				template = $('.wpbe_template').val();
			}
		}

		$previewIframe = $previewIframe[$previewIframe.length - 1].contentWindow || frame[$previewIframe.length - 1];
		$previewIframe.document.open();
		$previewIframe.document.write(template);
		$previewIframe.document.close();
	});

});
