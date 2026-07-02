function createParticle(){

const particle=document.createElement("span");

particle.style.position="absolute";

particle.style.left=Math.random()*100+"vw";

particle.style.top="-20px";

particle.style.width=Math.random()*6+2+"px";

particle.style.height=particle.style.width;

particle.style.borderRadius="50%";

particle.style.background="#a855f7";

particle.style.boxShadow="0 0 15px #a855f7";

particle.style.opacity=Math.random();

particle.style.animation=`fall ${Math.random()*6+6}s linear`;

document.getElementById("particles").appendChild(particle);

setTimeout(()=>{
particle.remove();
},12000);

}

setInterval(createParticle,120);

const style=document.createElement("style");

style.innerHTML=`
@keyframes fall{
0%{
transform:translateY(-30px);
opacity:0;
}
15%{
opacity:1;
}
100%{
transform:translateY(110vh);
opacity:0;
}
}
`;

document.head.appendChild(style);
