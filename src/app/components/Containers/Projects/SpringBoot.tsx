import projectRender from "./utils/projectRender";

export default function SpringBoot() {
  const title = "Spring Boot";

  const description =
    "Spring Boot-applikation som använder en MySQL-databas. Med olika API-endpoints kan användare hämta och manipulera både kategorier och platser. Lagt till säkerhetsfunktioner för att bara tillåta auktoriserade användare att utföra olika åtgärder, beroende på användarroll. Applikationen är strukturerad för att hantera fel på ett korrekt sätt";
  const techniques = ["Java", "Spring Boot", "Spring Security", "MySQL", "Keycloak"];
  const githubLink = "https://github.com/Rasmus3liasson/SpringBootRestApi";

  return (
    <section>
      {projectRender({
        title,
        description,
        techniques,
        githubLink,
      })}
    </section>
  );
}
