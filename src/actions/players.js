export function SwitchActive(Players, id) {
  SelectPlayer(id)
  console.log(state);

  return (
    {
      type: "SwitchActive",
      payload: {active}
    }
  )
}

export function SelectPlayer(id) {
  return {
    type: 'SELECT_BY_ID',
    payload: id
  }
}
