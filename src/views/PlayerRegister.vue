<template>
    <div class="page">
        <div class="register-card">
            <div class="card-header">
                <div class="log">注册</div>
            </div>
            <div class="form-group">
                <label for="username">邮箱:</label>
                <input name="username" type="text">
            </div>
            <div class="form-group">
                <label for="password">密码:</label>
                <input name="password" type="password">
            </div>
            <div class="form-group">
                <label for="confirmedPassword">再次输入密码:</label>
                <input name="confirmedPassword" type="password">
            </div>
            <div class="form-group">
                <button>注册</button>
            </div>
            <div class="form-group">
                <span @click="$router.push('/player-login')">转到登录</span>
            </div>
        </div>
    </div>
    
</template>

<script>
export default {

}
</script>

<style scoped>
.page {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background: url("../assets/back.jpg");
    background-size: cover;
    
}
.register-card {
    width: 300px;
    padding: 20px;
    margin: 0 auto;
    border: 1px solid #ccc;
    border-radius: 10px;
    background-color: #e8e8e8;
    box-shadow: 2px 2px 10px #ccc;
    background: rgba(255, 255, 255, 0.5);
  }
  
  .card-header {
    text-align: center;
    margin-bottom: 20px
  }
  
  .card-header .log {
    margin: 0;
    font-size: 24px;
    color: black;
  }
  
  .form-group {
    margin-bottom: 15px;
    
  }
  
  label {
    font-size: 18px;
    margin-bottom: 5px;
  }
  
  input[type="text"], input[type="password"] {
    width: 100%;
    padding: 12px 20px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    transition: 0.5s;
  }
  
  button {
    width: 100%;
    background-color: #333;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  
  button:hover {
    background-color: #ccc;
    color: black;
  }
</style>