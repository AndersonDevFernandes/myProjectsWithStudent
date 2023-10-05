//resolução do exerciccio 5

/*(   ) Jogador 1: (pontos >= 100) and (moedas >= 5) and (enfrentou_chefe == Sim)
  (   ) Jogador 2: (pontos >= 100) and (moedas >= 5) and (enfrentou_chefe == Não)
  (   ) Jogador 3: (pontos < 100) or (moedas < 5) or (enfrentou_chefe == Sim)
  (   ) Jogador 4: (pontos != 100) or (moedas != 5) or not(enfrentou_chefe == Não) 

JOGADORES: 

JOGADOR 1 = PONTOS: 120, MOEDAS 15,  BOSS YES
JOGADOR 2 = PONTOS: 99,  MOEDAS 200, BOSS NO
JOGADOR 3 = PONTOS: 100, MOEDAS 5,   BOSS YES
JOGADOR 4 = PONTOS: 101, MOEDAS 4,   BOSS NO


  ( V ) Jogador 1: (120 >= 100) and (15 >= 5) and (sim == Sim)
  ( V ) Jogador 2: (99 >= 100) and (200 >= 5) and (Não == Não)
  ( F ) Jogador 3: (100 < 100) or (5 < 5) or (Sim == Sim)
  ( V ) Jogador 4: (101 != 100) or (4!= 5) or not(Não == Não)
  
  Jorgador 1 é Verdadeiro porque na tabela verdade de conjunção duas informação verdadeiras ele só pode ser Verdadeiro;

  Jogador  2 e Falso porque na tabela verdade de conjunção uma informação verdadeira e outra falsa, a informação só pode ser falsa;

  Jogador  3 é verdadeiro porque na tabela de verdade de Disjunção duas informação Verdadeiras ele só pode ser verdadeiro;

  Jogador  4 é verdadeiro porque na tabela de verdade de Disjunção duas informação Verdadeiras ele só pode ser verdadeiro.
*/

