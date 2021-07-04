import schisma from 'schisma'

export const RequiredStringSchema = schisma({
  $type: String,
  $validate: v => {
    if (v == '') return 'field must not be empty'
  },
})
