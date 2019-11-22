<template>
  <v-app class="form" id="inspire">
    <v-content >
      <v-container style="margin-top:-10%">
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="secondary" dark flat>
                <v-toolbar-title >LOGIN</v-toolbar-title>
                <v-spacer/>
           </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field label="Email " name="login" type="text"/>
                  <v-text-field id="password" label="Password" name="password" type="password"/>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer/>
                <v-btn color="secondary">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  props: {
    source: String
  }
};
</script>
<style scoped>
.form{
    margin-top: 20%
}
</style>
