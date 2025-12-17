const texts = ["Web Developer", "Programmer", "Student"];
let i = 0, j = 0;
const typing = document.getElementById("typing");

function type()
{
  if (j < texts[i].length)
  {
    typing.textContent += texts[i][j++];
    setTimeout(type, 100);
  }
  else
  {
    setTimeout(() => {
      typing.textContent = "";
      j = 0;
      i = (i + 1) % texts.length;
      type();
    }, 1000);
  }
}

type();

