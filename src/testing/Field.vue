<template>
  <div>
    <mt-field
      type="text"
      label="用户名"
      placeholder="请输入用户名"
      state="success"
      disableClear
    ></mt-field>
    <mt-field
      type="password"
      label="密码"
      placeholder="请输入密码"
      state="error"
    ></mt-field>
    <mt-field
      type="text"
      label="手机号"
      placeholder="请输入手机号"
      state="warning"
      :attr="{maxlength:11}"
    ></mt-field>
  </div>
</template>