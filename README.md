# 🧪 Rick and Morty Explorer

🔗 **Deploy:**  
https://rick-and-morty-explorer-omega.vercel.app/

📦 **Repositório:**  
https://github.com/jeehgasai/rick-and-morty-explorer

---

Bem-vindo(a)! 👋  
Este projeto faz parte do meu **portfólio pessoal** e representa um marco importante na minha trajetória como desenvolvedora front-end: foi meu **primeiro projeto prático utilizando TypeScript e Next.js**.


Até então, minha base era **HTML, CSS e JavaScript básico**. Tive poucos dias para estudar novos conceitos, entender tipagens, aprender a estrutura do Next.js e aplicar tudo isso em um projeto real. O resultado é uma aplicação que reflete não só o produto final, mas principalmente **meu processo de aprendizado, adaptação e evolução técnica**.

Grande parte do desenvolvimento aconteceu de forma prática: lendo documentação, testando hipóteses, errando, corrigindo e utilizando **IA generativa (Gemini)** como apoio para compreender erros, sintaxe e boas práticas.

---

## ✨ Visão Geral do Projeto

* Listagem de personagens do universo Rick and Morty
* Página de detalhes com informações completas
* Seção de personagens similares
* Busca dinâmica por texto
* Interface fiel ao Figma (Pixel Perfect no Desktop)

---

## 🚀 Como rodar o projeto localmente

Antes de tudo, você precisa ter o **Node.js** instalado na sua máquina.

### 1️⃣ Clone o repositório

```bash
git clone https://github.com/jeehgasai/rick-and-morty-explorer
```

### 2️⃣ Acesse a pasta do projeto

```bash
cd rick-and-morty-explorer
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

👉 [http://localhost:3000](http://localhost:3000)

Pronto! Agora é só explorar o multiverso 🌀

---

## 🧠 Premissas e Contexto

* **Aprendizado acelerado**  
  Projeto desenvolvido enquanto eu aprendia TypeScript e Next.js, adotando uma abordagem prática e incremental.

* **Foco em Desktop (Pixel Perfect)**  
  Atenção especial a espaçamentos, alinhamentos e dimensões para fidelidade visual em telas grandes (1920px).

* **Uso de API pública**  
  Consumo da API pública de Rick and Morty.

* **Similaridade simples e coerente**  
  A espécie foi utilizada como critério de similaridade entre personagens.

---

## 🛠️ Decisões de Projeto

Como este foi meu primeiro contato com **Next.js e TypeScript**, minhas decisões foram guiadas por boas práticas básicas, exemplos da documentação oficial e conteúdos introdutórios da comunidade.

### 🔍 Busca de Personagens (Client-Side e Cascata)

A busca foi implementada como um **Client Component** (`use client`), já que envolve interação direta do usuário.

Para manter a interface simples com apenas um campo de texto implementei uma **lógica de busca em cascata**:

* Primeiro, o sistema tenta buscar pelo **nome** do personagem
* Caso não haja resultados, tenta interpretar o termo como **espécie**
* Em seguida, tenta como **status** ou **gênero**

Essa abordagem permite que o usuário digite termos como `Human`, `Alien` ou `Dead` e ainda assim receba resultados relevantes, sem a necessidade de múltiplos filtros visuais.

A listagem principal utiliza **Server Side Rendering**, enquanto a busca acontece no lado do cliente, equilibrando organização do código e boa experiência de uso dentro do meu nível atual de aprendizado.

---

## 🧩 Organização e Modularização

* Componentes reutilizáveis separados em `app/components`
  (Header, Card, Search, etc.)

* Tipagens centralizadas em `types/`
  Evita duplicação de interfaces e facilita a manutenção

* Client Components isolados
  Componentes que exigem interação (ex: Search com `useState`) foram isolados para não impactar o carregamento inicial

---

## 🧬 Lógica de Similaridade de Personagens

Na página de detalhes, existe a seção **"Outros personagens"**, cuja lógica funciona assim:

1. Identifico a espécie do personagem atual
2. Faço uma requisição à API filtrando personagens dessa mesma espécie
3. Excluo o personagem atual do resultado
4. Exibo os 4 primeiros personagens encontrados

Essa abordagem gera recomendações simples, coerentes e alinhadas aos dados disponíveis.

---

## 🏆 Bônus Implementados

* ✅ **Tratamento de erros de rede**  
  Implementação de uma Error Boundary (`error.tsx`) com feedback amigável ao usuário.

---

## 🔧 Ferramentas Utilizadas

* **IntelliJ IDEA** — IDE principal
* **Next.js / React / Tailwind CSS** — Documentações oficiais e exemplos da comunidade
* **IA Generativa (Gemini)** — Ferramenta de apoio ao aprendizado e resolução de problemas

## 🤖 Desenvolvimento Orientado a IA

Este projeto foi também um exercício de **aprendizado acelerado com apoio de Inteligência Artificial**.

Durante o desenvolvimento, utilizei IA generativa como ferramenta de suporte para:
- Traduzir conceitos de lógica já conhecidos para a sintaxe do **TypeScript**.
- Compreender padrões de organização de componentes e rotas no **Next.js**.
- Investigar erros, mensagens de tipagem e desafios de deploy na **Vercel**.

A IA foi utilizada como apoio ao raciocínio e aprendizado, não como substituição da tomada de decisão.  
As escolhas de arquitetura, organização e implementação final foram feitas por mim, com base no entendimento adquirido ao longo do processo.

Essa abordagem me permitiu evoluir rapidamente em uma nova stack e entregar uma aplicação funcional, organizada e visualmente fiel em um curto período de tempo.

## 🚧 Desafios e Pontos de Melhoria (Roadmap)

Como todo projeto em fase inicial e desenvolvido dentro de um curto período de aprendizado, existem pontos que identifiquei para futuras iterações e refinamentos:

* **Experiência Mobile**
  Atualmente, a aplicação apresenta limitações em telas menores, incluindo sobreposição de elementos e áreas de clique reduzidas nos cards de personagens. Um redesenho focado em mobile-first seria prioridade em uma próxima versão.

* **Edge Cases de UI**
  Personagens com nomes muito extensos (ex: *Abadango Cluster Princess*) ainda precisam de um tratamento mais robusto de quebra de linha ou truncamento para preservar a simetria do layout.

* **Otimização de Performance**
  Possibilidade de aprimorar o carregamento e a otimização de imagens, especialmente para usuários em conexões mais lentas.

Esses pontos já estão mapeados e servem como guia para a evolução contínua do projeto.


---

## 💚 Considerações Finais

Este projeto representa um passo importante na minha evolução como desenvolvedora front-end. Mais do que o resultado visual, ele reflete meu comprometimento com aprendizado contínuo, atenção aos detalhes e boas práticas de código.

Feito com 💚 e código por **Jéssica** ✨
