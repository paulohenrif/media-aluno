function cal() {
    var n = prompt ('Qual seu nome?')
    var p = prompt (`Olá ${n}, Qual a sua primeira nota?`)
    var s = prompt (`Ok ${n}, sua primeira nota é ${p}. Digite agora sua segunda nota.`)

    var p1 = Number(p)
    var s1 = Number(s)

    notas.innerHTML = (`Suas notas são: <strong>${p1} + ${s1}</strong>`)

    var v = Number.parseInt(p) + Number.parseInt(s)
    res.innerHTML = (`Sua média atual é de: <strong>${v/2}</strong>`)
}