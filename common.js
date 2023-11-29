const productImg = document.querySelectorAll(".product");

productImg.forEach((container) => {
    container.addEventListener('click', (e) => {
        const detailsBox = container.querySelector(".about-product")
        detailsBox.style.display = 'flex'
        detailsBox.querySelector('#popup-close-btn').addEventListener('click', () => {
            gsap.to(detailsBox, {
                display: 'none',
                duration: .1
            })
        })
    })
})


const tl = gsap.timeline();

tl.from(".nav #logo", {
    x: -100,
    opacity: 0,
    duration: .5,
})
tl.from(".nav a", {
    y: -100,
    duration: .5,
    stagger: .2,
})

document.querySelector('#menu').addEventListener('click', () => {
    gsap.to('#sidenav', {
        x: 0,
        opacity: 1,
        duration: .5
    })
})
document.querySelector('#sidenav-close-btn').addEventListener('click', () => {
    gsap.to('#sidenav', {
        x: "100%",
        opacity: 0,
        duration: .5
    })
})