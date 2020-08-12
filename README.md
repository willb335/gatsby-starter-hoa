A starter template to build amazing static websites with Gatsby, Contentful and Netlify. Inspired by [gatsby-starter-minimal-blog](https://minimal-blog.lekoarts.de/) and [gatsby-starter-mate](https://github.com/EmaSuriano/gatsby-starter-mate).

What is Contentful? [Contentful](https://contentful.com) is a headless CMS where you can write the content for your page.

## Demo

https://frosty-torvalds-822eb0.netlify.app/

![](screenshots/hoa.png)

## Lighthouse Score

![](screenshots/lighthouse_score.png)

To copy and install this starter run these two commands:

```bash
git clone git@github.com:willb335/gatsby-starter-hoa.git
```

```bash
npm install
```

At this point you have the repo with all the dependencies installed, but if you try to run `gatsby develop` you're going to receive this message in the console:

```bash
Problems with gatsby-source-contentful plugin options:
spaceId: undefined - "spaceId" is required
accessToken: undefined - "accessToken" is required
```

The next step is to create an empty space in [Contentful](https://www.contentful.com/)! Once that is done we can export data to it.

After the space is created, run the following command:

```bash
npm run setup
```

This CLI will request 3 values:

- `Space ID`
- `Content Delivery API - access token`
- `Personal Access Token`

These 3 values are inside the `Contentful` Settings section --> API keys.

After you provide the three keys the CLI will automatically start copying all the `Content models` and `Contents` from

```
./bin/contentful-config.json
```

to your space ✨

If everything went smooth you should see something like this in your terminal:

```text
Writing config file...
Config file /Users/my-user/Git/test/mate-portfolio/.env written
┌──────────────────────────────────────────────────┐
│ The following entities are going to be imported: │
├─────────────────────────────────┬────────────────┤
│ Content Types                   │ 3              │
├─────────────────────────────────┼────────────────┤
│ Editor Interfaces               │ 3              │
├─────────────────────────────────┼────────────────┤
│ Entries                         │ 8              │
├─────────────────────────────────┼────────────────┤
│ Assets                          │ 6              │
├─────────────────────────────────┼────────────────┤
│ Locales                         │ 1              │
├─────────────────────────────────┼────────────────┤
│ Webhooks                        │ 0              │
└─────────────────────────────────┴────────────────┘
 ✔ Validating content-file
 ✔ Initialize client (1s)
 ✔ Checking if destination space already has any content and retrieving it (2s)
 ✔ Apply transformations to source data (1s)
 ✔ Push content to destination space
   ✔ Connecting to space (1s)
   ✔ Importing Locales (1s)
   ✔ Importing Content Types (4s)
   ✔ Publishing Content Types (3s)
   ✔ Importing Editor Interfaces (3s)
   ✔ Importing Assets (7s)
   ✔ Publishing Assets (3s)
   ✔ Archiving Assets (1s)
   ✔ Importing Content Entries (1s)
   ✔ Publishing Content Entries (5s)
   ✔ Archiving Entries (1s)
   ✔ Creating Web Hooks (0s)
Finished importing all data
```

After this step we can finally run the project and see the result in http://localhost:8000/ 😃

```bash
$ npm run develop
```

### Deployment

#### Netlify Deployment From Git

1.  [New Netlify website from Git](https://app.netlify.com/start)

2.  Connect with GitHub and select your repo

3.  Navigate to Netlify: **Settings** → **Build & Deploy** → **Build Environment Variables**. Add the following environment variables using the Space ID and Content Delivery API - access token from Contentful. The variables must be named exactly like this in order to work properly.

```
GATSBY_CONTENTFUL_ACCESS_TOKEN
GATSBY_CONTENTFUL_SPACE_ID
```

4.  Navigate to Netlify: **Deploys**. Click `Trigger deploy` to manually trigger a deploy to confirm the website is building successfully using your build environment variables. At this point be aware that every time you push to `master` a deploy will automatically start and be published to production.

### Useful Commands

#### `npm run develop`

Clear the cache and run the project locally with live reload in development mode.

#### `npm run build`

Run a production build into `./public`. The result is ready to be put on any static hosting you prefer.

#### `npm run serve`

Spin up a production-ready server with your blog. Don't forget to build your page beforehand.
