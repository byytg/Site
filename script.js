// =========================
// العناصر
// =========================

const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");

const question = document.getElementById("question");
const result = document.getElementById("result");

const hearts = document.getElementById("hearts");

// =========================
// زر NO يهرب
// =========================

noBtn.addEventListener("mouseenter", moveButton);
noBtn.addEventListener("touchstart", moveButton);

function moveButton(){

    const maxX = window.innerWidth - 180;
    const maxY = window.innerHeight - 100;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

}

// =========================
// زر YES
// =========================

yesBtn.onclick = () => {

    question.style.display = "none";

    result.style.display = "block";

    startHearts();

    startFireworks();

}
const yesBtn = document.getElementById("yes");

yesBtn.addEventListener("click", () => {

    // اهتزاز لمدة 200 مللي ثانية
    if (navigator.vibrate) {
        navigator.vibrate(200);
    }


// =========================
// قلوب متطايرة
// =========================

function createHeart(){

    const heart = document.createElement("div");

    heart.innerHTML = "💖";

    heart.style.position = "fixed";

    heart.style.left = Math.random()*window.innerWidth+"px";

    heart.style.bottom = "-30px";

    heart.style.fontSize = (20 + Math.random()*30)+"px";

    heart.style.pointerEvents = "none";

    heart.style.transition = "all 5s linear";

    hearts.appendChild(heart);

    setTimeout(()=>{

        heart.style.bottom = "110%";

        heart.style.opacity = "0";

        heart.style.transform =
        "translateX("+(Math.random()*300-150)+"px) rotate(360deg)";

    },100);

    setTimeout(()=>{

        heart.remove();

    },5200);

}

function startHearts(){

    setInterval(createHeart,250);

}

// =========================
// ألعاب نارية Pixel
// =========================

function firework(){

    const colors = [

        "#ff4da6",

        "#ff1493",

        "#ffffff",

        "#ff99cc"

    ];

    const x = Math.random()*window.innerWidth;

    const y = Math.random()*window.innerHeight/2;

    for(let i=0;i<25;i++){

        const p = document.createElement("div");

        p.style.position="fixed";

        p.style.width="6px";

        p.style.height="6px";

        p.style.background=
        colors[Math.floor(Math.random()*colors.length)];

        p.style.left=x+"px";

        p.style.top=y+"px";

        p.style.pointerEvents="none";

        p.style.boxShadow="0 0 10px hotpink";

        document.body.appendChild(p);

        const angle=Math.random()*Math.PI*2;

        const distance=80+Math.random()*120;

        const dx=Math.cos(angle)*distance;

        const dy=Math.sin(angle)*distance;

        p.animate([

        {

        transform:"translate(0,0)",

        opacity:1

        },

        {

        transform:`translate(${dx}px,${dy}px)`,

        opacity:0

        }

        ],{

        duration:1200,

        easing:"ease-out"

        });

        setTimeout(()=>{

        p.remove();

        },1200);

    }

}

function startFireworks(){

    setInterval(firework,700);

}

// =========================
// نجوم لامعة
// =========================

setInterval(()=>{

    const star=document.createElement("div");

    star.innerHTML="✦";

    star.style.position="fixed";

    star.style.left=Math.random()*window.innerWidth+"px";

    star.style.top=Math.random()*window.innerHeight+"px";

    star.style.color="#ff69b4";

    star.style.fontSize="18px";

    star.style.opacity="1";

    star.style.pointerEvents="none";

    document.body.appendChild(star);

    star.animate([

    {

    opacity:1,

    transform:"scale(0)"

    },

    {

    opacity:0,

    transform:"scale(2)"

    }

    ],{

    duration:1200

    });

    setTimeout(()=>{

    star.remove();

    },1200);

},300);
