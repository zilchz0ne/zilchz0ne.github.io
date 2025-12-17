function insert_inputset(element)
{
    let x;

    x = document.createElement('br');
    element.after(x);

    x = document.createElement('input');
    x.classList.add('ww_button_input', 'remove');
    x.type = 'button';
    x.value = '-';
    let x_minus = x;
    element.after(x);

    x = document.createElement('input');
    x.classList.add('ww_button_input', 'add');
    x.type = 'button';
    x.value = '+';
    let x_plus = x;
    element.after(x);

    x = document.createElement('input');
    x.classList.add('ww_text_input', 'credit');
    x.type = 'text';
    x.placeholder = 'Credit';
    element.after(x);

    x = document.createElement('input');
    x.classList.add('ww_text_input', 'cgpa');
    x.type = 'text';
    x.placeholder = 'CGPA';
    element.after(x);
    
    x = document.createElement('input');
    x.className = 'ww_text_input';
    x.type = 'text';
    x.placeholder = 'Subject';
    element.after(x);

    x_plus.addEventListener
    (
        'click',
        function()
        {
            insert_inputset(x_plus.nextElementSibling.nextElementSibling);
        }
    );

    x_minus.addEventListener
    (
        'click',
        function()
        {
            delete_inputset(x_minus);
        }
    );
}

function delete_inputset(element)
{
    element.previousElementSibling.remove();
    element.previousElementSibling.remove();
    element.previousElementSibling.remove();
    element.previousElementSibling.remove();
    element.nextElementSibling.remove();
    element.remove();
}

function generate_report(cgpa, credit)
{
    let average_cgpa = document.getElementById('average_cgpa');
    let total_credit_completed = document.getElementById('total_credit_completed');
    let total_courses_completed = document.getElementById('total_courses_completed');
    let numerator = 0;
    let denominator = 0;
    for(let i = 0; i < cgpa.length; i++)
    {
        numerator += Number(credit[i].value) * Number(cgpa[i].value);
        denominator += Number(credit[i].value);
    }
    average_cgpa.textContent = "Average CGPA: " + String(numerator / denominator);
    total_credit_completed.textContent = "Total Credit Completed: " + String(denominator);
    total_courses_completed.textContent = "Total Courses Completed: " + String(cgpa.length);
}

function main()
{
    let page_1 = document.getElementById('page_1');
    let calculate_button = document.getElementById('calculate_button');

    let cgpa = page_1.getElementsByClassName('cgpa');
    let credit = page_1.getElementsByClassName('credit');
    let add = page_1.getElementsByClassName('add');
    let remove = page_1.getElementsByClassName('remove');
    let br = page_1.getElementsByTagName('br');

    add[0].addEventListener
    (
        'click',
        function()
        {
            insert_inputset(br[0]);
        }
    );

    remove[0].addEventListener
    (
        'click',
        function()
        {
            delete_inputset(remove[0]);
        }
    );

    calculate_button.addEventListener
    (
        'click',
        function()
        {
            generate_report(cgpa, credit);
        }
    );
    calculate_button.addEventListener
    (
        'keydown',
        function()
        {
            if(e.key === 'Enter') generate_report(cgpa, credit);
        }
    );
}

main();
