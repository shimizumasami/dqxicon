type Props = {
  heads: string[]
}

const TableHead = (props: Props) => (
  <thead>
    <tr>
      {props.heads.map((head, index) => (
        <th key={index}>{head}</th>
      ))}
    </tr>
  </thead>
)

export default TableHead