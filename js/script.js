/* =========================================================
   THE CRADLE MONTESSORI SCHOOL
   HERO JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       HERO
    ===================================================== */

    const hero =
        document.querySelector(".hero");


    if (!hero) return;


    /* =====================================================
       MOUSE PARALLAX
    ===================================================== */

    const shapes =
        document.querySelectorAll(".game-shape");

    const particles =
        document.querySelectorAll(".particles span");

    const logo =
        document.querySelector(".hero-logo");

    const grid =
        document.querySelector(".hero-grid");


    /*
       Only activate the stronger mouse effect
       on desktop devices.
    */

    if (
        window.matchMedia("(pointer: fine)").matches
    ) {

        hero.addEventListener(
            "mousemove",
            (event) => {

                const rect =
                    hero.getBoundingClientRect();


                const x =
                    (event.clientX - rect.left)
                    / rect.width;


                const y =
                    (event.clientY - rect.top)
                    / rect.height;


                const moveX =
                    (x - 0.5) * 2;


                const moveY =
                    (y - 0.5) * 2;


                /* Logo */

                if (logo) {

                    logo.style.transform =
                        `
                        translate(
                            ${moveX * 4}px,
                            ${moveY * 4}px
                        )
                        scale(1)
                        `;

                }


                /* Grid */

                if (grid) {

                    grid.style.transform =
                        `
                        translate(
                            ${moveX * 10}px,
                            ${moveY * 10}px
                        )
                        `;

                }


                /* Shapes */

                shapes.forEach(
                    (shape, index) => {

                        const intensity =
                            5 + (index * 2);


                        shape.style.marginLeft =
                            `${moveX * intensity}px`;


                        shape.style.marginTop =
                            `${moveY * intensity}px`;

                    }
                );


                /* Particles */

                particles.forEach(
                    (particle, index) => {

                        const intensity =
                            2 + (index % 4);


                        particle.style.marginLeft =
                            `${moveX * intensity}px`;


                        particle.style.marginTop =
                            `${moveY * intensity}px`;

                    }
                );

            }
        );


        /* Reset when mouse leaves */

        hero.addEventListener(
            "mouseleave",
            () => {

                if (logo) {

                    logo.style.transform = "";

                }


                if (grid) {

                    grid.style.transform = "";

                }


                shapes.forEach(shape => {

                    shape.style.marginLeft = "";

                    shape.style.marginTop = "";

                });


                particles.forEach(particle => {

                    particle.style.marginLeft = "";

                    particle.style.marginTop = "";

                });

            }
        );

    }


    /* =====================================================
       BUTTON MICRO INTERACTION
    ===================================================== */

    const button =
        document.querySelector(".hero-button");


    if (button) {

        button.addEventListener(
            "mouseenter",
            () => {

                hero.classList.add(
                    "button-hovering"
                );

            }
        );


        button.addEventListener(
            "mouseleave",
            () => {

                hero.classList.remove(
                    "button-hovering"
                );

            }
        );

    }


    /* =====================================================
       RANDOM PARTICLE PULSE
    ===================================================== */

    particles.forEach(
        particle => {

            particle.addEventListener(
                "animationiteration",
                () => {

                    const randomSize =
                        Math.random() * 3 + 2;


                    particle.style.width =
                        `${randomSize}px`;


                    particle.style.height =
                        `${randomSize}px`;

                }
            );

        }
    );

});