---
slug: "dokku-deploy-github-actions"
date: "2024-03-17"
title: "Deploy dokku app when new changes are pushed to Github"
tags: ["dokku", "deployment", "github"]
---

[Dokku](https://dokku.com/) is pretty great for deploying personal projects. We can take it one step further by setting up automated deployments whenever a new change is pushed to github. 

The process is pretty straightforward with Github Actions. Dokku maintains an [official github action](https://github.com/dokku/github-action) that we can use for this purpose.

There's 2 steps to set this up. First, we'll configure a github action and second we'll set up permissions so github can push changes to the dokku host

### Set up github workflow

In your source repo, create the `.github/workflows/deploy.yaml` file and paste the following

```yaml
---
name: 'deploy'

# yamllint disable-line rule:truthy
on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Cloning repo
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Push to dokku
        uses: dokku/github-action@master
        with:
          branch: 'main'
          git_remote_url: 'ssh://dokku@${{ secrets.SERVER_IP }}:22/<dokku-app-name>'
          ssh_private_key: ${{ secrets.SSH_PRIVATE_KEY }}
```

Replace `dokku-app-name` with the name of the app you've set up in dokku


### Set up SSH keys

The dokku github action recommends using SSH keys to grant it permission to push new changes to dokku host. For this, we'll create a new SSH key, add it to dokku and save the keys to github secrets

Let's generate a new SSH key. Run `ssh-keygen` in your desktop and create a key with no-password. Save the private and public keys somewhere. 

Now we'll allow this key to make changes to dokku. SSH into the dokku host. Run `echo "<public-key>" | dokku ssh-keys:add githubactions`

Replace `public-key` with the newly generated public key. You can choose any name instead of `githubactions`.

Let's save the secrets in github so we can use it with the deployment action. To create the secrets. Go to your repository -> Settings -> Secrets and variables -> Actions. Now, click "New repository secret".

For the first one, the name is `SERVER_IP`. The value is your server's public IP

For the seconds the the name is `SSH_PRIVATE_KEY` and the value is the private key that was generated.


### Test the setup

Now, commit your changes and push the changes to your repo. Github should automatically start the deployment action. Verify that the action ran successfully. If everything went as planned then you'll have a new dokku deployment.
