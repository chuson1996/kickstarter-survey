# KICKSTARTER SURVEY FORM

## SETTING UP PRODUCTION DATABASE
1. `yarn migrate --env production2` to migrate database to production

2. `yarn seed --env production2 ` to seed the database with backers data

3. `NODE_ENV=production2 node mailchimp.js` to sync `backers_id` from production database to mailchimp.


## SETTING UP DEVELOPMENT DATABASE
1. `yarn migrate` to migrate database to production

2. `yarn seed` to seed the database with backers data

3. `node mailchimp.js` to sync `backers_id` from production database to mailchimp.

----
## STEPS FOR DEPLOYING TO PRODUCTION

1. Push your code to master branch

2. Make sure you update the build folder inside /client,  if you have changes in front-end, with

>`yarn build`

3. deploy your app to google app engine 

>gcloud app deploy


----
## STEPS FOR RUNNING LOCALLY

1. Push your code

2. Make sure you update the build folder inside /client, if you have changes in front-end, with

>`yarn build`

3. Run locally with

>yarn dev