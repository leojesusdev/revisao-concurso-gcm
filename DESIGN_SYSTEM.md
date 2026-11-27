
Escrita
100%
DESIGN_SYSTEM.md

PORTAL DE ESTUDOS — GCM SALVADOR 2026

Versão: 1.0
Padrão visual: Google Material Design 3
Tecnologias: HTML5, CSS3 e JavaScript puro
Objetivo: Estabelecer a identidade visual e os padrões de interface de todo o portal.

---

1. IDENTIDADE DO PROJETO

O Portal de Estudos — GCM Salvador 2026 é uma plataforma educacional destinada à preparação de candidatos ao concurso da Guarda Civil Municipal de Salvador.

A identidade visual deverá transmitir:

- Profissionalismo.
- Organização.
- Confiança.
- Tecnologia.
- Seriedade institucional.
- Facilidade de aprendizado.

A interface deverá seguir as diretrizes do Google Material Design 3 (Material You).

Todas as páginas deverão compartilhar uma identidade visual coerente.

2. DIRETRIZ DE DESIGN

Utilizar o Material Design 3 como referência principal.

Priorizar:

- Superfícies organizadas por níveis.
- Hierarquia visual bem definida.
- Componentes com cantos arredondados.
- Botões com estados de interação.
- Navegação intuitiva.
- Ícones consistentes.
- Espaçamentos padronizados.
- Contraste adequado.
- Animações discretas.
- Feedback visual para interações.

Não utilizar estilos visuais genéricos ou inconsistentes com a identidade do portal.

Evitar excesso de gradientes, sombras, efeitos decorativos e animações.

3. PALETA OFICIAL DE CORES

A paleta deverá apresentar aparência institucional, educacional e tecnológica.

Cores principais

Variável| Cor| Aplicação
Primary| #173B65| Elementos principais
Primary Container| #D7E5F7| Superfícies destacadas
Secondary| #315F91| Elementos secundários
Tertiary| #B58A35| Destaques dourados
Background| #F7F8FC| Fundo principal
Surface| #FFFFFF| Cards e superfícies
Surface Variant| #E9EDF3| Superfícies alternativas
Text Primary| #172536| Textos principais
Text Secondary| #64748B| Textos complementares
Outline| #D5DCE5| Bordas
Success| #248653| Estados positivos
Error| #BA1A1A| Estados de erro

Regras de utilização

- Azul-marinho: identidade principal e elementos de destaque.
- Azul complementar: botões e elementos secundários.
- Dourado: pequenos detalhes e destaques especiais.
- Branco: superfícies e cards.
- Cinza-claro: fundos e divisões.
- Verde e vermelho: feedback de estados específicos.

Não utilizar o dourado como cor predominante.

As cores deverão ser implementadas por meio de variáveis CSS centralizadas.

4. TIPOGRAFIA

Utilizar preferencialmente a família Inter.

A tipografia deverá apresentar boa legibilidade em todas as resoluções.

Hierarquia tipográfica

Elemento| Tamanho de referência
H1| 32–40px
H2| 26–32px
H3| 20–24px
H4| 18–20px
Texto principal| 16px
Texto secundário| 14px
Legendas| 12px

Os tamanhos deverão ser adaptados responsivamente.

Regras:

- Evitar excesso de fontes diferentes.
- Utilizar pesos tipográficos de maneira consistente.
- Manter espaçamento adequado entre linhas.
- Não utilizar textos excessivamente pequenos.
- Preservar a hierarquia visual entre títulos e conteúdos.

5. SISTEMA DE ESPAÇAMENTO

Adotar uma escala baseada em múltiplos de 4px.

Token| Valor
XS| 4px
SM| 8px
MD| 16px
LG| 24px
XL| 32px
2XL| 48px
3XL| 64px

Manter espaçamentos consistentes entre:

- Seções.
- Cards.
- Títulos.
- Botões.
- Elementos de navegação.
- Conteúdos internos.

6. BORDAS E SUPERFÍCIES

