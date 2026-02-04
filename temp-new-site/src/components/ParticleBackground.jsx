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
          mode: ['grab', 'bubble', 'connect', 'trail']
        },
        onClick: {
          enable: true,
          mode: ['push', 'repulse']
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 300,
          links: {
            opacity: 1,
            color: '#00FFFF'
          }
        },
        bubble: {
          distance: 300,
          size: 12,
          duration: 0.3,
          opacity: 1
        },
        connect: {
          distance: 200,
          links: {
            opacity: 0.8
          },
          radius: 150
        },
        trail: {
          delay: 0.005,
          pauseOnStop: true,
          quantity: 5,
          particles: {
            color: {
              value: '#FF00FF'
            },
            collisions: {
              enable: false
            },
            links: {
              enable: false
            },
            move: {
              speed: 3,
              outModes: {
                default: 'destroy'
              }
            },
            opacity: {
              value: { min: 0.3, max: 0.8 },
              animation: {
                enable: true,
                speed: 0.5,
                startValue: 'max',
                destroy: 'min'
              }
            },
            size: {
              value: { min: 1, max: 3 },
              animation: {
                enable: true,
                speed: 2,
                startValue: 'max',
                destroy: 'min'
              }
            }
          }
        },
        push: {
          quantity: 8
        },
        repulse: {
          distance: 200,
          duration: 0.8,
          speed: 1
        }
      }
    },
    particles: {
      color: {
        value: ['#00FFFF', '#FF00FF', '#8B00FF', '#FF1493', '#00CED1', '#7B68EE', '#9370DB']
      },
      links: {
        color: {
          value: ['#00FFFF', '#FF00FF', '#8B00FF']
        },
        distance: 120,
        enable: true,
        opacity: 0.4,
        width: 1.5,
        triangles: {
          enable: true,
          opacity: 0.05,
          color: '#8B00FF'
        }
      },
      collisions: {
        enable: true,
        mode: 'bounce'
      },
      move: {
        direction: 'none',
        enable: true,
        outModes: {
          default: 'bounce'
        },
        random: true,
        speed: { min: 0.5, max: 2 },
        straight: false,
        attract: {
          enable: true,
          rotateX: 1200,
          rotateY: 2400
        },
        vibrate: true,
        warp: true
      },
      number: {
        density: {
          enable: true,
          area: 280
        },
        value: 550
      },
      opacity: {
        value: {
          min: 0.2,
          max: 0.9
        },
        animation: {
          enable: true,
          speed: 2,
          minimumValue: 0.1,
          sync: false
        }
      },
      shape: {
        type: ['circle', 'triangle', 'star']
      },
      size: {
        value: {
          min: 1,
          max: 6
        },
        animation: {
          enable: true,
          speed: 4,
          minimumValue: 0.5,
          sync: false
        }
      },
      twinkle: {
        particles: {
          enable: true,
          frequency: 0.08,
          opacity: 1,
          color: {
            value: ['#00FFFF', '#FF00FF', '#FFFFFF']
          }
        },
        lines: {
          enable: true,
          frequency: 0.03,
          opacity: 0.8,
          color: {
            value: '#00FFFF'
          }
        }
      },
      wobble: {
        enable: true,
        distance: 10,
        speed: {
          min: -5,
          max: 5
        }
      },
      life: {
        count: 0,
        delay: {
          random: {
            enable: true,
            minimumValue: 0
          },
          value: 0
        },
        duration: {
          random: {
            enable: false,
            minimumValue: 0
          },
          value: 0
        }
      },
      rotate: {
        value: { min: 0, max: 360 },
        animation: {
          enable: true,
          speed: 5,
          sync: false
        },
        direction: 'random'
      }
    },
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
