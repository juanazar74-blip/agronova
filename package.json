// ---------------------------------------------------------------------------
// Avalio — Motor de score (MVP simulado)
//
// IMPORTANTE: Esta es una simulación local para el MVP. No consulta APIs reales.
// La firma de `calcularScore` está pensada para reemplazarse luego por una
// llamada a un backend / API (BCRA, ARCA-AFIP, Nosis, datos propios) sin tener
// que tocar los componentes de UI.
// ---------------------------------------------------------------------------

export type NivelRiesgo = "Bajo" | "Medio" | "Alto";
export type Recomendacion = "Aprobar" | "Revisar" | "Rechazar";

export interface ChequeInput {
  cuit: string;
  monto: number;
  plazoDias: number;
}

export interface Senal {
  tipo: "positiva" | "neutral" | "negativa";
  texto: string;
}

export interface ScoreResultado {
  score: number; // 1 a 100
  probabilidadCobro: number; // 0 a 100 (%)
  nivelRiesgo: NivelRiesgo;
  recomendacion: Recomendacion;
  senales: Senal[];
}

const MONTO_ELEVADO = 10_000_000;
const PLAZO_EXTENSO = 120;

/** Deja solo dígitos del CUIT ingresado (acepta guiones, espacios, etc.). */
export function normalizarCuit(cuit: string): string {
  return (cuit || "").replace(/\D/g, "");
}

/** Valida formato básico de CUIT argentino: 11 dígitos. */
export function cuitEsValido(cuit: string): boolean {
  return normalizarCuit(cuit).length === 11;
}

function clamp(n: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, n));
}

/**
 * Calcula el score simulado de un cheque de pago diferido.
 *
 * Reglas del MVP:
 *  - Monto alto + plazo > 90 días  -> baja el score.
 *  - CUIT terminado en dígito par   -> menor riesgo.
 *  - CUIT terminado en dígito impar -> riesgo medio.
 *  - Monto > 10.000.000             -> señal "monto elevado".
 *  - Plazo > 120 días               -> señal "plazo extenso".
 */
export function calcularScore(input: ChequeInput): ScoreResultado {
  const { monto, plazoDias } = input;
  const cuit = normalizarCuit(input.cuit);

  const senales: Senal[] = [];

  // Base
  let score = 72;

  // --- Regla: paridad del último dígito del CUIT ---
  const ultimoDigito = cuit.length > 0 ? Number(cuit[cuit.length - 1]) : 0;
  const cuitPar = ultimoDigito % 2 === 0;

  if (cuit.length === 11) {
    if (cuitPar) {
      score += 14;
      senales.push({
        tipo: "positiva",
        texto: "Historial del emisor con menor riesgo asociado.",
      });
    } else {
      score -= 6;
      senales.push({
        tipo: "neutral",
        texto: "Historial del emisor con riesgo medio.",
      });
    }
  }

  // --- Regla: monto elevado ---
  if (monto > MONTO_ELEVADO) {
    score -= 12;
    senales.push({
      tipo: "negativa",
      texto: "Monto elevado (> ARS 10.000.000) — mayor exposición.",
    });
  }

  // --- Regla: plazo extenso ---
  if (plazoDias > PLAZO_EXTENSO) {
    score -= 14;
    senales.push({
      tipo: "negativa",
      texto: "Plazo extenso (> 120 días) — mayor incertidumbre temporal.",
    });
  }

  // --- Regla combinada: monto alto + plazo > 90 días ---
  if (monto > MONTO_ELEVADO / 2 && plazoDias > 90) {
    score -= 10;
    senales.push({
      tipo: "negativa",
      texto: "Combinación de monto significativo y plazo mayor a 90 días.",
    });
  }

  // --- Señales informativas adicionales ---
  if (plazoDias <= 30) {
    score += 6;
    senales.push({
      tipo: "positiva",
      texto: "Plazo corto (≤ 30 días) — recupero más rápido y previsible.",
    });
  }

  if (monto <= 1_000_000) {
    score += 4;
    senales.push({
      tipo: "positiva",
      texto: "Monto bajo — impacto acotado ante un eventual rechazo.",
    });
  }

  score = Math.round(clamp(score, 1, 100));

  // Probabilidad de cobro derivada del score (con leve no linealidad).
  const probabilidadCobro = Math.round(clamp(score * 0.92 + 4, 1, 99));

  let nivelRiesgo: NivelRiesgo;
  let recomendacion: Recomendacion;

  if (score >= 75) {
    nivelRiesgo = "Bajo";
    recomendacion = "Aprobar";
  } else if (score >= 50) {
    nivelRiesgo = "Medio";
    recomendacion = "Revisar";
  } else {
    nivelRiesgo = "Alto";
    recomendacion = "Rechazar";
  }

  // Si no se disparó ninguna señal de riesgo, dejamos una neutral por claridad.
  if (senales.length === 0) {
    senales.push({
      tipo: "neutral",
      texto: "Sin señales relevantes detectadas con los datos ingresados.",
    });
  }

  return { score, probabilidadCobro, nivelRiesgo, recomendacion, senales };
}

/** Formatea un número como moneda ARS. */
export function formatearARS(n: number): string {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  }).format(isNaN(n) ? 0 : n);
}
