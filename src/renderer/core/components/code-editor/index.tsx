import { json } from '@codemirror/lang-json';
import { tags as t } from '@lezer/highlight';
import { createTheme } from '@uiw/codemirror-themes';
import CodeMirror from '@uiw/react-codemirror';

const ownTheme = createTheme({
  theme: 'dark',
  settings: {
    background: '#072227',
    backgroundImage: '',
    foreground: '#FFFFFF',
    caret: '#AEAFAD',
    selection: '#D6D6D6',
    selectionMatch: '#D6D6D6',
    gutterBackground: '#072227',
    gutterForeground: '#FFFFFF',
    gutterBorder: '#dddddd',
    gutterActiveForeground: '',
    lineHighlight: '#0a2f35',
  },
  styles: [
    { tag: t.comment, color: '#787b80' },
    { tag: t.definition(t.typeName), color: '#194a7b' },
    { tag: t.typeName, color: '#194a7b' },
    { tag: t.tagName, color: '#008a02' },
    { tag: t.variableName, color: '#1a00db' },
  ],
});

export function CodeEditor() {
  return (
    <CodeMirror
      width="100%"
      height="100%"
      className="flex flex-1"
      value="console.log('hello world!');"
      theme={ownTheme}
      extensions={[json()]}
      onChange={(value, viewUpdate) => {
        console.log('value:', value);
      }}
    />
  );
}
