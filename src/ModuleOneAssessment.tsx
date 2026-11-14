import { useState } from 'react'

type Question = { prompt: string; options: string[]; correct: number; explanation: string }
const questions: Question[] = [
  { prompt: 'Una fotografía muestra una puerta de madera oscura y brillante. ¿Qué podés afirmar con seguridad?', options: ['Que está barnizada', 'Que tiene una superficie brillante y oscura', 'Que no tiene humedad'], correct: 1, explanation: 'El aspecto se puede describir, pero no confirma el tratamiento anterior ni la humedad.' },
  { prompt: 'Una persona pide un acabado brillante para una mesa. ¿Cuál es el mejor primer paso?', options: ['Preguntar por el uso, el estado y las prioridades', 'Suponer que cualquier acabado brillante sirve', 'Elegir por el color de la fotografía'], correct: 0, explanation: 'El objetivo estético es importante, pero debe ponerse en contexto.' },
  { prompt: '¿Qué diferencia importa al comparar una mesa interior con una ventana exterior?', options: ['Solo el tamaño', 'Solo el tono de la madera', 'La exposición y las condiciones de uso'], correct: 2, explanation: 'La lluvia, el sol y el uso cotidiano son contextos distintos.' },
  { prompt: 'Ves un recubrimiento que se desprende en una zona. ¿Qué conclusión es razonable?', options: ['Describir el desprendimiento y averiguar antecedentes', 'Asegurar la causa exacta', 'Suponer que toda la superficie está igual'], correct: 0, explanation: 'Un síntoma visible no revela por sí solo su causa ni su extensión.' },
  { prompt: 'Un cliente no sabe qué acabado tenía antes su puerta. ¿Qué actitud demuestra criterio?', options: ['Afirmar compatibilidad por el brillo', 'Reconocer que falta información y pedir antecedentes', 'Ignorar el estado anterior'], correct: 1, explanation: 'La información desconocida debe señalarse antes de orientar una decisión.' },
  { prompt: '¿Qué información es más útil en una consulta inicial?', options: ['Solo el presupuesto', 'Solo la foto', 'Objeto, ubicación, estado, antecedentes y resultado esperado'], correct: 2, explanation: 'Estas preguntas permiten comprender la situación antes de orientar.' },
]

const KEY = 'academia-pintureria-assessment-1-v1'
type Saved = { answers: Record<number, number>; submitted: boolean }
function load(): Saved {
  try {
    const raw = window.localStorage.getItem(KEY)
    const data: unknown = raw ? JSON.parse(raw) : null
    if (!data || typeof data !== 'object') return { answers: {}, submitted: false }
    const item = data as Partial<Saved>
    return { answers: item.answers && typeof item.answers === 'object' ? item.answers : {}, submitted: item.submitted === true }
  } catch { return { answers: {}, submitted: false } }
}
export default function ModuleOneAssessment() {
  const [saved, setSaved] = useState<Saved>(load)
  const score = questions.filter((q, i) => saved.answers[i] === q.correct).length
  const answered = questions.filter((_, i) => saved.answers[i] !== undefined).length
  const persist = (next: Saved) => {
    setSaved(next)
    try { window.localStorage.setItem(KEY, JSON.stringify(next)) } catch { /* storage unavailable */ }
  }
  return <section className="module-assessment" aria-labelledby="assessment-title">
    <div className="eyebrow">EVALUACIÓN · MÓDULO 01</div>
    <h2 id="assessment-title">Comprobá lo aprendido</h2>
    <p>Seis situaciones para poner a prueba tu capacidad de observar, preguntar y distinguir certezas de suposiciones. Las respuestas se guardan en este dispositivo.</p>
    <div className="assessment-summary"><strong>{saved.submitted ? `${score} / ${questions.length} respuestas correctas` : `${answered} / ${questions.length} respondidas`}</strong><span>{saved.submitted ? 'Evaluación revisada' : 'Podés completar la evaluación a tu ritmo'}</span></div>
    {questions.map((q, i) => <div className="assessment-question" key={i}>
      <div className="assessment-number">PREGUNTA {String(i + 1).padStart(2, '0')}</div>
      <h3>{q.prompt}</h3>
      <div className="assessment-options">{q.options.map((option, j) => <button type="button" key={j} disabled={saved.submitted} aria-pressed={saved.answers[i] === j} className={`assessment-option ${saved.answers[i] === j ? 'selected' : ''} ${saved.submitted && j === q.correct ? 'correct' : ''}`} onClick={() => persist({ answers: { ...saved.answers, [i]: j }, submitted: false })}><span>{String.fromCharCode(65 + j)}</span>{option}</button>)}</div>
      {saved.submitted && <div className="assessment-explanation"><strong>{saved.answers[i] === q.correct ? '✓ Correcto.' : 'Para revisar:'}</strong> {q.explanation}</div>}
    </div>)}
    {saved.submitted ? <div className="assessment-result"><strong>Resultado: {Math.round(score / questions.length * 100)}%</strong><p>{score === questions.length ? 'Excelente: identificaste correctamente todas las situaciones.' : 'Revisá las explicaciones y volvé a intentarlo cuando quieras.'}</p><button className="primary-button" type="button" onClick={() => persist({ answers: {}, submitted: false })}>Volver a intentar</button></div> : <button className="primary-button" type="button" disabled={answered !== questions.length} onClick={() => persist({ ...saved, submitted: true })}>Corregir evaluación ({answered}/{questions.length})</button>}
  </section>
}
