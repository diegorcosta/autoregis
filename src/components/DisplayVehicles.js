const DisplayVehicles = ({ vehicles }) => {
  return (
    <ul>
      {vehicles.map((vehicle, id) => {
        return (
          <li key={id}>
            <h2>{vehicle.name}</h2>
          </li>
        );
      })}
    </ul>
  );
};

export default DisplayVehicles;
