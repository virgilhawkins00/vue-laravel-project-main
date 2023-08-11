/* eslint-disable */
<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>

        <q-toolbar-title>
          Personal Finance App
        </q-toolbar-title>
        <q-btn align="right" class="btn-fixed-width" color="secondary" label="Login" />

      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer elevated>
      <q-tabs v-model="tab" class="text-Light">
        <q-tab name="mails" icon="mail" label="Mails" />
        <q-tab name="alarms" icon="alarm" label="Alarms" />
        <q-tab name="movies" icon="movie" label="Movies" />
      </q-tabs>
    </q-footer>
  </q-layout>
</template>

<script setup>

</script>
