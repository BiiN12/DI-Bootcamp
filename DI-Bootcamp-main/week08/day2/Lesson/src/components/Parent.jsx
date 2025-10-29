function Parent(props) {
    console.log(props)
    if(props.admin == "john") {
        return props.children
    }

  return (
    <h2>Parent</h2>
  )
}


export default Parent
