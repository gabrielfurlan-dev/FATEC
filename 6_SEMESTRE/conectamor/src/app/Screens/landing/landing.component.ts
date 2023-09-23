import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-landing',
  template: `
    <div class="flex flex-col w-full h-screen dark:bg-black bg-white">
      <nav class="w-full h-20 bg-red-500"></nav>
      <div
        class="relative flex flex-row items-center w-full h-full px-4 overflow-hidden sm:px-12 lg:px-24"
      >
        <!--* CTA -->
        <div class="z-10">
          <div class="flex flex-col pb-12">
            <p class="text-2xl font-light font-poppins dark:text-white">
              Bem vindo ao
            </p>
            <div>
              <img src="/assets/logo_principal.svg" alt="Logo" />
            </div>
          </div>

          <div class="flex flex-col gap-7 dark:text-white">
            <h1 class="text-5xl font-bold font-poppins">
              Fortalencendo Entidades<br />
              e Transformando Vidas.
            </h1>
            <p class="text-base font-light font-poppins">
              Faça parte do movimento conectamor e transforme seu<br />
              desejo de ajudar em ações concretas. Compartilhe itens,<br />
              produtos ou alimentos com aqueles que precisam. O<br />
              amor conecta a todos nós!
            </p>
          </div>

          <div class="flex flex-row gap-4 pt-14">
            <button
              class="p-[10px] rounded-[20px] dark:hover:bg-neutral-800 overflow-hidden hover:border-neutral-800 hover:text-neutral-800 dark:hover:border-neutral-200 dark:hover:text-neutral-200 border border-black text-black dark:border-white dark:text-white hover:bg-neutral-200"
            >
              Precisamo de doações
            </button>
            <button
              class="p-[10px] rounded-[20px] overflow-hidden bg-blue-500 hover:bg-blue-600 text-white"
            >
              Quero doar agora
            </button>
          </div>
        </div>

        <div
          class="absolute bottom-0 right-0 flex-col hidden w-2/3 h-full 2xl:right-20 2xl:w-1/2 lg:flex"
        >
          <img
            src="{{ imageUrl }}"
            alt="Mão segurando um coração"
            class="absolute bottom-0 w-full -right-20"
          />
        </div>

        <div
          class="absolute -bottom-96 -left-80 flex items-center justify-center"
        >
          <img src="{{ ballImageUrl }}" />
        </div>
      </div>
    </div>
  `,
})
export class LandingScreen {
  @Input() imageUrl: string =
    '/assets/landing-image-background-white-cortado.png';
  @Input() ballImageUrl: string = '/assets/white-ball.png';

  //on init verify if browser is darkmode
  ngOnInit() {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.imageUrl = '/assets/landing-image-background-black-cortado.png';
      this.ballImageUrl = '/assets/black-ball.png';
    }
  }
}
