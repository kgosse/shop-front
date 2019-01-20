<template>
 <el-dialog title="Sign up" :visible.sync="isOpen" :before-close="showRegistrationModal">
  <el-form :model="registrationForm" status-icon :rules="registrationRules" ref="registrationForm" label-width="120px" class="demo-ruleForm">
    <el-form-item label="Name" prop="name">
      <el-input v-model="registrationForm.name"></el-input>
    </el-form-item>
    <el-form-item
      prop="email"
      label="Email"
    >
      <el-input v-model="registrationForm.email" type="email"></el-input>
    </el-form-item>
    <el-form-item label="Password" prop="pass">
      <el-input type="password" v-model="registrationForm.pass" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="Confirm" prop="checkPass">
      <el-input type="password" v-model="registrationForm.checkPass" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('registrationForm')" :loading="loading">Submit</el-button>
      <el-button @click="resetForm('registrationForm')">Reset</el-button>
    </el-form-item>
  </el-form>
</el-dialog> 
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'registration-component',
  data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Please input the password'));
        } else {
          if (this.registrationForm.checkPass !== '') {
            this.$refs.registrationForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Please input the password again'));
        } else if (value !== this.registrationForm.pass) {
          callback(new Error('Two inputs don\'t match!'));
        } else {
          callback();
        }
      };
      return {
        registrationForm: {
          name: '',
          pass: '',
          checkPass: '',
          email: '',
        },
        registrationRules: {
          name: [
            {required: true, message: 'Please input your name', trigger: 'blur'}
          ],
          email: [
            { required: true, message: 'Please input email address', trigger: 'blur' },
            { type: 'email', message: 'Please input correct email address', trigger: ['blur'] }
          ],
          pass: [
            { validator: validatePass, trigger: 'blur', required: true }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur', required: true }
          ],
        },
      };
  },
  computed: {
    ...mapState({
      isOpen: state => state.app.modals.registration.isOpen,
      loading: state => state.user.signup_request.requesting,
    })
  },
  methods: {
    ...mapActions({
      showRegistrationModal: 'app/toggleRegistrationModal',
      signup: 'user/signup',
    }),
    submitForm(formName) {
      const {name, pass, checkPass, email} = this.registrationForm;
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.signup({
            email, 
            name, 
            password: pass, 
            confirm_password: checkPass
          });
          this.resetForm(formName);
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
      this.showRegistrationModal({isOpen: false});
    }
  }
}
</script>

<style lang="scss" scoped>

</style>