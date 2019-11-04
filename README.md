# ListagemLivros

Projeto criado com Angular Cli [Angular CLI](https://github.com/angular/angular-cli) version 8.3.9.

## Servidor de Desenvolvimento

Digite em seu terminal, dentro da pasta da aplicação "ng serve" se seu navegador já estiver aberto ou "ng serve --o" para rodar o servidor e abrir automaticamente em seu navegador padrão do sistema. O servidor roda por padrão na porta  `http://localhost:4200/`. Mas você poderá rodar em outra porta com o comando "ng serve --p 4220" por exemplo.

## Build

No terminal, na pasta da aplicação  entre com o comando  `ng build` para build do projeto. Será criada a pasta  `dist/` com os arquivos gerados. Use  `--prod` para gerar a aplicação de produção.

## Observações:
- Como não foi fornecido uma base API com dados em JSON. Eu criei uma API com os dados fornecidos no texto do teste e adicionei imagem (limitada aos 16 primeiros de um total de 25 regsitros). Esta API está disponível em "https://my-json-server.typicode.com/thiagolucio/apiJson/livros".
- O teste foi desenvolvimento com Angular Material como Biblioteca gŕafica. Foram usadas técnicas de temas personalizados, e animações através da biblioteca do angular. 
- Não foi feito o filtro de faixas de data anual como descrito. Ao invés disso foi criado um select mostrando todos os anos cadastrados para que o usuário possa escolher manualmente com isso não se corre o risco de escolher anos que não tenham publicações na base. 

## A solução de pesquisa de livros possui:
- Ordenação de todas as colunas da tabela.
- Pesquisa digitável em qualquer coluna da tabela (qualquer palavra existente ou número).
- Paginação (essa pedida no teste).
- Escolha de quantos registros devem aparecer na página com valores de 5, 10, 25 itens por página.
- Informação de qual página do total de páginas está no momento.
- Os detalhes nos primeiros 16 registros possui também imagem como detalhe (existe limitação de dados no hospedeiro da api).

## Observações Finais:
O teste foi feito em um período estimado de 24 horas não de forma contínua. Procurei colocar alguma arte mais diferenciada de forma a mostrar o conhecimento de design. Também foi feito levemente dentro do layout fornecido. Procurei não saír demais do Layout de forma e não deixar a usabilidade confusa a esperada para utilização. 

#Obrigado pela oportunidade e espero que gostem do que irão ver ----  :)

