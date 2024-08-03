export const Table = ({data}) => {
    const {header, links} = data;
    return (
        <table>
            <strong>{header}</strong>
            {links.map((item, idx) => (
                <tbody key={idx}><tr >
                    <td><a href={item.url} target="_blank">{item.title}</a></td>
                    <td>{item.description}</td>
                </tr></tbody>
            ))}
            
        </table>
    )
}