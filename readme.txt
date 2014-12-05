=== WP Better Emails ===
Donate link: https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=7Q49VJQNRCQ8E&lc=FR&item_name=ArtyShow&item_number=wp%2dbetter%2demails&currency_code=EUR&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted
Tags: email, emails, html emails, templates, notification, wp_mail, wpmu, multisite
Requires at least: 2.8
Tested up to: 4.0
Stable tag: 0.2.6.6

Adds a customizable good looking HTML template to all WP default text/plain emails and lets you set
 a custom sender name and email address.

== Description ==

All emails from Wordpress (lost password, notifications, etc.) are sent by default in text/plain format. WP Better
Emails wraps them with a much better looking customizable **HTML email template** and lets you also set your own **sender name** and **email address**.

* WP Better Emails comes with a default simple and clean template that has been tested on various and popular email clients
 like Gmail, Yahoo Mail, Hotmail/Live, AOL, Outlook, Apple Mail and many more. This to ensure your emails will always display
nicely in your recipient mailbox. But you can of course design your own.
* WP Better Emails lets you send sample emails to test and preview your own custom HTML email template.
* Watch your HTML email template during editing with the live preview.
* Fancy HTML editor with CodeMirror syntax highlighting.
* All emails sent by this plugin are sent as 'multipart' so that email clients that don't support HTML can read them.
* Include some dynamic tags in your template such as your blog URL, home URL, blog name, blog description, admin email or date and time. They will all be
replaced when sending the email.
* Add your own tags with Wordpress filters (see [FAQ](http://wordpress.org/extend/plugins/wp-better-emails/faq/) for usage).
* The default template is included as an HTML file in the plugin folder, feel free to edit it with your favorite editor.
* Clean uninstall process, doesn't leave some useless data in your database when deleted, you can easily give it a try !

= Example usages : =

* Add some ads/sponsored links to every email sent with wordpress
* Include some banners to promote a special event or feature of your website
* Brand your emails to your website or client website

= Internationalization =

WP Better Emails is currently available in :

* English
* French
* German - [Robert Tremmel](http://roberttremmel.de/ "Robert Tremmel")
* Hebrew - [Avi Ben-Avraham](mailto:avi@nrich.co.il "Avi Ben-Avraham")
* Turkish - [Ãœnsal Korkmaz](http://www.unsalkorkmaz.com/ "Ãœnsal Korkmaz")
* Italian - [Fabio Lelli](http://www.synaestesia.com/ "Fabio Lelli")
* Arabic - [Yaser Maadan](http://www.englize.com/ "Yaser Maadan")
* Simplified Chinese - [Will Yuan](http://yslove.net/ "Will Yuan")
* Brazilian portuguese - [Johnny Bauer](mailto:thankamikase@yahoo.com.br "Johnny Bauer")
* Russian - Vsevolod Bauer
* Farsi
* Indonesian
* Spanish - [Kaled Kelevra](http://howly-mowly.com/ "Kaled Kelevra")
* Swedish - [Andréas Lundgren](http://adevade.com/ "Andréas Lundgren")
* Dutch - [Paul Romijn](http://www.bluecloudcompany.com/)

I'm looking for translators to extend to other languages. If you have translated the plugin in your language or want to,
please let me know : wpbetteremails [ at ] helloni.co

= Contributing =

WP Better Emails is also available on [GitHub](https://github.com/nlemoine/WP-Better-Emails).

= Credits =

[CodeMirror](http://codemirror.net/ "CodeMirror") library

== Installation ==

1. Extract and upload the `wp-better-emails` folder to the `/wp-content/plugins/` directory
2. Activate the plugin through the 'Plugins' menu in the WordPress admin panel
3. (Optional) Set a sender email and name, if none, wordpress defaults will be used : 'wordpress@yourdomain.com' and 'Your Blog Title'
4. (Optional) Edit your own email template. See the screenshot tab to have a look at the default template
5. Every email going out from your Wordpress Blog (notifications, lost password, etc.) looks better now !

== Upgrade Notice ==

If you're using the default template provided with WP Better Emails, you should delete the plugin and reinstall it to make sure you have the lastest template improvements.

If you have customized the HTML template and want to keep it, just update.

= Manual update =

1. Delete the plugin `wp-better-emails` folder under the `/wp-content/plugins/` directory
2. Upload the last version and activate it

= Automatic update =

Just use the Wordpress automatic plugin update system

== Frequently Asked Questions ==

= What if recipient can't read HTML emails ? =

WP Better Emails sends all emails in both formats ('multipart', i.e. HTML and plain text) so that emails can be displayed in every email client.

= Why are the emails still sent in plain text format ? =

Be sure to include the **%content%** tag in your template. WP Better Emails wrap the content with the template, if no tag
is found, sending HTML emails is automatically desactivated.

= How does WP Better Emails interact with others plugins ? =

WP Better Emails wraps every "text/plain" email sent with the Wordpress function `wp_mail()`.

= I totally messed up with the template, how can I get the original one ? =

Just delete and reinstall the plugin from the admin panel.

= I'm using SB Welcome Editor and emails have no template =

WP Better Emails only wraps "text/plain" emails. By default, SB Welcome Editor sends email as HTML, with no style but as "text/html". Be sure to set the SB Welcome Editor format option to "text".

= How can I add my own tags ? =

You can filter the tags array and add your replacements. Let's say you want to randomly display some sponsored links somewhere in your email template:

	add_filter('wpbe_tags', 'add_my_tags');
	function add_my_tags( $tags ) {
		$ads = array('<a href="#">Sponsored link 1</a>', '<a href="#">Sponsored link 2</a>', '<a href="#">Sponsored link 3</a>');
		$tags['sponsored_link'] = $ads[array_rand($ads, 1)];
		return $tags;
	}

The key of the array `sponsored_link` will be a new tag (`%sponsored_link%`) you can include. It will be randomly replaced with one of your sponsored links.

The example above is taking sponsored links as an additinonal content but you can imagine anything like including lastest posts, a quote of the day or whatever.
You can place this function in your functions.php theme file or in a plugin.

== Screenshots ==

1. The default template provided with WP Better Emails. Tested on many email clients like Gmail, Yahoo!, Live/Hotmail, etc.
2. WP Better Emails settings screen with the default WP TinyMCE editor.
3. Editor in source mode using CodeMirror syntax highlighting.
4. Live preview your template in a thickbox.
5. Help tab with information about available tags.

== Changelog ==

= 0.2.6.6 =

* New translation: Dutch

= 0.2.6.5 =

* Fixed editor (WordPress 3.9 compatibility issue)
* New translation: Swedish

= 0.2.6.4 =

* Fixed live preview feature

= 0.2.6.3 =

* New translation: Spanish

= 0.2.6.2 =

* New translation: Indonesian
* Fixed translation: Arabic, Farsi

= 0.2.6.1 =

* New translation: Farsi
* New translation: Russian
* Updated transaltion: German

= 0.2.6 =

* Fixed options not recording on activation

= 0.2.5 =

* Added plain text template support
* Fixed phpmailer_init action
* Brazilian portuguese translation added

= 0.2.4.1 =

 * Lower HTML filter priority to make the plugin more compatible with other plugins (Woocommerce, etc.)
 * Simplified Chinese, Italian, Arabic translations added

= 0.2.4 =

 * Fixed TinyMCE role issue

= 0.2.3 =

 * Fixed 3.3 beta compatilibity
 * Fixed 3.3 help panel trigger

= 0.2.2 =

 * Added 3.3 compatibility
 * Turkish translation

= 0.2.1 =

 * Editor role bug fix
 * Template centering fix

= 0.2 =
 * WP TinyMCE editor support
 * HTML editor with CodeMirror as a TinyMCE plugin
 * Live preview (> WP 3.1)
 * Include filter to add your own tag replacements
 * Help moved to contextual help
 * Translations for german, hebrew
 * Improved template email clients support

= 0.1.3 =
 * Sender email and name are now optional
 * Fixes replacing URLs of plain text content to handle https protocol

= 0.1.2 =
 * Added 3.1 compatibility
 * Dutch translation

= 0.1.1 =
 * French translation added

= 0.1 =
 * WP Better Emails first release
