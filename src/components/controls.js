import React from 'react';

export default ({pause, onTogglePaused}) => 
  <div className="field is-grouped is-grouped-centered">
  <p className="control">
    <button 
            className="button is-danger is-outline is-rounded is medium" 
            disabled={pause} 
            onClick={onTogglePaused}>
      Pause
    </button>
  </p>
    <p className="control">
    <button 
          className="button is-success is-outline is-rounded is medium"  
          disabled={!pause} 
          onClick={onTogglePaused}>
      Resume
    </button>
  </p>
</div>

 