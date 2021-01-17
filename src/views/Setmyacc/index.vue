<template>
  <div class="layout-style">
    <div class="layout-page-title">个人设置</div>

    <div class="layout-funcbox">
      <div class="func-name">修改头像</div>

      <div class="func-content">
        <UploadHead
          :uploadkey="'userhead'"
          :filename.sync="headform.filename"
          :lodpath.sync="headform.lodpath"
          style="float: left"
        />
      </div>

      <div class="func-content">
        <el-button @click="Savehead()">保存当前头像</el-button
        ><span> {{ headform.filename }}</span>
      </div>
    </div>

    <div class="layout-funcbox">
      <div class="func-name">更改用户名</div>
      <div class="func-content">
        <el-input
          type="text"
          placeholder="请输入内容"
          v-model="username"
          maxlength="19"
          show-word-limit
        >
        </el-input>
      </div>

      <div class="func-content ">
        <el-button @click="Saveusername()">保存用户名</el-button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import UploadHead from "@/components/UploadHead.vue";
import { uploaduserhead, uploadusername } from "@/utils/auth";
import { UserInfo, Changeinfo } from "@/api/account";
export default {
  name: "Home",
  data() {
    return {
      username: "",
      headform: {
        filename: null,
        lodpath: null,
      },
    };
  },
  components: {
    UploadHead,
  },
  methods: {
    getuserinfo() {
      this.$http(UserInfo({}), (res) => {
        console.log(res);
        if (res.code == 200) {
          this.username = res.data.username;
          this.headform.lodpath = res.data.head;
        } else {
          this.$message({
            message: res.msg,
            type: "error",
            duration: 5 * 1000,
          });
        }
      });
    },
    Savehead() {
      this.$http(
        Changeinfo({
          head: this.headform.filename,
        }),
        (res) => {
          console.log(res);
          if (res.code == 200) {
            this.$message({
              message: res.msg,
              duration: 5 * 1000,
            });
            uploaduserhead(res.data.userhead);
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
    Saveusername() {
      this.$http(
        Changeinfo({
          username: this.username,
        }),
        (res) => {
          console.log(res);
          if (res.code == 200) {
            uploadusername(this.username)
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
        }
      );
    },
  },
  created() {
    this.getuserinfo();
  },
};
</script>
<style lang="scss" scoped>
</style>