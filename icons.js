/*
 * blah blah
 */

(function(L) {

  var _svgishDivIcon = L.Icon.extend({

    options: {
      className: 'leaflet-div-style-icon',
      html: '',

      stroke: true,
      color: '#3388ff',
      weight: 3,
      // opacity: 1,
      lineCap: 'round',
      lineJoin: 'round',
      dashArray: null,
      fill: true,
      fillColor: null,  // same as color by default
      // fillOpacity: 0.2,
    },

    createIcon: function(oldIcon) {
      var div = (oldIcon && oldIcon.tagName === 'DIV') ? oldIcon : document.createElement('div');
      div.innerHTML = this.options.html;
      this._setCssStyles(div, this.options);
      this._setIconStyles(div, 'icon');
      return div;
    },

    _setCssStyles: function(el, options) {
      if (options.stroke) {
        var borderTemplate = '{width}px {dasher} {color}';
        var dasher = options.dashArray ? 'dashed' : 'solid';  // TODO: sometimes dotted?
        el.style.border = L.Util.template(borderTemplate, {
          width: options.weight,
          dasher: dasher,
          color: options.color
          // TODO: opacity... use rgba color for now
        });
      }
      if (options.fill) {
        el.style.background = options.fillColor || options.color;
        // TODO: fillOpacity... use rgba fillColor for now
      }
    },

    createShadow: function() {
      return null;
    }

  });


  L.RectangleDivIcon = _svgishDivIcon.extend({
    initialize: function(size, options) {
      L.setOptions(this, options);
      this._size = L.point(size);
    },

    _setCssStyles: function(el, options) {
      el.style.width = this._size.x + 'px';
      el.style.height = this._size.y + 'px';
      return _svgishDivIcon.prototype._setCssStyles.apply(this, arguments);
    }
  });


  L.CircleDivIcon = _svgishDivIcon.extend({
    initialize: function(radius, options) {
      L.setOptions(this, options);
      this._radius = radius;
    },

    _setCssStyles: function(el, options) {
      el.style.width = this._radius * 2 + 'px';
      el.style.height = this._radius * 2 + 'px';
      el.style.borderRadius = this._radius * 2 + 'px';
      return _svgishDivIcon.prototype._setCssStyles.apply(this, arguments);
    }
  });


  L.circleDivIcon = function(options) {
    return new L.CircleDivIcon(options);
  };

  L.rectangleDivIcon = function(options) {
    return new L.RectangleDivIcon(options);
  };

})(L);
