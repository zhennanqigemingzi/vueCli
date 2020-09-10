<template>
  <div>
    <div class="editor-container">
      <yaml-editor  v-model="value" />
    </div>
  </div>
</template>

<script>
import YamlEditor from './editor';

let yamlData = '#bin\n#\n\n\nlanguages: \n - Ruby\n - Perl\n - Python \n# sb\nwebsites:\n YAML: yaml.org \n Ruby: ruby-lang.org \n Python: python.org \n Perl: use.perl.org \n'

export default {
  name: 'YamlEditorDemo',
  components: { YamlEditor },
  data() {
    return {
      value: yamlData,
    };
  },
};
</script>
<style scoped>
.editor-container{
  position: relative;
  height: 100%;
}
</style>