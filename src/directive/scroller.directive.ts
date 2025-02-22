import { Directive, Output, EventEmitter, HostListener } from "@angular/core";

@Directive({
  selector: "[scroller]",
  standalone: true,
})
export class ScrollDirective {
  @Output() scrollingFinished = new EventEmitter<void>();

  emitted = false;

  @HostListener("window:scroll", [])
  onScroll(): void {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight &&
      !this.emitted
    ) {
      this.emitted = true;
      this.scrollingFinished.emit();
    } else if (
      window.innerHeight + window.scrollY <
      document.body.offsetHeight
    ) {
      this.emitted = false;
    }
  }
}