import store from '@/store/'

export const fieldsFormat = (fields, fieldList, key) => {
  return fieldList.map(item => {
    const field = fields[item]
    return {
      name: item,
      ...field,
      form: {
        ...field.form,
        ...field[key]
      }
    }
  })
}
export const fieldsGetRelation = async (fields) => {
  const relationList = fields.filter(({ relation }) => relation).map(({ relation }) => relation)
  const relations = await store.dispatch('relation/getRelation', relationList)
  return fields.map((field) => {
    if (!field.relation) return field
    return {
      ...field,
      options: relations[field.relation]
    }
  })
}
