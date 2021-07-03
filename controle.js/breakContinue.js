const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let x in nums){
    if (x == 5) break //uma única sentença não precisa de bloco

    console.log (`${x} = ${nums[x]}`)
}

for (let y in nums){
    if (y == 5) continue // só interrompe o indice 5 e após continua

    console.log(`${y} = ${nums[y]}`)
}

externo: for (let a in nums){// rotulo
    for (let b in nums) {
        if (a == 2 && b == 3)break externo // usa o rotulo para o break funionar no laço externo (1º laço)

        console.log (`Par = ${a}, ${b}`)
    }
}
console.log('Fim!')