import { defineDb, defineTable, column } from 'astro:db'

const Guest = defineTable({
  columns: {
    nombre: column.text(),
    asisto: column.text(),
    transporte: column.text(),
    alergias: column.text({ optional: true }),
    alcohol: column.text({ optional: true }),
    mezcla: column.text({ optional: true }),
  },
})

export default defineDb({
  tables: { Guest },
})
