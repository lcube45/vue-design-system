<template>
    <div v-bind:class="width" style="background-color: #D90D25; color: #fff">
      <div v-bind:class="height">
        Sizing example : {{ width }} / {{ height }}
      </div>
    </div>
</template>

<script>
export default {
  props: {
    width: {
      type: String
    },
    height: {
      type: String
    },
  }
}
</script>