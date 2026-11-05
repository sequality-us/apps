# ConstrucPod AI — Next.js & Vercel Ready

Plataforma SaaS automatizada con inteligencia artificial para la gestión de obras y facility services en tiempo real. Monitoreo predictivo, agentes autónomos y detección de cuellos de botella para contratistas certificados MBE como Advance Contractor Group (ACG).

Construido con **Next.js (App Router)**, **React 19**, **Tailwind CSS v4** y optimizado para despliegue automático en **Vercel**.

---

## 🚀 Despliegue en Vercel (Recomendado)

### Opción 1: Conectar Repositorio Git (Más fácil)
1. Sube este proyecto a tu repositorio de **GitHub**, **GitLab** o **Bitbucket**.
2. Ve a [vercel.com/new](https://vercel.com/new) e inicia sesión.
3. Importa el repositorio.
4. Vercel detectará automáticamente **Next.js** y configurará:
   - **Framework Preset:** Next.js
   - **Build Command:** `next build`
   - **Output Directory:** `.next`
   - **Install Command:** `npm install`
5. Haz clic en **Deploy**. ¡Listo en menos de 1 minuto!

### Opción 2: Desde la terminal con Vercel CLI
```bash
# 1. Instalar Vercel CLI globalmente (si no lo tienes)
npm i -g vercel

# 2. Desplegar en modo Preview
vercel

# 3. Desplegar a Producción
vercel --prod
```

---

## 💻 Desarrollo Local

### Requisitos previos
- Node.js 18+ (recomendado Node 20+)
- npm o yarn o pnpm

### Pasos
1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Iniciar servidor de desarrollo:**
   ```bash
   npm run dev
   ```
   Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

3. **Compilar para producción:**
   ```bash
   npm run build
   ```

4. **Ejecutar tests unitarios:**
   ```bash
   npm run test
   ```

---

## 📁 Estructura del Proyecto

```
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Layout principal, metadatos SEO y fuentes
│   │   ├── page.tsx           # Página principal
│   │   └── globals.css        # Tailwind CSS v4 e identidades visuales
│   ├── components/            # Componentes interactivos de UI
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── InteractiveConsole.tsx
│   │   ├── ProductPods.tsx
│   │   ├── BottleneckSandbox.tsx
│   │   ├── RoiCalculator.tsx
│   │   ├── CustomerSpotlight.tsx
│   │   ├── ComparisonTable.tsx
│   │   ├── PricingSection.tsx
│   │   ├── FaqSection.tsx
│   │   ├── DemoModal.tsx
│   │   ├── ReportModal.tsx
│   │   └── ...
│   ├── utils/
│   │   ├── calculator.ts      # Lógica de cálculo de ROI y salud de proyecto
│   │   └── calculator.test.ts # Tests unitarios
│   └── App.tsx                # Orquestador cliente principal
├── next.config.mjs            # Configuración de Next.js
├── postcss.config.mjs         # Integración de Tailwind v4
├── tsconfig.json              # Configuración TypeScript
└── package.json
```
