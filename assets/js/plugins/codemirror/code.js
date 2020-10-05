import CodeMirror from "codemirror/lib/codemirror";

import "codemirror/addon/fold/xml-fold";
import "codemirror/addon/edit/matchtags";
import "codemirror/addon/edit/matchbrackets";
import "codemirror/addon/selection/active-line";

import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import "codemirror/mode/htmlmixed/htmlmixed";

window.addEventListener("load", () => {
  const tinymce = parent.tinymce;
  editor = tinymce.activeEditor;
  const html = editor.getContent({
    source_view: true,
  });

  codeMirrorInstance = CodeMirror(document.body, {
    indentOnInit: true,
    lineNumbers: true,
    styleActiveLine: true,
    matchBrackets: true,
    matchTags: {
      bothTags: true,
    },
    theme: "monokai",
    mode: "htmlmixed",
    value: html,
  });

  const last = codeMirrorInstance.lineCount();
  codeMirrorInstance.operation(() => {
    for (let i = 0; i < last; ++i) {
      codeMirrorInstance.indentLine(i);
    }
  });

});
