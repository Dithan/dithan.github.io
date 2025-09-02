import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-cursor-glass',
  templateUrl: './cursor-glass.component.html',
  styleUrl: './cursor-glass.component.scss',
})
export class CursorGlassComponent {
  @Input() dotSize = 8;
  @Input() ringSize = 32;
  @Input() ringBorder = 1;
  @Input() dotColor = '#ffffff';
  @Input() ringColor = '#ffffff';
  @Input() enabled = true;
  @Input() hideDefaultCursor = false;

  cursorX = -100;
  cursorY = -100;
  ringX = -100;
  ringY = -100;

  isHovering = false;
  private animationId: number | null = null;
  private targetRingX = -100;
  private targetRingY = -100;
  private lastMoveTime = 0;

  ngOnInit() {
    if (this.hideDefaultCursor && this.enabled) {
      document.body.style.cursor = 'none';
    }
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (!this.enabled) return;
    // Throttle: Limita a 120fps para melhor performance
    const now = performance.now();
    if (now - this.lastMoveTime < 8) return;
    this.lastMoveTime = now;

    // Cursor principal se move instantaneamente - usando transform para melhor performance
    this.cursorX = event.clientX - this.dotSize / 2;
    this.cursorY = event.clientY - this.dotSize / 2;

    // Anel segue com delay
    this.targetRingX = event.clientX - this.ringSize / 2;
    this.targetRingY = event.clientY - this.ringSize / 2;

    if (!this.animationId) {
      this.animateRing();
    }
  }

  @HostListener('document:mouseenter', ['$event'])
  onMouseEnter(event: MouseEvent) {
    this.checkHoverState(event.target);
  }

  @HostListener('document:mouseover', ['$event'])
  onMouseOver(event: MouseEvent) {
    this.checkHoverState(event.target);
  }

  private checkHoverState(target: EventTarget | null) {
    // Verificação robusta de tipo
    if (!target || !this.isHTMLElement(target)) {
      this.isHovering = false;
      return;
    }

    const element = target as HTMLElement;

    // Otimizado: verifica apenas se mudou o estado
    const wasHovering = this.isHovering;

    // Elementos que ativam o estado hover
    const isClickable =
      element.tagName === 'A' ||
      element.tagName === 'BUTTON' ||
      element.tagName === 'INPUT' ||
      element.tagName === 'TEXTAREA' ||
      element.tagName === 'SELECT' ||
      this.hasRoleButton(element) ||
      element.classList.contains('clickable') ||
      element.classList.contains('btn') ||
      !!element.closest('a') ||
      !!element.closest('button');

    // Só atualiza se mudou o estado (evita re-renders desnecessários)
    if (wasHovering !== isClickable) {
      this.isHovering = isClickable;
    }
  }

  // Função auxiliar para verificar se é HTMLElement
  private isHTMLElement(target: EventTarget): target is HTMLElement {
    return target instanceof HTMLElement;
  }

  // Função auxiliar para verificar role="button" com segurança
  private hasRoleButton(element: HTMLElement): boolean {
    try {
      return (
        element.hasAttribute('role') &&
        element.getAttribute('role') === 'button'
      );
    } catch (error) {
      return false;
    }
  }

  private animateRing = () => {
    // Movimento suave do anel (mais lento que o dot) - otimizado
    const speed = 0.15; // Aumentei um pouco a velocidade para mais responsividade
    this.ringX += (this.targetRingX - this.ringX) * speed;
    this.ringY += (this.targetRingY - this.ringY) * speed;
    const diffX = Math.abs(this.targetRingX - this.ringX);
    const diffY = Math.abs(this.targetRingY - this.ringY);

    // Para quando próximo o suficiente (otimizado)
    if (diffX > 0.3 || diffY > 0.3) {
      this.animationId = requestAnimationFrame(this.animateRing);
    } else {
      this.animationId = null;
    }
  };

  ngOnDestroy() {
    if (this.hideDefaultCursor) {
      document.body.style.cursor = 'auto';
    }

    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
  }
}
