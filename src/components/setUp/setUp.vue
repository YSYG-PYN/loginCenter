<template>
    <div class="box">
        <!-- 头部导航栏 -->
        <ul class="navbar">
            <li :class="activeClass === index ? 'active' : ''" @click="handleActive(index)"
                v-for="(item, index) in navList" :key="index">{{item}}
            </li>
        </ul>
        <!-- 页面主体区域 -->
        <el-container>
            <!-- 页面侧边栏 -->
            <el-aside :width="isCollapse ? '64px' : '20.17rem'">
                <!-- 侧边栏菜单区域 -->
                <el-menu
                        default-active="2"
                        :collapse-transition="false"
                        :collapse="isCollapse"
                        unique-opened>
                    <el-menu-item index="1-4-1" class="home">
                        <template>
                            <i class="el-icon-s-home"></i>
                            <span style="color: #333333;">首页</span>
                        </template>
                    </el-menu-item>
                    <!-- 一级菜单 -->
                    <el-submenu :index="index + ''" v-for="(item, index) in 10" :key="index">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>一级菜单</span>
                        </template>
                        <!-- 二级菜单 -->
                        <el-submenu index="1-4" class="second-menu">
                            <template slot="title">
                                <span class="second-menu-title">二级菜单</span>
                            </template>
                            <el-menu-item index="1-4-1" @click="addTab(editableTabsValue)">功能2</el-menu-item>
                            <el-menu-item index="1-4-1" @click="addTab(editableTabsValue)">功能3</el-menu-item>
                            <el-menu-item index="1-4-1" @click="addTab(editableTabsValue)">功能4</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                    <div class="toggle-button" @click="toggleCollapse">|||</div>
                </el-menu>
            </el-aside>
            <!-- 右侧主体区域 -->
            <el-main>
                <el-tabs v-model="editableTabsValue" type="card" closable @tab-remove="removeTab">
                    <el-tab-pane
                            v-for="item in editableTabs"
                            :key="item.name"
                            :label="item.title"
                            :name="item.name"
                    >
                        {{item.content}}
                    </el-tab-pane>
                </el-tabs>
            </el-main>
        </el-container>
    </div>
</template>

<script>
export default {
  name: 'setUp',
  data () {
    return {
      activeClass: 0,
      navList: ['用户管理', '系统管理'],
      isCollapse: false,
      editableTabsValue: '1',
      editableTabs: [
        {
          title: 'Tab 1',
          name: '1',
          content: 'Tab 1 content'
        }, {
          title: 'Tab 2',
          name: '2',
          content: 'Tab 2 content'
        }
      ],
      tabIndex: 1
    }
  },
  methods: {
    handleActive (index) {
      this.activeClass = index
    },
    toggleCollapse () {
      this.isCollapse = !this.isCollapse
    },
    removeTab (targetName) {
      let tabs = this.editableTabs
      let activeName = this.editableTabsValue
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1]
            if (nextTab) {
              activeName = nextTab.name
            }
          }
        })
      }

      this.editableTabsValue = activeName
      this.editableTabs = tabs.filter(tab => tab.name !== targetName)
    },
    addTab(targetName) {
      let newTabName = ++this.tabIndex + '';
      this.editableTabs.push({
        title: '功能'+targetName,
        name: newTabName,
        content: 'New Tab content'
      });
      this.editableTabsValue = newTabName;
    },
  }
}
</script>

<style lang="less" scoped>
    .box {
        height: 100%;
    }

    .navbar {
        height: 5rem;
        position: absolute;
        top: 0px;
        right: 10rem;
        display: flex;
        align-items: center;

        li {
            width: 10.33rem;
            height: 2.67rem;
            text-align: center;
            line-height: 2.67rem;
            font-size: 1.17rem;
            font-weight: 600;
            color: #ffffff;
            border-radius: 1.67rem;
            cursor: pointer;
        }

        > li:hover {
            background: rgba(255, 255, 255, .2);
        }

        .active {
            background: rgba(255, 255, 255, .2);
        }
    }

    .el-container {
        height: 100%;
    }

    .el-menu {
        height: 100%;
    }

    .second-menu {
        text-align: center;
    }

    .second-menu-title {
        color: #999999;
    }

    .toggle-button {
        width: 100%;
        background-color: #4a5064;
        text-align: center;
        font-size: 10px;
        color: #fff;
        line-height: 24px;
        letter-spacing: 0.2em;
        cursor: pointer;
        position: absolute;
        bottom: 0;
    }


</style>
