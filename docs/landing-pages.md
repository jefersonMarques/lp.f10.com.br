# Sistema de landing pages F10

## Objetivo

Criar uma base SvelteKit estática para campanhas de alta conversão do F10 em `lp.f10.com.br`, com páginas rápidas, mobile first, organizadas por produto e por variação de teste A/B.

Exemplos:

- `lp.f10.com.br/financeiro`
- `lp.f10.com.br/financeiro-a`
- `lp.f10.com.br/financeiro-b`
- `lp.f10.com.br/pedagogico`
- `lp.f10.com.br/vendas`

## Decisão técnica

A aplicação usa SvelteKit com adapter static. Cada landing page é pré-renderizada como HTML estático, sem servidor obrigatório. A primeira dobra carrega somente:

1. HTML mínimo.
2. CSS crítico global.
3. Uma imagem WebP da oferta.
4. Um botão para abrir vídeo sob demanda.

O vídeo não é carregado antes do clique. As seções abaixo da primeira dobra são carregadas por `IntersectionObserver` com import dinâmico.

## Estrutura

```text
src/
  lib/
    components/landing/
      DeferredSections.svelte
      HeroMedia.svelte
      LandingSections.svelte
      VideoDialog.svelte
    data/
      landingPages.ts
    services/
      tracking.ts
  routes/
    [slug]/
      +page.svelte
      +page.ts
    +layout.svelte
    +page.svelte
static/
  media/
    hero-financeiro-a.webp
    hero-financeiro-b.webp
    hero-pedagogico-a.webp
    hero-vendas-a.webp
```

## Padrão de conteúdo

Cada landing page deve ter:

- `hero`: imagem principal WebP, título acessível, URL opcional do vídeo.
- `conversion`: CTA principal, link de WhatsApp e texto de microcompromisso.
- `sections`: dores, benefícios, prova, processo, objeções e formulário.
- `tracking`: nome do teste, variação e produto.

## Regras de conversão

1. Uma promessa por página.
2. Uma dor central por landing page.
3. CTA primário repetido após prova e objeções.
4. Prova social curta antes do formulário.
5. Texto direto, sem blocos longos.
6. Microcompromisso no botão de vídeo antes do formulário.
7. Formulário curto: nome, escola, WhatsApp e interesse.
8. Sem menu completo para não dispersar o tráfego pago.

## Performance

Metas iniciais:

- Hero WebP abaixo de 120 KB em produção.
- Nenhum iframe antes do clique.
- Scripts de mídia pagos somente após idle/interação.
- Seções abaixo da primeira dobra em chunk separado.
- Sem fonte externa obrigatória.
- Imagens com `decoding="async"` e `fetchpriority="high"` somente no hero.

## Teste A/B

A primeira fase usa URLs explícitas:

- `/financeiro-a`
- `/financeiro-b`

Isso evita lógica de sorteio no cliente e facilita separar campanhas por conjunto de anúncios. Para rotação automática, usar regra no tráfego pago, GTM ou camada de edge/CDN.

Eventos recomendados:

- `landing_view`
- `video_open`
- `primary_cta_click`
- `lead_form_submit`

Todos recebem:

- `page_slug`
- `product_name`
- `test_name`
- `variant`

## Rastreamento

O arquivo `src/lib/services/tracking.ts` deixa prontos:

- Google Tag Manager.
- Google Ads/GA via `gtag`.
- Meta Pixel.
- LinkedIn Insight.
- X Pixel.
- Endpoint próprio via `PUBLIC_LEAD_ENDPOINT`.

As tags só carregam quando houver variável pública preenchida.

## Próximo passo antes de campanha real

Substituir as imagens WebP de placeholder em `static/media/` por artes finais exportadas em 9:16 ou 4:5, mantendo peso baixo. O texto principal deve estar na própria arte do hero para preservar a primeira dobra simples.
