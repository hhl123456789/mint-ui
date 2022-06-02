<template>
  <div>
    <!-- 标题栏 -->
    <mt-header title="注册">
      <mt-button icon="back" slot="left">返回</mt-button>
      <router-link to="/login" slot="right" style="text-decoration: none"
        >登录</router-link
      >
    </mt-header>
    <!-- 表单 -->
    <mt-field
      v-model="name"
      type="text"
      label="用户名"
      placeholder="请输入用户名"
      :state="namestate"
      @blur.native.capture="checkName"
    ></mt-field>
    <mt-field
      v-model="pwd"
      type="password"
      label="密码"
      placeholder="请输入密码"
      :state="pwdstate"
      @blur.native.capture="checkPwd"
    ></mt-field>
    <mt-field
      v-model="repwd"
      type="password"
      label="确认密码"
      placeholder="请再次输入密码"
      :state="repwdstate"
      @blur.native.capture="checkRepwd"
    ></mt-field>
    <!-- 按钮 -->
    <mt-button type="primary" size="large" @click="regist">快速注册</mt-button>
  </div>
</template>

<script>
export default {
  methods: {
    checkRepwd() {
      //验证确认密码
      let reg = /^\d{6}$/;
      if (reg.test(this.repwd) && this.pwd == this.repwd) {
        this.repwdstate = "success";
        return true;
      } else {
        this.repwdstate = "error";
        return false;
      }
    },
    checkPwd() {
      let reg = /^\d{6}$/;
      if (reg.test(this.pwd)) {
        this.pwdstate = "success";
        return true;
      } else {
        this.pwdstate = "error";
        return false;
      }
    },
    checkName() {
      //用户名输入框失去焦点后执行
      console.log("用户名:" + this.name);
      // 验证账号
      let reg = /^\w{3,15}$/;
      if (reg.test(this.name)) {
        //返回true表示验证成功
        // console.log('name格式正确');
        this.namestate = "success";
        return true;
      } else {
        // console.log('name格式错误');
        this.namestate = "error";
        return false;
      }
    },
    regist() {
      // 依次验证name，pwd ，repwd
       // 要三个都验证成功后，才能能到提交注册
      //点击注册后执行
      if (this.checkName() && this.checkPwd() && this.checkRepwd()) {
        console.log(`${this.name},${this.pwd},${this.repwd}`);
      }
    },
  },

  data() {
    return {
      name: "",
      namestate: "",
      pwd: "",
      pwdstate: "",
      repwd: "",
      repwdstate: "",
    };
  },
};
</script>
