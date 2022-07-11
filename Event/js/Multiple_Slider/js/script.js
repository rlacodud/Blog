const slider = document.querySelector(".slider");
const trail = document.querySelector(".trail").querySelectorAll("div");

let value = 0;
let trailValue = 0;
let interval = 4000;

const slide = (condition) => {
    clearInterval(start)
    condition === "increase" ? initiateINC() : initiateDEC()
    move(value, trailValue)
    animate()
    start = setInterval(() => slide("increase"), interval);
}

const initiateINC = () => {
    trail.forEach(cur => cur.classList.remove("active"))
    // value가 80(마지막)이면 0(첫번째)으로 변경 | 아니면 20씩 더해줌(다음 trail)
    value === 80 ? value = 0 : value += 20
    trailUpdate()
}

const initiateDEC = () => {
    trail.forEach(cur => cur.classList.remove("active"))
    // value가 0(첫번째)이면 80(마지막)으로 변경 | 아니면 20씩 빼줌(이전 trail)
    value === 0 ? value = 80 : value -= 20
    trailUpdate()
}

const move = (S, T) => {
  console.log(S, T);
    slider.style.transform = `translateX(-${S}%)`
    trail[T].classList.add("active")
}

// 콘텐츠 등장 애니메이션
const tl = gsap.timeline({defaults: {duration: 0.6, ease: "power2.inOut"}})
tl.from(".bg", {x: "-100%", opacity: 0})
  .from("p", {opacity: 0}, "-=0.3")
  .from("h1", {opacity: 0, y: "30px"}, "-=0.3")
  .from("button", {opacity: 0, y: "-40px"}, "-=0.8")

const animate = () => tl.restart()

// 함수에서 인자로 전달받은 value를 기반으로 trailValue 적용
const trailUpdate = () => {
    if (value === 0) {
        trailValue = 0
    } else if (value === 20) {
        trailValue = 1
    } else if (value === 40) {
        trailValue = 2
    } else if (value === 60) {
        trailValue = 3
    } else {
        trailValue = 4
    }
}   

let start = setInterval(() => slide("increase"), interval)

// prev, next 버튼 이벤트
document.querySelectorAll("svg").forEach(cur => {
  // 클릭된 버튼이 next이면 increase로 상태 변경 | 아니면 decrease로 변경
    cur.addEventListener("click", () => cur.classList.contains("next") ? slide("increase") : slide("decrease"))
})

// 하단 trail 페이지네이션 클릭 이벤트
const clickCheck = (e) => {
    clearInterval(start)
    trail.forEach(cur => cur.classList.remove("active"))
    const check = e.target
    check.classList.add("active")

    if(check.classList.contains("box1")) {
        value = 0
    } else if (check.classList.contains("box2")) {
        value = 20
    } else if (check.classList.contains("box3")) {
        value = 40
    } else if (check.classList.contains("box4")) {
        value = 60
    } else {
        value = 80
    }
    // trailUpdate 함수를 호출하며 value에 맞는 애니메이션이 작동되도록 함
    trailUpdate()
    move(value, trailValue)
    animate()
    start = setInterval(() => slide("increase"), interval)
}

trail.forEach(cur => cur.addEventListener("click", (ev) => clickCheck(ev)))

const touchSlide = (() => {

    let start, move, change, sliderWidth

    slider.addEventListener("touchstart", (e) => {
        start = e.touches[0].clientX
        // 기기마다 크기가 다르기에 반응형으로 적용시키고자 코드상에서 계산 후 적용
        sliderWidth = slider.clientWidth/trail.length
    })
    
    slider.addEventListener("touchmove", (e) => {
        e.preventDefault()
        move = e.touches[0].clientX
        // 처음 터치한 부분과 터치가 끝났을 때의 부분 위치값을 구해서
        // 이의 차이값을 기준으로 스와이프 방향을 구분
        change = start - move
    })

    const mobile = (e) => {
        // change가 sliderWidth/4보다 크면(양수이면) increase로 상태 변경
        // = 다음 슬라이드로 변경
        // 아니면 null 반환
        change > (sliderWidth/4)  ? slide("increase") : null;
        // change * -1이 sliderWidth/4보다 크면
        // = change가 음수일 때 양수로 적용되므로(양수이면)
        // decrease로 상태 변경
        // = 이전 슬라이드로 변경
        // 아니면 null 반환
        (change * -1) > (sliderWidth/4) ? slide("decrease") : null;
        // 초기화
        [start, move, change, sliderWidth] = [0,0,0,0]
    }
    slider.addEventListener("touchend", mobile)
})()