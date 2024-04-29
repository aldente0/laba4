const form = document.forms.form;
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(form);
    let a = Number(formData.get('a'));
    let b = Number(formData.get('b'));
    let h = Number(formData.get('h'));
    const integralResult = Math.round(integral(a, b, h));
    const result = document.getElementById('result');
    result.innerText = `Ответ: ${integralResult}`;
    result.style.display = 'block';
    console.log(integral(a, b, h));
});

const expression = '3*x**2-2*x+4'

function integral(a, b, h){ // интеграл
    var x, yl, y2 , n, length, dx, S=0
    length = Math.abs(b - a)
    n = length/h > 99 ? length/h : 100;// количество элементарных отрезков
    dx = length/n // длина элементарного отрезка
    x = a /* начальное значение переменной х
    в выражении */
    yl = eval(expression)
    x = a + dx
    y2 = eval(expression)
    S = (yl + y2)*dx/2
    for(i=2; i<=n;i++){
    yl = y2
    x = x + dx
    y2 = eval(expression)
    S+= (yl + y2)*dx/2
    }
    return S
    }