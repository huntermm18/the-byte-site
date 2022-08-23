


<script>
export default {
  name: 'recipeCard',
  props: ['title', 'subTitle', 'instructions', 'ingredients', 'tags', 'picture'],
  data () {
    return {
      show: false,
      dialog: false
    }
  }
}
</script>
