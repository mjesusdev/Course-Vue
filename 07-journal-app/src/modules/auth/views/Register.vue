<template>
    <div>
        <span class="login100-form-title p-b-41">
            Register
        </span>
        <form class="login100-form validate-form p-b-33 p-t-5">
            <div class="wrap-input100 validate-input" data-validate = "Enter username">
                <input class="input100" type="text" placeholder="Name" required>
                <span class="focus-input100" data-placeholder="&#xe82a;"></span>
            </div>

            <div class="wrap-input100 validate-input" data-validate = "Enter email">
                <input class="input100" type="text" placeholder="Email" required>
                <span class="focus-input100" data-placeholder="&#xe818;"></span>
            </div>

            <div class="wrap-input100 validate-input" data-validate="Enter password">
                <input class="input100" type="password" placeholder="Password" required>
                <span class="focus-input100" data-placeholder="&#xe80f;"></span>
            </div>

            <div class="container-login100-form-btn m-t-32">
                <button class="login100-form-btn">
                    Create Account
                </button>

            </div>

            <div class="container-login100-form-btn m-t-32">
                <router-link :to="{ name: 'login' }">¿Do you have an account yet?</router-link>
            </div>
        </form>
    </div>
</template>

<script>
    export default {

    }
</script>

<style>

</style>