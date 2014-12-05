<?php
$template = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html;' . get_option('blog_charset') . '" />
	</head>
	<body style="margin: 0px; background-color: #F4F3F4; font-family: Helvetica, Arial, sans-serif; font-size:12px;" text="#444444" bgcolor="#F4F3F4" link="#21759B" alink="#21759B" vlink="#21759B" marginheight="0" topmargin="0" marginwidth="0" leftmargin="0">
		<table cellpadding="0" cellspacing="0" width="100%" bgcolor="#F4F3F4" border="0">
			<tr>
				<td style="padding:15px;">
					<center>
						<table width="550" cellpadding="0" bgcolor="#ffffff" cellspacing="0" align="center">
							<tr>
								<td align="left">
									<div style="border:solid 1px #d9d9d9;">
										<table id="header" width="100%" border="0" cellpadding="0" bgcolor="#ffffff" cellspacing="0" style="line-height:1.6;font-size:12px;font-family: Helvetica, Arial, sans-serif;border:solid 1px #FFFFFF;color:#444;">
											<tr>
												<td colspan="2" background="' . admin_url('images/white-grad-active.png') . '" height="30" style="color:#ffffff;" valign="bottom">.</td>
											</tr>
											<tr>
												<td style="line-height:32px;padding-left:30px;" valign="baseline"><span style="font-size:32px;"><a href="%blog_url%" style="text-decoration:none;" target="_blank">%blog_name%</a></span></td>
												<td style="padding-right:30px;" align="right" valign="baseline"><span style="font-size:14px;color:#777777">%blog_description%</span></td>
											</tr>
										</table>
										<table id="content" width="490" border="0" cellpadding="0" bgcolor="#ffffff" cellspacing="0" style="margin-top:15px;margin-right:30px; margin-left:30px;color:#444;line-height:1.6;font-size:12px;font-family: Arial, sans-serif;color: #444;">
											<tr>
												<td colspan="2" style="border-top: solid 1px #d9d9d9">
													<div style="padding:15px 0;">
														%content%
													</div>
												</td>
											</tr>
										</table>
										<table id="footer" width="490" border="0" cellpadding="0" bgcolor="#ffffff" cellspacing="0" style="line-height:1.5;font-size:12px;font-family: Arial, sans-serif;margin-right:30px;margin-left:30px;">
											<tr style="font-size:11px;color:#999999;">
												<td style="border-top: solid 1px #d9d9d9;" colspan="2">
													<div style="padding-top:15px; padding-bottom:1px;"><img height="13" width="13" style="vertical-align: middle;" src="' . admin_url('images/date-button.gif') . '" alt="' . esc_attr__('Date', 'wp-better-emails') . '"  /> ' . esc_attr__('Email sent', 'wp-better-emails') . ' %date% @ %time%</div>
													<div><img height="12" width="12" style="vertical-align: middle;" src="' . admin_url('images/comment-grey-bubble.png') . '" alt="' . esc_attr__('Contact', 'wp-better-emails') . '"  /> ' . __('For any requests, please contact', 'wp-better-emails') . ' <a href="mailto:%admin_email%">%admin_email%</a></div>
												</td>
											</tr>
                                            <tr>
												<td colspan="2" style="color:#ffffff;" height="15">.</td>
                                            </tr>
										</table>
									</div>
								</td>
							</tr>
						</table>
					</center>
				</td>
			</tr>
		</table>
	</body>
</html>';
?>
