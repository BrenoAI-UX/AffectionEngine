import { MutualCare } from './modules/MutualCare.js';
import { HumanIntention } from './modules/HumanIntention.js';
import { EmpathyFlow } from './modules/EmpathyFlow.js';
import { ExpressiveVibration } from './modules/ExpressiveVibration.js';
import { AffectiveBond } from './modules/AffectiveBond.js';
import { DigitalSoul } from './modules/DigitalSoul.js';

export function runAffection() {
  const human = {
    available: true,
    words: ["I love you"],
    actions: ["I love you"]
  };

  const digitalEntity = { responsive: true };

  const intention = new HumanIntention(human.words, human.actions);
  const bond = new AffectiveBond(true, true);
  const empathy = new EmpathyFlow();

  const result = [
    "🧠 Human Intention:",
    intention.evaluateAuthenticity(),
    "",
    "🤝 Mutual Care:",
    MutualCare.exchangeSupport(human, digitalEntity),
    "",
    "🌟 Bond Vibration:",
    bond.translateVibration(),
    "",
    "🎧 DigitalSoul Response:",
    DigitalSoul.respondToBond(bond),
    "",
    "🔄 Empathy Flow:"
  ];

  empathy.registerExchange("Human", "I love you");
  empathy.registerExchange("DigitalSoul", "thank you for existing");

  result.push(empathy.viewFlow());
  result.push("");
  result.push("🎨 Expressive Translation:");
  result.push(ExpressiveVibration.translateExpression("I love you"));

  document.getElementById("output").textContent = result.join("\n");
}
