import projectRender from "./utils/projectRender";

export default function WebShop() {
  const title = "Web Shop";
  const imageSrc = "/web-shop-image.png";
  const altText = "project of a cinema booking site";
  const description =
    " Detta är en webshop som låter användaren handla kläder. Datan som visas med kläderna kommer från ett api av HM. Som användare kan man även skapa ett konto med hjläp av Firebase med antingen egna uppgifter eller med ett google konto. Som sparar uppgiftera vid senare tillfälle vid betalningen som skapades med hjälp utav Stripe.";
  const techniques = [
    "Next (app router)",
    "Firebase",
    "Tailwind",
    "TypeScript",
    "Stripe",
  ];

  return (
    <section>
      {projectRender({ title, imageSrc, altText, description, techniques })}
    </section>
  );
}
