const consoleEl = document.getElementById("console");

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

async function type(text, speed = 40)
{
    for (let c of text)
    {
        consoleEl.innerHTML += c;
        await sleep(speed);
    }
}

async function bootLine(text, dots = 3)
{
    await type(text);
    for (let i = 0; i < dots; i++)
    {
        await sleep(400);
        consoleEl.innerHTML += ".";
    }
    consoleEl.innerHTML += "\n";
}

async function run()
{
    await bootLine("> booting system", 5);
    await bootLine("> loading profile", 4);
    await sleep(700);

    await type("\n> name: your_name\n");
    await type("> role: programmer\n");
    await type("> skills: c, java, js, linux\n\n");

    await type("> projects:\n");
    await type("  [1] project_one — https://github.com/you/project1\n");
    await type("  [2] project_two — https://github.com/you/project2\n\n");

    await type("> contact:\n");
    await type("  github: https://github.com/yourusername\n");
    await type("  email: you@email.com\n\n");

    await type("> status: online\n");
    consoleEl.innerHTML += "<span class='cursor'>█</span>";
}

run();
