<template>
  <v-card title="Dashboard sunshine" variant="outlined" class="w-25">
    <v-card-text>
      <v-row>
        <v-col>
          <v-card variant="tonal" subtitle="Sur 7 derniers jours">
            <v-card-text class="text-body-2">
              <span class="text-h4">4000</span><br />processus en cours
            </v-card-text>
          </v-card>
        </v-col>
        <v-col>
          <v-card variant="tonal" subtitle="Sur 7 derniers jours">
            <v-card-text>
              <span class="text-h4">50</span><br />processus en erreur
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-actions>
      <v-btn variant="flat">Optimize</v-btn>
      <v-btn variant="flat">Détail des processus</v-btn>
    </v-card-actions>
  </v-card>
</template>