function Pessoa() {
    this.idade = 0

    const self = this // utiliza uma constante para guardar o valor do this
    setInterval(function () {
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}

new Pessoa