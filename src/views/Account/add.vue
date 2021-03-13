<template>
  <div class="layout-style">

    <div class="layout-page-title">新增账户</div>

    <div class="layout-funcbox">
    <div class="func-content">
      <div class="func-name">登录邮箱</div>
      <div class="func-content">
      <el-input v-model="email" placeholder="email"></el-input>
      </div>
    </div>

    <div class="func-content">
      <div class="func-name">用户名</div>
      <div class="func-content">
      <el-input v-model="username" placeholder="username"></el-input>
      </div>
    </div>

    <div class="func-content">
      <div class="func-name">密码</div>
      <div class="func-content">
      <el-input v-model="password" placeholder="password"></el-input>
      </div>
    </div>

    <div class="func-content">
      <div class="func-name">账户类型</div>
      <div class="func-content">
    <el-radio-group v-model="jurisdiction">
      <el-radio-button label="1">高级管理员</el-radio-button>
      <el-radio-button label="2">一般管理员</el-radio-button>
    </el-radio-group>
    </div>
    </div>

    <div class="func-content">
      <div class="func-name">备注</div>
      <div class="func-content">
      <el-input v-model="remarks" placeholder="备注"></el-input>
      </div>
    </div>

    <div class="func-name">
      <div class="func-content">
      <el-button @click="push()">提交</el-button>
      </div>
    </div>

    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import { Createaccount } from "@/api/account";
export default {
  name: "Home",
  data() {
    return {
      email: null,
      username: null,
      password: null,
      jurisdiction: 1,
      remarks: null,
    };
  },
  components: {
  },
  methods: {
    push() {
      this.$http(Createaccount({
        email: this.email,
        username: this.username,
        password: this.password,
        jurisdiction: this.jurisdiction,
        remarks: this.remarks
      }), (res) => {
        console.log(res);
        if (res.code == 200) {
          this.$message({
            message: res.msg,
            duration: 5 * 1000,
          });
        } else {
          this.$message({
            message: res.msg,
            type: "error",
            duration: 5 * 1000,
          });
        }
      });
    },
  },
  created() {
  }
};
</script>
<style lang="scss" scoped>
</style>