/*
 * blah blah
 */

(function(L) {

  function svgStyleDomEl(el, styles) {
    // stroke bool
    // color stroke color
    // weight stroke width
    // opacity stroke opacity
    // fill bool
    // fillColor defaults to color
    // fillOpacity defaults 0.2
    // dashArray I guess just dashed (maybe dotted sometimes?)
  }

  var _svgishDivIcon = L.Icon.extend({

    options: {
      className: 'leaflet-div-style-icon',
      html: ''
    },

    createIcon: function(oldIcon) {
      var div = (oldIcon && oldIcon.tagName === 'DIV') ? oldIcon : document.createElement('div'),
          options = this.options;

      div.innerHTML = options.html;

      if (options.style) {
        // wooo

        // div.style.background = 
      }

      this._setIconStyles(div, 'icon');
    },

    createShadow: function() {
      return null;
    }

  });


  L.RectangleDivIcon = _svgishDivIcon.extend({
    // should accept a [w, h] size as first param
  });


  L.CircleDivIcon = _svgishDivIcon.extend({
    // should accept a radius as first param
  });


  L.circleDivIcon = function(options) {
    return new L.CircleDivIcon(options);
  };

  L.rectangleDivIcon = function(options) {
    return new L.RectangleDivIcon(options);
  };

})(L);
