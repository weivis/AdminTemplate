<template>
  <div class="layout-style">
    <div class="layout-page-title">管理员账户管理</div>
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

        <el-table-column prop="username" label="账户名" width="180">
        </el-table-column>

        <el-table-column prop="account" label="登录邮箱" width="250">
        </el-table-column>

        <!-- <el-table-column prop="jurisdiction" label="角色" width="100">
          <template slot-scope="scope">
            {{ doc.role[scope.row.jurisdiction] }}
          </template>
        </el-table-column> -->

        <el-table-column prop="jurisdiction" label="账户状态" width="100">
          <template slot-scope="scope">
            {{ doc.status[scope.row.status] }}
          </template>
        </el-table-column>

        <el-table-column prop="remarks" label="备注"> </el-table-column>

        <el-table-column label="更多" fixed="right" width="125">
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
        </el-table-column>
      </el-table>
    </div>

    <div class="layout-funcbox">
      <Pagination
        @pagination="getList()"
        :page.sync="currentPage"
        :pageCount.sync="totalPage"
        :total.sync="total"
        v-if="total > 0"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { Allaccount, Manage } from "@/api/account";
import Pagination from "@/components/Pagination.vue";
export default {
  name: "Home",
  data() {
    return {
      tableData: [],
      currentPage: 1, // 当前页码
      total: 0, // 总条目
      totalPage: 0, // 总页数
      doc: {
        role: {
          1: "管理员",
          2: "一般用户",
        },
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
        Allaccount({
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
            this.totalPage = res.data.totalPages;
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
    },
    change(data) {
      this.$http(Manage(data), (res) => {
        console.log(res);
        if (res.code == 200) {
          this.getList();
        } else {
          this.$message({
            message: res.msg,
            type: "error",
            duration: 5 * 1000,
          });
        }
      });
    },
    changeaccount(type, id) {
      let doc = {
        5: "修改账户",
        4: "设置备注",
        3: "修改密码",
      };
      this.$prompt(doc[type], "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
      })
        .then(({ value }) => {
          if (type == 3) {
            this.change({
              passwort: value,
              set: type,
              id: id,
            });
          }
          if (type == 4) {
            this.change({
              remarks: value,
              set: type,
              id: id,
            });
          }
          if (type == 5) {
            this.change({
              email: value,
              set: type,
              id: id,
            });
          }
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消更改",
          });
        });
    },
  },
  created() {
    this.getList();
  },
};
</script>
<style lang="scss" scoped>
</style>