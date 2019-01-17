<template>
 <el-dialog title="Log in" :visible.sync="isOpen" :before-close="showLoginModal">
  <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
    <el-form-item
      prop="email"
      label="Email"
    >
      <el-input v-model="ruleForm.email"></el-input>
    </el-form-item>
    <el-form-item label="Password" prop="pass">
      <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item >
      <el-button type="primary" @click="submitForm()" :loading="loading">Submit</el-button>
      <el-button @click="resetForm('ruleForm')">Reset</el-button>
    </el-form-item>
  </el-form>
</el-dialog> 
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'login-component',
  data() {
      return {
        ruleForm: {
          pass: '',
          email: '',
        },
        rules: {
          pass: [
            { trigger: 'blur', required: true, message: 'Please input the password'}
          ],
          email: [
            { required: true, message: 'Please input email address', trigger: 'blur' },
            { type: 'email', message: 'Please input correct email address', trigger: ['blur', 'change'] }
          ]
        },
      };
  },
  computed: {
    ...mapState({
      isOpen: state => state.app.modals.login.isOpen,
      loading: state => state.user.login_request.requesting
    })
  },
  methods: {
    ...mapActions({
      showLoginModal: 'app/toggleLoginModal',
      login: 'user/login',
    }),
    submitForm() {
        this.login({email: this.ruleForm.email, password: this.ruleForm.pass});
        this.resetForm('ruleForm');
      // this.$refs[formName].validate((valid) => {
      //   if (valid) {
      //   } else {
      //     return false;
      //   }
      // });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
      this.showLoginModal({isOpen: false});
    }
  }
}
</script>

<style lang="scss" scoped>

</style>