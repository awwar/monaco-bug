import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js';
import 'monaco-editor/esm/vs/editor/edcore.main.js';
import 'monaco-editor/esm/vs/language/html/monaco.contribution.js';
import 'monaco-editor/esm/vs/basic-languages/html/html.contribution.js';

import HtmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker';

let app = document.getElementById("app");

app.style.height = '100px'

self.MonacoEnvironment = {
    getWorker(a, label) {
        return new HtmlWorker();
    }
};

monaco.editor.create(app, {
    value: 'Hello there',
    language: 'html'
});
