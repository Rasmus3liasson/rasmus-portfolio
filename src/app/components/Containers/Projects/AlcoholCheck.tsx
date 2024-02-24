import projectRender from "./utils/projectRender";

export default function AlcoholCheck() {
  const title = "Alcohol Check";

  const description =
  "Detta är en app som låter användaren hålla koll på sin beräknade alkoholnivå efter alkoholkonsumtion. Den ger användaren möjlighet att ange sin konsumtion från föregående dag för att sedan beräkna en uppskattad promillehalt. Denna bedömning kan sedan användas för att avgöra om användaren är tillräckligt nykter för att köra bil. Appen sparar även användarens uppgifter om man är inloggad så att användaren kan återvända till appen senare och se sin tidigare konsumtion."
  const techniques = ["Flutter", "Dart", "Firebase (Firestore)","Shared Preferences"];
  const githubLink = "https://github.com/Rasmus3liasson/alcohol_check";

  return (
    <section>
      {projectRender({ title, description, techniques, githubLink })}
    </section>
  );
}
