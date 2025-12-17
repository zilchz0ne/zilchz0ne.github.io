function main()
{
    let page_1 = document.getElementById('page_1');
    let page_1_children = page_1.children;
    let page_1_ww_text = page_1.getElementsByClassName('ww_text');
    let page_1_ww_text_input = page_1.getElementsByClassName('ww_text_input');
    let page_1_ww_text_output = page_1.getElementsByClassName('ww_text_output');

    let dialogues = -1;
    let paragraphs = -1;
    for(let i = 5; i < page_1_children.length; i++)
    {
        page_1_children[i].style.display = 'none';
    }
    dialogues = 5;
    paragraphs = 0;

    document.addEventListener
    (
        'keydown',
        function(e)
        {
            e.preventDefault();
            if(e.key === 'Enter')
            {
                for(let i = 0; i < 10; i++)
                {
                    page_1_children[dialogues].style.display = '';
                    dialogues++;
                }
                page_1_ww_text_output[paragraphs].textContent += page_1_ww_text_input[paragraphs].textContent;
                paragraphs++;
            }
            else
            {
                page_1_ww_text_input[paragraphs].textContent += e.key;
                
            }
        }
    );
}

main();
