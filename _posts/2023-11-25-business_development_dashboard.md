---
title: "Business development dashboard"
description: ""
date: 2023-11-25 09:49:00 +0800
categories: [Excel, PowerBI, PowerQuery, PowerAutomate]
tags: [Excel, PowerBI, PowerQuery, PowerAutomate]
pin: true
math: true
mermaid: true
image:
  path: /assets/images/post_thumbnails/client_lead_tracker_sample.png
  lqip: data:image/webp;base64,UklGRpoAAABXRUJQVlA4WAoAAAAQAAAADwAABwAAQUxQSDIAAAARL0AmbZurmr57yyIiqE8oiG0bejIYEQTgqiDA9vqnsUSI6H+oAERp2HZ65qP/VIAWAFZQOCBCAAAA8AEAnQEqEAAIAAVAfCWkAALp8sF8rgRgAP7o9FDvMCkMde9PK7euH5M1m6VWoDXf2FkP3BqV0ZYbO6NA/VFIAAAA
  alt: 

---
![Desktop View](/assets/images/post_thumbnails/client_lead_tracker_sample.png){: width="972" height="589" }

## How to use

Sorry! For confidentiality purposes, I cannot share this dashboard or the data pipelines feeding it.


## Why I made this

This dashboard was used as a temporary solution for a small group of stakeholders pursuing an annual sales target (figure in the top right corner). Although a third-party vendor was eventually adopted, this tool was used for almost a year to facilitate weekly check-ins and review client pursuits.


## Notes
Automate everything
: This dashboard was used in conjunction with Power Automate due to all processes being from MS Office.[^footnote] Reducing as many manual tasks as possible is critical. A weekly 15-minute workload reduced to 5 minutes with automation saves over 8 hours of work annually. That's a full workday.


Don't use local files
: It sounds self evident but I've seen data entry done via a local file passed around in email or Teams. Don't do that. Additionally, automation is not automated if you have to trigger it locally. Get your processes on a server and your input on a shared file.


Get metrics in 3 ways
: 
1. Exactly what is asked for by your audience
2. If you can't give your audience the exact metric they want, find something similar that answers the spirit of their original question
3. You'll likely spot interesting trends or correlations on your own. Don't be afraid to propose different metrics to put in addition to what's asked for. You'll have a unique insight to your data by virtue of working closely with it


If I were to build this dashboard again
: 
1. Automate as much as possible. Treat all user input as a form of error. Every click and button press should be scrutinized. MS Office can be restrictive to this, I'd shoot for alternative tools to automate processes.
2. Centralize data. The more branches and offshoots in your ETL process, the more prone to errors it will be.
3. I'd prefer to try the following tools for a similar project in the future:[^fn2]
- **Data entry:** Probably still Excel \| Users were familiar with Excel, and it didn't have any major limitations for entry. Though I'd be open to other options.
- **Data manipulation:** Python > Excel \| Excel is great for general purpose use. But a large volume of moderate manipulation in excel is either very slow if transformed in a single spreadsheet via formulas or tedious to customize if done via Power Query.
- **Data visualization:** Tableau > PowerBI \| PowerBI is a fine tool. But it feels limited in it's constraints to Azure (especially for automation), smaller community, and customizations. 
- **General automation:** Python > Power Automate \| Power Automate had some odd limitations. Like being unable to automate desktop PowerBI refreshes. I may still opt for PA for email automation, since it was easy to setup.
  

## Footnotes
[^footnote]: I think this is a slippery slope. Microsoft's integration between tools and easy user interface is a great way to attract new users and complete simple tasks, but the consistent pay wall encountered for useful features is their business model, so be careful.
[^fn2]: I have yet to compile this specific stack for a dashboard. So there may be nuances to this not yet uncovered.