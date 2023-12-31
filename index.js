const btns= document.querySelectorAll(".btn");
const sec= document.querySelectorAll(".section");

for(let i=0;i<btns.length;i++)
{
    btns[i].addEventListener("click",function()
    {
        document.querySelector(".active-btn").classList.remove("active-btn");
        
        this.classList.add("active-btn");

        document.querySelector(".active").classList.remove("active");
        document.getElementById(this.dataset.id).classList.add("active");
    });
}