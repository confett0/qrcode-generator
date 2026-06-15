export default function OptionalSettings({ gridSettings, handleChange }) {
  const { title, flexDirection, rowGap, columnGap } = gridSettings;
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
