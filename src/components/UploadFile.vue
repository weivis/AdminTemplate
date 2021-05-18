<template>
    <el-row class="input">
      <div class="img" v-if="lodpath">
        <img v-if="lodpath" :src="lodpath" class="img" style="float:left" />
      </div>
      <div class="upbutton">
        <el-upload
        class="uploadbutt"
            :show-file-list="false"
            drag
            action
            :http-request="upLoad"
            multiple
        >
        <span>点击此处上传文件</span>
        <!-- <img v-if="lodpath" :src="lodpath" class="img" /> -->
        <!-- <i class="el-icon-upload"></i> -->
        <!-- <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div> -->
      </el-upload>
      <div v-if="debug">
          {{uploadkey}}
          {{filename}}
          {{lodpath}}
          {{ospath}}
      </div>
      </div>
    </el-row>
</template>

<script>
import { upload } from "@/api/common";
export default {
  name: 'UploadCover',
  props: {
    uploadkey: {
      type: String,
      default: ''
    },
    filename: {
      type: String,
      default: ''
    },
    lodpath: {
      type: String,
      default: ''
    },
    ospath: {
      type: String,
      default: ''
    },
    debug: {
      type: Boolean,
      default: false
    },
  },
  computed: {
  },
  created(){
  },
  methods: {
    upLoad(file) {
      const formData = new FormData();
      formData.append("file", file.file);
      formData.append("uploadKey", this.uploadkey);

      this.$http(upload(formData), (res) => {
        console.log(res);
        if (res.code == 200) {
          this.$emit("update:lodpath", res.data.lodpath)
          this.$emit("update:filename", res.data.filename)
          this.$emit("update:ospath", res.data.ospath)
        } else {
          this.$message({
            message: res.msg,
            type: "error",
            duration: 5 * 1000,
          });
        }
      });
    },
  }
}
</script>
<style>
  .el-upload-dragger{
    height: 50px !important;
    width: 200px !important;
    background-color: #006eff;
    color: #fff;
    border: 0px;
    line-height: 50px;
  }
  .el-icon-upload{
    font-size: 36px !important;
    line-height: 60px !important;
    margin-top: 0 !important;
  }
</style>
<style lang="scss" scoped>
.img{
  width: 200px;
  margin-bottom: 10px;
}
.upbutton{
  width: 250px;
  margin-bottom: 5px;
}
</style>