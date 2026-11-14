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
  var skyLen = 0;
  var sigX = 0, sigY = 0, sigWidth = 0;

  var peaks = [
    // izquierda: edificios bajos y medianos
    [0, 0.90], [0.03, 0.90], [0.03, 0.80], [0.06, 0.80], [0.06, 0.90],
    [0.08, 0.90], [0.08, 0.70], [0.10, 0.70], [0.10, 0.64], [0.12, 0.64], [0.12, 0.90],
    [0.14, 0.90], [0.14, 0.76], [0.19, 0.76], [0.19, 0.90],
    [0.21, 0.90], [0.21, 0.60], [0.23, 0.60], [0.23, 0.54], [0.25, 0.54], [0.25, 0.90],
    // centro-izquierda: torre moderna con retranqueo
    [0.28, 0.90], [0.28, 0.72], [0.30, 0.72], [0.30, 0.60], [0.34, 0.60], [0.34, 0.90],
    [0.36, 0.90], [0.36, 0.44], [0.38, 0.44], [0.38, 0.36], [0.40, 0.36], [0.40, 0.90],
    // centro: rascacielos más alto (detrás del login) techo plano
    [0.43, 0.90], [0.43, 0.12], [0.53, 0.12], [0.53, 0.90],
    // centro-derecha: edificio escalonado
    [0.56, 0.90], [0.56, 0.46], [0.58, 0.46], [0.58, 0.38], [0.60, 0.38], [0.60, 0.90],
    [0.62, 0.90], [0.62, 0.58], [0.69, 0.58], [0.69, 0.90],
    // derecha: edificios descendentes
    [0.71, 0.90], [0.71, 0.66], [0.73, 0.66], [0.73, 0.60], [0.75, 0.60], [0.75, 0.90],
    [0.77, 0.90], [0.77, 0.74], [0.83, 0.74], [0.83, 0.90],
    [0.85, 0.90], [0.85, 0.80], [0.88, 0.80], [0.88, 0.74], [0.91, 0.74], [0.91, 0.90],
    [0.93, 0.90], [0.93, 0.84], [0.97, 0.84], [0.97, 0.90],
    [1.00, 0.90]
  ];

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    // longitud real del skyline
    skyLen = 0;
    for (var i = 0; i < peaks.length - 1; i++) {
      var dx = (peaks[i + 1][0] - peaks[i][0]) * width;
      var dy = (peaks[i + 1][1] - peaks[i][1]) * height;
      skyLen += Math.hypot(dx, dy);
    }
    sigX = width * 0.78;
    sigY = height * 0.86;
    ctx.font = 'italic 56px "Brush Script MT", "Segoe Script", "Snell Roundhand", cursive';
    sigWidth = ctx.measureText('Ramtik').width;
    buildWindows();
  }

  function buildWindows() {
    windows = [];
    var baseY = 0.88 * height;
    for (var i = 0; i < peaks.length - 1; i++) {
      var p1 = peaks[i], p2 = peaks[i + 1];
      // solo segmentos horizontales superiores (techos de edificios)
      if (p1[1] !== p2[1]) continue;
      if (p1[0] >= p2[0]) continue;
      var x = p1[0] * width;
      var w = (p2[0] - p1[0]) * width;
      var yTop = p1[1] * height;
      var h = baseY - yTop;
      if (h < 40 || w < 20) continue;
      var stepX = 12, stepY = 14;
      var padX = 6, padY = 8;
      for (var wx = padX; wx + 4 < w - padX; wx += stepX) {
        for (var wy = padY; wy + 4 < h - padY; wy += stepY) {
          if (Math.random() < 0.35) continue;
          windows.push({
            x: x + wx,
            y: yTop + wy,
            delay: Math.random() * 2200,
            color: '#ffffff',
            on: false
          });
        }
      }
    }
    window.__cityWindows = windows;
  }

  function drawSkyline(ctx, progress) {
    ctx.beginPath();
    ctx.moveTo(peaks[0][0] * width, peaks[0][1] * height);
    for (var i = 1; i < peaks.length; i++) {
      ctx.lineTo(peaks[i][0] * width, peaks[i][1] * height);
    }
    ctx.lineTo(sigX, sigY);
    ctx.stroke();
  }

  function tipPosition(progress) {
    var p = Math.min(1, progress);
    var idx = Math.floor(p * (peaks.length - 1));
    if (idx >= peaks.length - 1) idx = peaks.length - 2;
    var local = p * (peaks.length - 1) - idx;
    var x = (peaks[idx][0] + (peaks[idx + 1][0] - peaks[idx][0]) * local) * width;
    var y = (peaks[idx][1] + (peaks[idx + 1][1] - peaks[idx][1]) * local) * height;
    return { x: x, y: y };
  }

  function loop(now) {
    if (!startTime) startTime = now;
    var elapsed = now - startTime;

    ctx.clearRect(0, 0, width, height);
    ctx.globalAlpha = alpha;

    ctx.save();
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 2.4;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.shadowColor = 'rgba(255, 255, 255, 0.95)';
    ctx.shadowBlur = 14;

    if (state === 'draw') {
      // Fase 1: edificios 0% -> 75% del tiempo
      var pSky = Math.min(1, elapsed / 3600);
      var progress = pSky * 0.75;
      ctx.setLineDash([skyLen]);
      ctx.lineDashOffset = skyLen * (1 - pSky);
      drawSkyline(ctx, progress);
      ctx.stroke();

      // estrella guía
      var tip = tipPosition(pSky);
      ctx.setLineDash([]);
      ctx.shadowBlur = 22;
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 18px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('\u2726', tip.x, tip.y);

      if (pSky >= 1) { state = 'sig'; completeTime = now; }
    } else if (state === 'sig') {
      // edificios completos
      ctx.setLineDash([]);
      ctx.lineDashOffset = 0;
      drawSkyline(ctx, 1);
      ctx.stroke();

      // Fase 2: firma Ramtik progresiva (0% -> 100% en 1.2s)
      var ps = Math.min(1, (elapsed - (completeTime - startTime)) / 1200);
      // elapsed relativo al inicio de sig
      var sigElapsed = now - completeTime;
      var ps2 = Math.min(1, sigElapsed / 1200);
      ctx.save();
      ctx.beginPath();
      ctx.rect(sigX, 0, sigWidth * ps2, height);
      ctx.clip();
      ctx.font = 'italic 56px "Brush Script MT", "Segoe Script", "Snell Roundhand", cursive';
      ctx.textBaseline = 'bottom';
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2.4;
      ctx.shadowBlur = 16;
      ctx.strokeText('Ramtik', sigX, sigY);
      ctx.restore();

      if (ps2 >= 1) { state = 'lights'; completeTime = now; windows.forEach(function (w) { w.on = false; }); }
    } else if (state === 'lights') {
      ctx.setLineDash([]);
      ctx.lineDashOffset = 0;
      drawSkyline(ctx, 1);
      ctx.stroke();
      ctx.font = 'italic 56px "Brush Script MT", "Segoe Script", "Snell Roundhand", cursive';
      ctx.textBaseline = 'bottom';
      ctx.strokeText('Ramtik', sigX, sigY);

      var since = now - completeTime;
      windows.forEach(function (w) {
        if (!w.on && since > w.delay) w.on = true;
        if (w.on) {
          ctx.save();
          ctx.shadowColor = w.color;
          ctx.shadowBlur = 16;
          ctx.fillStyle = w.color;
          ctx.fillRect(w.x, w.y, 4, 3);
          ctx.restore();
        }
      });
      if (since > 3400) { state = 'fade'; fadeStart = now; }
    } else if (state === 'fade') {
      ctx.setLineDash([]);
      ctx.lineDashOffset = 0;
      drawSkyline(ctx, 1);
      ctx.stroke();
      ctx.font = 'italic 56px "Brush Script MT", "Segoe Script", "Snell Roundhand", cursive';
      ctx.textBaseline = 'bottom';
      ctx.strokeText('Ramtik', sigX, sigY);
      windows.forEach(function (w) {
        if (w.on) {
          ctx.save();
          ctx.shadowColor = w.color;
          ctx.shadowBlur = 16;
          ctx.fillStyle = w.color;
          ctx.fillRect(w.x, w.y, 4, 3);
          ctx.restore();
        }
      });
      var fe = now - fadeStart;
      alpha = Math.max(0, 1 - fe / 1600);
      if (alpha <= 0) {
        alpha = 1;
        state = 'draw';
        startTime = now;
        windows = [];
        buildWindows();
      }
    }
    ctx.restore();
    ctx.globalAlpha = 1;

    window.__cityState = state;
    requestAnimationFrame(loop);
  }

  function applyStyles() {
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100vw';
    canvas.style.height = '100vh';
    canvas.style.zIndex = '1';
    canvas.style.pointerEvents = 'none';
    canvas.style.display = 'block';
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

  // reintento seguro hasta que el canvas exista
  var retry = setInterval(function () {
    if (init()) clearInterval(retry);
  }, 200);

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { if (init()) clearInterval(retry); });
  }
})();

