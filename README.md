# 🧪 Rick and Morty Explorer

Bem-vindo(a)! 👋
Este projeto foi desenvolvido como parte do **desafio técnico da dti digital** e também marcou meu **primeiro contato prático com TypeScript**.

Até então, minha base era **HTML, CSS e JavaScript básico**. Tive **4 dias** para assimilar novos conceitos, aprender a estrutura do **Next.js**, entender tipagens e aplicar tudo isso em um projeto real — o que tornou o desafio ainda mais intenso e significativo.

Grande parte do aprendizado aconteceu *fazendo*: lendo documentação, testando, errando, corrigindo e utilizando **IA generativa (Gemini)** como apoio para entender erros, sintaxe e boas práticas.

Mais do que cumprir requisitos, este projeto representa meu esforço de aprendizado rápido, autonomia e capacidade de adaptação diante de novas tecnologias.

---

## ✨ Visão Geral do Projeto

* Listagem de personagens
* Página de detalhes com informações completas
* Seção de personagens similares
* Busca por nome
* Interface fiel ao Figma (Pixel Perfect no Desktop)

---

## 🚀 Como rodar o projeto localmente

Antes de tudo, você precisa ter o **Node.js** instalado na sua máquina.

### 1️⃣ Clone o repositório

```bash
git clone <https://github.com/jeehgasai/rick-and-morty-dti>
```

### 2️⃣ Acesse a pasta do projeto

```bash
cd rick-and-morty-dti
```

### 3️⃣ Instale as dependências

```bash
npm install
```

### 4️⃣ Rode o servidor de desenvolvimento

```bash
npm run dev
```

### 5️⃣ Acesse no navegador

Abra:
👉 **[http://localhost:3000](http://localhost:3000)**

Pronto! Agora é só explorar o multiverso 🌀

---

## 🧠 Premissas Assumidas

Durante o desenvolvimento, algumas premissas foram definidas para orientar as decisões técnicas:

* **Curva de aprendizado acelerada**
  Como este foi meu primeiro projeto em TypeScript e Next.js, assumi uma abordagem prática: aprender enquanto desenvolvia, validando cada decisão aos poucos.

* **Foco em Desktop (Pixel Perfect)**
  O protótipo do Figma possui medidas muito específicas. Dediquei bastante tempo analisando espaçamentos, tamanhos, posições e sobreposições diretamente no Figma para garantir a maior fidelidade visual possível em telas grandes (1920px).

* **Disponibilidade da API**
  Assumi que a API pública de Rick and Morty estaria estável e disponível durante o uso da aplicação.

* **Definição simples de Similaridade**
  Como a API não fornece relações diretas entre personagens, considerei como “similares” aqueles que compartilham a mesma **espécie**.

---

## 🛠️ Decisões de Projeto

Como este foi meu primeiro projeto utilizando **Next.js e TypeScript**, minhas decisões foram guiadas principalmente pelo que estava especificado no desafio e por boas práticas que fui aprendendo durante o desenvolvimento, a partir de tutoriais, vídeos e exemplos da comunidade.

### 🔍 Busca de Personagens (Client-Side)

A implementação da busca foi feita como um **Client Component** (`use client`), pois envolve interação direta do usuário.

Essa escolha foi baseada em conteúdos introdutórios sobre Next.js que explicam que funcionalidades como **barra de busca, filtros e autocomplete** funcionam melhor no lado do cliente, já que precisam responder rapidamente enquanto o usuário digita.

Utilizando `useState`, consegui criar uma busca simples e intuitiva, onde:

* O usuário digita o nome do personagem
* A lista é atualizada dinamicamente
* Não é necessário recarregar a página

A listagem principal continua utilizando **Server Side Rendering**, conforme sugerido pelo desafio, enquanto a busca fica responsável apenas por melhorar a experiência do usuário.

Essa separação ajudou a manter o código mais organizado e foi suficiente para atender aos requisitos do projeto sem adicionar complexidade desnecessária para quem ainda está em processo de aprendizado.

---
### 🧩 Organização e Modularização

* Componentes reutilizáveis separados em `app/components`
  (Header, Card, Search, etc.)

* Tipagens centralizadas em `types/`
  Evita duplicação de interfaces e facilita a manutenção

* **Client Components isolados**
  Componentes que exigem interação (ex: Search com `useState`) foram isolados para não impactar o carregamento inicial da aplicação

---

## 🧬 Lógica de Similaridade de Personagens

Na página de detalhes, existe a seção **"Outros personagens"**. A lógica funciona da seguinte forma:

1. Identifico a **espécie** do personagem atual
2. Faço uma requisição à API filtrando personagens dessa mesma espécie
3. Excluo o personagem atual do resultado
4. Exibo os **4 primeiros personagens** encontrados

Essa abordagem garante recomendações simples, coerentes e alinhadas aos dados disponíveis na API.

---

## 💬 Perguntas do Desafio

### 1️⃣ Qual foi o maior desafio técnico?

Sem dúvida, o maior desafio foi **aprender TypeScript e Next.js ao mesmo tempo em que desenvolvia o projeto**, dentro de um prazo curto de 4 dias.

Além disso, alcançar o **Pixel Perfect** exigido pelo Figma demandou muita atenção aos detalhes. Passei bastante tempo conferindo dimensões, espaçamentos, alinhamentos e sobreposição de elementos diretamente no Figma, ajustando propriedades como `position`, `absolute`, `z-index` e margens até que o layout ficasse o mais fiel possível.

Esse processo foi desafiador, mas extremamente enriquecedor para meu aprendizado.

---

### 2️⃣ Como foi definida a lógica de similaridade?

A similaridade foi definida com base no atributo **species (Espécie)**.
Após analisar a API, essa se mostrou a forma mais consistente de agrupar personagens de maneira relevante dentro do universo da série.

---

### 3️⃣ O que poderia ser melhorado com mais tempo?

* 🧪 **Testes Automatizados**
  Implementação de testes unitários com Jest ou Vitest

* 📱 **Responsividade aprimorada**
  Melhor adaptação para mobile, menu hambúrguer e ajustes tipográficos

* 🚨 **Tratamento de erros**
  Página 404 personalizada e mensagens amigáveis em caso de falha da API

---

### 4️⃣ Ferramentas utilizadas

* **IntelliJ IDEA** — IDE principal
* **Next.js / React / Tailwind CSS** — Documentações oficiais e exemplos
* **IA Generativa (Gemini)** — Utilizada como apoio durante o aprendizado para:

    * Compreender conceitos de TypeScript
    * Resolver erros de tipagem
    * Discutir organização de código e estrutura de pastas

---

## 💚 Considerações Finais

Este projeto representa não só a aplicação de conhecimentos técnicos, mas também minha preocupação com organização, clareza de código e boas práticas.

Foi desenvolvido com atenção aos detalhes, curiosidade e vontade de evoluir como desenvolvedora front-end.

---

Feito com 💚 e código por **Jéssica** ✨
