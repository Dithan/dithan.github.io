import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.scss',
})
export class ContatoComponent {
  form: FormGroup;
  isSubmitting = false;
  lastSubmissionTime = 0;
  readonly SUBMISSION_DELAY = 30000; // 30 segundos entre envios

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      from_name: ['', [Validators.required, Validators.minLength(2)]],
      to_name: ['Dithan'],
      from_email: ['', [Validators.required, Validators.email]],
      from_tel: [
        '',
        [Validators.required, Validators.pattern('^[0-9]{10,11}$')],
      ],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });

    emailjs.init(environment.emailJsPublicKey);
  }

  // Mudando de private para public
  public canSubmit(): boolean {
    const now = Date.now();
    return now - this.lastSubmissionTime >= this.SUBMISSION_DELAY;
  }

  async send() {
    if (this.form.invalid || this.isSubmitting || !this.canSubmit()) {
      Object.keys(this.form.controls).forEach((key) => {
        const control = this.form.get(key);
        control?.markAsTouched();
      });
      return;
    }

    try {
      this.isSubmitting = true;

      await emailjs.send('service_6gmdopn', 'template_r0158cm', {
        from_name: this.form.value.from_name,
        to_name: this.form.value.to_name,
        from_tel: this.form.value.from_tel,
        from_email: this.form.value.from_email,
        message: this.form.value.message,
      });

      this.router.navigate(['/obrigado']);
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      alert('Erro ao enviar mensagem. Por favor, tente novamente.');
    } finally {
      this.isSubmitting = false;
    }
  }
}