Utilizar cantos arredondados seguindo a linguagem visual do Material Design 3.

Componente| Border Radius
Botões| 20px
Cards pequenos| 12px
Cards principais| 16px
Containers| 20px
Campos de entrada| 12px

Sombras deverão ser discretas e utilizadas somente quando necessárias para estabelecer hierarquia entre superfícies.

7. COMPONENTES PADRONIZADOS

Todos os componentes deverão seguir o mesmo padrão visual em todas as páginas.

7.1 Cabeçalho

O cabeçalho deverá:

- Permanecer fixo ou sticky quando apropriado.
- Utilizar fundo coerente com a identidade.
- Apresentar navegação organizada.
- Adaptar-se a dispositivos móveis.
- Manter espaçamento consistente.
- Possuir estados visuais de interação.

7.2 Navegação

O portal deverá utilizar navegação clara e intuitiva.

Em telas maiores, utilizar menu horizontal quando houver espaço suficiente.

Em telas menores, utilizar menu expansível ou navegação lateral.

Não permitir que menus ultrapassem os limites da tela.

7.3 Botões

Seguir o padrão Material Design 3.

Tipos:

- Filled Button.
- Outlined Button.
- Text Button.
- Tonal Button.

Todos deverão apresentar:

- Área de toque adequada.
- Estados hover e focus.
- Feedback visual.
- Contraste suficiente.
- Transições discretas.

7.4 Cards

Os cards deverão apresentar:

- Fundo branco ou superfície apropriada.
- Cantos arredondados.
- Espaçamento interno consistente.
- Títulos claros.
- Textos objetivos.
- Ícones coerentes.
- Bordas ou sombras discretas.

Cards clicáveis deverão apresentar indicação visual de interação.

7.5 Tabelas

As tabelas deverão:

- Ter cabeçalhos bem definidos.
- Apresentar alinhamento consistente.
- Facilitar a leitura.
- Adaptar-se a dispositivos móveis.
- Evitar rolagem horizontal desnecessária.

7.6 Gráficos

Os gráficos deverão utilizar as cores oficiais.

Priorizar visualizações simples e informativas.

Não utilizar gráficos decorativos sem finalidade.

7.7 Linha do tempo

Utilizar componentes visuais consistentes para representar etapas, sequências e processos.

7.8 Rodapé

O rodapé deverá apresentar:

- Identificação do portal.
- Informações institucionais.
- Links relevantes.
- Fontes oficiais.
- Data de atualização.

8. IDENTIDADE DAS PÁGINAS

Todas as páginas deverão compartilhar:

- Mesma paleta de cores.
- Mesma tipografia.
- Mesma escala de espaçamento.
- Mesmo padrão de botões.
- Mesmo padrão de cards.
- Mesma linguagem de ícones.
- Mesma lógica de responsividade.
- Mesma linguagem de navegação.

As páginas poderão possuir estruturas específicas conforme suas funcionalidades, mas não poderão desenvolver identidades visuais independentes.

9. RESPONSIVIDADE

Adotar abordagem Mobile First.

Referências iniciais de largura:

- Smartphones: até 599px.
- Tablets: 600px a 1023px.
- Desktops: 1024px ou mais.

Esses valores poderão ser ajustados conforme a necessidade do layout.

Smartphones

- Navegação compacta.
- Cards em uma coluna.
- Botões confortáveis para toque.
- Textos legíveis.
- Espaçamentos adaptados.

Tablets

- Aproveitamento adequado da largura.
- Grades de duas colunas quando apropriado.
- Navegação adaptada.
- Boa utilização do espaço disponível.

Desktops

- Grades com múltiplas colunas.
- Conteúdo centralizado.
- Largura de leitura controlada.
- Navegação horizontal quando apropriada.

Todas as páginas deverão evitar rolagem horizontal indevida.

10. ACESSIBILIDADE

Seguir boas práticas de acessibilidade.

