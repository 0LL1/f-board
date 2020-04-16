import { note } from "@tonaljs/tonal";

export const audioContext = new (window.AudioContext ||
  window.webkitAudioContext)();

export const playSound = (tone: string): void => {
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();
  gainNode.gain.value = 0.5;
  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);
  oscillator.type = "triangle";
  oscillator.frequency.value = note(tone).freq || 0;
  oscillator.start();
  oscillator.stop(audioContext.currentTime + 0.4);
};
