import projectRender from "./utils/projectRender";

export default function AlcoholCheck() {
  const title = "Alcohol Check";

  const description =
  "Applikation som låter användaren hålla koll på sin beräknade alkoholnivå efter alkoholkonsumtion. Användaren får möjlighet att ange sin konsumtion från föregående dag för att sedan beräkna en uppskattad promillehalt. Denna bedömning användas för att avgöra om användaren är tillräckligt nykter för att köra bil. Sparar användarens uppgifter om man är inloggad om tidigare konsumtion."
  const techniques = ["Flutter", "Dart", "Firebase (Firestore)","Shared Preferences"];
  const githubLink = "https://github.com/Rasmus3liasson/alcohol_check";

  return (
    <section>
      {projectRender({ title, description, techniques, githubLink })}
    </section>
  );
}
