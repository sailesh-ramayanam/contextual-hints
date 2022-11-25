export const Constants = {
  TYPE_LECTURE: 'Lecture',
  TYPE_PRACTICE: 'Practice',
};

function setupTiledeskObj() {
  var tildeskObj = function () {
    tildeskObj.c(arguments);
  };
  tildeskObj.q = [];
  tildeskObj.c = function (args) {
    tildeskObj.q.push(args);
  };
  window.Tiledesk = tildeskObj;
}

function loadTileDeskScript(doc, elemType, elemId) {
  let fjs = doc.getElementsByTagName(elemType)[0];
  if (doc.getElementById(elemId)) {
    console.log('Tiledesk already exists');
    return;
  }

  setupTiledeskObj();
  let js = doc.createElement(elemType);
  js.id = elemId;
  js.async = true;
  js.src = 'https://widget.tiledesk.com/v5/launch.js';
  fjs.parentNode.insertBefore(js, fjs);
}

function onServerSide() {
  return (typeof window === "undefined");
}

export function initTiledesk() {
  if (onServerSide()) {
    return;
  }
  console.log('initTiledesk');
  window.tiledeskSettings = {
    projectid: '5f7dcc8b9c9f020012441a19',
    startHidden: true,
  };
  loadTileDeskScript(document, 'script', 'tiledesk-jssdk');
}

export function openTiledesk() {
  if (onServerSide()) {
    return;
  }
  console.log('openTiledesk');
  window.Tiledesk('show');
}

export function closeTiledesk() {
  if (onServerSide()) {
    return;
  }
  console.log('closeTiledesk');
  window.Tiledesk('hide');
}

export function disposeTiledesk() {
  if (onServerSide()) {
    return;
  }
  closeTiledesk();
  window.Tiledesk('dispose');
}
