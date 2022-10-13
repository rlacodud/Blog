// import gsap from 'https://cdn.skypack.dev/gsap'

// 要素の取得 & 定数を定義
const mouseFixEl = document.querySelector('.images');
const mouseFixImagesEl = document.querySelectorAll('.images img');
const listItemsEl = document.querySelectorAll('.item');
const mousePos = {
    x: 0,
    y: 0,
}
let currentScrollPos = 0;

// フェードイン & フェードアウトのアニメーションを関数で定義
// 引数には配列 listItemsEl のINDEX番号 が入ってくる
// 配列 mouseFixImagesEl のINDEX番号 も対になるようにしておく
const fadeIn = (index) => {
    const fadeInEl = mouseFixImagesEl[index];

    gsap.set(fadeInEl, {
        zIndex: 2,
    });
    gsap.to(fadeInEl, {
        duration: 0.4,
        ease: "power2.out",
        opacity: 1,
    });
}

const fadeOut = (index) => {
    const fadeOutEl = mouseFixImagesEl[index];

    gsap.set(fadeOutEl, {
        zIndex: 1,
    });
    gsap.to(fadeOutEl, {
        duration: 0.4,
        ease: "power2.out",
        opacity: 0,
    });
}

// マウスの位置を取得して更新 & 画像をマウス追従
window.addEventListener('mousemove', (e) => {
    mousePos.x = e.clientX;
    mousePos.y = e.clientY;

    gsap.to(mouseFixEl, {
        duration: 0.6,
        ease: "power2.out",
        x: mousePos.x,
        y: mousePos.y
    });
});

// マウスイベントでホバー&離れた時にアニメーション
for (let i = 0; i < listItemsEl.length; i++) {
    listItemsEl[i].addEventListener('mouseenter', () => {
        const targetIndex = i;

        fadeIn(targetIndex);
    });
    listItemsEl[i].addEventListener('mouseleave', () => {
        const targetIndex = i;

        fadeOut(targetIndex);
    });
}

window.addEventListener('scroll', () => {
    // マウス位置と連動させるために、スクロール量にマウスの位置も加算する
    currentScrollPos = window.pageYOffset + mousePos.y;

    for (let i = 0; i < listItemsEl.length; i++) {
        // ターゲットとなる要素の始まりと終わりの位置を取得
        const rect = listItemsEl[i].getBoundingClientRect();
        const startX = rect.left;
        const startY = rect.top + window.pageYOffset;
        const endX = rect.right;
        const endY = startY + rect.height;

        // currentScrollPos & マウスのX座標 & 要素の位置 が重なった時にフェードインアニメーション = hoverした時
        // それ以外の時はフェードアウトアニメーション = 要素から離れた時
        if (currentScrollPos >= startY && currentScrollPos <= endY && mousePos.x >= startX && mousePos.x <= endX) {
            const targetIndex = i;

            fadeIn(targetIndex);
        } else {
            const targetIndex = i;

            fadeOut(targetIndex);
        }
    }
});

for(let i = 0; i < 5; i ++) {
  document.querySelector('.box').cloneNode()
}