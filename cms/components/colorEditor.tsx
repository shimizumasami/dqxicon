type Props = {
  color: string,
}

const ColorEditor = (props: Props) => (
  <div
    style={{ 
      backgroundColor: props.color,
      width: '60px',
      height: '34px',      
    }}
    >
  </div>
)

export default ColorEditor
