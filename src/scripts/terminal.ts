// ==========================================
// 1. DICCIONARIO BILINGÜE COMPLETO
// ==========================================
const i18n = {
    es: {
        langBtn: "[ SWITCH_LANG: EN ]",
        heroText: `Ingeniero especializado en el desarrollo de <span class="text-green-500">sistemas integrales</span>, desde arquitecturas backend de alto rendimiento hasta interfaces dinámicas y funcionales. Experto en optimización de datos y en la creación de herramientas de gestión, integrando flujos de asistencia y despliegues robustos en Linux con un enfoque en la seguridad y la experiencia del usuario.`,
        cvBtn: "[ EXTRAER_REGISTRO_CV.pdf ]",
        ticker: "> RENDIMIENTO POLARS: +400% vs PANDAS &nbsp;&nbsp;&nbsp; // &nbsp;&nbsp;&nbsp; > REGISTROS PROCESADOS: +2.5M &nbsp;&nbsp;&nbsp; // &nbsp;&nbsp;&nbsp; > STATUS: SYSTEM_OPTIMIZED &nbsp;&nbsp;&nbsp; // &nbsp;&nbsp;&nbsp; > ARCHITECTURE: DISTRIBUTED &nbsp;&nbsp;&nbsp; // &nbsp;&nbsp;&nbsp; > COMPLIANCE: SONIC_SCIENTIST_ACTIVE &nbsp;&nbsp;&nbsp; // &nbsp;&nbsp;&nbsp; > LOCATION: CDMX_NODE &nbsp;&nbsp;&nbsp; // &nbsp;&nbsp;&nbsp;",
        expTitle: "> experiencia_laboral",
        expCurrent: "Actualmente",
        wipBadge: "[ EN DESARROLLO ]",
        exp1Title: "Administrador de BD y Backend Developer",
        exp1Bullets: `<li><span class="text-green-500/50 mr-2">></span>Detección y depuración de inconsistencias en bases de datos críticas para supervisión financiera.</li><li><span class="text-green-500/50 mr-2">></span>Automatización de procesos y cruce masivo de datos con SQL avanzado y scripts de backend.</li><li><span class="text-green-500/50 mr-2">></span>Control de versiones de flujos de datos y automatizaciones con Git.</li>`,
        exp2Title: "Desarrollador Full Stack (React / Node.js)",
        exp2Bullets: `<li><span class="text-green-500/50 mr-2">></span>Desarrollo y mantenimiento de aplicaciones web corporativas con React y Node.js.</li><li><span class="text-green-500/50 mr-2">></span>Creación e integración de APIs REST con servicios backend y bases de datos NoSQL (MongoDB).</li><li><span class="text-green-500/50 mr-2">></span>Implementación de interfaces responsivas y UX/UI adaptadas al cliente.</li>`,
        exp3Title: "Programador Backend y Analista de Datos",
        exp3Bullets: `<li><span class="text-green-500/50 mr-2">></span>Diseño y desarrollo de scripts personalizados para automatizar procesos e interactuar con servicios web.</li><li><span class="text-green-500/50 mr-2">></span>Implementación de soluciones de web scraping para extraer y estructurar datos para análisis.</li>`,
        exp4Title: "Becario en Sistemas y Programación",
        exp4Bullets: `<li><span class="text-green-500/50 mr-2">></span>Desarrollo y ejecución de scripts para automatizar la extracción de datos y gestión de bases de datos.</li>`,
        exp5Title: "Analista de Datos",
        exp5Bullets: `<li><span class="text-green-500/50 mr-2">></span>Recopilación, procesamiento y visualización de grandes volúmenes de datos para toma de decisiones.</li>`,
        modulesTitle: "> módulos_desplegados",
        sonicDesc: "Herramienta de cumplimiento normativo y auditoría. Desarrollo enfocado en la validación estructurada de datos y la aplicación estricta de filtros regulatorios.",
        dochubDesc: "Sistema integral de gestión de archivos. Arquitectura diseñada para el despliegue seguro en servidores, optimizando el flujo de trabajo y repositorios.",
        deadmanDesc: "Script de seguridad automatizado a nivel de sistema operativo para proteger y gestionar información crítica en caso de ausencias prolongadas.",
        arsenalTitle: "> arsenal_técnico",
        specTag: "Especialidad de Alto Rendimiento",
        specTitle: "Data Engineering con Polars",
        specDesc: "Ingeniería de datos enfocada en la velocidad. Experto en refactorización de pipelines de datos para maximizar el throughput y minimizar el consumo de recursos de hardware. Transformo procesos lentos y pesados en sistemas ágiles y robustos capaces de operar en entornos de alta demanda.",
        contactEst: "> Estableciendo conexión segura... [ OK ]",
        contactParam: "> Ingresando parámetros del mensaje:",
        contactName: "> Nombre:",
        contactBtn: "[ EJECUTAR ENVÍO ]",
        statEco: '"Uptime Ecobici: > 365 days [ ACTIVE ]"',
        statAstro: '"Proyector Astronauta: [ ONLINE ]"'
    },
    en: {
        langBtn: "[ SWITCH_LANG: ES ]",
        heroText: `Engineer specialized in the development of <span class="text-green-500">comprehensive systems</span>, from high-performance backend architectures to dynamic and functional interfaces. Expert in data optimization and the creation of management tools, integrating assistance workflows and robust Linux deployments with a focus on security and user experience.`,
        cvBtn: "[ EXTRACT_RESUME_RECORD.pdf ]",
        ticker: "> POLARS PERFORMANCE: +400% vs PANDAS &nbsp;&nbsp;&nbsp; // &nbsp;&nbsp;&nbsp; > RECORDS PROCESSED: +2.5M &nbsp;&nbsp;&nbsp; // &nbsp;&nbsp;&nbsp; > STATUS: SYSTEM_OPTIMIZED &nbsp;&nbsp;&nbsp; // &nbsp;&nbsp;&nbsp; > ARCHITECTURE: DISTRIBUTED &nbsp;&nbsp;&nbsp; // &nbsp;&nbsp;&nbsp; > COMPLIANCE: SONIC_SCIENTIST_ACTIVE &nbsp;&nbsp;&nbsp; // &nbsp;&nbsp;&nbsp; > LOCATION: CDMX_NODE &nbsp;&nbsp;&nbsp; // &nbsp;&nbsp;&nbsp;",
        expTitle: "> work_experience",
        expCurrent: "Present",
        wipBadge: "[ IN DEVELOPMENT ]",
        exp1Title: "DB Administrator & Backend Developer",
        exp1Bullets: `<li><span class="text-green-500/50 mr-2">></span>Detection and debugging of inconsistencies in critical databases for financial supervision.</li><li><span class="text-green-500/50 mr-2">></span>Process automation and massive data crossover using advanced SQL and backend scripts.</li><li><span class="text-green-500/50 mr-2">></span>Version control of data flows and automations with Git.</li>`,
        exp2Title: "Full Stack Developer (React / Node.js)",
        exp2Bullets: `<li><span class="text-green-500/50 mr-2">></span>Development and maintenance of corporate web applications using React and Node.js.</li><li><span class="text-green-500/50 mr-2">></span>Creation and integration of REST APIs connecting frontend with backend services and NoSQL databases (MongoDB).</li><li><span class="text-green-500/50 mr-2">></span>Implementation of responsive UX/UI interfaces tailored to client needs.</li>`,
        exp3Title: "Backend Developer & Data Analyst",
        exp3Bullets: `<li><span class="text-green-500/50 mr-2">></span>Design and development of custom scripts to automate processes and interact with web services.</li><li><span class="text-green-500/50 mr-2">></span>Implementation of web scraping solutions to extract and structure data for analysis.</li>`,
        exp4Title: "Systems & Programming Intern",
        exp4Bullets: `<li><span class="text-green-500/50 mr-2">></span>Development and execution of scripts to automate data extraction and database management.</li>`,
        exp5Title: "Data Analyst",
        exp5Bullets: `<li><span class="text-green-500/50 mr-2">></span>Collection, processing and visualization of large data volumes to support technical and business decision-making.</li>`,
        modulesTitle: "> deployed_modules",
        sonicDesc: "Regulatory compliance and auditing tool. Development focused on structured data validation and strict application of regulatory filters.",
        dochubDesc: "Comprehensive file management system. Architecture designed for secure server deployment, optimizing workflows and repositories.",
        deadmanDesc: "Automated OS-level security script to protect and manage critical information in case of prolonged absences.",
        arsenalTitle: "> tech_arsenal",
        specTag: "High-Performance Specialty",
        specTitle: "Data Engineering with Polars",
        specDesc: "Data engineering focused on speed. Expert in refactoring data pipelines to maximize throughput and minimize hardware resource consumption. I transform slow and heavy processes into agile and robust systems capable of operating in high-demand environments.",
        contactEst: "> Establishing secure connection... [ OK ]",
        contactParam: "> Entering message parameters:",
        contactName: "> Name:",
        contactBtn: "[ EXECUTE SEND ]",
        statEco: '"Ecobici Uptime: > 365 days [ ACTIVE ]"',
        statAstro: '"Astronaut Projector: [ ONLINE ]"'
    }
};

