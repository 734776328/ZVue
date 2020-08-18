<template>
  <div>
    <table :class="['z-table']" @click="selectCell($event)">
      <tr>
        <th v-for="(item, index) in cellLists[0].row" :key="index">{{ cols[index] }}</th>
      </tr>
      <tr v-for="(item, index) in cellLists" :key="index">
        <td v-for="(content, i) in item.row" :key="i">
          <input type="text" class="test" v-model="content.content"/>
        </td>
      </tr>
    </table>
  </div>
</template>
  
<script>
export default {
  name: 'z-excel',
  props: {
    cellLists: {
      type: Array,
      default: () => {
        return [
          {
            row: [
              { content: '1'},
              { content: '2'},
              { content: '3'}
            ],
            id: 1
          },
          {
            row: [
              { content: '1'},
              { content: '2'},
              { content: '3'}
            ],
            id: 2
          },
          {
            row: [
              { content: '1'},
              { content: '2'},
              { content: '3'}
            ],
            id: 3
          },
          {
            row: [
              { content: '1'},
              { content: '2'},
              { content: '3'}
            ],
            id: 4
          }
        ]
      },
    }
  },
  data () {
    return {
      cols: 'ABCDEFGHIJKLNMOPQRSTUVWSYZ'.split('') 
    }
  },
  methods: {
    selectCell ($event) {
      // $event.target.classList.add('z-table-cell-selected')
    }
  }
}
</script>
<style>
</style>
  