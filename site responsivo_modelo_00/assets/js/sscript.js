function cripto() {
    let text = document.getElementById("text").value
    let split = text.split("")
    let chars = split.length
    const pre = ['Z','E','N','I','P','O','L','A','R','z','e,','n','i','t','p','o','l','a','r']

    const pos = ['P','O','L','A','R','Z','E','N','I','T','p','o','l','a','r','z','e','n','i','t']
    let rslt = document.getElementById('result')

    for (i = 0; i < chars; i++) {
        let index = pre.indexOf(split[i])
        
        if(index === -1) {
            split[i] = splt [i]
        } else {
            split[i] = pos[index]
        } 
        const toString = split.join('')

        rslt.innerText = toString
        //console.log(split[i])
    }

}