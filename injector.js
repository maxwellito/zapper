/**
 * This is hacky? No sh*t Sherlock!
 */
(function(){
  var layerEl, introEl, abortEl, overlayEl;
  var ESC_KEY = 27;

  function buildLayout() {

    // Create the invisible layer
    layerEl = document.createElement('div')
    layerEl.style.position = 'fixed'
    layerEl.style.display = 'flex'
    layerEl.style.flexDirection = 'column';
    layerEl.style.justifyContent = 'center';
    layerEl.style.alignItems = 'center';
    layerEl.style.top = 0;
    layerEl.style.bottom = 0;
    layerEl.style.left = 0;
    layerEl.style.right = 0;
    layerEl.style.background = 'rgba(127,127,127,.5)';
    layerEl.style.zIndex = 2147483645;
    layerEl.addEventListener('mousemove', overlayTarget);
    layerEl.addEventListener('click', zappTargetAndEnd);
    layerEl.addEventListener('contextmenu', zappOneTarget);
    document.body.appendChild(layerEl);

    // Intro
    introEl = document.createElement('p')
    introEl.style.width = '50%';
    introEl.style.fontSize = '1.5rem';
    introEl.style.fontFamily = 'sans-serif'
    introEl.style.fontWeight = 'bold'
    introEl.style.color = '#fff';
    introEl.style.textAlign = 'center'
    introEl.style.zIndex = 2147483647;
    layerEl.appendChild(introEl)

    // Intro text
    introTextEl = document.createElement('span')
    introTextEl.style.display = 'inline-block';
    introTextEl.style.fontSize = 'inherit';
    introTextEl.style.fontFamily = 'inherit';
    introTextEl.style.fontWeight = 'inherit';
    introTextEl.style.color = '#000'
    introTextEl.style.background = '#FFF';
    introTextEl.style.lineHeight = 1.2;
    introTextEl.style.padding = '.5em';
    introTextEl.textContent = 'CLICK ON ANY UNDESIRABLE ELEMENT. USE RIGHT CLICK FOR MORE THAN ONE. BE CAREFUL, UNEXPECTED BEHAVIOR CAN HAPPEN.'
    introEl.appendChild(introTextEl)

    // Abort button
    abortEl = document.createElement('span');
    abortEl.style.position = 'relative'
    abortEl.style.width = '4em'
    abortEl.style.padding = '.5em 1em'
    abortEl.style.fontFamily = 'sans-serif'
    abortEl.style.fontWeight = 'bold'
    abortEl.style.lineHeight = 2
    abortEl.style.color = '#fff'
    abortEl.style.textAlign = 'center';
    abortEl.style.background = '#000'
    abortEl.style.cursor = 'pointer';
    abortEl.style.zIndex = 2147483647;
    abortEl.textContent = 'ABORT'
    abortEl.addEventListener('click', abortMission);
    layerEl.appendChild(abortEl)

    // Overlay area
    overlayEl = document.createElement('div')
    overlayEl.style.position = 'absolute'
    overlayEl.style.top = '-10px';
    overlayEl.style.left = '-10px';
    overlayEl.style.background = 'linear-gradient(45deg, #f00 0%, #f00 5%, #f000 5.01%, #f000 44.9%, #f00 45%, #f00 55%, #f000 55.01%, #f000 95%, #f00 95%, #f00 100%)';
    overlayEl.style.backgroundSize = '10px 10px';
    overlayEl.style.border = '5px solid red';
    overlayEl.style.boxSizing = 'border-box';
    overlayEl.style.zIndex = 2147483646;
    overlayEl.style.cursor = 'crosshair';
    layerEl.appendChild(overlayEl);

    // Listens to key down to abort mission
    window.addEventListener('keydown', keyPressListener)
  }

  function findGuiltyDiv (el) {
    var styles, lastAbosulte, lastRelative,
        currentEl = el;

    while (currentEl !== document.body && currentEl !== document.documentElement) {
      styles = window.getComputedStyle(currentEl)

      switch (styles.position) {
        case 'fixed':
          return currentEl
        case 'absolute':
          lastAbosulte = currentEl;
          break;
        case 'relative':
          lastRelative = currentEl;
          break;
      }
      currentEl = currentEl.parentElement
    }

    return lastAbosulte || lastRelative || el;
  }

  function overlayTarget (e) {
    // Remove temporary the layer
    document.body.removeChild(layerEl);

    // Find the target element and it's position/dimensions
    var el = findGuiltyDiv(document.elementFromPoint(e.x, e.y)),
        box = el.getBoundingClientRect()

    // Apply the position/dimensions to the overlay
    overlayEl.style.top = box.top + 'px'
    overlayEl.style.left = box.left + 'px'
    overlayEl.style.width = box.width + 'px'
    overlayEl.style.height = box.height + 'px'

    // Set back the layer
    document.body.appendChild(layerEl);
  }

  function zappOneTarget (e, isEnding) {
    // Blocks click behavior
    e.stopPropagation();
    e.preventDefault();

    // Remove interface (temporarly)
    document.body.removeChild(layerEl);

    // Remove the undesired element
    var el = findGuiltyDiv(document.elementFromPoint(e.x, e.y))
    el.parentElement.removeChild(el);

    // Re append the interface (if desired)
    if (isEnding) {
      zapperEnd();
    }
    else {
      document.body.appendChild(layerEl);
    }
  }

  function zappTargetAndEnd (e) {
    zappOneTarget(e, true);
  }
 
  function abortMission (e) {
    e.stopPropagation();
    e.preventDefault();
    zapperEnd();
  }

  function zapperEnd () {
    window.removeEventListener('keydown', keyPressListener)
    if (layerEl.parentElement) {
      document.body.removeChild(layerEl);
    }
  }

  function keyPressListener (e) {
    if (e.keyCode === ESC_KEY) {
      zapperEnd();
    }
  }

  buildLayout();
})()