<template>
  <div>
    <header>
      <div class="header-bar">
        <div class="logo">
          Logo
        </div>
      </div>
      <nav>

      </nav>
    </header>

    <div class="content">
      <div class="banner">
        <div class="banner-text">
          <h3>鸭爵金砖杯肉鸽挑战赛</h3>
          <p>
            那个孩子走入深海，那夜暴雨笼罩来路。你听见，风的呼号，雨的震怒！灰
            暗沙滩已然寂灭，只余灯塔残缺，孤独守望。
            世界，屏住了呼吸。海洋的尖啸响彻天地！你看到，汪洋淹没一切，这片大
            地，早已奄奄一息。
            你不再停留，寻找那个孩子的踪迹……
            欢迎来到，明日方舟水月肉鸽开荒赛！
          </p>
        </div>
        <div class="banner-img">
          <img src="@/assets/poster.jpg" alt="" srcset="">
        </div>
      </div>
      <div class="information">
        <div class="context-nav">
          <div class="context-nav-item">
            关于比赛
          </div>
          <div class="context-nav-item">
            参赛报名
          </div>
          <div class="context-nav-item">
            赛制查询
          </div>
          <div class="context-nav-item">
            选手信息
          </div>
        </div>
        <div class="articles">
          <div class="title">
            <a href="#">比赛公告</a>
            <span>更多 ></span>
          </div>
          <ul class="article-list">
            <li>
              <a href="">
                比赛报名通知
                <span> 2023/7/22</span>
              </a>
            </li>
            <li>
              <a href="">
                比赛报名通知
                <span> 2023/7/22</span>
              </a>
            </li>
            <li>
              <a href="">
                比赛报名通知
                <span> 2023/7/22</span>
              </a>
            </li>
            <li>
              <a href="">
                比赛报名通知
                <span> 2023/7/22</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <footer>

    </footer>
  </div>
</template>

<script>
export default {
  name: 'HamuHome', // Replace with your component name
  data() {
    return {
      // Your component data here
    }
  },
  computed: {
    // Your computed properties here
  },
  methods: {
    // Your methods here
  },
  mounted() {
    this.$toast.$success("成功", "这是一条成功的信息", 5000)
    this.$toast.$error("成功", "这是一条成功的信息", 5000)
    this.$toast.$warning("成功", "这是一条成功的信息", 5000)
    this.$toast.$info("成功", "这是一条成功的信息", 5000)
  }
}
</script>

<style scoped>
/* Your component styles here */
header,
footer {
  min-width: 1280px;
}

header .header-bar {
  position: relative;
  width: 100%;
  height: 56px;
  background: #374049;
}

header .header-bar .logo {
  position: relative;
  left: 32px;
  color: white;
  line-height: 56px;
  font-size: 24px;
}

header nav {
  width: 100%;
  height: 48px;
  background: #C7CACF;
}

.content {
  width: 1280px;
  padding-top: 32px;
  margin: 0 auto;
}

.content .content-box {
  height: 100%;
}

.content>div {
  margin-bottom: 32px;
}

.content .banner {
  display: flex;
  align-items: center;
  width: 100%;
  height: 512px;
  background: #C7CACF;
}

.content .banner .banner-text {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 360px;
  width: 100%;
  padding: 16px;
  background: #F5F8FF;
}

.content .banner .banner-text h3 {
  margin-bottom: 16px;
}

.content .banner .banner-img img {
  height: 512px;
  object-fit: cover;
}

.content .information {
  display: flex;
}

.content .information .context-nav .context-nav-item {
  width: 298px;
  height: 138px;
  background-color: #F5F8FF;
  margin-bottom: 16px;
  border: 4px solid #C7CACF;
}

.content .information .context-nav .context-nav-item:last-child {
  margin-bottom: 0;
}

.content .information .articles {
  flex: 1;
  margin-left: 36px;
}

.content .information .articles .title {
  display: flex;
  justify-content: space-between;
  align-items: end;
  margin-bottom: 16px;
}

.content .information .articles .title a {
  font-size: 24px;
  font-weight: 600;
  color: #374049;
}

.content .information .articles .article-list {
  overflow: hidden;
  font-size: 0;
}

.content .information .articles .article-list li {
  position: relative;
  height: 40px;
  width: 100%;
  font-size: 16px;
  line-height: 40px;
}
.content .information .articles .article-list li span {
  position: absolute;
  right: 0;
}

.content .information .articles .article-list li::before {
  content: "•";
  margin-right: 5px;
}

footer {
  background: #374049;
  height: 196px;
}</style>
