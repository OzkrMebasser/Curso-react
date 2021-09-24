import React, { createContext, useState } from "react";

const TeamContext = createContext();

const trainer = {
  name: "Daniel",
  team: [1, 2, 3]
};

const TeamProvider = ({ children }) => {
  const [user, setUser] = useState(trainer);

  const handleAddTeam = id => {
    if (user.team.length === 3) {
      alert("Tu equipo está completo");
    } else {
      setUser({ ...user, team: [...user.team, id] });
    }
  };

  const handleRemoveTeam = id => {
    console.log(user.team.length);
    setUser({
      ...user,
      team:
        user.team.length === 1
          ? []
          : user.team.filter(pokemon => pokemon !== id)
    });
  };

  console.log(user);

  const userData = { user, handleAddTeam, handleRemoveTeam };

  return (
    <TeamContext.Provider value={userData}>{children}</TeamContext.Provider>
  );
};

export { TeamProvider };
export default TeamContext;
