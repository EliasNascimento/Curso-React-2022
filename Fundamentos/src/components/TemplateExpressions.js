const TemplateExpressions = () => {
  const name = "Elias";
  const data = {
    age: 36,
    job: "Software Developer",
  };

  return (
    <div>
      <h1>Olá {name}!</h1>
      <p>Job: {data.job}</p>
      <p>Idade: {data.age}</p>
      <br />

      <p> {} </p>
    </div>
  );
};

export default TemplateExpressions;
