let sa = 'cir'
document.getElementById('choose').onclick = function(){
    if (sa == 'cir'){
        sa = 'lat'
        document.getElementById('sa').innerHTML = 'Latinica'
        document.getElementById('do').innerHTML = 'Ћирилица'
    } else if (sa == 'lat'){
        sa = 'cir'
        document.getElementById('sa').innerHTML = 'Ћирилица'
        document.getElementById('do').innerHTML = 'Latinica'
    }
}


document.getElementById('submit').onclick = function(){
    const text = []
    const tekst = document.getElementById('tekst').value
    tekst.split("")
    let generated = ''
    
    if (sa == 'cir'){

        // Sa ćirilice na latinicu

        for (let x in tekst){
            let trenutno = tekst[x]
            if (trenutno == 'А'){
                generated += 'A'
            } else if (trenutno == 'Б'){
                generated += 'B'
            } else if (trenutno == 'В'){
                generated += 'V'
            } else if (trenutno == 'Г'){
                generated += 'G'
            } else if (trenutno == 'Д'){
                generated += 'D'
            } else if (trenutno == 'Ђ'){
                generated += 'Đ'
            } else if (trenutno == 'Е'){
                generated += 'E'
            } else if (trenutno == 'Ж'){
                generated += 'Ž'
            } else if (trenutno == 'З'){
                generated += 'Z'
            } else if (trenutno == 'И'){
                generated += 'I'
            } else if (trenutno == 'Ј'){
                generated += 'J'
            } else if (trenutno == 'К'){
                generated += 'K'
            } else if (trenutno == 'Л'){
                generated += 'L'
            } else if (trenutno == 'Љ'){
                generated += 'Lj'
            } else if (trenutno == 'М'){
                generated += 'M'
            } else if (trenutno == 'Н'){
                generated += 'N'
            } else if (trenutno == 'Њ'){
                generated += 'Nj'
            } else if (trenutno == 'О'){
                generated += 'O'
            } else if (trenutno == 'П'){
                generated += 'P'
            } else if (trenutno == 'Р'){
                generated += 'R'
            } else if (trenutno == 'С'){
                generated += 'S'
            } else if (trenutno == 'Т'){
                generated += 'T'
            } else if (trenutno == 'Ћ'){
                generated += 'Ć'
            } else if (trenutno == 'У'){
                generated += 'U'
            } else if (trenutno == 'Ф'){
                generated += 'F'
            } else if (trenutno == 'Х'){
                generated += 'H'
            } else if (trenutno == 'Ц'){
                generated += 'C'
            } else if (trenutno == 'Ч'){
                generated += 'Č'
            } else if (trenutno == 'Џ'){
                generated += 'Dž'
            } else if (trenutno == 'Ш'){
                generated += 'Š'
            } else if (trenutno == 'а'){
                generated += 'a'
            } else if (trenutno == 'б'){
                generated += 'b'
            } else if (trenutno == 'в'){
                generated += 'v'
            } else if (trenutno == 'г'){
                generated += 'g'
            } else if (trenutno == 'д'){
                generated += 'd'
            } else if (trenutno == 'ђ'){
                generated += 'đ'
            } else if (trenutno == 'е'){
                generated += 'e'
            } else if (trenutno == 'ж'){
                generated += 'ž'
            } else if (trenutno == 'з'){
                generated += 'z'
            } else if (trenutno == 'и'){
                generated += 'i'
            } else if (trenutno == 'ј'){
                generated += 'j'
            } else if (trenutno == 'к'){
                generated += 'k'
            } else if (trenutno == 'л'){
                generated += 'l'
            } else if (trenutno == 'љ'){
                generated += 'lj'
            } else if (trenutno == 'м'){
                generated += 'm'
            } else if (trenutno == 'н'){
                generated += 'n'
            } else if (trenutno == 'њ'){
                generated += 'nj'
            } else if (trenutno == 'о'){
                generated += 'o'
            } else if (trenutno == 'п'){
                generated += 'p'
            } else if (trenutno == 'р'){
                generated += 'r'
            } else if (trenutno == 'с'){
                generated += 's'
            } else if (trenutno == 'т'){
                generated += 't'
            } else if (trenutno == 'ћ'){
                generated += 'ć'
            } else if (trenutno == 'у'){
                generated += 'u'
            } else if (trenutno == 'ф'){
                generated += 'f'
            } else if (trenutno == 'х'){
                generated += 'h'
            } else if (trenutno == 'ц'){
                generated += 'c'
            } else if (trenutno == 'ч'){
                generated += 'č'
            } else if (trenutno == 'џ'){
                generated += 'dž'
            } else if (trenutno == 'ш'){
                generated += 'š'
            } else {
                generated += trenutno
            }
        }
    } else if (sa == 'lat'){

        // Sa latinice na ćirilicu

        for (let x = 0; x < tekst.length; x++){
            let trenutno = tekst[x]
            if (trenutno == 'a'){
                generated += 'а'
            } else if (trenutno == 'A'){
                generated += 'А'
            } else if (trenutno == 'B'){
                generated += 'Б'
            } else if (trenutno == 'C'){
                generated += 'Ц'
            } else if (trenutno == 'Č'){
                generated += 'Ч'
            } else if (trenutno == 'Ć'){
                generated += 'Ћ'
            } else if ((trenutno == 'D' && tekst[x + 1] == 'j') | trenutno == "Đ"){
                generated += 'Ђ'
                x += 1
            } else if (trenutno == 'D' && tekst[x + 1] == 'ž'){
                generated += 'Џ'
                x += 1
            } else if (trenutno == 'D'){
                generated += 'Д'
            } else if (trenutno == 'E'){
                generated += 'Е'
            } else if (trenutno == 'F'){
                generated += 'Ф'
            } else if (trenutno == 'G'){
                generated += 'Г'
            } else if (trenutno == 'H'){
                generated += 'Х'
            } else if (trenutno == 'I'){
                generated += 'И'
            } else if (trenutno == 'J'){
                generated += 'Ј'
            } else if (trenutno == 'K'){
                generated += 'К'
            } else if (trenutno == 'L' && tekst[x + 1] == 'j'){
                generated += 'Љ'
                x += 1
            } else if (trenutno == 'L'){
                generated += 'Л'
            } else if (trenutno == 'M'){
                generated += 'М'
            } else if (trenutno == 'N' && tekst[x + 1] == 'j'){
                generated += 'Њ'
                x += 1
            } else if (trenutno == 'N'){
                generated += 'Н'
            } else if (trenutno == 'O'){
                generated += 'О'
            } else if (trenutno == 'P'){
                generated += 'П'
            } else if (trenutno == 'R'){
                generated += 'Р'
            } else if (trenutno == 'S'){
                generated += 'С'
            } else if (trenutno == 'Š'){
                generated += 'Ш'
            } else if (trenutno == 'T'){
                generated += 'Т'
            } else if (trenutno == 'U'){
                generated += 'У'
            } else if (trenutno == 'V'){
                generated += 'В'
            } else if (trenutno == 'Z'){
                generated += 'З'
            } else if (trenutno == 'Ž'){
                generated += 'Ж'
            } else if (trenutno == 'b'){
                generated += 'б'
            } else if (trenutno == 'c'){
                generated += 'ц'
            } else if (trenutno == 'č'){
                generated += 'ч'
            } else if (trenutno == 'ć'){
                generated += 'ћ'
            } else if ((trenutno == 'd' && tekst[x + 1] == 'j') | trenutno == 'đ'){
                generated += 'ђ'
                x += 1
            } else if (trenutno == 'd' && tekst[x + 1] == 'ž'){
                generated += 'џ'
                x += 1
            } else if (trenutno == 'd'){
                generated += 'д'
            } else if (trenutno == 'e'){
                generated += 'е'
            } else if (trenutno == 'f'){
                generated += 'ф'
            } else if (trenutno == 'g'){
                generated += 'г'
            } else if (trenutno == 'h'){
                generated += 'х'
            } else if (trenutno == 'i'){
                generated += 'и'
            } else if (trenutno == 'j'){
                generated += 'ј'
            } else if (trenutno == 'k'){
                generated += 'к'
            } else if (trenutno == 'l' && tekst[x + 1] == 'j'){
                generated += 'љ'
                x += 1
            } else if (trenutno == 'l'){
                generated += 'л'
            } else if (trenutno == 'm'){
                generated += 'м'
            } else if (trenutno == 'n' && tekst[x + 1] == 'j'){
                generated += 'њ'
                x += 1
            } else if (trenutno == 'n'){
                generated += 'н'
            } else if (trenutno == 'o'){
                generated += 'о'
            } else if (trenutno == 'p'){
                generated += 'п'
            } else if (trenutno == 'r'){
                generated += 'р'
            } else if (trenutno == 's'){
                generated += 'с'
            } else if (trenutno == 'š'){
                generated += 'ш'
            } else if (trenutno == 't'){
                generated += 'т'
            } else if (trenutno == 'u'){
                generated += 'у'
            } else if (trenutno == 'v'){
                generated += 'в'
            } else if (trenutno == 'z'){
                generated += 'з'
            } else if (trenutno == 'ž'){
                generated += 'ж'
            } else {
                generated += trenutno
            }
        }
    }
    
    document.getElementById("generated").value = generated
}


const copyBtn = document.getElementById('copybtn')

copyBtn.onclick = function myFunction() {
    var copyText = document.getElementById("generated");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
}
