// Створіть змінну, яка може містити або рядок, або число (union type)? 
// Також, оголосіть змінну, яка може містити лише одне 
// з двох можливих рядкових значень: 'enable' або 'disable' (literal type).

function buttonClick (button: 'enable' | 'disable') {
if (button === 'enable'){
    console.log('go')
} else if (button === 'disable') {
    console.log('stop')
}
}

buttonClick("disable")