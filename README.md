# 💰 Financial Management System (Frontend)

Sistema web para **gerenciamento financeiro pessoal**, desenvolvido com **Vite + React + TypeScript + Tailwind CSS**.

---

## 🚀 Tecnologias

- **Vite**: build rápido e leve para projetos modernos.
- **React**: biblioteca para construção da interface do usuário.
- **TypeScript + SWC**: tipagem estática e build otimizado.
- **Tailwind CSS**: estilização utilitária e responsiva.
- **React Icons**: ícones rápidos e leves.
- **Styled Components**: estilização pontual de elementos.
- **Axios**: requisições HTTP.
- **Toastify**: notificações visuais.
- **Context API**: gerenciamento simples de estado global.

---

## 📁 Estrutura de Pastas

```bash
src/
├── assets/           # Imagens e ícones
├── components/       # Componentes reutilizáveis (botões, inputs, etc.)
├── contexts/         # Contextos globais (ex: Auth)
├── interfaces/       # Tipagens (ex: IAccount, IUser)
├── pages/            # Páginas principais (Home, Login, etc.)
├── routes/           # Definição das rotas com React Router
├── services/         # Axios e serviços externos
├── styles/           # Configurações do Tailwind
├── App.tsx           # Componente principal
├── main.tsx          # Entrada da aplicação
```

---

## 🛡️ Rotas e Autenticação

- As **rotas protegidas** exigem um **token JWT** válido, armazenado no `localStorage`.
- Apenas `/login` e `/register` são **rotas públicas**.
- As demais exigem autenticação.
- As rotas são escritas em **inglês e com nomes intuitivos**:
  - `/profile/edit` → edição do perfil
  - `/accounts` → visualização das contas
  - `/transactions` → histórico e nova transação

---

## 👤 Funcionalidades do Usuário

- Cadastro, login e edição de perfil
- CRUD completo de:
  - **Tipos de Conta**
  - **Contas**
- Visualização de:
  - Saldo atualizado por conta
  - Histórico de transferência **(não podem ser editadas nem excluídas)**
  - Transações individuais (enviadas, recebidas)

---

## 💻 Rodar localmente

### ✅ Pré-requisitos

- Node.js (v18+ recomendado)
- NPM ou Yarn
[Clique aqui para instalar](https://balta.io/blog/node-npm-instalacao-configuracao-e-primeiros-passos)

### 🧭 Instalação

```bash
# Clonar o projeto
git clone https://github.com/meloluvert/fms-techlab-frontend.git
cd frontend-fms-techlab

# Instalar dependências
npm install
```

### 🔧 Configurar variáveis de ambiente

Use o arquivo `.env`:

```env
VITE_API_URL=http://localhost:3000
```
(isso faz rodar localmente, inicialmente vem com a URL da Api)
### 🏃 Executar localmente

```bash
npm run dev
```

A aplicação estará disponível em:  
[http://localhost:5173](http://localhost:5173)

---

## 📦 Build para produção

```bash
npm run build
```

---


## 📎 Justificativas Técnicas

- **Vite** foi escolhido pela rapidez de build e integração moderna com TypeScript.
- **Tailwind** permitiu estilização responsiva sem CSS global ou SCSS.
- O uso de **`deleted_at`** foi adotado para manter consistência em operações reversíveis.
- A organização segue **componentização limpa e modularização clara**.
- Utiliza **Context API** para Auth, simplificando a lógica de acesso nas rotas.

---

## 🌐 Deploy

A aplicação pode ser facilmente publicada na [Vercel](https://vercel.com/) com:

- Build automático via GitHub
- Suporte nativo a `.env` com prefixo `VITE_`
- HTTPS automático

---

## 📚 Backend e Integração

O backend utiliza:

- **Node.js + Express**
- **TypeORM com SQLite**
- **Jest** para testes
- **Autenticação JWT**

Veja o [README do backend](https://github.com/meloluvert/fms-techlab-backend/blob/main/README.md) para mais detalhes.

---

## 📝 Documentação do desafio

- [Especificações oficiais do desafio (PDF)](https://github.com/tech4humans-brasil/techlab-ceu/blob/main/Finan%C3%A7as%20(Webapp)/Desafio%20WebApp.pdf)
- Modelo de banco e lógica de negócio
- Decisões de arquitetura explicadas no README do backend

---

> Projeto desenvolvido para o desafio técnico **Tech4Humans**: gestor financeiro pessoal.