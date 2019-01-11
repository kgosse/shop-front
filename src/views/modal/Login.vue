<template>
 <el-dialog title="Log in" :visible.sync="isOpen" :before-close="showLoginModal">
  <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="120px" class="demo-ruleForm">
    <el-form-item
      prop="email"
      label="Email"
      :rules="[
        { required: true, message: 'Please input email address', trigger: 'blur' },
        { type: 'email', message: 'Please input correct email address', trigger: ['blur', 'change'] }
      ]"
    >
      <el-input v-model="ruleForm2.email"></el-input>
    </el-form-item>
    <el-form-item label="Password" prop="pass">
      <el-input type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm2')">Submit</el-button>
      <el-button @click="resetForm('ruleForm2')">Reset</el-button>
    </el-form-item>
  </el-form>
</el-dialog> 
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'login-component',
  data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Please input the password'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Please input the password again'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('Two inputs don\'t match!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm2: {
          pass: '',
          email: '',
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
        },
        dialogFormVisible: true,
      };
  },
  computed: {
    ...mapState({
      isOpen: state => state.app.modals.login.isOpen
    })
  },
  methods: {
    ...mapActions({
      showLoginModal: 'app/toggleLoginModal',
    }),
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          return false;
        }
      });
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