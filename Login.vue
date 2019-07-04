<template>
  <v-app :class="loading ? 'blue' : ''">
    <v-content>
      <v-container
        fluid
        fill-height
      >
        <v-layout
          align-center
          justify-center
        >
          <img v-if="loading" src='~@/assets/img/carella.gif' width="128" height="128" />
          <v-flex
            v-else
            xs12
            sm8
            md4
            class="user-form"
          >
            <v-card class="elevation-4">
              <div class="primary white--text text-xs-center">
                <img
                  src="~@/assets/img/logo.png"
                  class="user-form-logo"
                />
                <div class="conf title">
                  {{ $_.get(env, 'VUE_APP_NAME') }}
                </div>
              </div>
              <v-card-text>
                <v-slide-y-reverse-transition>
                  <v-alert
                    v-if="error"
                    :value="error"
                    type="error"
                    class="mt-0 mb-3"
                    outline
                  >
                    {{ error }}
                  </v-alert>
                </v-slide-y-reverse-transition>

                <v-form
                  class="login"
                  @submit.prevent=""
                >
                  <v-text-field
                    name="login"
                    label="Логин"
                    type="text"
                    v-model="login"
                    autofocus
                  ></v-text-field>
                  <v-text-field
                    id="password"
                    name="password"
                    label="Пароль"
                    type="password"
                    v-model="password"
                  ></v-text-field>
                  <v-btn
                    class="btn"
                    color="primary"
                    type="submit"
                    :disabled="loading"
                    :loading="loading"
                    @click="auth()"
                  >
                    Вход</v-btn>
                </v-form>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>
<script src="./index.ts" lang="ts"></script>
<style lang="scss" src="./style.scss" scoped></style>
