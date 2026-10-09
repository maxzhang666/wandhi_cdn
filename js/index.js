(function(){
  'use strict';

  /* ---------- 复制引用地址 ---------- */
  var copyBtn = document.querySelector('[data-copy-url]');
  if(copyBtn){
    var label = copyBtn.textContent;
    copyBtn.addEventListener('click', function(){
      var url = copyBtn.getAttribute('data-copy-url');
      var done = function(){
        copyBtn.textContent = '已复制';
        copyBtn.classList.add('is-done');
        window.setTimeout(function(){
          copyBtn.textContent = label;
          copyBtn.classList.remove('is-done');
        }, 1800);
      };
      if(navigator.clipboard && navigator.clipboard.writeText){
        navigator.clipboard.writeText(url).then(done, done);
        return;
      }
      var ta = document.createElement('textarea');
      ta.value = url;
      ta.setAttribute('readonly','');
      ta.style.position = 'fixed';
      ta.style.top = '-1000px';
      document.body.appendChild(ta);
      ta.select();
      try{ document.execCommand('copy'); }catch(e){}
      document.body.removeChild(ta);
      done();
    });
  }

  /* ---------- 点阵：一份文件从源站扩散到所有边缘缓存 ---------- */
  var canvas = document.getElementById('lattice');
  if(!canvas) return;
  var ctx = canvas.getContext('2d');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var TAU = Math.PI * 2;

  var C_BONE = '239,234,225';
  var C_BRASS = '224,181,98';
  var C_ICE = '134,215,229';

  var CYCLE = 5600, HOLD = 1000, TOTAL = CYCLE + HOLD;
  var BAND = 42;
  var BOOT = 1300;          /* 等开机光效走完再开始扩散 */

  var w = 0, h = 0, dpr = 1;
  var dots = [];
  var marks = [];
  var origin = {x:0, y:0};
  var maxR = 1;
  var visible = true;
  var powered = reduce;
  var t0 = 0;
  var rafId = 0;

  /* 边缘节点围在四周，不压中间的文字 */
  var MARK_POS = [
    [0.19,0.23],[0.79,0.19],[0.88,0.61],[0.63,0.86],[0.30,0.83],[0.12,0.58]
  ];

  function build(){
    var rect = canvas.getBoundingClientRect();
    if(rect.width < 2 || rect.height < 2) return false;

    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = rect.width;
    h = rect.height;
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    var gap = w < 700 ? 28 : (w < 1100 ? 34 : 40);
    dots = [];
    for(var y = gap * 0.5; y < h; y += gap){
      for(var x = gap * 0.5; x < w; x += gap){
        dots.push(x, y);
      }
    }

    /* 波前从标题背后发出，向外扩散 */
    origin = {x: w * 0.5, y: h * 0.5};

    marks = [];
    for(var m = 0; m < MARK_POS.length; m++){
      var tx = MARK_POS[m][0] * w, ty = MARK_POS[m][1] * h;
      var best = -1, bestD = Infinity;
      for(var i = 0; i < dots.length; i += 2){
        var ddx = dots[i] - tx, ddy = dots[i+1] - ty;
        var dd = ddx * ddx + ddy * ddy;
        if(dd < bestD){ bestD = dd; best = i; }
      }
      if(best >= 0){
        marks.push({x: dots[best], y: dots[best+1], flash: 0, wasInside: true});
      }
    }

    maxR = Math.hypot(Math.max(origin.x, w - origin.x), Math.max(origin.y, h - origin.y)) + 70;
    return true;
  }

  function draw(R, fade){
    ctx.clearRect(0, 0, w, h);
    if(fade <= 0.001 || dots.length === 0) return;

    var i, x, y, dx, dy, d, delta, a;

    /* 还没被覆盖的是骨白，已经落到边缘缓存里的是黄铜 */
    for(i = 0; i < dots.length; i += 2){
      x = dots[i];
      y = dots[i+1];
      dx = x - origin.x;
      dy = y - origin.y;
      d = Math.sqrt(dx * dx + dy * dy);
      delta = d - R;

      if(delta < -BAND){
        ctx.fillStyle = 'rgba(' + C_BRASS + ',' + (0.36 * fade).toFixed(3) + ')';
        ctx.fillRect(x - 1.1, y - 1.1, 2.2, 2.2);
      } else if(delta > BAND){
        ctx.fillStyle = 'rgba(' + C_BONE + ',' + (0.17 * fade).toFixed(3) + ')';
        ctx.fillRect(x - 0.8, y - 0.8, 1.6, 1.6);
      } else {
        a = 1 - Math.abs(delta) / BAND;
        ctx.fillStyle = 'rgba(' + C_ICE + ',' + (a * 0.9 * fade).toFixed(3) + ')';
        ctx.beginPath();
        ctx.arc(x, y, 1.3 + a * 1.7, 0, TAU);
        ctx.fill();
      }
    }

    /* 波前 */
    a = Math.max(0, 1 - R / maxR);
    ctx.strokeStyle = 'rgba(' + C_ICE + ',' + (a * 0.30 * fade).toFixed(3) + ')';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(origin.x, origin.y, Math.max(0.5, R), 0, TAU);
    ctx.stroke();

    /* 被覆盖到的边缘节点亮一下 */
    for(i = 0; i < marks.length; i++){
      var mk = marks[i];
      dx = mk.x - origin.x;
      dy = mk.y - origin.y;
      d = Math.sqrt(dx * dx + dy * dy);

      var inside = d <= R;
      if(inside && !mk.wasInside){ mk.flash = 1; }
      mk.wasInside = inside;

      ctx.strokeStyle = 'rgba(' + C_BRASS + ',' + (0.42 * fade).toFixed(3) + ')';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(mk.x, mk.y, 4.5, 0, TAU);
      ctx.stroke();

      ctx.fillStyle = 'rgba(' + C_BRASS + ',' + (0.9 * fade).toFixed(3) + ')';
      ctx.beginPath();
      ctx.arc(mk.x, mk.y, 1.7, 0, TAU);
      ctx.fill();

      if(mk.flash > 0){
        mk.flash = Math.max(0, mk.flash - 0.032);
        ctx.strokeStyle = 'rgba(' + C_ICE + ',' + (mk.flash * 0.55 * fade).toFixed(3) + ')';
        ctx.beginPath();
        ctx.arc(mk.x, mk.y, 4.5 + (1 - mk.flash) * 16, 0, TAU);
        ctx.stroke();
      }
    }
  }

  function frame(now){
    if(!t0) t0 = now;
    var el = (now - t0) % TOTAL;
    var R, fade;

    if(el < CYCLE){
      var t = el / CYCLE;
      R = maxR * (1 - Math.pow(1 - t, 2.2));
      fade = Math.min(1, el / 300);
    } else {
      R = maxR;
      fade = 1 - Math.min(1, (el - CYCLE) / HOLD);
    }

    draw(R, fade);
    rafId = window.requestAnimationFrame(frame);
  }

  function start(){
    if(reduce || rafId || !visible || !powered) return;
    t0 = 0;
    rafId = window.requestAnimationFrame(frame);
  }
  function stop(){
    if(rafId){ window.cancelAnimationFrame(rafId); rafId = 0; }
  }

  var resizeTimer = 0;
  function rebuild(){
    if(!build()) return;
    if(reduce){
      stop();
      draw(maxR * 0.55, 1);
    } else if(powered){
      draw(0, 0);
      start();
    }
  }

  rebuild();

  if(!reduce){
    window.setTimeout(function(){ powered = true; start(); }, BOOT);

    window.addEventListener('resize', function(){
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(rebuild, 220);
    });

    if('IntersectionObserver' in window){
      new IntersectionObserver(function(entries){
        entries.forEach(function(entry){
          visible = entry.isIntersecting;
          if(visible && !document.hidden){ start(); } else { stop(); }
        });
      }, {threshold:0}).observe(canvas);
    }

    document.addEventListener('visibilitychange', function(){
      if(document.hidden){ stop(); }
      else if(visible){ start(); }
    });
  }
})();
