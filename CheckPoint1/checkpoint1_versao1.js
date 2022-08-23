console.log(`Escolha uma opção e o tempo de preparação:
1 - Pipoca – 10 segundos
2 - Macarrão – 8 segundos
3 - Carne – 15 segundos 
4 - Feijão – 12 segundos
5 - Brigadeiro – 8 segundos
`);


function microondas(opcao,tempo){


  if (
    (opcao === 1 && tempo >= 10 && tempo <= 20) ||
    (opcao === 2 && tempo >= 8 && tempo <= 16) ||
    (opcao === 3 && tempo >= 15 && tempo <= 30) ||
    (opcao === 4 && tempo >= 12 && tempo <= 24) ||
    (opcao === 5 && tempo >= 8 && tempo <= 16)
  ) {
      console.log("Prato pronto, bom apetite!!!");
  
  
  } else if (
    (opcao === 1 && tempo <= 9) ||
    (opcao === 2 && tempo <= 7) ||
    (opcao === 3 && tempo <= 14) ||
    (opcao === 4 && tempo <= 12) ||
    (opcao === 5 && tempo <= 7)
  ) {
    console.log ("Tempo insuficiente!!!");
  
  
  } else if (
    (opcao === 1 && tempo >= 21 && tempo <= 30) ||
    (opcao === 2 && tempo >= 17 && tempo <= 24) ||
    (opcao === 3 && tempo >= 30 && tempo <= 45) ||
    (opcao === 4 && tempo >= 25 && tempo <= 36) ||
    (opcao === 5 && tempo >= 17 && tempo <= 24)
  ) {
  
      console.log ("A comida queimou!!!");
  
  
  } else if (
    (opcao === 1 && tempo >= 31) ||
    (opcao === 2 && tempo >= 25) ||
    (opcao === 3 && tempo >= 46) ||
    (opcao === 4 && tempo >= 37) ||
    (opcao === 5 && tempo >= 25)
  ) {
    console.log ("kabumm!!!");
    
  
  } else if (
    (opcao !== 1) | (opcao !== 2) ||
    opcao !== 3 ||
    opcao !== 4 ||
    opcao !== 5
  ) {
    
    console.log ("Prato inexistente!!!");
  }
  
  }
  
  microondas (2, 7);