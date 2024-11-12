import { Component, OnInit, viewChild, ElementRef, input } from '@angular/core';

@Component({
  selector: 'ng-code-block',
  standalone: true,
  templateUrl: './code-block.component.html',
  styleUrls: ['./code-block.component.css'],
})
export class CodeBlockComponent implements OnInit {  
  showFeedback = false;

  code = input(''); // Initialize with an empty string or a default value

  codeBlock = viewChild<ElementRef>('codeBlock'); // Use non-null assertion

  ngOnInit() {
  }

  onCopyToClipboardClick() {
    const codeText = this.codeBlock()?.nativeElement.innerText;
    navigator.clipboard.writeText(codeText).then(() => {
      this.showFeedback = true;
      setTimeout(() => (this.showFeedback = false), 2000);
    });
  }

  zeropsyaml: string;
  importyaml: string;

  constructor() {
    const importproject = `
project:
  name: recipe-angular-static
  tags:
    - zerops-recipe

services:
  - hostname: app
    type: static
    enableSubdomainAccess: true
    buildFromGit: https://github.com/zeropsio/recipe-angular-static
    `;
    this.importyaml = importproject;

    const zerops = `
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
        - dist/recipe-angular-static/browser/~
    run:
      base: static
      routing:
        redirects:
          - from: /*
            to: /index.html
    `;
    
    this.zeropsyaml = zerops;
  }
}
