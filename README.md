# 🇧🇷 Painel Brasil

> **Informação brasileira em um só lugar.**

O **Painel Brasil** é uma aplicação web desenvolvida em React + Vite com o objetivo de organizar e apresentar informações públicas sobre o Brasil de forma simples, visual e interativa.

A aplicação permite consultar estados brasileiros, explorar informações por região, selecionar um estado e visualizar dados relacionados aos seus municípios. Também utiliza uma API pública de clima para apresentar informações meteorológicas.

---

## 📌 Problemática

Diversas informações sobre o Brasil estão disponíveis gratuitamente por meio de APIs públicas. Porém, o acesso direto a esses dados nem sempre proporciona uma experiência simples e intuitiva para o usuário.

A proposta do Painel Brasil é transformar esses dados em uma interface visual e organizada, facilitando a consulta e a interação com informações relacionadas aos estados brasileiros.

---

## 🎯 Objetivo

Desenvolver uma aplicação React funcional, responsiva e interativa capaz de consumir APIs públicas e apresentar seus dados de maneira clara e acessível.

O projeto busca demonstrar conceitos de:

* Consumo de APIs públicas;
* Desenvolvimento com React;
* Componentização;
* Manipulação de dados;
* Interação com o usuário;
* Responsividade;
* Organização de interfaces;
* Tratamento de estados de carregamento;
* Desenvolvimento de uma experiência visual agradável.

---

## ✨ Principais funcionalidades

### 🇧🇷 Estados brasileiros

* Consulta dos estados brasileiros através da API do IBGE;
* Organização dos estados por região;
* Seleção de um estado;
* Exibição da sigla e região;
* Exibição da quantidade de municípios;
* Interface visual para exploração dos estados.

### 🏙️ Municípios

Após a seleção de um estado, a aplicação consulta a API do IBGE para obter os municípios pertencentes à unidade federativa selecionada.

### 🌤️ Informações climáticas

A aplicação também utiliza a API pública Open-Meteo para obter informações meteorológicas a partir de coordenadas geográficas.

Entre os dados disponibilizados pela API estão:

* Temperatura;
* Temperatura aparente;
* Umidade relativa;
* Precipitação;
* Velocidade do vento;
* Condição meteorológica.

---

## 🔌 APIs utilizadas

### IBGE — API de Localidades

Utilizada para consultar informações sobre estados e municípios brasileiros.

**Base da API:**

`https://servicodados.ibge.gov.br/api/v1`

Principais endpoints utilizados:

* `/localidades/estados`
* `/localidades/estados/{UF}/municipios`

---

### Open-Meteo

Utilizada para consultar informações meteorológicas.

**Base da API:**

`https://api.open-meteo.com/v1`

Endpoint utilizado:

* `/forecast`

A aplicação utiliza coordenadas de latitude e longitude para realizar a consulta meteorológica.

---

## 🛠️ Tecnologias utilizadas

* **React**
* **Vite**
* **JavaScript**
* **Axios**
* **CSS**
* **Lucide React**
* **Recharts**

---

## 🧩 Componentização

O projeto foi estruturado utilizando componentes React com responsabilidades específicas.

Entre os componentes desenvolvidos estão elementos relacionados a:

* Cabeçalho e navegação;
* Página inicial;
* Hero section;
* Cards de consulta;
* Estados;
* Mapa interativo;
* Apresentação de informações;
* Elementos visuais e interativos.

A componentização permite uma melhor organização do código e facilita futuras melhorias e expansões da aplicação.

---

## 🖱️ Interação com os dados

A aplicação permite que o usuário interaja diretamente com as informações apresentadas.

Entre as interações estão:

* Seleção de estados;
* Exploração das regiões brasileiras;
* Consulta de municípios;
* Navegação entre áreas da aplicação;
* Consultas utilizando dados provenientes das APIs públicas.

---

## 📱 Responsividade

A interface foi desenvolvida utilizando CSS e técnicas de responsividade para proporcionar uma experiência adequada em diferentes tamanhos de tela.

O projeto foi pensado para funcionar em:

* 📱 Celulares;
* 📲 Tablets;
* 💻 Desktops.

---

## ⚠️ Tratamento de estados da aplicação

Durante o desenvolvimento foram considerados diferentes comportamentos da aplicação, incluindo:

* Estado de carregamento durante consultas;
* Atualização das informações após uma seleção;
* Tratamento de informações recebidas das APIs;
* Organização dos dados para apresentação ao usuário.

Esses comportamentos ajudam a tornar a experiência de utilização mais clara e previsível.

---

## 🚀 Como executar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/AlessandraSantanna/painel-brasil.git
```

### 2. Acesse a pasta

```bash
cd painel-brasil
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Execute o projeto

```bash
npm run dev
```

### 5. Acesse no navegador

O Vite disponibilizará o endereço local indicado no terminal, normalmente:

```text
http://localhost:5173
```

---

## 🏗️ Build de produção

Para gerar a versão de produção:

```bash
npm run build
```

O projeto utiliza o diretório `dist` para os arquivos gerados para produção.

---

## 🌐 Aplicação publicada

> **Link da aplicação:** será adicionado após o deploy na Vercel.

---

## 💻 Repositório

> **GitHub:**
> https://github.com/AlessandraSantanna/painel-brasil

---

## 🤖 Uso de Inteligência Artificial

A Inteligência Artificial foi utilizada como ferramenta de apoio durante o desenvolvimento do projeto, principalmente para auxiliar na compreensão de conceitos, organização dos componentes, identificação de erros e sugestões de melhorias na interface.

### Prompt utilizado

> "Estou desenvolvendo uma aplicação React + Vite chamada Painel Brasil para um desafio de desenvolvimento. Quero criar uma aplicação moderna, interativa e responsiva que consuma uma API pública para apresentar informações sobre os estados brasileiros. Pode me ajudar a organizar a arquitetura do projeto, os componentes React e as funcionalidades necessárias, mantendo o código compreensível para que eu consiga entender as decisões tomadas?"

### Objetivo

Utilizei esse prompt para auxiliar no planejamento inicial da aplicação, na organização dos componentes e na definição das funcionalidades do projeto.

A IA também foi utilizada durante o desenvolvimento como ferramenta de apoio para compreender erros, melhorar a organização do código e solucionar problemas encontrados durante a implementação.

As decisões finais de desenvolvimento, testes e utilização do código foram realizadas durante a construção do projeto.

---

## 📚 Desafio acadêmico

Projeto desenvolvido como parte do:

**Desafio 02 — Painel Interativo com API Pública usando React + Vite**

O projeto foi desenvolvido seguindo os requisitos propostos para a atividade, incluindo consumo de API pública, utilização de React, componentização, interação, responsividade e publicação da aplicação.

---

## 👩‍💻 Desenvolvedora

**Alessandra Santana**

Projeto desenvolvido para fins acadêmicos e de aprendizagem em desenvolvimento web.

---

🇧🇷 **Painel Brasil — Informação brasileira em um só lugar.**
