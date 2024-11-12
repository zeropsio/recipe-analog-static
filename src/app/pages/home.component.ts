import { Component, signal } from '@angular/core';

import { CodeBlockComponent } from '../code-block/code-block.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CodeBlockComponent],
  template: `
    <div class="py-20">
      <div class="mx-auto">
        <div class="header text-center mx-auto">
          <span
            class="bg-[#18212F] border border-[#30384A]  text-[#DCDCDC]  px-4 py-2 text-sm rounded-md"
          >
            Developer-First Platform as a Service
          </span>
          <div class="mt-8">
            <h1>
              Deploy your Angular App
              <a href="https://zerops.io/" target="_blank" class="text-gradient block">with Zerops</a>
            </h1>
            <p class="mx-auto font-semibold text-2xl">
              Angular Static example running on Zerops.
              <span class="block"
                >Deploy and test yourself with a single click.</span
              >
            </p>
          </div>
        </div>

        <div class="mt-6">
          <div class="flex justify-center">
            <a
              href="https://app.zerops.io/recipe/angular-static"
              target="_blank"
              class="text-lg"
            >
              <span
                class="deploybutton mt-6 rounded-full flex flex-row items-center justify-center space-x-4 hover:-translate-y-1 duration-300"
              >
                <span>Deploy on Zerops</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 24 24"
                  height="22px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="#292929"
                >
                  <g><rect fill="none" height="24" width="24"></rect></g>
                  <g>
                    <g>
                      <path
                        d="M6,15c-0.83,0-1.58,0.34-2.12,0.88C2.7,17.06,2,22,2,22s4.94-0.7,6.12-1.88C8.66,19.58,9,18.83,9,18C9,16.34,7.66,15,6,15 z M6.71,18.71c-0.28,0.28-2.17,0.76-2.17,0.76s0.47-1.88,0.76-2.17C5.47,17.11,5.72,17,6,17c0.55,0,1,0.45,1,1 C7,18.28,6.89,18.53,6.71,18.71z M17.42,13.65L17.42,13.65c6.36-6.36,4.24-11.31,4.24-11.31s-4.95-2.12-11.31,4.24l-2.49-0.5 C7.21,5.95,6.53,6.16,6.05,6.63L2,10.69l5,2.14L11.17,17l2.14,5l4.05-4.05c0.47-0.47,0.68-1.15,0.55-1.81L17.42,13.65z M7.41,10.83L5.5,10.01l1.97-1.97l1.44,0.29C8.34,9.16,7.83,10.03,7.41,10.83z M13.99,18.5l-0.82-1.91 c0.8-0.42,1.67-0.93,2.49-1.5l0.29,1.44L13.99,18.5z M16,12.24c-1.32,1.32-3.38,2.4-4.04,2.73l-2.93-2.93 c0.32-0.65,1.4-2.71,2.73-4.04c4.68-4.68,8.23-3.99,8.23-3.99S20.68,7.56,16,12.24z M15,11c1.1,0,2-0.9,2-2s-0.9-2-2-2s-2,0.9-2,2 S13.9,11,15,11z"
                      ></path>
                    </g>
                  </g>
                </svg>
              </span>
            </a>
          </div>

          <p class="text-center mx-auto pb-6 pt-24">
            Deploying will import the following structure
            (zerops-project-import.yml) <br />and use following (zerops.yml)
            instructions to build and deploy your app:
          </p>
        </div>
        <ng-code-block></ng-code-block>
        <p class="text-center mt-16">
          Powered by
          <a href="https://zerops.io" class="link" target="_blank"> Zerops </a>
        </p>
      </div>
    </div>
  `,
  styles: [
    `

      .deploybutton {
        background-color: #00b1a3;
        padding-left: 7.25rem;
        padding-right: 7.25rem;
        padding-top: 0.75rem;
        padding-bottom: 0.75rem;
        font-weight: 600;
        color: #292929;
        transition: 300ms;
      }

      .deploybutton:hover {
        background-color: #3cbdb2;
      }

      .text-gradient {
        background: linear-gradient(90deg, #DCDCDC 0%, #F20042 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
      }
      
      .text-gradient:hover {
        background: linear-gradient(90deg, #FF87A8 0%, #F20042 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
      }
    `,
  ],
})
export default class HomeComponent {}
