import { EditorState, EditorView, basicSetup } from "@codemirror/basic-setup";
import { javascript } from "@codemirror/lang-javascript";

let startState = EditorState.create({
  doc: "function hello() {\n  console.log('hello')\n}",
  extensions: [basicSetup, javascript()],
});

let view = new EditorView({
  state: startState,
  parent: document.querySelector("#editor"),
});
