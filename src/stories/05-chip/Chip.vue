<template>
  <v-row justify="space-around">
    <v-col cols="auto">
      <v-sheet>
        <h1>Filter results</h1>
        <v-chip-group
          multiple
          selected-class="text-primary"
        >
          <v-chip
            v-for="tag in tags"
            :key="tag"
            filter
            variant="outlined"
          >
            {{ tag }}
          </v-chip>
        </v-chip-group>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    data: () => ({
      tags: [
        'Work',
        'Home Improvement',
        'Vacation',
        'Food',
        'Drawers',
        'Shopping',
        'Art',
        'Tech',
        'Creative Writing',
      ],
    }),
  }
</script>