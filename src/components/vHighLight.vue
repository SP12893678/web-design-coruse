<template>
  <prism-editor
    v-model="code"
    class="my-editor"
    :highlight="highlighter"
    line-numbers
  />
</template>

<script>
// import Prism Editor
import { PrismEditor } from 'vue-prism-editor'
import 'vue-prism-editor/dist/prismeditor.min.css' // import the styles somewhere

// import highlighting library (you can use any library you want just return html string)
import { highlight, languages } from 'prismjs/components/prism-core'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-markup'
import 'prismjs/components/prism-css'

import 'prismjs/themes/prism-tomorrow.css' // import syntax highlighting styles

export default {
    components: {
        PrismEditor
    },
    props: {
        code: {
            type: String,
            default: ''
        }
    },
    // data: () => ({ code: 'console.log("Hello World")' }),
    methods: {
        highlighter (code) {
            return highlight(code, languages.markup) // returns html
        }
    }
}
</script>

<style>
.my-editor {
  background: #2d2d2d;
  color: #ccc;
  font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
  font-size: 14px;
  line-height: 1.5;
  padding: 5px;
}

.prism-editor__textarea:focus {
  outline: none;
}
</style>
