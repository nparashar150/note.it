// $("body").toggleClass(localStorage.toggled);

// function darkTheme() {
//     if(localStorage.toggled != 'dark') {
//         $("body").toggleClass('dark-mode-body', true);
//         localStorage.toggleClass = 'dark';
//     } else {
//         $("body").toggleClass('dark-mode-body', false);
//         localStorage.toggleClass = 'false';
//     }
// }

// if ($("body").hasClass('dark-mode-body')) {
//     $('#checkbox').prop('checked', true)
// } else (
//     $('#checkbox').prop('checked', false)
// )

localStorage.setItem('noteit-theme', '');
const theme = localStorage.getItem('noteit-theme');
const body = document.body;
const toggle = document.getElementById("checkbox");
function darkTheme() {
    if (localStorage.theme != 'dark') {
        body.classList.toggle("dark-mode-body", true);
        localStorage.theme = 'dark';
    } else {
        body.classList.toggle("dark-mode-body", false);
        localStorage.theme = '';
    }
}

if (localStorage.theme == 'dark') {
    body.classList.add("dark-mode-body");
    toggle.checked = true;
} else {
    body.classList.remove("dark-mode-body");
    toggle.checked = false;
}