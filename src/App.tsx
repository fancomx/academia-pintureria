import { useState } from 'react'
import { courseModules, allUnits } from './courseContent'

type Screen = 'home' | 'course' | 'lesson'


function App() {
  const [screen, setScreen] = useState<Screen>('home')
  const [activeLesson, setActiveLesson] = useState('La madera como superficie')
  const [completed, setCompleted] = useState(false)
  const [quizAnswer, setQuizAnswer] = useState('')
  const [reflection, setReflection] = useState('')
  const [observationAnswer, setObservationAnswer] = useState('')
  const [classificationAnswer, setClassificationAnswer] = useState('')
  const [questionsAnswer, setQuestionsAnswer] = useState('')
  const [explanationAnswer, setExplanationAnswer] = useState('')
  const [showQuestionsGuide, setShowQuestionsGuide] = useState(false)
  const [showExplanationGuide, setShowExplanationGuide] = useState(false)
  const [showCaseGuide, setShowCaseGuide] = useState(false)

  const openLesson = (title = 'La madera como superficie') => {
    setActiveLesson(title)
    setCompleted(false)
    setQuizAnswer('')
    setReflection('')
    setScreen('lesson')
  }
  const activeUnit = allUnits.find(unit => unit.title === activeLesson) || allUnits[0]

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
              {courseModules.map((module, index) => (
                <article className={index === 0 ? 'module-card current' : 'module-card'} key={module.number}>
                  <div className="module-number">{module.number}</div>
                  <div className="module-copy"><span className="module-status">{index === 0 ? 'Módulo inicial' : 'Contenido del curso'}</span><h3>{module.title}</h3><p>{module.units.length} unidades de aprendizaje</p></div>
                  <button className="outline-button" onClick={() => openLesson(module.units[0].title)}>Ver unidades <span>→</span></button>
                </article>
              ))}
            </div>
            <p className="prototype-footnote">El curso contiene 8 módulos y 32 unidades. Las fichas comerciales y los parámetros específicos de cada producto se incorporarán con documentación oficial vigente.</p>
          </div>
        )}

        {screen === 'lesson' && (
          <div className="page-content narrow-content">
            <button className="back-link" onClick={() => setScreen('course')}>← Volver al curso</button>
            <div className="eyebrow">MÓDULO {activeUnit.moduleNumber} · UNIDAD {activeUnit.id}</div>
            <h1 className="lesson-title">{activeLesson}</h1>
            <div className="lesson-layout">
              <article className="lesson-body">
                {activeLesson === 'La madera como superficie' ? <>
                <div className="lesson-callout"><strong>Objetivo de esta unidad</strong><p>Comprender que la madera no es una superficie uniforme y que sus características influyen en la elección del tratamiento.</p></div>
                <h2>Antes de elegir un producto, observá la madera.</h2>
                <p>La madera es un material natural. Su aspecto y comportamiento pueden variar según la especie, el corte, la humedad, el estado de conservación y los tratamientos que haya recibido.</p>
                <p>Por eso, dos objetos de madera pueden necesitar soluciones diferentes aunque a simple vista parezcan similares.</p>

                <div className="lesson-visual" role="img" aria-label="Esquema ilustrativo de una tabla de madera con vetas y fibras en distintas direcciones">
                  <div className="visual-label">OBSERVÁ LA SUPERFICIE</div>
                  <div className="wood-sample"><span className="wood-line line-one" /><span className="wood-line line-two" /><span className="wood-line line-three" /><span className="wood-line line-four" /></div>
                  <p>Las vetas son dibujos visibles relacionados con la estructura y el crecimiento del árbol.</p>
                </div>

                <h3>1. Vetas y dirección de la fibra</h3>
                <p>Las vetas son dibujos visibles que se relacionan con la estructura y el crecimiento del árbol. La dirección de la fibra describe la orientación predominante de las células alargadas de la madera.</p>
                <ul><li>Ayudan a reconocer visualmente la estructura de la pieza.</li><li>Pueden influir en cómo se trabaja y lija la superficie.</li><li>La apariencia puede cambiar según la dirección y el tipo de corte.</li></ul>
                <p className="lesson-tip"><strong>Importante:</strong> una veta más marcada no indica por sí sola mayor calidad ni determina qué producto necesita la madera.</p>

                <h3>2. Poros y absorción</h3>
                <p>La madera tiene una estructura porosa. La cantidad, el tamaño y la distribución de sus poros varían entre especies y también dentro de una misma pieza.</p>
                <p>La absorción es la capacidad de un material de incorporar un líquido. Puede variar por la especie, la orientación de la superficie, el lijado, la humedad y la presencia de recubrimientos anteriores.</p>
                <p>Esto ayuda a entender por qué un producto puede penetrar o cambiar el aspecto de una madera de manera diferente a otra. La absorción, por sí sola, no alcanza para decidir qué producto aplicar.</p>

                <h3>3. Humedad y cambios de la madera</h3>
                <p>La madera intercambia humedad con el ambiente. Puede ganar o perder humedad y cambiar sus dimensiones. Estos movimientos pueden afectar la estabilidad de la pieza y el comportamiento de los recubrimientos.</p>
                <ul><li>¿Estuvo almacenada bajo techo o a la intemperie?</li><li>¿Está expuesta a lluvia o humedad frecuente?</li><li>¿Hay señales visibles de humedad o deterioro?</li></ul>
                <p>No se puede diagnosticar el contenido exacto de humedad mirando una fotografía. Cuando ese dato sea importante, hay que seguir la indicación del fabricante y utilizar el método de medición apropiado.</p>

                <h3>4. La superficie también tiene historia</h3>
                <p>Antes de recomendar, identificá si la madera está nueva y sin tratar, previamente recubierta, envejecida o deteriorada. La apariencia exterior no siempre permite reconocer qué producto se aplicó anteriormente.</p>
                <div className="lesson-tip"><strong>Regla de asesoramiento:</strong> diferenciá lo que podés observar de lo que todavía necesitás preguntar o comprobar.</div>

                <section className="activity-panel">
                  <div className="eyebrow">ACTIVIDAD 1 · COMPRENSIÓN</div>
                  <h3>¿Qué información permite decidir un producto?</h3>
                  <p>Un cliente muestra una mesa de madera. ¿Qué dato sería insuficiente para recomendar directamente un barniz?</p>
                  <div className="quiz-options">
                    {[
                      ['a', 'Saber solamente que es una mesa de madera.'],
                      ['b', 'Conocer si está en interior o exterior.'],
                      ['c', 'Saber si tiene un recubrimiento anterior.'],
                    ].map(([value, label]) => (
                      <button key={value} className={quizAnswer === value ? 'quiz-option chosen' : 'quiz-option'} onClick={() => setQuizAnswer(value)}>{value.toUpperCase()}. {label}</button>
                    ))}
                  </div>
                  {quizAnswer && <div className={quizAnswer === 'a' ? 'quiz-feedback correct' : 'quiz-feedback'}>{quizAnswer === 'a' ? '¡Correcto! El tipo de objeto no alcanza. También hay que conocer el estado, la ubicación, la exposición, el uso y la terminación buscada.' : 'Todavía no. Ese dato sí aporta información útil, pero no es el único que necesitamos. Pensá cuál de las opciones describe menos la situación.'}</div>}
                </section>

                <section className="activity-panel">
                  <div className="eyebrow">ACTIVIDAD 2 · OBSERVACIÓN</div>
                  <h3>Describí sin sacar conclusiones apresuradas.</h3>
                  <p>Imaginá que observás una tabla con vetas onduladas y zonas de distinto color. ¿Qué podés afirmar a partir de lo que ves?</p>
                  <div className="quiz-options">
                    <button className={observationAnswer === 'visible' ? 'quiz-option chosen' : 'quiz-option'} onClick={() => setObservationAnswer('visible')}>Puedo describir las vetas y las diferencias de color, pero no asegurar la especie ni el tratamiento.</button>
                    <button className={observationAnswer === 'species' ? 'quiz-option chosen' : 'quiz-option'} onClick={() => setObservationAnswer('species')}>Puedo identificar con certeza la especie y el producto aplicado.</button>
                  </div>
                  {observationAnswer && <div className={observationAnswer === 'visible' ? 'quiz-feedback correct' : 'quiz-feedback'}>{observationAnswer === 'visible' ? 'Correcto. La observación debe limitarse a rasgos visibles; otros datos requieren preguntas o comprobaciones.' : 'No necesariamente. El aspecto de una fotografía no permite confirmar por sí solo la especie ni el tratamiento anterior.'}</div>}
                </section>

                <section className="activity-panel">
                  <div className="eyebrow">ACTIVIDAD 3 · CLASIFICACIÓN</div>
                  <h3>¿Qué sabemos realmente sobre esta superficie?</h3>
                  <p>Una persona envía una fotografía de una puerta marrón y brillante. No aporta más información. ¿Cómo conviene clasificar su estado?</p>
                  <div className="quiz-options">
                    <button className={classificationAnswer === 'coated' ? 'quiz-option chosen' : 'quiz-option'} onClick={() => setClassificationAnswer('coated')}>Está recubierta con barniz.</button>
                    <button className={classificationAnswer === 'new' ? 'quiz-option chosen' : 'quiz-option'} onClick={() => setClassificationAnswer('new')}>Es madera nueva y sin tratar.</button>
                    <button className={classificationAnswer === 'unknown' ? 'quiz-option chosen' : 'quiz-option'} onClick={() => setClassificationAnswer('unknown')}>No se puede determinar solo con esos datos.</button>
                  </div>
                  {classificationAnswer && <div className={classificationAnswer === 'unknown' ? 'quiz-feedback correct' : 'quiz-feedback'}>{classificationAnswer === 'unknown' ? 'Exacto. El color y el brillo no alcanzan para conocer con certeza el producto ni la historia de la superficie.' : 'Esa posibilidad existe, pero la fotografía no alcanza para confirmarla. Hay que preguntar y evaluar.'}</div>}
                </section>

                <section className="activity-panel">
                  <div className="eyebrow">ACTIVIDAD 4 · PREGUNTAS DE DIAGNÓSTICO</div>
                  <h3>Un cliente quiere proteger una puerta de madera.</h3>
                  <p>Escribí cuatro preguntas que harías antes de recomendar un producto.</p>
                  <textarea className="reflection-input" value={questionsAnswer} onChange={(event) => setQuestionsAnswer(event.target.value)} placeholder="1. ¿Está en interior o exterior? ..." rows={4} />
                  <button className="guide-button" onClick={() => setShowQuestionsGuide(!showQuestionsGuide)}>{showQuestionsGuide ? 'Ocultar orientación' : 'Revisar mi respuesta'}</button>
                  {showQuestionsGuide && <div className="quiz-feedback guide-feedback"><strong>¿Qué debería contemplar tu diagnóstico?</strong><ul><li>Ubicación y exposición: interior, exterior, lluvia o sol.</li><li>Estado actual: desgaste, grietas, zonas flojas o deterioradas.</li><li>Tratamiento anterior: qué tiene aplicado y si se encuentra firme.</li><li>Resultado buscado: protección, color, brillo o conservar el aspecto natural.</li></ul><p>Compará tus preguntas con estos puntos. No hace falta usar las mismas palabras: importa que consigas información útil antes de recomendar.</p></div>}
                </section>

                <section className="activity-panel">
                  <div className="eyebrow">ACTIVIDAD 5 · EXPLICACIÓN</div>
                  <h3>¿Por qué dos maderas pueden necesitar tratamientos diferentes?</h3>
                  <p>Explicalo con tus palabras. Intentá relacionar al menos dos factores estudiados en esta unidad.</p>
                  <textarea className="reflection-input" value={explanationAnswer} onChange={(event) => setExplanationAnswer(event.target.value)} placeholder="Dos superficies pueden necesitar tratamientos diferentes porque..." rows={4} />
                  <button className="guide-button" onClick={() => setShowExplanationGuide(!showExplanationGuide)}>{showExplanationGuide ? 'Ocultar orientación' : 'Revisar mi respuesta'}</button>
                  {showExplanationGuide && <div className="quiz-feedback guide-feedback"><strong>Elementos que podés relacionar:</strong><ul><li>La especie y la estructura porosa pueden influir en la absorción.</li><li>La humedad y la exposición ambiental afectan el comportamiento de la madera.</li><li>El estado de la superficie y los recubrimientos anteriores condicionan la preparación y el tratamiento.</li><li>El uso y la terminación buscada también modifican la elección.</li></ul><p>Una buena explicación relaciona al menos dos factores y explica cómo cambian la necesidad de protección o acabado.</p></div>}
                </section>

                <section className="activity-panel">
                  <div className="eyebrow">ACTIVIDAD 6 · CASO DE MOSTRADOR</div>
                  <h3>Una persona quiere renovar una ventana de madera instalada en el exterior.</h3>
                  <p>No sabe qué producto tiene aplicado. Escribí qué le preguntarías antes de recomendar un tratamiento.</p>
                  <textarea className="reflection-input" value={reflection} onChange={(event) => setReflection(event.target.value)} placeholder="Por ejemplo: ¿está barnizada o pintada? ¿Presenta zonas deterioradas? ..." rows={5} />
                  <button className="guide-button" onClick={() => setShowCaseGuide(!showCaseGuide)}>{showCaseGuide ? 'Ocultar orientación' : 'Revisar mi respuesta'}</button>
                  {showCaseGuide && <div className="quiz-feedback guide-feedback"><strong>Para revisar tu asesoramiento:</strong><ul><li>Preguntá por la exposición al sol, la lluvia y la humedad.</li><li>Consultá qué producto tiene aplicado, si lo sabe, y cuándo fue tratado.</li><li>Indagá si hay descascaramiento, grietas, zonas deterioradas o madera expuesta.</li><li>Preguntá qué aspecto final busca el cliente.</li><li>Antes de indicar un sistema, verificá preparación, compatibilidad y ficha técnica vigente.</li></ul><p>La respuesta más sólida no adivina qué tiene aplicado: reúne datos y reconoce qué falta comprobar.</p></div>}
                  <p className="activity-hint">Tu respuesta queda disponible en esta demostración mientras no recargues la página. El guardado permanente se incorporará más adelante.</p>
                </section>

                <div className="question-box"><span className="eyebrow">IDEA PARA RECORDAR</span><h3>Primero observá, después preguntá y recién entonces evaluá qué producto puede servir.</h3><p>La selección final siempre debe contrastarse con el uso previsto y la ficha técnica vigente del fabricante.</p></div>
                <button className={completed ? 'completed-button' : 'primary-button lesson-complete'} onClick={() => setCompleted(!completed)}>{completed ? '✓ Unidad marcada como completada' : 'Marcar unidad como completada'}</button>
                </> : <>
                  <div className="lesson-callout"><strong>Objetivo de esta unidad</strong><p>{activeUnit.objective}</p></div>
                  <h2>{activeUnit.title}</h2>
                  <p>{activeUnit.intro}</p>
                  {activeUnit.sections.map((section, index) => <section className="content-section" key={section.heading}><h3>{index + 1}. {section.heading}</h3><p>{section.body}</p><div className="lesson-tip"><strong>Para recordar:</strong> {section.takeaway}</div></section>)}
                  <section className="activity-panel"><div className="eyebrow">ACTIVIDAD DE APLICACIÓN</div><h3>Llevémoslo a una situación real</h3><p>{activeUnit.practice}</p><textarea className="reflection-input" value={reflection} onChange={(event) => setReflection(event.target.value)} placeholder="Escribí tu análisis..." rows={5} /><p className="activity-hint">La respuesta queda en esta demostración hasta que recargues la página. El guardado permanente se incorporará en una etapa posterior.</p></section>
                  <div className="question-box"><span className="eyebrow">PARA REFLEXIONAR</span><h3>{activeUnit.reflection}</h3><p>Intentá responder con tus propias palabras antes de consultar otras unidades.</p></div>
                  <div className="activity-panel"><div className="eyebrow">AUTOEVALUACIÓN</div><h3>¿Podés explicar el concepto central de esta unidad sin mirar el texto?</h3><p>Si todavía no, volvé a la sección que te resultó más difícil y resumila con tus palabras.</p></div>
                  <button className={completed ? 'completed-button' : 'primary-button lesson-complete'} onClick={() => setCompleted(!completed)}>{completed ? '✓ Unidad marcada como completada' : 'Marcar unidad como completada'}</button>
                </>}
              </article>
              <aside className="lesson-aside"><strong>Recorrido del curso</strong><div className="aside-progress"><span style={{ width: `${Math.round(((allUnits.findIndex(unit => unit.id === activeUnit.id) + 1) / allUnits.length) * 100)}%` }} /></div><small>Unidad {allUnits.findIndex(unit => unit.id === activeUnit.id) + 1} de {allUnits.length}</small><div className="aside-divider" /><span className="aside-label">UNIDADES</span><div className="aside-unit-list">{courseModules.map(module => <div className="aside-module" key={module.number}><span className="aside-module-title">{module.number} · {module.title}</span>{module.units.map(unit => <button key={unit.id} className={activeUnit.id === unit.id ? 'aside-unit selected' : 'aside-unit'} onClick={() => openLesson(unit.title)}>{unit.id} {unit.title}</button>)}</div>)}</div></aside>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

export default App