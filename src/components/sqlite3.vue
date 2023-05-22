<template>
  <div class="content">
    sqlite3
  </div>
</template>

<script>

var sqlite3 = require('sqlite3')
export default {
  name: 'sqliteTest',
  mounted () {
    const db = new sqlite3.Database(':memory:')

    db.serialize(() => {
      db.run('CREATE TABLE lorem (info TEXT)')

      const stmt = db.prepare('INSERT INTO lorem VALUES (?)')
      for (let i = 0; i < 10; i++) {
        stmt.run('Ipsum ' + i)
      }
      stmt.finalize()

      // eslint-disable-next-line handle-callback-err
      db.each('SELECT rowid AS id, info FROM lorem', (err, row) => {
        console.log(row.id + ': ' + row.info)
      })
    })

    db.close()
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
</style>
