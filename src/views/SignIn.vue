<template>
    <div class="section">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-half">
            <div class="box">
              <div class="content">
                <div class="title">Log In</div>
              </div>
              <div class="field">
                <label class="label">
                  Email
                </label>
                <div class="control">
                  <input class="input" type="email" placeholder="" v-model="email"
                </div>
              </div>
              <div class="field">
                <label class="label">
                  Password
                </label>
                <div class="control">
                    <input class="input" type="password" placeholder="" v-model="password">
                </div>
              </div>
              <div class="field is-grouped">
                <div class="control">
                  <button @click="register" type="submit" class="button is-info">Login</button>
                </div>
                <p v-if="errMsg" class="errormessagevar">{{ errMsg }}</p>
                <div class="control">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </template>

<script setup>
import { reactive, ref } from "vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";


const email = ref("");
const password = ref("");
const errMsg = ref();
const router = useRouter();


const register = () => {
    signInWithEmailAndPassword(getAuth(), email.value, password.value)
        .then((data) => {
            console.log("Successfuly Signed In!");
            router.push("/feed")
        })
        .catch((error) => {
            console.log(error.code);
            switch (error.code) {
                case "auth/invalid-email":
                    errMsg.value = "Invalid email";
                    break;
                case "auth/user-not-found":
                    errMsg.value = "User not found";
                    break;
                case "auth/wrong-password":
                    errMsg.value = "Wrong password";
                    break;
                default:
                    errMsg.value = "Email or password was incorrect";
                    break;
            }
        });
};

const signInWithGoogle = () => {

};
</script>


<style>
h1 {
    text-align:center;
}

p {
    text-align: center;
}

.errormessagevar {
    padding-top: 2.5%
}
</style>