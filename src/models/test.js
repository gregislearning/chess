export default {
  name: 'test',
  state: {message: ""},
  reducers: {
    test(state, payload) {
      return {...state, message: payload.message}
    }
  }
}