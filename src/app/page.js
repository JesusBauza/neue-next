import Image from "next/image";
import RevealAnimation from "@/components/RevealAnimation";
import projectsData from "@/data/projects.json";
import ProjectCard from "@/components/ProjectCard";

console.log("Datos de proyectos cargados:", projectsData);

export default function Home() {
  const projectChunks = [];
  for (let i = 0; i < projectsData.length; i += 3) {
    projectChunks.push(projectsData.slice(i, i + 3));
  }
  const layoutA_Margins = [
    "lg:mt-0",
    "lg:mt-[212px] lg:justify-self-center",
    "lg:mt-[424px] lg:justify-self-end ",
  ];
  // Layout B: Lados abajo, Centro arriba
  const layoutB_Margins = [
    "lg:mt-[188px]",
    "lg:mt-0 lg:justify-self-center ",
    "lg:mt-[330px] lg:justify-self-end ",
  ];

  const layoutSequence = ["A", "B", "A"];

  return (
    <div className="px-6">
      <RevealAnimation
        delay={0.2}
        className="block sm:hidden mt-[216px] mb-[32px] "
      >
        <svg
          width="262"
          height="48"
          viewBox="0 0 262 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0H8.35509L30.3638 36.1661H30.4971V0H37.8547V47.0149H29.5045L7.43169 10.8488H7.29836V47.0149H0.00493529V0H0Z"
            fill="black"
          />
          <path
            d="M40.5752 30.1815C40.5752 19.6608 46.9403 12.4266 57.2804 12.4266C67.6206 12.4266 73.324 19.1318 73.324 29.5203C73.324 30.4411 73.324 31.4255 73.2598 31.9545H47.2711C47.4044 37.6116 50.7178 42.7397 57.4138 42.7397C63.3789 42.7397 65.6355 38.9242 66.2972 36.6908H72.8598C71.1365 43.1364 66.1639 48 57.2804 48C46.5403 48 40.5752 40.4376 40.5752 30.1815ZM47.2662 26.895H66.4898C66.4898 21.6347 62.8456 17.6918 57.078 17.6918C51.6412 17.6918 47.6662 21.3751 47.2662 26.895Z"
            fill="black"
          />
          <path
            d="M88.5036 42.4751C94.0737 42.4751 97.6537 39.12 97.6537 34.0605V13.4795H104.152V47.0154H97.6537V42.8081H97.5204C95.7328 45.3746 92.217 47.9362 86.3852 47.9362C80.1535 47.9362 75.1167 44.3852 75.1167 36.6906V13.4795H81.6793V34.9127C81.6793 39.4482 83.6693 42.4751 88.5085 42.4751H88.5036Z"
            fill="black"
          />
          <path
            d="M106.275 30.1815C106.275 19.6608 112.64 12.4266 122.981 12.4266C133.321 12.4266 139.024 19.1318 139.024 29.5203C139.024 30.4411 139.024 31.4255 138.96 31.9545H112.971C113.105 37.6116 116.418 42.7397 123.114 42.7397C129.079 42.7397 131.336 38.9242 131.997 36.6908H138.56C136.837 43.1364 131.864 48 122.981 48C112.24 48 106.275 40.4376 106.275 30.1815ZM112.966 26.895H132.19C132.19 21.6347 128.546 17.6918 122.778 17.6918C117.341 17.6918 113.366 21.3751 112.966 26.895Z"
            fill="black"
          />
          <path d="M160.569 0V47.0149H153.275V0H160.569Z" fill="black" />
          <path
            d="M188.611 17.5541V0H195.174V47.0149H188.611V43.0721H188.478C186.691 45.4378 183.372 47.9357 178.069 47.9357C169.452 47.9357 162.954 41.2941 162.954 30.2494C162.954 19.2046 169.452 12.4945 178.069 12.4945C183.372 12.4945 186.686 14.9288 188.478 17.559H188.611V17.5541ZM188.611 30.2445C188.611 22.6185 184.967 17.8822 179.131 17.8822C172.765 17.8822 169.719 23.6666 169.719 30.2445C169.719 36.8224 172.77 42.6068 179.131 42.6068C184.962 42.6068 188.611 37.8068 188.611 30.2445Z"
            fill="black"
          />
          <path
            d="M197.229 30.1815C197.229 19.6608 203.594 12.4266 213.934 12.4266C224.274 12.4266 229.977 19.1318 229.977 29.5203C229.977 30.4411 229.977 31.4255 229.908 31.9545H203.924C204.058 37.6116 207.371 42.7397 214.067 42.7397C220.032 42.7397 222.289 38.9242 222.951 36.6908H229.513C227.79 43.1364 222.817 48 213.934 48C203.194 48 197.229 40.4376 197.229 30.1815ZM203.924 26.895H223.148C223.148 21.6347 219.504 17.6918 213.736 17.6918C208.3 17.6918 204.324 21.3751 203.924 26.895Z"
            fill="black"
          />
          <path
            d="M230.575 38.3316C230.575 30.8378 236.278 28.668 244.697 27.0223C250.001 26.0379 253.25 25.3766 253.25 22.0902C253.25 19.6559 251.793 17.6184 246.821 17.6184C240.92 17.6184 239.132 19.46 238.796 23.9318H232.17C232.501 17.4861 236.742 12.4266 247.087 12.4266C254.05 12.4266 259.615 15.3213 259.615 24.0003V39.3895C259.615 41.8238 259.946 43.0727 261.205 43.0727C261.403 43.0727 261.605 43.0727 262 43.009V46.9519C260.874 47.2164 259.748 47.3437 258.687 47.3437C255.507 47.3437 253.714 46.0947 253.383 42.2793H253.25C250.998 45.7666 247.152 47.9363 241.651 47.9363C234.891 47.9363 230.58 44.0572 230.58 38.3365L230.575 38.3316ZM253.25 33.9284V29.1284C252.188 30.1178 249.275 30.8378 245.828 31.5627C239.863 32.8116 237.409 34.3888 237.409 37.8761C237.409 41.0303 239.068 42.7397 243.112 42.7397C248.944 42.7397 253.255 39.7813 253.255 33.9284H253.25Z"
            fill="black"
          />
        </svg>
      </RevealAnimation>
      <div className="w-full sm:mt-[195px]">
        {/* --- UNA ÚNICA CUADRÍCULA PARA TODOS LOS PROYECTOS --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 md:gap-y-0">
          {projectsData.map((project, index) => {
            const classList = [];

            // --- LÓGICA PARA PANTALLAS GRANDES (lg) ---
            const rowIndex = Math.floor(index / 3); // Calcula en qué "fila de 3" estamos
            const layoutType = layoutSequence[rowIndex % layoutSequence.length];
            const margins =
              layoutType === "A" ? layoutA_Margins : layoutB_Margins;
            const positionInRow = index % 3;
            classList.push(margins[positionInRow]);

            // --- LÓGICA PARA PANTALLAS MEDIANAS (md) ---
            // Aquí aplicamos el patrón de zigzag que quieres:
            // El primer elemento de cada par (índice par) no tiene margen.
            // El segundo elemento de cada par (índice impar) tiene margen superior.
            if (index % 2 !== 0) {
              classList.push("sm:mt-32");
              classList.push("md:justify-self-end");
              classList.push("lg:justify-self-auto");
            }

            return (
              <div key={project.slug} className={classList.join(" ")}>
                <ProjectCard project={project} index={index} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
