tinymce.PluginManager.add("codemirror", function(editor, url) {
  function showSourceEditor() {
    editor.focus();
    editor.selection.collapse(true);

    const defaults = {
      width: 800,
      height: 500,
      fullscreen: true,
    };

    const settings = {
      ...defaults,
    };

    const buttonsConfig = [
      {
        text: "Ok",
        subtype: "primary",
        onclick: function() {
          const doc = document.querySelectorAll(".mce-container-body>iframe")[0];
          doc.contentWindow.submit();
          win.close();
        },
      },
      {
        text: "Cancel",
        onclick: "close",
      },
    ];

    const config = {
      title: "HTML source code",
      url: url + "/source.html",
      width: settings.width,
      height: settings.width,
      resizable: true,
      maximizable: true,
      fullScreen: true,
      saveCursorPosition: false,
      buttons: buttonsConfig,
    };

    const win = editor.windowManager.open(config);

    win.fullscreen(true);
  }

  // Add a button to the button bar
  editor.addButton("code", {
    title: "Source code",
    icon: "code",
    onclick: showSourceEditor,
  });

  // Add a menu item to the tools menu
  editor.addMenuItem("code", {
    icon: "code",
    text: "Source code",
    context: "tools",
    onclick: showSourceEditor,
  });
});
