import { useCallback, useMemo } from 'react';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

export default function ParticleBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const options = useMemo(() => ({
    fullScreen: {
      enable: true,
      zIndex: 0
    },
    background: {
      color: {
        value: '#000000'
      }
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: ['grab', 'bubble']
        },
        onClick: {
          enable: true,
          mode: ['push']
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 200,
          links: {
            opacity: 0.6,
            color: '#00FFFF'
          }
        },
        bubble: {
          distance: 250,
          size: 8,
          duration: 0.3,
          opacity: 1
        },
        push: {
          quantity: 6
        }
      }
    },
    particles: {
      color: {
        value: ['#00FFFF', '#FF00FF', '#8B00FF', '#FF1493', '#00CED1', '#7B68EE', '#9370DB', '#FFFFFF', '#C0C0FF']
      },
      links: {
        color: {
          value: ['#00FFFF', '#FF00FF', '#8B00FF']
        },
        distance: 100,
        enable: true,
        opacity: 0.25,
        width: 1,
        triangles: {
          enable: true,
          opacity: 0.03,
          color: '#8B00FF'
        }
      },
      collisions: {
        enable: false
      },
      move: {
        direction: 'none',
        enable: true,
        outModes: {
          default: 'bounce'
        },
        random: true,
        speed: { min: 0.2, max: 1.2 },
        straight: false,
        attract: {
          enable: true,
          rotateX: 1200,
          rotateY: 2400
        }
      },
      number: {
        density: {
          enable: true,
          area: 180
        },
        value: 900
      },
      opacity: {
        value: {
          min: 0.1,
          max: 0.85
        },
        animation: {
          enable: true,
          speed: 1.5,
          minimumValue: 0.05,
          sync: false
        }
      },
      shape: {
        type: ['circle']
      },
      size: {
        value: {
          min: 0.4,
          max: 3.5
        },
        animation: {
          enable: true,
          speed: 2,
          minimumValue: 0.2,
          sync: false
        }
      },
      twinkle: {
        particles: {
          enable: true,
          frequency: 0.06,
          opacity: 1,
          color: {
            value: ['#00FFFF', '#FF00FF', '#FFFFFF']
          }
        },
        lines: {
          enable: true,
          frequency: 0.02,
          opacity: 0.6,
          color: {
            value: '#00FFFF'
          }
        }
      },
      wobble: {
        enable: true,
        distance: 6,
        speed: {
          min: -3,
          max: 3
        }
      },
      rotate: {
        value: { min: 0, max: 360 },
        animation: {
          enable: true,
          speed: 3,
          sync: false
        },
        direction: 'random'
      }
    },
    /* ---- Second emitter: tiny dust motes ---- */
    emitters: [
      {
        direction: 'none',
        rate: {
          quantity: 3,
          delay: 0.4
        },
        position: {
          x: 50,
          y: 50
        },
        size: {
          width: 100,
          height: 100
        },
        particles: {
          color: {
            value: ['#FFFFFF', '#C0E0FF', '#FFD0FF']
          },
          links: {
            enable: false
          },
          opacity: {
            value: { min: 0.15, max: 0.5 },
            animation: {
              enable: true,
              speed: 0.8,
              startValue: 'random',
              destroy: 'min'
            }
          },
          size: {
            value: { min: 0.3, max: 1.5 },
            animation: {
              enable: true,
              speed: 1,
              startValue: 'random',
              destroy: 'min'
            }
          },
          move: {
            enable: true,
            speed: { min: 0.1, max: 0.6 },
            direction: 'none',
            outModes: { default: 'destroy' }
          },
          life: {
            count: 1,
            duration: {
              value: { min: 3, max: 8 }
            }
          }
        }
      }
    ],
    detectRetina: true
  }), []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={options}
    />
  );
}
