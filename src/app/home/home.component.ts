import { Component, OnInit } from '@angular/core';
// import { ParticlesModule } from 'angular-particle';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() {}
  myStyle: object = {};
  myParams: object = {};
  width: number = 100;
  height: number = 100;

  ngOnInit() {
    this.myStyle = {
        'position': 'fixed',
        'width': '100%',
        'height': '100%',
        'z-index': 99,
        'top': 0,
        'left': 0,
        'right': 0,
        'bottom': 0,
    };

this.myParams = {

  particles: {
    number: {
    value: 80,
    density: {
      enable: !0,
      value_area: 800
    }
    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#ffffff"
    },
      polygon: {
        nb_sides: 5
    },
    image: {
      src: "img/github.svg",
      width: 100,
      height: 100
    }
    },
    opacity: {
      value: .5,
      random: !1,
      anim: {
        enable: !1,
        speed: 1,
        opacity_min: .1,
        sync: !1
      }
    },
    size: {
      value: 4,
      random: !0,
      anim: {
        enable: !1,
        speed: 40,
        size_min: .1,
        sync: !1
      }
    },
    line_linked: {
      enable: !0,
      distance: 150,
      color: "#ffffff",
      opacity: .4,
      width: 1
    },
    move: {
      enable: !0,
      speed: 4,
      direction: "none",
      random: !1,
      straight: !1,
      out_mode: "out",
      bounce: !1,
      attract: {
        enable: !1,
        rotateX: 600,
        rotateY: 1200
      }
    }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse"
        },
        onclick: {
          enable: true,
          mode: "push"
        },
        resize: !0
      },
      modes: {
        grab: {
          distance: 300,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3
        },
        repulse: {
          distance: 200,
          duration: .4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    retina_detect: !0
};
}
}