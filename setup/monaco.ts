import { defineMonacoSetup } from '@slidev/types'

export default defineMonacoSetup(async (monaco) => {
    return {
        theme: {
            dark: 'vs-dark',
            light: 'vs',
        },
        editorOptions: {
            wordWrap: 'on'
        },
        iSuggestOptions: {
            preview: true,
            previewMode: "prefix"
        }
    }
})
