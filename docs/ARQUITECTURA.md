# Arquitectura técnica

**Versión:** 0.1 · **Estado:** propuesta a validar antes de implementar

## 1. Principio
Construir una aplicación modular con responsabilidades separadas, sin introducir complejidad innecesaria. La interfaz, las reglas de aprendizaje, el contenido, la autenticación y el almacenamiento deben tener límites claros.

## 2. Tecnologías candidatas
La selección final se hará después de un prototipo y de revisar precios y límites vigentes.
- **Código y versiones:** GitHub.
- **Interfaz:** React + TypeScript + Vite.
- **Alojamiento:** Cloudflare Pages; evaluar Workers para funciones de servidor.
- **Autenticación y base de datos:** Supabase Auth + PostgreSQL.
- **Archivos:** Supabase Storage u opción compatible.
- **Pruebas:** pruebas unitarias y recorridos principales.
- **PWA:** posible ampliación luego de validar la web.

No contratar servicios pagos hasta demostrar que los planes gratuitos son insuficientes.

## 3. Módulos
1. Navegación y catálogo de cursos.
2. Identidad, acceso y recuperación de cuenta.
3. Experiencia de aprendizaje: cursos, módulos, unidades, lecciones y recursos.
4. Actividades y evaluaciones mediante un motor común.
5. Progreso, intentos e historial.
6. Repasos programados.
7. Administración y publicación de contenidos.
8. Biblioteca técnica/comercial de marcas y productos.
9. Informes con permisos adecuados.
10. Integraciones futuras, como IA y notificaciones.

## 4. Modelo conceptual de datos
Entidades iniciales a diseñar: perfiles, roles, cursos, módulos, lecciones, bloques de contenido, actividades, preguntas, opciones de respuesta, rúbricas, intentos, respuestas, progreso, elementos de repaso, marcas, líneas, productos, recursos y registro de cambios administrativos.

El diseño físico de tablas se definirá antes de implementarlas. Las contraseñas no se almacenarán directamente: la autenticación corresponderá al proveedor de identidad.

## 5. Contenido separado del código
Los cursos y actividades serán datos administrables, no pantallas programadas individualmente. El editor combinará bloques y tipos de actividad ya soportados. Crear una lección con componentes existentes no debe requerir programación; incorporar un tipo de interacción nuevo sí podría requerir desarrollo.

Los contenidos publicados tendrán identificador y versión. Los cambios no deberán alterar injustamente intentos históricos.

## 6. Seguridad
- Activar Row Level Security (RLS) en tablas expuestas.
- Cada estudiante solo podrá consultar y modificar sus propios datos permitidos.
- Validar permisos administrativos en servidor/base de datos, no solo en la interfaz.
- No guardar claves secretas en el código del navegador ni en GitHub.
- Usar variables de entorno para secretos y configuración sensible.
- Restringir archivos por tipo y tamaño.
- Registrar cambios administrativos importantes.
- Definir privacidad, retención y respaldo antes de abrir el registro.
- Probar la restauración de copias de seguridad.

## 7. Mantenimiento
- Commits pequeños y descriptivos.
- Migraciones versionadas para cambios de base de datos.
- Separar desarrollo y producción cuando corresponda.
- Documentar cambios incompatibles y cómo revertirlos.
- No modificar producción sin un procedimiento documentado.

## 8. Crecimiento
Comenzar simple y medir el uso real. Prever paginación, optimización de imágenes, exportación de contenidos, respaldos y límites de consumo. No sumar servicios o complejidad sin una necesidad concreta.

## 9. Decisiones pendientes
- Stack definitivo y planes vigentes de proveedores.
- Registro por invitación durante el piloto.
- Política de almacenamiento de videos.
- Procedimiento de exportación y respaldo.
- Necesidad real de IA.
- Requisitos legales y de privacidad aplicables.
