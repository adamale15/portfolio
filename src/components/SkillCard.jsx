import React from "react";

function SkillCard({ skill }) {
  return (
    <div>
      <h3>{skill.name}</h3>
      <p>Level: {skill.level}</p>
    </div>
  );
}

export default SkillCard;
