// Adapt the existing tested queries to Durable Object SQLite; no D1 database.
export function sqliteAdapter(sql) {
  return {
    prepare(query) {
      return {
        bind(...parameters) {
          return {
            async first() { return sql.exec(query, ...parameters).toArray()[0] || null },
            async run() {
              sql.exec(query, ...parameters).toArray()
              return { meta: { changes: sql.exec('SELECT changes() AS changes').one().changes } }
            },
          }
        },
      }
    },
  }
}
