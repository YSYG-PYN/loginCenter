<template>
    <div>
        <!-- 标签栏导航区域 -->
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

        <!-- 卡片页面 -->
<!--        <el-card>123</el-card>-->
    </div>
</template>
<script>
export default {
  data () {
    return {
      editableTabsValue: '2',
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
      removeTab(targetName) {
        let tabs = this.editableTabs;
        let activeName = this.editableTabsValue;
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab.name;
              }
            }
          });
        }

        this.editableTabsValue = activeName;
        this.editableTabs = tabs.filter(tab => tab.name !== targetName);
      }
    }
  },
  methods: {}
}
</script>
<style scoped>
</style>
