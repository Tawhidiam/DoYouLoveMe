const accepted = () =>{
    const reply = document.getElementById('reply');
    reply.innerHTML = '<div>I love you too<i class="fa fa-heart" style="font-size:30px;color:red"></i></div>'
}

const replace = () => {
    const no = document.getElementById('no');
    no.style.position = 'absolute';
    no.style.top = Math.floor(Math.random()*40)+'vh';
    no.style.right = Math.floor(Math.random()*90)+'vw';
}

const rejected = () => {
     const reply = document.getElementById('reply');
    reply.innerHTML = '<div>I Hate you!</div>'
}