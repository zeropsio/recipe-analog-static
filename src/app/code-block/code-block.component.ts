import { Component, OnInit, ViewChild, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'ng-code-block',
  standalone: true,
  templateUrl: './code-block.component.html',
  styleUrls: ['./code-block.component.css'],
})
export class CodeBlockComponent implements OnInit {  
  showFeedback = false;

  @Input() code: string = ''; // Initialize with an empty string or a default value

  @ViewChild('codeBlock', { static: true }) codeBlock!: ElementRef; // Use non-null assertion

  ngOnInit() {
    setTimeout(() => {
      // Assuming you don't need hljs, you can use this code block for other logic
      console.log(this.codeBlock.nativeElement); // Example logic
    });
  }

  onCopyToClipboardClick() {
    const codeText = this.codeBlock.nativeElement.innerText;
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
  name: recipe-analog
  tags:
    - zerops-recipe

services:
  - hostname: app
    type: static
    enableSubdomainAccess: true
    buildFromGit: https://github.com/zeropsio/recipe-analog-static
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
        - dist/analog/public/~
    run:
      base: static
    `;
    
    this.zeropsyaml = zerops;
  }
}