- Utilizar HTML semântico.
- Garantir contraste adequado.
- Permitir navegação por teclado.
- Identificar corretamente botões e links.
- Utilizar textos alternativos em imagens.
- Não depender exclusivamente das cores para transmitir informações.
- Manter estados de foco visíveis.
- Respeitar a preferência por redução de movimento.

11. ÍCONES

Utilizar uma única linguagem visual de ícones.

Preferencialmente:

- Material Symbols.
- Ícones minimalistas.
- Traços consistentes.
- Tamanhos padronizados.

Evitar misturar diferentes bibliotecas ou estilos de ícones sem justificativa.

12. ORGANIZAÇÃO DO CÓDIGO

Tecnologias principais:

- HTML5.
- CSS3.
- JavaScript Vanilla.

Não introduzir frameworks ou bibliotecas sem necessidade ou autorização.

Manter separação entre estrutura, apresentação e comportamento.

Organizar estilos e componentes para facilitar reutilização.

Evitar:

- Código duplicado.
- Estilos conflitantes.
- Variáveis de cores espalhadas.
- Alterações globais desnecessárias.
- Dependências desnecessárias.

13. REGRAS PARA O PORTAL GCM SALVADOR 2026

O projeto possui uma HOME centralizadora e páginas independentes de disciplinas.

A HOME deverá funcionar como ponto de acesso às páginas existentes.

As páginas de disciplinas deverão manter sua autonomia.

Regras obrigatórias:

1. Não recriar páginas existentes.
2. Não substituir conteúdos já desenvolvidos.
3. Não modificar funcionalidades existentes sem autorização.
4. Manter os links das disciplinas centralizados em uma configuração.
5. Utilizar os mesmos endereços no menu e nos cards.
6. Não inventar URLs.
7. Não apresentar informações não confirmadas sobre o concurso.
8. Manter a identidade visual definida neste documento.

14. CONFIABILIDADE DAS INFORMAÇÕES

Informações sobre o concurso deverão ser tratadas separadamente das regras visuais.

Utilizar fontes oficiais:

- Edital.
- Retificações.
- Prefeitura de Salvador.
- Banca organizadora.
- Diário Oficial do Município.

Não inventar datas, remuneração, vagas, critérios de aprovação ou etapas.

Quando uma informação não estiver confirmada, identificá-la como pendente de verificação.

15. REGRAS OBRIGATÓRIAS PARA O ANTIGRAVITY

Você deverá consultar este documento antes de criar qualquer página ou realizar alterações visuais.

Antes de iniciar uma tarefa:

1. Analisar a estrutura existente do projeto.
2. Consultar o DESIGN_SYSTEM.md.
3. Identificar os componentes já implementados.
4. Reutilizar os padrões existentes.
5. Preservar a identidade visual.
6. Evitar alterações desnecessárias em páginas já aprovadas.

Ao desenvolver uma nova página:

1. Seguir integralmente a identidade visual.
2. Reutilizar componentes existentes.
3. Respeitar a paleta oficial.
4. Respeitar a tipografia.
5. Respeitar os espaçamentos.
6. Garantir responsividade.
7. Testar os elementos interativos.
8. Verificar consistência com as demais páginas.

Não modificar regras deste documento sem autorização expressa.

Caso identifique a necessidade de uma alteração no Design System, apresentar a proposta antes de implementá-la.

16. PRIORIDADE DE DESENVOLVIMENTO

Em caso de conflito entre decisões visuais, seguir esta ordem:

1. Consistência com o Design System.
2. Usabilidade.
3. Acessibilidade.
4. Clareza das informações.
5. Responsividade.
6. Estética e efeitos visuais.

A funcionalidade e a facilidade de utilização deverão prevalecer sobre elementos meramente decorativos.

17. OBJETIVO FINAL

Construir um portal educacional profissional, consistente e intuitivo.

Todas as páginas deverão parecer partes de uma mesma plataforma.

O estudante deverá reconhecer imediatamente a identidade visual do Portal de Estudos — GCM Salvador 2026, independentemente da página que estiver utilizando.

Este documento é a referência oficial de identidade visual e padrões de interface do projeto.
Exibindo Escrita…