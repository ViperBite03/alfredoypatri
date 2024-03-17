import { defineDb, defineTable, column } from 'astro:db'

const Guest = defineTable({
  columns: {
    nombre: column.text(),
    asisto: column.text({ optional: true }),
    transporte: column.text({ optional: true }),
    alergias: column.text({ optional: true }),
    alcohol: column.text({ optional: true }),
    mezcla: column.text({ optional: true }),
  },
})

export default defineDb({
  tables: { Guest },
})
