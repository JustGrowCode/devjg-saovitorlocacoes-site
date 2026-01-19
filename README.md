
# São Vitor Locações - Website Institucional

Este projeto foi desenvolvido seguindo os princípios de alta performance, SEO otimizado e design corporativo robusto para a **São Vitor Locações**.

## 🚀 Tecnologias Utilizadas

- **React 18 + TypeScript**: Framework principal.
- **Tailwind CSS**: Estilização utilitária exclusiva.
- **Framer Motion**: Animações fluidas e sutis.
- **Lucide React**: Ícones industriais e modernos.
- **Mobile-First Design**: Totalmente responsivo.

## 📁 Estrutura do Projeto (Portabilidade Astro)

Embora este protótipo esteja em React, ele foi estruturado para ser facilmente portado para **Astro**:

- `components/`: Componentes que seriam arquivos `.astro`.
- `components/islands/`: Componentes interativos que usariam a diretiva `client:load` ou `client:visible`.
- `Layouts`: Base estrutural com fontes e meta tags.

## 🛠️ Como Executar

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
3. Gere a versão de produção (Páginas Estáticas):
   ```bash
   npm run build
   ```

## ☁️ Deploy no Cloudflare Pages

1. Conecte seu repositório Git ao painel do Cloudflare.
2. Selecione a estrutura "Astro" (ou React dependendo do setup final).
3. O deploy será automático em cada push para a branch principal.

## 📑 Conteúdo Gerenciado (CMS)

Este site está preparado para integração com **Sveltia CMS**. 
As seções de Serviços e Frota podem ser extraídas para arquivos Markdown em `src/content/` para edição visual pelo cliente final no endpoint `/admin`.

---

**Desenvolvido por: Agente de Criação de Sites Estáticos**
© 2026 São Vitor Locações
