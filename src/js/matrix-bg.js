/**
 * Fondo animado estilo Matrix para BKP CESOP.
 * Lluvia sutil de caracteres azul/cian sobre fondo #070b14.
 */
(function () {
  'use strict';

  var CHARS = ['0', '1', 'R', 'A', 'M', 'T', 'I', 'K', '◢', '◣', '▸'];

  var canvas, ctx, width, height, columns, drops;
  var FONT_SIZE = 16;
  var SPEED = 0.6;          // velocidad sutil
  var TRAIL_ALPHA = 0.06;  // rastro que se desvanece

  function init() {
    canvas = document.getElementById('matrix-canvas');
    if (!canvas) return;
    ctx = canvas.getContext('2d');
    resize();
    window.addEventListener('resize', resize);
    requestAnimationFrame(loop);
  }

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    columns = Math.floor(width / FONT_SIZE);
    drops = [];
    for (var i = 0; i < columns; i++) {
      drops[i] = Math.random() * (height / FONT_SIZE) * -1;
    }
  }

  function pickChar() {
    return CHARS[Math.floor(Math.random() * CHARS.length)];
  }

  function loop() {
    // rastro que se desvanece
    ctx.fillStyle = 'rgba(7, 11, 20, ' + TRAIL_ALPHA + ')';
    ctx.fillRect(0, 0, width, height);

    ctx.font = FONT_SIZE + 'px "Share Tech Mono", "Courier New", monospace';

    for (var i = 0; i < drops.length; i++) {
      var x = i * FONT_SIZE;
      var y = drops[i] * FONT_SIZE;

      // mezcla de tonos azul eléctrico y cian brillante
      var t = Math.random();
      if (t < 0.35) {
        ctx.fillStyle = '#00a8ff';
      } else if (t < 0.65) {
        ctx.fillStyle = '#0051ff';
      } else {
        ctx.fillStyle = '#5ab0ff';
      }

      // cabeza más brillante
      if (Math.random() < 0.08) {
        ctx.fillStyle = '#bfe3ff';
      }

      ctx.fillText(pickChar(), x, y);

      // avanzar gota
      if (y > height && Math.random() > 0.975) {
        drops[i] = 0;
      } else {
        drops[i] += SPEED + Math.random() * 0.4;
      }
    }

    requestAnimationFrame(loop);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
