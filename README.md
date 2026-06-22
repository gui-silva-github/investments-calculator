# 💰 Calculadora de Investimentos

Uma aplicação simples de calculadora de investimentos construída com **Angular**, utilizando a API moderna de **Signals** para gerenciamento de estado reativo.

## 🚀 Sobre o Projeto

Esta é uma calculadora de investimentos simples que permite simular o crescimento de um investimento ao longo do tempo com base em:

- **Valor Inicial** — capital inicial investido
- **Investimento Anual** — aporte realizado a cada ano
- **Retorno Esperado** — taxa de juros anual (%)
- **Duração** — período em anos

A aplicação exibe uma tabela detalhada com a evolução ano a ano, mostrando o valor acumulado, o interesse gerado por ano, o total de juros e o capital investido.

## 🛠️ Tecnologias

- [Angular](https://angular.io/) — framework principal
- **Angular Signals** — gerenciamento de estado reativo sem RxJS
- **Angular Forms** (`ngModel`) — two-way data binding nos inputs
- **Angular Pipes** (`currency`) — formatação de valores monetários
- **TypeScript** — tipagem estática

## ✨ Funcionalidades

- [x] Cálculo de juros compostos com aportes anuais
- [x] Tabela de resultados por ano
- [x] Estado gerenciado com Signals
- [x] Interface simples e responsiva

## 📦 Como Executar

```bash
# Clone o repositório
git clone https://github.com/gui-silva-github/investments-calculator.git

# Acesse a pasta
cd investments-calculator

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
ng serve
```

Acesse `http://localhost:4200` no navegador.
