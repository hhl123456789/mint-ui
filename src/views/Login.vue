<template>
  <div>
    <!-- 登录标题 -->
    <mt-header title="登录">
      <mt-button icon="back" slot="left">返回</mt-button>

      <router-link to="/register" slot="right" style="text-decoration: none"
        >暂无账号，立即注册</router-link
      >
    </mt-header>
    <!-- 主体 -->
    <mt-field
      type="text"
      label="用户名"
      placeholder="请输入用户名"
      v-model="name"
      :state="nameState"
      @blur.native.capture="checkName"
    ></mt-field>
    <mt-field
      type="password"
      label="密码"
      placeholder="请输入密码"
      v-model="pwd"
      :state="pwdState"
      @blur.native.capture="checkPwd"
    ></mt-field>
    <mt-button type="primary" size="large" @click="login" >登录</mt-button>
  </div>
</template>

<script>
export default {
  methods: {
    checkName() {
      let reg = /^\w{3,15}$/;
      if (reg.test(this.name)) {
        this.nameState = "success";
        return true
      } else {
        this.nameState = "error";
        return false
      }
    },
    checkPwd() {
      let reg = /^\d{6}$/;
      if (reg.test(this.pwd)) {
        this.pwdState = "success";
        return true
      } else {
        this.pwdState = "error";
        return false
      }
    },
    login() {
      if (this.checkName() && this.checkPwd()) {
        console.log(`${this.name},${this.pwd}`);
      }
    },
  },
  data() {
    return {
      name: "",
      pwd: "",
      nameState: "",
      pwdState: "",
    };
  },
};
</script>

