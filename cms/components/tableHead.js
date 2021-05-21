export default function TableHead(props) {
  return (
    <thead>
      <tr>
        {props.src.map((head, index) => (
          <th key={index}>{head}</th>
        ))}
      </tr>
    </thead>
  )
}
