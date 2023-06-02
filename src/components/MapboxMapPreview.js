import { useState, useRef } from "react";
import Map, { NavigationControl, Popup, Source, Layer } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Issues from "../issues.json";
import "../ui/MapboxMap.css";

const MapboxMapPreview = () => {
  const [selectedIssue, setSelectedIssue] = useState(null);
  const [viewport, setViewport] = useState({
    longitude: 39.994661737585325,
    latitude: -83.00715713180998,
    zoom: 12,
  });

  const [issues, setIssues] = useState({
    type: "FeatureCollection",
    features: Issues.map((issue, i) => ({
      type: "Feature",
      properties: {
        id: i,
        issue,
      },
      geometry: {
        type: "Point",
        coordinates: [issue.longitude, issue.latitude],
      },
    })),
  });

  const mapRef = useRef(null);

  const onClick = (event) => {
    try {
      const issue = JSON.parse(event.features[0].properties.issue);
      setSelectedIssue(issue);
    } catch (err) {
      setSelectedIssue(null);
    }
  };

  return (
    <div className="mapContainer">
      <Map
        container={"map"}
        projection={"globe"}
        initialViewState={{ viewport }}
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        style={{ width: "100%", height: "100vh" }}
        mapStyle="mapbox://styles/sidewalk-sidekick/clh17gluf013801pa0ozl95g8"
        scrollZoom={false}
        onClick={onClick}
        interactiveLayerIds={["unclustered-point"]}
        ref={mapRef}
      >
        <NavigationControl />

        <Source
          id="issues"
          type="geojson"
          data={issues}
          cluster={true}
          clusterMaxZoom={14}
          clusterRadius={50}
        >
          <Layer
            id={"clusters"}
            type="circle"
            filter={["has", "point_count"]}
            paint={{
              "circle-color": [
                "step",
                ["get", "point_count"],
                "salmon",
                100,
                "lightcoral",
                750,
                "lightsalmon",
              ],
              "circle-radius": [
                "step",
                ["get", "point_count"],
                20,
                100,
                30,
                750,
                40,
              ],
            }}
          />
          <Layer
            id={"cluster-count"}
            type="symbol"
            filter={["has", "point_count"]}
            layout={{ "text-field": "{point_count_abbreviated}" }}
          />
          <Layer
            id={"unclustered-point"}
            type="symbol"
            source="issues"
            filter={["!", ["has", "point_count"]]}
            layout={{ "icon-size": 1, "icon-image": "marker-editor" }}
          ></Layer>
        </Source>

        {selectedIssue && (
          <Popup
            longitude={selectedIssue.longitude}
            latitude={selectedIssue.latitude}
            closeOnClick={false}
            closeOnMove={false}
            onClose={() => setSelectedIssue(null)}
            anchor="left"
          >
            <div className="popupCard">
              <div className="popupCardContent">
                <div className="popupCardTextBox">
                  <h1 className="popupCardTextBoxHeading">Location</h1>
                  <ul className="popupCardCoordinates">
                    <li className="coordinate">{selectedIssue.latitude}</li>
                    <li className="coordinate">{selectedIssue.longitude}</li>
                  </ul>
                </div>
                <div className="popupCardTextBox">
                  <h2 className="popupCardTextBoxHeading">Issue Type(s)</h2>
                  <ul className="popupCardIssues">
                    {selectedIssue.tags.map((tag) => (
                      <li className="issue">{tag.name}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Popup>
        )}
      </Map>
    </div>
  );
};

export default MapboxMapPreview;
