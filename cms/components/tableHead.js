export default function TableHead(props) {
  return (
    <thead>
      <tr>
        {props.src.map((head) => (
          <th>{head}</th>
        ))}
      </tr>
    </thead>
  )
}
