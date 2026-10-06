export default function OptionalSettings({ gridSettings, handleChange }) {
  const { title, flexDirection, rowGap, columnGap, backgroundColor } =
    gridSettings;
  return (
    <div className="optional-settings">
      <fieldset>
        <label htmlFor="title">Inserisci titolo pagina (opzionale)</label>
        <input
          type="text"
          id="title"
          name="title"
          className="title-input"
          value={title}
          onChange={handleChange}
        />
      </fieldset>
      <fieldset>
        <legend>Direzione</legend>
        <div className="direction-selector-container">
          <div className="direction-input">
            <label htmlFor="direction-row">Orizzontale</label>
            <input
              type="radio"
              name="flexDirection"
              id="direction-row"
              value="row"
              checked={flexDirection === "row"}
              onChange={handleChange}
            />
          </div>
          <div className="direction-input">
            <label htmlFor="direction-column">Verticale</label>
            <input
              type="radio"
              name="flexDirection"
              id="direction-column"
              value="column"
              checked={flexDirection === "column"}
              onChange={handleChange}
            />
          </div>
        </div>
      </fieldset>
      <fieldset>
        <legend>Colore di sfondo</legend>
        <div className="background-selector-container">
          <div className="background-input">
            <label htmlFor="background-yellow">Giallo</label>
            <input
              type="radio"
              name="backgroundColor"
              id="background-yellow"
              value="yellow"
              checked={backgroundColor === "yellow"}
              onChange={handleChange}
            />
          </div>
          <div className="background-input">
            <label htmlFor="background-orange">Arancione</label>
            <input
              type="radio"
              name="backgroundColor"
              id="background-orange"
              value="orange"
              checked={backgroundColor === "orange"}
              onChange={handleChange}
            />
          </div>
          <div className="background-input">
            <label htmlFor="background-red">Rosso</label>
            <input
              type="radio"
              name="backgroundColor"
              id="background-red"
              value="coral"
              checked={backgroundColor === "coral"}
              onChange={handleChange}
            />
          </div>
          <div className="background-input">
            <label htmlFor="background-blue">Azzurro</label>
            <input
              type="radio"
              name="backgroundColor"
              id="background-blue"
              value="lightblue"
              checked={backgroundColor === "lightblue"}
              onChange={handleChange}
            />
          </div>
          <div className="background-input">
            <label htmlFor="background-orange">Verde</label>
            <input
              type="radio"
              name="backgroundColor"
              id="background-green"
              value="lightgreen"
              checked={backgroundColor === "lightgreen"}
              onChange={handleChange}
            />
          </div>
          <div className="background-input">
            <label htmlFor="background-orange">Bianco</label>
            <input
              type="radio"
              name="backgroundColor"
              id="background-white"
              value="white"
              checked={backgroundColor === "white"}
              onChange={handleChange}
            />
          </div>
        </div>
      </fieldset>
      <fieldset>
        <legend>Gap</legend>
        <div className="gap-selector-container">
          <div>
            <label htmlFor="row-gap">Righe</label>
            <input
              type="range"
              id="row-gap"
              name="rowGap"
              value={rowGap}
              min="0"
              max="3"
              step="0.5"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="column-gap">Colonne</label>
            <input
              type="range"
              id="column-gap"
              name="columnGap"
              value={columnGap}
              min="0"
              max="3"
              step="0.5"
              onChange={handleChange}
            />
          </div>
        </div>
      </fieldset>
    </div>
  );
}
