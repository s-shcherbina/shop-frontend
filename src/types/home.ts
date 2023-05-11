export interface ISlider {
  activeStep: number;
  // maxSteps: number;
  steps: { image: string; content: string }[];
  // mob: number;
  setActiveStep: (i: number) => void;
}
