const PowerGridPage = ({userinfo }) => {

    const PowerGridRow = ({battery}) => {
        return(
            <tr>
                <td>{battery.identity.firstName} {battery.identity.lastName}</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        )
    }

    let powerGridJSX = userinfo.map(battery => {
        return <PowerGridRow key={battery.user.id} battery={battery}/>
    })

} 

return (
    <div>
        <h2> </h2>
    </div>
)