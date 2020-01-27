# share-thoughts

v0.0.1

Funções implementadas
- Inserir Manual
- Inserir CNAB
- Inserir Fórmula
- Executar Fórmula

# Funções
## Inserir Manual
`inserirManual(manual, produto, tipoArquivo)`

- <b>manual:</b> Nome do arquivo que contém o manual para o produto. Deve estar no formato xlsx.
- <b>produto:</b> Nome do fundo que estamos inserindo o manual.
- <b>tipoArquivo:</b> Tipo de manual que está sendo inserido (remessa/retorno/baixas etc.)

    A função lê o valor de cada coluna no arquivo e insere no banco os valores. A função irá inserir de acordo com a sequência de números o que é header, detail e thriller, de acordo com o exemplo abaixo:
    
    Num | Conteudo
    -|-
    1 | Isso é um header
    2 | Isso é um header
    3 | Isso é um header
    1 | Como o <b>Num</b> voltou a 1 agora entendo que isto é o detail
    2 | Conteúdo do detail
    3 | Conteúdo do detail
    4 | Conteúdo do detail
    1 | Como o <b>Num</b> voltou a 1 agora entendo que isto é o thriller
    2 | Conteúdo do thriller
    3 | Conteúdo do thriller

    Todos os campos da planilha são obrigatórios com excessão da coluna <b>Dec</b> que representa a quantidade de casas decimais a serem utilizadas.

## Inserir CNAB
`inserirCnab(produto, arquivo)`

- <b>produto:</b> Nome do fundo que estamos inserindo o CNAB (Deverá haver um manual cadastrado para o CNAB deste fundo)

- <b>arquivo</b>: Nome do arquivo que contém as informações que deverão ser inseridas.

    Essa função utiliza o manual para identificar as linhas e separar as colunas do CNAB e inserir as informações.

    ### <b>TODO:</b>
    Deverá ser desenvolvido um método para que ele possa inserir a data de referência de acordo com a data há no header do CNAB.

    Também devemos inserir um ROLLBACK para quando alguma inserção falhar ele desfazer as inserções anteriores.

    Deverá ser adicionada a função de `excluirCnab` para remover informações de alguma data específica ou, quando for necessário ser reprocessado o CNAB.

## Inserir Formula
`inserirFormula(produto, nomeFormula, formula, variaveis)`

- <b>produto:</b> Nome do fundo que estamos inserindo a formula.
- <b>nomeFormula:</b> Nome dado a formula inserida.
- <b>formula: </b> A formula a ser inserida. Essa formula deve ser escrita da mesma forma que seria executada pelo SQL (Isso deverá ser feito através do Front-End).

### <b>TODO:</b>
    
    

    






