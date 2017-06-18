<template>
    <div id="app">
        <v-toast v-show="showToast"></v-toast>
        <v-alert v-show="showAlert"></v-alert>
        <v-loading v-show="loading"></v-loading>

        <v-header :title="title" :menu-display="menuDisplay" :back-display="backDisplay" :map-display="mapDisplay"></v-header>
        <div class="content" :class="{tabar: tabar}">
            <transition name="slide-left">
                <router-view></router-view>
            </transition>  
        </div>
        <v-tabar></v-tabar>
        <v-sidebar></v-sidebar>
  </div>
</template>

<script>
import tabar from '@/components/tabar'
import header from '@/components/header'
import sidebar from '@/components/sidebar'
import toast from '@/components/toast'
import alert from '@/components/alert'
import loading from '@/components/loading'

import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'app',
  components: {
		'v-tabar': tabar,
    'v-header': header,
    'v-sidebar': sidebar,
		'v-toast': toast,
		'v-alert': alert,
		'v-loading': loading,
	},
  data () {
    return {
      
    }
  },
  watch: {
      // 如果路由有变化，会再次执行该方法
      '$route': 'hideMenuSlide'
  },
  methods: {
      ...mapActions({ setNavState: 'setNavState' }),
      // 隐藏MenuSlide
      hideMenuSlide() {
        this.setNavState(false)
      },
      // 禁止滚屏穿透
      banScroll(){
          document.querySelector('.content').addEventListener('touchmove', e => e.preventDefault());
          console.log(11);

      }
     
  },
  computed: {
      ...mapGetters([
          'loading',
          'showToast',
          'showAlert'
      ]),
      title () {
        switch (this.$route.path.split('/')[1]) {
            case '':
              return "推荐"
            case 'home':
              return "推荐"
            case 'sport':
              return "贷款"
            case 'travel':
              return "攻略"
            case 'user':
              return "我的"
        }
      },
      tabar () {
        return this.$route.path.split('/').length > 2 ? false : true
      },
      menuDisplay () {
        if (this.$route.path.split('/')[1] == 'home') {
          return false
        }
        return this.$route.path.split('/').length > 2 ? false : true
      },
      backDisplay () {
        return this.$route.path.split('/').length > 2 ? true : false
      },
      mapDisplay () {
        if (this.$route.path.split('/')[1] == 'home') {
          return true
        }
        return false
      }
  },
  mounted(){
    console.log(this.$route)
  }
}
</script>

<style lang="scss">
@import './assets/css/function';

@font-face {
  font-family: 'icon';  /* project id 172436 */
  // src: url('http://at.alicdn.com/t/font_w71lovnj7adobt9.eot');
  // src: url('http://at.alicdn.com/t/font_w71lovnj7adobt9.eot?#iefix') format('embedded-opentype'),
  // url('http://at.alicdn.com/t/font_w71lovnj7adobt9.woff') format('woff'),
  // url('http://at.alicdn.com/t/font_w71lovnj7adobt9.ttf') format('truetype'),
  // url('http://at.alicdn.com/t/font_w71lovnj7adobt9.svg#iconfont') format('svg');

  src: url('//at.alicdn.com/t/font_t0qgqg37p1wz5mi.eot');
  src: url('//at.alicdn.com/t/font_t0qgqg37p1wz5mi.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_t0qgqg37p1wz5mi.woff') format('woff'),
  url('//at.alicdn.com/t/font_t0qgqg37p1wz5mi.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_t0qgqg37p1wz5mi.svg#iconfont') format('svg');
}
.icon {
    font-family:"icon" !important;
    font-size:18px;
    font-style:normal;
    color: #ffffff;
}

html,body {
  height: 100%;
}

a.active {
  text-decoration: none;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  background: #F5F5F5;
  .content{
    padding-top: px2rem(100px);
    background: #F5F5F5;
  }
  .tabar {
    // margin-bottom: px2rem(120px);
    padding-bottom: px2rem(60px);
  }
  //渐变动效
  .slide-left-enter-active,
  .slide-left-leave-active {
    transition: all .1s ease-in;
    opacity: 1;
  }
  .slide-left-enter,
  .slide-left-leave-active {
    opacity: 0;
  }

  //左滑动效
  // .slide-left-enter-active {
  //   animation: slideLeft .3s;
  // }
}

@keyframes slideLeft {
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
}


</style>
