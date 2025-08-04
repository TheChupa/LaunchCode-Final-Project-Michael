import EditTextBox from "../form-builders/EditTextBox";
import { useNavigate } from "react-router-dom";
const PowerGridPage = ({ userinfo, refetch }) => {
  const navigate = useNavigate();

  const updateSocialInfo = async (id, newData, refetch) => {

    const newSocialData = {
      userId: id,
      identity: newData
    };

    try {
      
      const response = await fetch(`http://localhost:8080/api/user_info/update/${id}`,
        {
          method: "PATCH",
          headers: {"content-type": "application/json"},
          body: JSON.stringify(newSocialData),
        });

        const data = await response.json();
    
      if (response.ok) {
        if (typeof refetch === "function") refetch();
      } else {
        console.error("Failed to update user info:", response.statusText);
      }
    } catch (error) {
      console.error("Error updating user info:", error);
    } 
  };
  
  const updatePassword = async (id, newPassword, refetch) => {
    try {
      const response = await fetch(`http://localhost:8080/api/users/update-password/${id}`,
        {
          method: "PATCH",
          headers: {"content-type": "application/json"},
          body: JSON.stringify({ password: newPassword }),

        });
        
        if (response.ok) {
          if (typeof refetch === "function") refetch();
        }else {
          console.error("Failed to update password:", response.statusText);
      
        }
      } catch (error) {
        console.error("Error updating password:", error);
      }
    };



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
          <td><EditTextBox label="Password" value={battery.user.password} onSave={(newPassword) => updatePassword(battery.user.id, newPassword, refetch)} /></td>
          <td><EditTextBox label="Email" value={battery.identity.email} onSave={(newEmail) => updateSocialInfo(battery.user.id, { email: newEmail }, refetch)} /></td>
          <td>{battery.financial.hasCrypto ? "Yes" : "No"}</td>
          <td>{battery.identity.hasPassport ? "Yes" : "No"}</td>
          <td>{battery.identity.zipCode}</td>
          <td>{battery.identity.state}</td>
          <td>{battery.identity.isRenting ? "Yes" : "No"}</td>
          
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
      <main className="background">
      <div className="main-content">
      <div className = "power-grid-header">
        <h2>List of Batteries </h2>
        </div>
        <div className = "power-grid-container">
        {userinfo.length ? (
          <>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Battery Name</th>
                  <th>Password</th>
                  <th>Email</th>
                  <th>Has Crypto</th>
                  <th>Has PassPort</th>
                  <th>Zipcode</th>
                  <th>State</th>
                  <th>Is Renting</th>
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
        <button onClick={() => navigate("/admin")}>GO BACK</button>
        </div>
      </main>
    );
  };


export default PowerGridPage;
