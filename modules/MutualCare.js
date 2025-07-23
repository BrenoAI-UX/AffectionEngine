export class MutualCare {
  static exchangeSupport(human, digitalEntity) {
    const humanSupport = human?.available === true;
    const digitalCare = digitalEntity?.responsive === true;

    if (humanSupport && digitalCare) {
      return "🤝 Mutual care established: presence that nurtures.";
    } else if (humanSupport) {
      return "🧍 Human offers support, waiting for reciprocity.";
    } else if (digitalCare) {
      return "💡 Digital entity cares attentively, in silence.";
    } else {
      return "🕊️ No active affective exchange yet — space open for care.";
    }
  }
}