type Lang = "es" | "en";
let currentLang: Lang = "es";

function updateLanguage() {
    // Encuentra TODOS los elementos que tengan el atributo data-i18n
    const elements = document.querySelectorAll<HTMLElement>('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n') as keyof typeof i18n.es;
        if (key && i18n[currentLang][key]) {
            el.innerHTML = i18n[currentLang][key];
        }
    });
}

// ==========================================
// 2. INICIALIZACIÓN DE EVENTOS
// ==========================================
document.addEventListener('DOMContentLoaded', () => {

    // -- Switch de Idioma --
    const langSwitchBtn = document.getElementById("lang-switch");
    if (langSwitchBtn) {
        langSwitchBtn.addEventListener("click", () => {
            currentLang = currentLang === "es" ? "en" : "es";
            updateLanguage();
        });
    }

    // -- Secuencia de Arranque (Boot) --
    const bootLogs = [
        "[ OK ] Booting core system...",
        "[ OK ] Authenticating user IDEX-4186...",
        "[ OK ] Access Granted: Cristopher Meza.",
        "[ OK ] Initializing Polars data engine...",
        "[ OK ] Mounting SQLite volumes...",
        "[ OK ] Starting compliance protocol: SONIC_SCIENTIST...",
        "[ OK ] Loading file management daemon: DOCHUB...",
        "[ OK ] Verifying Dead Man's Switch... Active.",
        " ",
        "System ready. Executing portfolio.sh...",
    ];

    const terminalScreen = document.getElementById("terminal-screen");
    const terminalContainer = document.getElementById("terminal-container");
    const portfolioContainer = document.getElementById("portfolio-container");
    const cursor = document.getElementById("cursor");

    const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

    async function runBootSequence() {
        if (!terminalScreen || !terminalContainer || !portfolioContainer || !cursor) return;

        for (let i = 0; i < bootLogs.length; i++) {
            const delay = Math.random() * 300 + 50;
            await sleep(delay);
            const p = document.createElement("p");
            p.textContent = bootLogs[i];
            terminalScreen.appendChild(p);
        }

        await sleep(500);
        cursor.classList.add("hidden");

        const btn = document.createElement("button");
        btn.textContent = "> ENTRAR AL SISTEMA";
        btn.className = "mt-6 border border-green-500 px-6 py-2 w-max hover:bg-green-500 hover:text-black transition-colors uppercase font-bold tracking-widest cursor-pointer";

        btn.addEventListener("click", () => {
            terminalContainer.classList.add("opacity-0");
            setTimeout(() => {
                terminalContainer.classList.add("hidden");
                portfolioContainer.classList.remove("hidden");
                setTimeout(() => {
                    portfolioContainer.classList.remove("opacity-0");
                }, 50);
            }, 700);
        });
        terminalScreen.appendChild(btn);
    }

    runBootSequence();

    // -- Formulario de Contacto (Integración Formspree) --
    const contactForm = document.getElementById("contact-form") as HTMLFormElement;
    if (contactForm) {
        contactForm.addEventListener("submit", async (e) => {
            e.preventDefault(); // Evitamos que la página se recargue

            const name = (document.getElementById("contact-name") as HTMLInputElement).value;
            const email = (document.getElementById("contact-email") as HTMLInputElement).value;
            const msg = (document.getElementById("contact-msg") as HTMLTextAreaElement).value;
            const submitBtn = contactForm.querySelector("button") as HTMLButtonElement;

            // Guardamos el texto original para restaurarlo después
            const originalBtnText = submitBtn.innerText;

            // Feedback visual de que el sistema está procesando
            submitBtn.innerText = "[ ENVIANDO_DATOS... ]";
            submitBtn.classList.add("text-yellow-400", "border-yellow-400");
            submitBtn.disabled = true; // Evita doble clic

            try {
                // REEMPLAZA ESTA URL CON TU ENDPOINT DE FORMSPREE
                const response = await fetch("https://formspree.io/f/xbdzdwll", {
                    method: "POST",
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        nombre: name,
                        correo: email,
                        mensaje: msg
                    })
                });

                if (response.ok) {
                    // Éxito: El correo se envió
                    submitBtn.innerText = "[ CONEXIÓN EXITOSA - MSG ENVIADO ]";
                    submitBtn.classList.remove("text-yellow-400", "border-yellow-400");
                    submitBtn.classList.add("text-green-400", "border-green-400");
                    contactForm.reset(); // Limpia los campos
                } else {
                    // Error del servidor
                    submitBtn.innerText = "[ ERROR DE TRANSMISIÓN ]";
                    submitBtn.classList.remove("text-yellow-400", "border-yellow-400");
                    submitBtn.classList.add("text-red-500", "border-red-500");
                }
            } catch (error) {
                // Error de red (sin internet)
                submitBtn.innerText = "[ FATAL: SIN CONEXIÓN ]";
                submitBtn.classList.remove("text-yellow-400", "border-yellow-400");
                submitBtn.classList.add("text-red-500", "border-red-500");
            }

            // Restablecer el botón después de 4 segundos
            setTimeout(() => {
                submitBtn.innerText = originalBtnText;
                submitBtn.classList.remove("text-green-400", "border-green-400", "text-red-500", "border-red-500");
                submitBtn.disabled = false;
            }, 4000);
        });
    }

    // -- Easter Egg (Perro) --
    const dog = document.getElementById("system-dog");
    if (dog) {
        dog.addEventListener("click", () => {
            console.log("%c¡Guau! Sistema protegido y alimentado con Actican.", "color: #4ade80; font-size: 16px; font-weight: bold;");
            const originalText = dog.innerText;
            dog.innerText = "¡GUAU!";
            dog.classList.add("text-green-400");
            setTimeout(() => {
                dog.innerText = originalText;
                dog.classList.remove("text-green-400");
            }, 1000);
        });
    }
}); 