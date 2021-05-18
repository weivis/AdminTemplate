<template>
  <div class="layout-style">
    <div class="layout-page-title">用户管理</div>
    <div class="layout-funcbox">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="id" label="ID" width="50"> </el-table-column>

        <el-table-column prop="head" label="头像" width="100">
          <template slot-scope="scope">
            <el-image
              style="width: 90%; height: auto"
              :src="scope.row.head"
            ></el-image>
          </template>
        </el-table-column>

        <el-table-column prop="introduce" label="用户个人介绍">
        </el-table-column>

        <el-table-column prop="phone" label="手机号">
        </el-table-column>

        <el-table-column prop="email" label="邮箱">
        </el-table-column>

        <!-- <el-table-column prop="jurisdiction" label="角色" width="100">
          <template slot-scope="scope">
            {{ doc.role[scope.row.jurisdiction] }}
          </template>
        </el-table-column> -->

        <el-table-column prop="jurisdiction" label="账户状态">
          <template slot-scope="scope">
            {{ doc.status[scope.row.status] }}
          </template>
        </el-table-column>

        <!-- <el-table-column label="更多" fixed="right" width="125">
          <template slot-scope="scope">
            <el-dropdown>
              <el-button type="primary">
                管理<i class="el-icon-arrow-down el-icon--right"></i>
              </el-button>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item
                  @click.native="change({ id: scope.row.id, set: 1 })"
                  v-if="scope.row.status == 0"
                  >禁止该账户</el-dropdown-item
                >
                <el-dropdown-item
                  @click.native="change({ id: scope.row.id, set: 1 })"
                  v-if="scope.row.status == 1"
                  >恢复该账户</el-dropdown-item
                >
                <el-dropdown-item @click.native="changeaccount(5, scope.row.id)"
                  >修改登录账户邮箱</el-dropdown-item
                >
                <el-dropdown-item @click.native="changeaccount(4, scope.row.id)"
                  >设置备注</el-dropdown-item
                >
                <el-dropdown-item @click.native="changeaccount(3, scope.row.id)"
                  >修改登录密码</el-dropdown-item
                >
              </el-dropdown-menu>
            </el-dropdown>
          </template>
        </el-table-column> -->

      </el-table>
    </div>

    <div class="layout-funcbox">
      <Pagination
        @pagination="getList()"
        :page.sync="currentPage"
        :pageCount.sync="pageCount"
        :total.sync="total"
        v-if="total > 0"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { AdminUserList } from "@/api/user";
import Pagination from "@/components/Pagination.vue";
export default {
  name: "User",
  data() {
    return {
      tableData: [],
      currentPage: 1, // 当前页码
      total: 0, // 总条目
      pageCount: 0, // 总页数
      doc: {
        status: {
          0: "正常",
          1: "异常",
        },
      },
    };
  },
  components: {
    Pagination,
  },
  methods: {
    getList() {
      this.$http(
        AdminUserList({
          querypage: this.currentPage,
        }),
        (res) => {
          console.log(res);
          if (res.code == 200) {
            this.$message({
              message: res.msg,
              type: "success",
            });
            this.total = res.data.total;
            this.currentPage = res.data.currentPage;
            this.pageCount = res.data.pageCount;
            this.tableData = res.data.result;
          } else {
            this.$message({
              message: res.msg,
              type: "error",
              duration: 5 * 1000,
            });
          }
        }
      );
    }
  },
  created() {
    this.getList();
  },
};
</script>
<style lang="scss" scoped>
</style>