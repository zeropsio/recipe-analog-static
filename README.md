# Zerops x Angular - Static

[Zerops](https://zerops.io) makes deploying and running Angular apps, both server side rendered and static, a breeze. This recipe showcases the Static version.

<br/>

## Deploy on Zerops

You can either click the deploy button to deploy directly on Zerops, or manually copy the [import yaml](https://github.com/zeropsio/recipe-angular-static/blob/main/zerops-project-import.yml) to the import dialog in the Zerops app.

<br/>

[![Deploy on Zerops](https://github.com/zeropsio/recipe-shared-assets/blob/main/deploy-button/green/deploy-button.svg)](https://app.zerops.io/recipe/angular-static)

<br/>

## Recipe features

- Latest version of **Angular** with SSG running on a **Zerops Static** service.

<br/>

## Production vs. development

This recipe is ready for production as is, and will scale horizontally by adding more containers in case of high traffic surges. If you want to achieve the highest baseline reliability and resiliace, start with at least two containers (add `minContainers: 2` in recipe YAML in the `app` service section, or change the minimum containers in "Automatic Scaling configuration" section of service detail).

<br/>

## Changes made over the default installation

If you want to modify your existing Angular app to efficiently run on Zerops, there are no changes needed in the codebase on top of the standard installation, just add [zerops.yml](https://github.com/zeropsio/recipe-angular-static/blob/main/zerops.yml) to your repository.

<br/>

Need help setting your project up? Join the [Zerops Discord community](https://discord.com/invite/WDvCZ54).
