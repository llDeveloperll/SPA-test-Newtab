# O objetivo é criar uma SPA (Single Page Application) 
### seguindo o layout que está aqui: https://www.figma.com/file/U8ojEXx2vxSK2KOvoBvHVH8y/Frontend-test?node-id=13%3A42


## O que a aplicação deverá fazer:

{
    Incluir transações de compra ou venda de mercadoria.
    Criar um extrato das transações incluídas. As transações deverão ser mostradas na ordem em que foram incluídas.
    Mostrar o saldo final e destacar se houve lucro ou prejuízo.
    A aplicação deverá ser responsiva e estar de acordo com o layout fornecido.
    Persistir as transações no Local Storage.
}

## Outros requisitos

### HTML:
{
    As opções do campo “Tipo de transação” são: Compra e Venda.
    Caso não exista nenhuma transação cadastrada, adicione a mensagem “Nenhuma transação cadastrada.” na lista do Extrato.
}

### CSS:
{
    Testar em smartphones, tablets (modos portrait e landscape) e monitores a partir de 1024px até 1900px. (Através do inspecionar elemento no navegador)
    A fonte utilizada é a Lato.
    A largura máxima do conteúdo é 1100px.
}

### JavaScript: 
{
    Validar o formulário para que todos os campos sejam preenchidos.
    Adicionar uma máscara no campo “Valor” para que apenas números sejam preenchidos e com a formatação correta. (Padrão: 10,90)
    Ao adicionar uma nova transação, persistir no Local Storage e já atualizar a lista com o extrato. Atualizar também o cálculo apresentado.
    Ao clicar no link “Limpar dados”, apresentar uma mensagem de confirmação e em seguida apagar as informações, atualizando a lista.
}