const PowerGridPage = ({ userinfo }) => {


  const PowerGridRow = ({ battery }) => {
    return (
      <tr>
        <td>
          {battery.identity.firstName} {battery.identity.lastName}
        </td>
        <td>{battery.social?.worthHowMuch?.()}</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    );
  };

  let powerGridJSX = userinfo.map((battery) => {
    return <PowerGridRow key={battery.user.id} battery={battery} />;
  });

  return (
    <div>
      <h2>List of Batteries </h2>
      {userinfo.length ? (
        <>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Battery Name</th>
                <th>Battery Type</th>
                <th>Capacity</th>
                <th>Voltage</th>
                <th>Charge Status</th>
                <th>Health Status</th>
              </tr>
            </thead>
            <tbody>{powerGridJSX}</tbody>
          </table>
        </>
      ) : (
        <p>No batteries found.</p>
      )}
    </div>
  );
};

export default PowerGridPage;
