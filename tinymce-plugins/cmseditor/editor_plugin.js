
(function() {
	tinymce.PluginManager.requireLangPack('cmseditor');
	tinymce.create('tinymce.plugins.cmseditor', {
		init : function(ed, url) {
			var t = this;
			t.editor = ed;
			
			// load JS
			tinymce.DOM.add(tinymce.DOM.select('head'), 'script', {src: url + '/js/codemirror-compressed.js'});
			//tinymce.DOM.add(tinymce.DOM.select('head'), 'script', {src: url + '/js/lib/codemirror.js'});
			//tinymce.DOM.add(tinymce.DOM.select('head'), 'script', {src: url + '/js/mode/xml/xml.js'});
			//tinymce.DOM.add(tinymce.DOM.select('head'), 'script', {src: url + '/js/mode/css/css.js'});
			//tinymce.DOM.add(tinymce.DOM.select('head'), 'script', {src: url + '/js/mode/javascript/javascript.js'});
			//tinymce.DOM.add(tinymce.DOM.select('head'), 'script', {src: url + '/js/mode/htmlmixed/htmlmixed.js'});

			// load CSS
			tinymce.DOM.loadCSS(url + '/js/lib/codemirror.css');
			tinymce.DOM.loadCSS(url + '/js/theme/default.css');
			
			ed.addCommand('cmseditor', function() {
				t.initEditor();
			}, t );
			
			ed.addButton('cmseditor', {
				title : 'CodeMirror Source Editor',
				cmd : 'cmseditor',
				image : url + '/img/html.gif'
			});
		},
		initEditor : function(){
			var t = this, ed = t.editor, id = ed.getElement().id, cm = document.getElementById(id);
			
			ed.hide();
			
			t.cmEditor = CodeMirror.fromTextArea( cm, {
				matchBrackets: true,
				lineNumbers : true,
				mode : 'text/html'
			});
			t.indentAll();
			t.cmEditor.refresh();
			var close_btn = t.initToolBar();
			close_btn.onclick = function() {
				t.closeEditor(t);
			};
		},
		initToolBar: function() {
			var t = this;
			t.cmWrapper = t.cmEditor.getWrapperElement();
			t.cmWrapper.style.width = '100%';
			
			t.cmWrapper.cmToolBar = document.createElement("div");
			t.cmWrapper.cmToolBar.style.width = '100%';
			t.cmWrapper.cmToolBar.className = 'CodeMirror-ToolBar';
			t.cmWrapper.parentNode.insertBefore(t.cmWrapper.cmToolBar, t.cmWrapper);
			return tinymce.DOM.add(t.cmWrapper.cmToolBar, 'input', { type: 'button', value: 'x', 'class': 'CodeMirror-ToolBar-close' });
		},
		closeEditor: function(t) {
			var ed = t.editor;
			ed.show();
			ed.setContent(t.cmEditor.getValue());
			t.cmWrapper.parentNode.removeChild(t.cmWrapper.cmToolBar);
			t.cmWrapper.parentNode.removeChild(t.cmWrapper);
			t.cmEditor = null;
		},
		indentAll: function() {
			var lineCount = this.cmEditor.lineCount();
			for(var line = 0; line < lineCount; line++) {
				this.cmEditor.indentLine(line);
			}
		},
		getInfo : function() {
			return {
				longname : 'CodeMirror Source Editor',
				author : 'Nicolas Lemoine',
				authorurl : 'http://wordpress.org/extend/plugins/wp-better-emails/',
				infourl : 'http://wordpress.org/extend/plugins/wp-better-emails/',
				version : '0.1'
			};
		}
	});
	tinymce.PluginManager.add('cmseditor', tinymce.plugins.cmseditor);
})();