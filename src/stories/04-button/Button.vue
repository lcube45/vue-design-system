<template>
  <v-btn :variant="variant" :size="size" :density="density" :icon="icon ? 'mdi-account' : undefined" :text="icon ? '' : label"></v-btn>
</template>

<script>
export default {
  props: {
    label: String,
    variant: String,
    size: String,
    density: String,
    icon: Boolean,
  }
}
</script>