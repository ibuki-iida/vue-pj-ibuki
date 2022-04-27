<template>
	<v-container>
	<h1>ログイン成功</h1>
    <v-row
        justify="center" align-content="center"
    >

      <v-col>
          <v-btn
            style="margin-right:5px;"
            depressed
            color="grey"
            @click="signOut()"
          >
            ログアウト
          </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import firebaseApp from '../plugins/firebaseConfig'
import { getAuth, signOut } from "firebase/auth";

const auth = getAuth(firebaseApp)

export default {
  name: 'TopView',
  methods: {
    signOut: function () {
      signOut(auth).then(() => {
        alert('ログアウト成功')
				this.$router.push('/');
      }).catch((error) => {
        console.log(error)
        alert('ログアウト失敗')
      })
    },
  }
}
</script>