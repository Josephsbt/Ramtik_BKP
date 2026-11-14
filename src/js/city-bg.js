/**
 * Fondo animado: skyline neón blanco + firma Ramtik + luces en ventanas.
 * Solo se activa en la pantalla de login.
 */
(function () {
  'use strict';

  var canvas, ctx, width, height;
  var state = 'draw';
  var startTime = 0;
  var completeTime = 0;
  var fadeStart = 0;
  var alpha = 1;
  var windows = [];
  var MAXLEN = 9000;

  var peaks = [
    [0, 0.86], [0.04, 0.86], [0.04, 0.72], [0.10, 0.72], [0.10, 0.86],
    [0.13, 0.86], [0.13, 0.62], [0.20, 0.62], [0.20, 0.86],
    [0.23, 0.86], [0.23, 0.50], [0.31, 0.50], [0.31, 0.86],
    [0.34, 0.86], [0.34, 0.40], [0.42, 0.40], [0.42, 0.86],
    [0.45, 0.86], [0.45, 0.26], [0.52, 0.26], [0.52, 0.86],   // pico central (detrás del login)
    [0.55, 0.86], [0.55, 0.46], [0.63, 0.46], [0.63, 0.86],
    [0.66, 0.86], [0.66, 0.58], [0.74, 0.58], [0.74, 0.86],
    [0.77, 0.86], [0.77, 0.68], [0.84, 0.68], [0.84, 0.86],
    [0.87, 0.86], [0.87, 0.78], [0.94, 0.78], [0.94, 0.86],
    [0.97, 0.86], [1.00, 0.86]
  ];

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    buildWindows();
  }

  function buildWindows() {
    windows = [];
    var base = height * 0.86;
    // generar ventanas en cada edificio (segmentos verticales)
    for (var i = 0; i < peaks.length - 1; i++) {
      var p1 = peaks[i], p2 = peaks[i + 1];
      if (p1[1] === p2[1]) continue; // solo segmentos verticales
      var x = p1[0] * width;
      var yTop = Math.min(p1[1], p2[1]) * height;
      var yBot = Math.max(p1[1], p2[1]) * height;
      var h = yBot - yTop;
      if (h < 40) continue;
      var cols = Math.max(1, Math.floor((p2[0] - p1[0]) * width / 18));
      if (cols < 1) cols = 1;
      for (var c = 0; c < cols; c++) {
        for (var r = 0; r < Math.floor(h / 16); r++) {
          if (Math.random() < 0.55) continue;
          windows.push({
            x: x + 6 + c * 14,
            y: yTop + 8 + r * 16,
            delay: Math.random() * 1800,
            color: Math.random() < 0.75 ? '#fff7e6' : (Math.random() < 0.5 ? '#ff8a3d' : '#5ab0ff'),
            on: false
          });
        }
      }
    }
  }

  function drawSkylinePath(ctx) {
    ctx.beginPath();
    ctx.moveTo(peaks[0][0] * width, peaks[0][1] * height);
    for (var i = 1; i < peaks.length; i++) {
      ctx.lineTo(peaks[i][0] * width, peaks[i][1] * height);
    }
    // firma Ramtik al final
    var sigX = width * 0.78;
    var sigY = height * 0.86;
    ctx.lineTo(sigX, sigY);
    ctx.font = 'italic 52px "Brush Script MT", "Segoe Script", cursive';
    ctx.textBaseline = 'bottom';
    ctx.strokeText('Ramtik', sigX, sigY);
  }

  function loop(now) {
    if (!startTime) startTime = now;
    var elapsed = now - startTime;

    ctx.clearRect(0, 0, width, height);
    ctx.globalAlpha = alpha;

    // línea neón
    ctx.save();
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.shadowColor = 'rgba(255,255,255,0.9)';
    ctx.shadowBlur = 8;
    ctx.setLineDash([MAXLEN]);
    if (state === 'draw') {
      var p = Math.min(1, elapsed / 5000);
      ctx.lineDashOffset = MAXLEN * (1 - p);
      drawSkylinePath(ctx);
      ctx.stroke();
      // punta de estrella
      // calcular posición aproximada del tip a lo largo del path no es trivial; dibujamos flare en progreso lineal
      var tipX = width * Math.min(1, p * 0.98 + 0.02);
      // altura del skyline en ese x aproximada
      var tipY = height * 0.86;
      ctx.setLineDash([]);
      ctx.fillStyle = '#ffffff';
      ctx.shadowBlur = 18;
      ctx.font = '16px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('\u2726', tipX, tipY);
      if (p >= 1) { state = 'lights'; completeTime = now; windows.forEach(function (w) { w.on = false; }); }
    } else if (state === 'lights') {
      ctx.lineDashOffset = 0;
      ctx.setLineDash([]);
      drawSkylinePath(ctx);
      ctx.stroke();
      var since = now - completeTime;
      windows.forEach(function (w) {
        if (!w.on && since > w.delay) w.on = true;
        if (w.on) {
          ctx.save();
          ctx.shadowColor = w.color;
          ctx.shadowBlur = 10;
          ctx.fillStyle = w.color;
          ctx.fillRect(w.x, w.y, 3, 3);
          ctx.restore();
        }
      });
      if (since > 3200) { state = 'fade'; fadeStart = now; }
    } else if (state === 'fade') {
      ctx.lineDashOffset = 0;
      ctx.setLineDash([]);
      drawSkylinePath(ctx);
      ctx.stroke();
      windows.forEach(function (w) {
        if (w.on) {
          ctx.save();
          ctx.shadowColor = w.color;
          ctx.shadowBlur = 10;
          ctx.fillStyle = w.color;
          ctx.fillRect(w.x, w.y, 3, 3);
          ctx.restore();
        }
      });
      var fe = now - fadeStart;
      alpha = Math.max(0, 1 - fe / 1500);
      if (alpha <= 0) {
        // reset
        alpha = 1;
        state = 'draw';
        startTime = now;
        windows = [];
        buildWindows();
      }
    }
    ctx.restore();
    ctx.globalAlpha = 1;

    requestAnimationFrame(loop);
  }

  function init() {
    canvas = document.getElementById('city-canvas');
    if (!canvas) return;
    ctx = canvas.getContext('2d');
    resize();
    window.addEventListener('resize', resize);
    requestAnimationFrame(loop);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
