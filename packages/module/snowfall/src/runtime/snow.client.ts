import { defineNuxtPlugin, useRuntimeConfig } from '#app';

interface Snowflake {
  x: number;
  y: number;
  radius: number;
  speed: number;
  drift: number;
}

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig().public.snowfall as {
    flakeCount: number;
    color: string;
  };

  const canvas = document.createElement('canvas');
  canvas.setAttribute('data-testid', 'snowfall-canvas');
  canvas.style.position = 'fixed';
  canvas.style.inset = '0';
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.pointerEvents = 'none';
  canvas.style.zIndex = '2147483647';
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  if (!ctx) {
    return;
  }

  const resize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };
  resize();
  window.addEventListener('resize', resize);

  const flakeCount = config.flakeCount ?? 60;
  const color = config.color ?? '#ffffff';

  const flakes: Snowflake[] = Array.from({ length: flakeCount }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 3 + 1,
    speed: Math.random() * 1 + 0.5,
    drift: Math.random() * 1 - 0.5,
  }));

  const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = color;
    for (const flake of flakes) {
      ctx.beginPath();
      ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
      ctx.fill();
      flake.y += flake.speed;
      flake.x += flake.drift;
      if (flake.y > canvas.height) {
        flake.y = -flake.radius;
        flake.x = Math.random() * canvas.width;
      }
    }
    requestAnimationFrame(draw);
  };
  draw();
});
