import './easings';

declare global {
  function easeInOutQuint(x: number): number;
  function easeInOutSine(x: number): number;
}
