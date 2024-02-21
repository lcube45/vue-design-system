<template>
  <div :class="'text-' + level">{{ label }}</div>
</template>

<script>
export default {
  props: {
    label: String,
    level: {
      type: String,
      validator: function (value) {
        return ['h1', 'h2', 'h3', 'h4'].indexOf(value) !== -1;
      },
    },
  }
}
</script>