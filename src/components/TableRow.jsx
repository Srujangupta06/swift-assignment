const TableRow = (props) => {
    const {tableData} = props;
    const {id,name,email,body} = tableData
  return (
    <tr  className="border-t border-gray-300 hover:bg-gray-50">
      <td className="px-4 py-3 text-sm text-gray-600 capitalize">{id}</td>
      <td className="px-4 py-3 text-sm text-gray-600 capitalize">{name}</td>
      <td className="px-4 py-3 text-sm text-gray-600">{email.toLowerCase()}</td>
      <td className="px-4 py-3 truncate max-w-xs text-sm text-gray-600 capitalize">{body}</td>
    </tr>
  );
};

export default TableRow;
