import React from "react";
import { Map, Marker } from "pigeon-maps";

const MapaFooter = () => {
  const ubicacion: [number, number] = [-24.18834, -65.31636];

  return (
    <Map height={220} defaultCenter={ubicacion} defaultZoom={18}>
      <Marker width={50} anchor={ubicacion} color="red" />
    </Map>
  );
};

export default MapaFooter;
