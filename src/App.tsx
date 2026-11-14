import { useState } from 'react'

type Screen = 'home' | 'course' | 'lesson'

const modules = [
  { number: '01', title: 'Conocer la madera y entender qué necesita', lessons: 4, status: 'En curso' },
  { number: '02', title: 'Preparación de la superficie', lessons: 5, status: 'Próximamente' },
  { number: '03', title: 'Tintas, impregnantes y protectores', lessons: 6, status: 'Próximamente' },
  { number: '04', title: 'Barnices y acabados transparentes', lessons: 5, status: 'Próximamente' },
]

function App() {
  const [screen, setScreen] = useState<Screen>('home')
  const [activeLesson, setActiveLesson] = useState('La madera como superficie')
  const [completed, setCompleted] = useState(false)

  const openLesson = (title = 'La madera como superficie') => {
    setActiveLesson(title)
    setScreen('lesson')
  }

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <button className="brand" onClick={() => setScreen('home')} aria-label="Ir al inicio">
          <span className="brand-mark">A</span>
          <span className="brand-copy"><strong>Academia</strong><small>DE PINTURERÍA</small></span>
        </button>

        <div className="side-label">MENÚ PRINCIPAL</div>
        <nav className="side-nav">
          <button className={screen === 'home' ? 'nav-item active' : 'nav-item'} onClick={() => setScreen('home')}>
            <span className="nav-icon">⌂</span> Inicio
          </button>
          <button className={screen === 'course' || screen === 'lesson' ? 'nav-item active' : 'nav-item'} onClick={() => setScreen('course')}>
            <span className="nav-icon">▤</span> Mis cursos
          </button>
          <button className="nav-item muted" onClick={() => setScreen('home')}>
            <span className="nav-icon">◷</span> Mi progreso
          </button>
        </nav>

        <div className="sidebar-bottom">
          <div className="help-card">
            <div className="help-icon">?</div>
            <strong>¿Necesitás ayuda?</strong>
            <p>Estamos preparando un espacio para acompañarte en tu aprendizaje.</p>
          </div>
          <div className="profile">
            <div className="avatar">E</div>
            <div><strong>Estudiante</strong><small>Cuenta de prueba</small></div>
            <span className="profile-dots">···</span>
          </div>
        </div>
      </aside>

      <main className="main-area">
        <header className="topbar">
          <div className="breadcrumb">Academia <span>/</span> {screen === 'home' ? 'Inicio' : screen === 'course' ? 'Mis cursos' : 'Lección'}</div>
          <div className="topbar-right"><span className="status-dot" /> Entorno de demostración <div className="top-avatar">E</div></div>
        </header>

        {screen === 'home' && (
          <div className="page-content">
            <section className="welcome-row">
              <div>
                <div className="eyebrow">TU ESPACIO DE APRENDIZAJE</div>
                <h1>Aprender para <em>asesorar mejor.</em></h1>
                <p className="intro">Incorporá conocimientos, comprendé los productos y desarrollá criterio para cada recomendación.</p>
              </div>
              <div className="welcome-art" aria-hidden="true">
                <div className="art-circle circle-one" /><div className="art-circle circle-two" />
                <div className="art-board"><span>CONOCER</span><b>+</b><span>COMPRENDER</span><b>+</b><span>ASESORAR</span></div>
              </div>
            </section>

            <section className="stats-grid">
              <div className="stat-card"><span className="stat-label">CURSOS DISPONIBLES</span><strong>01</strong><small>Tu formación comienza acá</small></div>
              <div className="stat-card"><span className="stat-label">MÓDULOS DEL CURSO</span><strong>08</strong><small>Un recorrido paso a paso</small></div>
              <div className="stat-card"><span className="stat-label">TU PROGRESO</span><strong>0%</strong><small>Todo comienza con la primera lección</small></div>
            </section>

            <section className="section-heading">
              <div><div className="eyebrow">FORMACIÓN</div><h2>Continuá tu aprendizaje</h2></div>
              <button className="text-button" onClick={() => setScreen('course')}>Ver todos los cursos <span>→</span></button>
            </section>

            <article className="course-card">
              <div className="course-visual">
                <div className="wood-grain grain-a" /><div className="wood-grain grain-b" /><div className="wood-grain grain-c" />
                <div className="course-tag">CURSO 01</div>
                <div className="wood-caption">MATERIALES<br/><strong>Y SUPERFICIES</strong></div>
              </div>
              <div className="course-info">
                <div className="course-meta"><span className="pill">CURSO INICIAL</span><span>8 módulos</span><span>•</span><span>Formación técnica</span></div>
                <h3>Productos y tratamientos para madera</h3>
                <p>Aprendé a reconocer los tipos de madera, preparar superficies y diferenciar los productos de protección y acabado.</p>
                <div className="course-footer"><div className="progress-wrap"><div className="progress-track"><span style={{ width: '0%' }} /></div><small>Sin comenzar</small></div><button className="primary-button" onClick={() => setScreen('course')}>Explorar curso <span>→</span></button></div>
              </div>
            </article>

            <section className="bottom-note"><span className="note-symbol">i</span><p><strong>Una formación para la práctica real.</strong> El objetivo no es memorizar nombres: es aprender a interpretar cada necesidad y recomendar con fundamento.</p></section>
          </div>
        )}

        {screen === 'course' && (
          <div className="page-content narrow-content">
            <button className="back-link" onClick={() => setScreen('home')}>← Volver al inicio</button>
            <div className="eyebrow">CURSO 01 · FORMACIÓN TÉCNICA</div>
            <h1 className="course-title">Productos y tratamientos<br/><em>para madera.</em></h1>
            <p className="intro course-intro">Conocé la superficie, identificá qué necesita y aprendé a elegir el tratamiento adecuado.</p>
            <div className="course-overview">
              <div><span>Duración</span><strong>A tu ritmo</strong></div><div><span>Contenido</span><strong>8 módulos</strong></div><div><span>Modalidad</span><strong>Teórico-práctica</strong></div>
            </div>
            <div className="section-heading module-heading"><div><div className="eyebrow">CONTENIDO DEL CURSO</div><h2>Recorrido de aprendizaje</h2></div><span className="module-count">8 módulos</span></div>
            <div className="module-list">
              {modules.map((module, index) => (
                <article className={index === 0 ? 'module-card current' : 'module-card'} key={module.number}>
                  <div className="module-number">{module.number}</div>
                  <div className="module-copy"><span className="module-status">{module.status}</span><h3>{module.title}</h3><p>{module.lessons} unidades de aprendizaje</p></div>
                  {index === 0 ? <button className="outline-button" onClick={() => openLesson()}>Entrar al módulo <span>→</span></button> : <span className="lock-label">Disponible próximamente</span>}
                </article>
              ))}
            </div>
            <p className="prototype-footnote">Esta vista es una demostración inicial. Los módulos restantes se incorporarán a medida que desarrollemos el contenido.</p>
          </div>
        )}

        {screen === 'lesson' && (
          <div className="page-content narrow-content">
            <button className="back-link" onClick={() => setScreen('course')}>← Volver al curso</button>
            <div className="eyebrow">MÓDULO 01 · UNIDAD 1.1</div>
            <h1 className="lesson-title">{activeLesson}</h1>
            <div className="lesson-layout">
              <article className="lesson-body">
                <div className="lesson-callout"><strong>Objetivo de esta unidad</strong><p>Comprender que la madera no es una superficie uniforme y que sus características influyen en la elección del tratamiento.</p></div>
                <h2>Antes de elegir un producto, observá la madera.</h2>
                <p>La madera es un material natural. Su aspecto y comportamiento pueden variar según la especie, el corte, la humedad, el estado de conservación y los tratamientos que haya recibido.</p>
                <p>Por eso, dos objetos de madera pueden necesitar soluciones diferentes aunque a simple vista parezcan similares.</p>
                <h3>¿Qué conviene observar?</h3>
                <ul><li><strong>La veta:</strong> su dibujo y orientación aportan información sobre la estructura de la madera.</li><li><strong>La absorción:</strong> permite anticipar cómo puede recibir tintas, impregnantes o acabados.</li><li><strong>El estado:</strong> revisar si está nueva, pintada, barnizada, deteriorada o contaminada.</li><li><strong>La humedad:</strong> una condición importante antes de aplicar cualquier sistema.</li></ul>
                <div className="question-box"><span className="eyebrow">PREGUNTA PARA PENSAR</span><h3>¿Alcanza con saber que el cliente tiene una mesa de madera para recomendarle un barniz?</h3><p>No. Primero necesitamos conocer el estado de la superficie, dónde está ubicada, qué uso recibe y qué terminación busca la persona.</p></div>
                <button className={completed ? 'completed-button' : 'primary-button lesson-complete'} onClick={() => setCompleted(!completed)}>{completed ? '✓ Unidad marcada como completada' : 'Marcar unidad como completada'}</button>
              </article>
              <aside className="lesson-aside"><strong>En esta unidad</strong><div className="aside-progress"><span /></div><small>1 de 4 unidades</small><div className="aside-divider" /><span className="aside-label">CONTENIDOS</span><button className="aside-unit selected" onClick={() => openLesson()}>1.1 La madera como superficie</button><button className="aside-unit" onClick={() => openLesson('Necesidades y usos de la madera')}>1.2 Necesidades y usos</button><button className="aside-unit" onClick={() => openLesson('Reconocer el estado de la superficie')}>1.3 Estado de la superficie</button><button className="aside-unit" onClick={() => openLesson('Preguntas para asesorar')}>1.4 Preguntas para asesorar</button></aside>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

export default App