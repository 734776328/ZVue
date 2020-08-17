<template>
  <div id="wrap" style="width:700px;margin:0 auto;background:#fff;">
    <div style="width:100%;">
      <z-row :gutter="50" style="background:yellow;">
        <z-col :span="6">
          <div style="background:#D3DCE6;border-radius:3px;text-align:center;">1</div>
        </z-col>
        <z-col :span="6">
          <div style="background:#D3DCE6;border-radius:3px;text-align:center;">2</div>
        </z-col>
        <z-col :span="6">
          <div style="background:#D3DCE6;border-radius:3px;text-align:center;">3</div>
        </z-col>
        <z-col :span="6">
          <div style="background:#D3DCE6;border-radius:3px;text-align:center;">4</div>
        </z-col>
      </z-row>
      <z-row style="background:yellow;margin-top:10px;">
        <z-col :span="6">
          <div style="background:#D3DCE6;border-radius:3px;text-align:center;">1</div>
        </z-col>
        <z-col :span="6">
          <div style="background:#D3DCE6;border-radius:3px;text-align:center;">2</div>
        </z-col>
        <z-col :span="6">
          <div style="background:#D3DCE6;border-radius:3px;text-align:center;">3</div>
        </z-col>
        <z-col :span="6">
          <div style="background:#D3DCE6;border-radius:3px;text-align:center;">4</div>
        </z-col>
      </z-row>
    </div>

    <div>
      <z-row>
        <z-input type="textarea" v-model="editContent" @click="click('edit')" :disabled="false"></z-input> {{ editContent }}
      </z-row>
      <z-row>
        <z-input type="text" v-model="inputContent" @click="click('edit')" :disabled="false"></z-input>
        {{inputContent}}
      </z-row>
      <z-row>
        <z-input type="text" v-model="inputContent" @click="click('edit')"></z-input>
        {{inputContent}}
      </z-row>
    </div>
  </div>
</template>
  
<script>
export default {
  data () {
    return {
      editContent: 1,
      inputContent: 1
    }
  },
  methods: {
    click (content) {
      alert(content)
    }
  },
}
</script>
<style scoped lang="scss">
  #wrap{
    > div {
      margin-top: 10px !important;
    }
  }
</style>
  