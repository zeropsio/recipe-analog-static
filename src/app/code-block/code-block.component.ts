import { Component, viewChild, ElementRef, input } from '@angular/core';

@Component({
  selector: 'ng-code-block',
  standalone: true,
  template: `
    <div class="steps grid grid-cols-1 md:grid-cols-2 font-light gap-5 pt-4 mx-auto">
      <div class="flex flex-col space-y-5">
        <div class="codeblock rounded-md">
          <a href="https://github.com/zeropsio/recipe-analog-static/blob/main/zerops-project-import.yml" target="_blank"
            class="link flex justify-center py-1 text-sm rounded-t-md bg-[#30384A]">zerops-project-import.yml</a>
          <button class="copy top-10 right-2" (click)="onCopyToClipboardClick()">Copy</button>
          <pre class="p-4 rounded-md max-w-[500px] overflow-x-scroll overflow-y-hidden">
            <code class="typescript">{{ importyaml }}</code>
          </pre>
        </div>
        <div
          class="flex flex-col py-10 h-[260px] rounded-md gap-5 px-10 bg-[#1B212F] border border-solid border-[#272E3D] buttons-container">
          <a href="https://github.com/zeropsio/recipe-analog-static/" target="_blank"
            class="primarybutton rounded-full text-center text-md duration-300">Recipe Source Code</a>
          <a href="https://discord.com/invite/WDvCZ54" target="_blank"
            class="discordbutton rounded-full text-center text-md duration-300">Discord</a>
          <a href="https://docs.zerops.io" target="_blank"
            class="zeropsbutton rounded-full text-center text-md duration-300">Documentation</a>
        </div>
      </div>
      <div class="flex flex-col h-full relative">
        <div class="codeblock rounded-md h-full">
          <a href="https://github.com/zeropsio/recipe-analog-static/blob/main/zerops.yml" target="_blank"
            class="link flex justify-center py-1 text-sm rounded-t-md bg-[#30384A]">zerops.yml</a>
          <button class="copy top-10 right-2" (click)="onCopyToClipboardClick()">Copy</button>
          <pre class="p-4 rounded-md max-w-[500px] overflow-x-scroll overflow-y-hidden">
            <code class="typescript">{{ zeropsyaml }}</code>
          </pre>
        </div>
      </div>
    </div>  
  `,
  styles: `
    .codeblock {
      justify-items: start;
      align-items: center;
      position: relative;
      background-color: #1B212F;
    }

    code {
      justify-items: start;
      position: relative;
    }

    .copy {
      position: absolute;
      cursor: pointer;
    }

    .primarybutton {
      background-color: #333C50;
      padding-left: 1.5rem;
      padding-right: 1.5rem;
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      font-weight: 500;
      color: #DCDCDC;
      transition: 300ms;
    }

    .primarybutton:hover {
      background-color: #40495E;
    }

    .discordbutton {
      background-color: #40495E;
      padding-left: 1.5rem;
      padding-right: 1.5rem;
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      font-weight: 500;
      color: #DCDCDC;
      transition: 300ms;
    }

    .discordbutton:hover {
      background-color: #333C50;
    }

    .zeropsbutton {
      background-color: #4D566D;
      padding-left: 1.5rem;
      padding-right: 1.5rem;
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      font-weight: 500;
      color: #DCDCDC;
      transition: 300ms;
    }

    .zeropsbutton:hover {
      background-color: #40495E;
    }

    .steps {
      max-width: 1000px;
      max-width: calc(100% - 2rem);
    }
  `,
})
export class CodeBlockComponent {  
  showFeedback = false;

  code = input(''); // Initialize with an empty string or a default value

  codeBlock = viewChild<ElementRef>('codeBlock'); // Use non-null assertion

  onCopyToClipboardClick() {
    const codeText = this.codeBlock()?.nativeElement.innerText;
    navigator.clipboard.writeText(codeText).then(() => {
      this.showFeedback = true;
      setTimeout(() => (this.showFeedback = false), 2000);
    });
  }

  zeropsyaml = `
zerops:
  - setup: app
    build:
      base: nodejs@20
      buildCommands:
        - pnpm i
        - pnpm build
      deployFiles:
        - public
        - node_modules
        - dist/analog/public/~
    run:
      base: static
      routing:
        redirects:
          - from: /*
            to: /index.html
    `;
  importyaml = `
project:
  name: recipe-analog-static
  tags:
    - zerops-recipe

services:
  - hostname: app
    type: static
    enableSubdomainAccess: true
    buildFromGit: https://github.com/zeropsio/recipe-analog-static
    `;
}
