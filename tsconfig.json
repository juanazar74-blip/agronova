# Avalio

**Score predictivo de cheques de pago diferido para Argentina.**

Avalio predice en 10 segundos si un cheque de pago diferido tiene alta
probabilidad de ser cobrado o rechazado, ayudando a reducir pérdidas por
rechazos y mejorar decisiones de crédito.

> MVP web funcional y navegable. El motor de score es **simulado** (no consulta
> APIs reales todavía) y el código está preparado para integrar las fuentes de
> datos reales más adelante.

---

## Stack

- [Next.js 14](https://nextjs.org/) (App Router)
- React 18
- TypeScript
- Tailwind CSS

## Cómo correrlo localmente

Requisitos: **Node.js 18.18+** (probado con Node 22).

```bash
# 1. Posicionarse en la carpeta del proyecto
cd cheques

# 2. Instalar dependencias
npm install

# 3. Levantar el servidor de desarrollo
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000) en el navegador.

- **Landing page:** `/`
- **Simulador / dashboard:** `/dashboard`

### Build de producción

```bash
npm run build
npm run start
```

## Estructura del proyecto

```
cheques/
├── package.json
├── tsconfig.json
├── next.config.js
├── postcss.config.js
├── tailwind.config.ts
└── src/
    ├── app/
    │   ├── layout.tsx          # Layout raíz + metadata + fuente
    │   ├── globals.css         # Estilos base + utilidades Tailwind
    │   ├── page.tsx            # Landing page
    │   └── dashboard/
    │       └── page.tsx        # Simulador de score
    ├── components/
    │   ├── Header.tsx
    │   ├── Logo.tsx
    │   ├── Hero.tsx
    │   ├── ProblemSection.tsx
    │   ├── SolutionSection.tsx
    │   ├── HowItWorks.tsx
    │   ├── DataSources.tsx
    │   ├── Pricing.tsx
    │   ├── CTASection.tsx
    │   ├── Footer.tsx
    │   ├── ScoreForm.tsx       # Formulario CUIT / monto / plazo
    │   └── ScoreResult.tsx     # Score, probabilidad, riesgo, señales
    └── lib/
        └── score.ts            # Motor de score (simulado, reemplazable)
```

## Motor de score (MVP)

La lógica vive en [`src/lib/score.ts`](src/lib/score.ts). Reglas simuladas:

- Monto alto **y** plazo > 90 días → baja el score.
- CUIT terminado en dígito **par** → menor riesgo.
- CUIT terminado en dígito **impar** → riesgo medio.
- Monto > 10.000.000 → señal "monto elevado".
- Plazo > 120 días → señal "plazo extenso".

El resultado incluye:

- **Score** (1–100)
- **Probabilidad de cobro** (%)
- **Nivel de riesgo:** Bajo / Medio / Alto
- **Señales detectadas**
- **Recomendación:** Aprobar / Revisar / Rechazar

## Integrar APIs reales (próximo paso)

La función `calcularScore(input)` en `src/lib/score.ts` encapsula toda la
lógica. Para pasar a datos reales:

1. Crear una API route (`src/app/api/score/route.ts`) que consulte BCRA,
   ARCA/AFIP, Nosis y el modelo propio.
2. Reemplazar la llamada local en `ScoreForm.tsx` por un `fetch("/api/score")`.
3. La UI (`ScoreResult`) no necesita cambios: ya consume el tipo
   `ScoreResultado`.

## Planes

| Plan            | Consultas      | Precio        |
| --------------- | -------------- | ------------- |
| Free            | 3 gratis       | USD 0         |
| Basic           | 50             | USD 20/mes    |
| Pro             | 200            | USD 60/mes    |
| Enterprise SGR  | 1.000          | USD 600/mes   |
| Enterprise Full | Ilimitado      | USD 1.500/mes |

---

_MVP de demostración. El score simulado no constituye asesoramiento financiero._
