<template>

  <div class="pagebody" :style="backgroundDiv">

    <div class="mainbody">

      <div class="imgbox">
        <img src="@/assets/image/iot3.png" class="logo" />
      </div>

      <div class="loginpopu">
        <div class="iottxt">AdminTemplate</div>
        <div class="loginyouaccounttxt">AdminTemplate</div>

            <el-input
              v-model="account"
              class="txt-input"
              placeholder="Account"
              prefix-icon="el-icon-user"
            ></el-input>

            <el-input
              v-model="password"
              class="txt-input"
              placeholder="Password"
              prefix-icon="el-icon-key"
              show-password
            ></el-input>

              <el-button
                type="primary"
                class="button"
                align="center"
                @click.native="loginstart"
                >Sgin in</el-button
              >

      </div>

    </div>
  </div>

</template>
<script>
import { authAdminLogin } from "@/api/login";
import { signin } from "@/utils/auth";
import { getuser } from '@/utils/auth'
export default {
  name: "login",
  created() {
    let user = getuser()
    if (user.Token) {
      this.$router.push({ name: "index" });
    }
  },
  data() {
    return {
      account: "",
      password: "",
      backgroundDiv: {backgroundImage: 'url(' + require('@/assets/image/login-background1.png') + ')'}
    };
  },
  methods: {
    seedauth() {
      if (this.password == "") {
        this.$message({
          message: "密码不能为空",
          type: "error",
        });
        return false;
      } else {
        return true;
      }
    },
    loginstart() {
      if (this.seedauth() == false) {
        return console.log("终止");
      }
      this.$message({
        message: "正在登录中",
        type: "success",
      });
      this.$http(
        authAdminLogin({
          account: this.account,
          password: this.password,
        }),
        (res) => {
          console.log(res);
          if (res.code == 200) {
            this.$message({
              message: "登录成功",
              type: "success",
            });
            signin(res.data.token, res.data.username, res.data.head, res.data.id, res.data.jurisdiction);
            this.$router.push({ name: "index" });
          } else {
            this.$message({
              message: res.msg,
              type: "error",
              duration: 5 * 1000,
            });
          }
        }
      );
    },
  }
};
</script>
<style type="css">
.el-divider__text {
  background-color: #fbfbfb;
  color: #9e9e9e;
}
</style>

<style lang="scss" scoped>
a,
li,
ul {
  text-decoration: none;
  list-style-type: none;
}

html,
body {
  margin: 0;
  padding: 0;
  border: 0;
}
.pagebody{
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: #15102c;
  background-repeat: no-repeat;
  background-size: cover;
}
.mainbody{
  width: 80%;
  height: 75vh;
  border-radius: 15px;
  position: absolute;
  top: 0;left: 0;right: 0;bottom: 0;
  margin: auto;
  background-color: #1d0e5a;
  box-shadow: 0px 15px 20px 4px #151129;
}
.imgbox{
  width: 50%;
  height: 100%;
  position: relative;
}
.logo{
  position: absolute;left: 18%;
  top: 0;
  bottom: 0;
  margin: auto;
  width: 100%;
}
.loginpopu{
  position: absolute;
  right: 100px;
  top: 15%;
  right: 8%;
  width: 25%;
}
.iottxt{
  font-size: 32px;
  color: #fff;
  font-weight: lighter;
  width: 100%;
  margin-bottom: 10%;
}
.loginyouaccounttxt{
  font-size: 18px;
  font-weight: lighter;
  color: #fff;
  height: 20vh;
}
.txt-input {
  position: relative;
  font-size: 14px;
  display: inline-block;
  width: 100%;
  margin-bottom: 35px;
}
.button{
  background-color: #1d2774;
  width: 100%;
  height: 50px;
  text-align: center;
  border: 0;
  // line-height: 50px;
}
</style>