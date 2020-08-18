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

    <div>
      <z-excel></z-excel>
    </div>

    <z-row>
      <z-col :span="5">
        <z-button @click="click('123')">默认按钮</z-button>
      </z-col>
      <z-col :span="5">
        <z-button :backgroundColor="'#4DA5FE'" type="round">默认按钮</z-button>
      </z-col>
      <z-col :span="5">
        <z-button backgroundColor="#D2A290" type="circle">是</z-button>
      </z-col>
    </z-row>
    <z-row>
      <z-col :span="5">
        <z-button @click="click('123')" :disabled="true">默认按钮</z-button>
      </z-col>
      <z-col :span="5">
        <z-button :backgroundColor="'#4DA5FE'" type="round" :disabled="true">默认按钮</z-button>
      </z-col>
      <z-col :span="5">
        <z-button backgroundColor="#D2A290" type="circle" :disabled="true">是</z-button>
      </z-col>
    </z-row>

    <z-row>
      <z-col>
        <z-upload v-model="imgUrl" maxSize="1024" :fileType="['aaa','123','12312']">
          <template v-slot:maxTips>
            这是自定义的文件过大提示！
          </template>
        </z-upload>
        <img v-show="imgUrl" :src="imgUrl" style="width:300px;">
      </z-col>
    </z-row>
  </div>
</template>
  
<script>
export default {
  data () {
    return {
      editContent: 1,
      inputContent: 1,
      imgUrl: ''
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
  