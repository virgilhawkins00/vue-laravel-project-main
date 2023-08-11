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
      <q-tabs v-model="tab" class="text-Dark bg-transparent">
        <q-tab name="money" icon="money" label="Expenses" />
        <q-tab name="user" icon="person" label="My Account" />
        <q-tab name="login" icon="login" label="login" />
      </q-tabs>
    </q-footer>
  </q-layout>
</template>

<script setup>

</script>
