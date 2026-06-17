export function useMode(props, emit) {
  const setMode = (val) => {
    if (props.isDevMode !== val) {
      emit('update:isDevMode', val)
    }
  }
  return { setMode }
}
