# F10 Landing Pages

Sistema estático de landing pages mobile first para campanhas do F10.

## Rotas iniciais

- `/financeiro`
- `/financeiro-a`
- `/financeiro-b`
- `/pedagogico`
- `/pedagogico-a`
- `/vendas`
- `/vendas-a`
- `/comercial`

## Rodar localmente

```bash
npm install
npm run dev
```

## Build estático

```bash
npm run check
npm run build
```

A saída fica em `build/`.

## Variáveis de rastreamento

Copie `.env.example` para `.env` e preencha somente as tags usadas:

```bash
PUBLIC_GTM_ID=GTM-XXXXXXX
PUBLIC_GA_ID=G-XXXXXXXXXX
PUBLIC_META_PIXEL_ID=000000000000000
PUBLIC_LINKEDIN_PARTNER_ID=0000000
PUBLIC_X_PIXEL_ID=xxxxxxxx
PUBLIC_LEAD_ENDPOINT=https://endpoint-de-captura
```

As tags são carregadas em idle/interação para evitar bloquear a primeira dobra.

## Como criar nova landing page

Edite `src/lib/data/landingPages.ts` e adicione uma nova entrada no objeto `landingPages`.

Para teste A/B, mantenha slugs explícitos:

- `produto-a`
- `produto-b`

A página sem sufixo pode apontar para a variação principal da campanha.

## Documento técnico

O planejamento está em [`docs/landing-pages.md`](docs/landing-pages.md).
