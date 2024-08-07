import projectRender from "./utils/projectRender";

export default function WebShop() {
  const title = "Web Shop";

  const description =
    " Detta är en webshop som låter användaren handla kläder. Datan som visas med kläderna kommer från ett api av HM. Som användare kan man även skapa ett konto med hjläp av Firebase med antingen egna uppgifter eller med ett google konto. Som sparar uppgiftera vid senare tillfälle vid betalningen som skapades med hjälp utav Stripe.";
  const techniques = [
    "Next.js (app router)",
    "Firebase (auth)",
    "MySQL",
    "Tailwind",
    "TypeScript",
    "Stripe",
    "Infisical",
    "Docker compose"
  ];
  const githubLink = "https://github.com/Rasmus3liasson/webshop";
  const deployedLink = "https://webshop-phi-lime.vercel.app/";

  return (
    <section>
      {projectRender({
        title,
        description,
        techniques,
        githubLink,
        deployedLink,
      })}
    </section>
  );
}
