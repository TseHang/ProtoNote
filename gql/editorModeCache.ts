import { EditorMode } from '@/constants';
import { makeVar } from '@apollo/client';

export const editorModeVar = makeVar<EditorMode>(EditorMode.View);

export const setEditorMode = (mode: EditorMode) => editorModeVar(mode);
