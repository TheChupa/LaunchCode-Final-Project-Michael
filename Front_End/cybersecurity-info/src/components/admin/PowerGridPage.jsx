const PowerGridPage = ({ userinfo, refetch }) => {
  
  
  const deleteBattery = async (id, refetch) => {
   
      try {
        let response = await fetch(
          `http://localhost:8080/api/users/delete/${id}`,
          {
            method: "DELETE",
          }
        );
        if (response.ok) {
          if(typeof refetch === "function") refetch(); {
            refetch();
          }
          // Handle successful deletion
        } else {
          console.error("Failed to delete battery:", response.statusText);
          // Handle error
        }
      } catch (error) {
        console.error("Error deleting battery:", error);
      }
    };

    const PowerGridRow = ({ battery }) => {
      return (
        <tr>
          <td>
            {battery.identity.firstName} {battery.identity.lastName}
          </td>
          <td>{battery.social?.worthHowMuch?.()}</td>
          <td>{battery.financial?.worthHowMuch?.()}</td>
          <td>{battery.identity?.worthHowMuch?.()}</td>
          <td>
            <button onClick={() => deleteBattery(battery.user.id, refetch)}>Delete</button>
          </td>
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
                  <th>Social Worth</th>
                  <th>Financial Worth</th>
                  <th>Identity Worth</th>
                  <th>Delete</th>
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
