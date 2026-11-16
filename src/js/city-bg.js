/**
 * Fondo animado: mapamundi punteado (dotted world map) corporativo.
 * Solo se activa en la pantalla de login.
 */
(function () {
  'use strict';

  var canvas, ctx, width, height;
  var dots = [];
  var pulses = [];
  var time = 0;

  // Silueta aproximada de continentes (elipses normalizadas 0..1)
  var continents = [
    // Norteamérica
    {cx:0.18, cy:0.32, rx:0.10, ry:0.10},
    {cx:0.22, cy:0.28, rx:0.06, ry:0.07},
    {cx:0.16, cy:0.40, rx:0.05, ry:0.06},
    // Centroamérica
    {cx:0.24, cy:0.42, rx:0.03, ry:0.05},
    // Sudamérica
    {cx:0.27, cy:0.55, rx:0.05, ry:0.12},
    {cx:0.29, cy:0.62, rx:0.04, ry:0.08},
    // Europa
    {cx:0.48, cy:0.30, rx:0.06, ry:0.07},
    {cx:0.50, cy:0.26, rx:0.04, ry:0.05},
    // África
    {cx:0.52, cy:0.45, rx:0.07, ry:0.13},
    {cx:0.50, cy:0.55, rx:0.04, ry:0.06},
    // Asia
    {cx:0.62, cy:0.30, rx:0.12, ry:0.10},
    {cx:0.68, cy:0.34, rx:0.08, ry:0.08},
    {cx:0.60, cy:0.40, rx:0.06, ry:0.07},
    {cx:0.72, cy:0.38, rx:0.05, ry:0.06},
    // Australia
    {cx:0.78, cy:0.62, rx:0.06, ry:0.05},
    {cx:0.80, cy:0.58, rx:0.04, ry:0.04},
    // Japón
    {cx:0.74, cy:0.32, rx:0.02, ry:0.04}
  ];

  function inContinent(nx, ny) {
    for (var i = 0; i < continents.length; i++) {
      var c = continents[i];
      var dx = (nx - c.cx) / c.rx;
      var dy = (ny - c.cy) / c.ry;
      if (dx * dx + dy * dy <= 1) return true;
    }
    return false;
  }

  function buildDots() {
    dots = [];
    pulses = [];
    var step = 16;
    for (var y = step; y < height; y += step) {
      for (var x = step; x < width; x += step) {
        var nx = x / width;
        var ny = y / height;
        if (inContinent(nx, ny)) {
          // ruido orgánico en los bordes
          if (Math.random() < 0.12) continue;
          dots.push({ x: x, y: y, color: Math.random() < 0.85 ? 'rgba(148, 163, 184, 0.14)' : 'rgba(56, 189, 248, 0.15)' });
        }
      }
    }
    // puntos de pulso en América (presencia regional)
    pulses.push({ x: width * 0.20, y: height * 0.36, phase: 0 });
    pulses.push({ x: width * 0.26, y: height * 0.58, phase: 1.2 });
    pulses.push({ x: width * 0.18, y: height * 0.46, phase: 2.4 });
  }

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    buildDots();
  }

  function applyStyles() {
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '0';
    canvas.style.pointerEvents = 'none';
    canvas.style.display = 'block';
  }

  function loop(now) {
    if (!time) time = now;
    var t = (now - time) / 1000;

    ctx.clearRect(0, 0, width, height);

    // puntos del mapamundi
    for (var i = 0; i < dots.length; i++) {
      var d = dots[i];
      ctx.fillStyle = d.color;
      ctx.beginPath();
      ctx.arc(d.x, d.y, 1.1, 0, Math.PI * 2);
      ctx.fill();
    }

    // pulso sutil en puntos clave de América
    for (var j = 0; j < pulses.length; j++) {
      var pu = pulses[j];
      var pulse = (Math.sin(t * 1.2 + pu.phase) + 1) / 2;
      var r = 4 + pulse * 6;
      var a = 0.08 + pulse * 0.22;
      ctx.save();
      ctx.globalAlpha = a;
      ctx.shadowColor = 'rgba(56, 189, 248, 0.6)';
      ctx.shadowBlur = 12;
      ctx.fillStyle = 'rgba(56, 189, 248, 1)';
      ctx.beginPath();
      ctx.arc(pu.x, pu.y, r, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    requestAnimationFrame(loop);
  }

  function init() {
    canvas = document.getElementById('city-canvas');
    if (!canvas) return false;
    ctx = canvas.getContext('2d');
    if (!ctx) return false;
    applyStyles();
    resize();
    window.addEventListener('resize', resize);
    requestAnimationFrame(loop);
    return true;
  }

  var retry = setInterval(function () {
    if (init()) clearInterval(retry);
  }, 200);

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { if (init()) clearInterval(retry); });
  }
})();
JS
echo updated