<template>
  <div class="z-upload">
    <input type="file" style="display:none;" ref="nativeUpload" @change="uploadFile($event)">
    <div
      @click="handlerClick"
    >
      ＋
    </div>
    <span v-show="isFileToLarge"><slot name="maxTips">上传文件不符合，请重新选择！</slot></span>
    <span v-show="isFileType"><slot name="typeTips">上传文件类型不符合，请上传{{ filesString }}格式！</slot></span>
  </div>
</template>

<script>
import { parseUploadMaxSize, getFileTypeString } from '../utils.js'
export default {
  name: 'z-upload',
  props: {
    maxSize: {
      type: String
    },
    fileType: {
      type: Array
    }
  },
  data () {
    return {
      imgUrl: false,
      isFileToLarge: false,
      isFileType: false,
      filesString: getFileTypeString(this.fileType)
    }
  },
  methods: {
    handlerClick () {
      this.$refs.nativeUpload.click()
    },
    uploadFile (event) {
      console.log(event.target.files[0])
      let file = event.target.files[0]
      if (this.maxSize && (file.size > parseUploadMaxSize(this.maxSize))) {
        return this.isFileToLarge = true
      }
      if (this.fileType && this.fileType.includes('jpg')) {
        this.fileType.push('jpeg')
      }
      if (!this.fileType.includes(file.type.split('/')[1])) {
        return this.isFileType = true
      }
      if (this.imgUrl) window.URL.revokeObjectURL(this.objectURL)
      this.imgUrl = window.URL.createObjectURL(event.target.files[0])
      this.$emit('input', this.imgUrl)
    }
  }
}
</script>
