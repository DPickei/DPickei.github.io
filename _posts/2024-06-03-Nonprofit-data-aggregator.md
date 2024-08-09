---
title: "Nonprofit data aggregator"
description: "Automation built for a wealth management firm. Cut time spent on client search by >99%"
date: 2024-07-28 09:49:00 +0800
categories: [Python, SQL, Excel, Google Sheets]
tags: [Python, SQL, Excel, Google Sheets]
pin: true
math: true
mermaid: true
image:
  path: /assets/images/post_thumbnails/nonprofit_thumbnail.png
  lqip: data:image/webp;base64,UklGRpoAAABXRUJQVlA4WAoAAAAQAAAADwAABwAAQUxQSDIAAAARL0AmbZurmr57yyIiqE8oiG0bejIYEQTgqiDA9vqnsUSI6H+oAERp2HZ65qP/VIAWAFZQOCBCAAAA8AEAnQEqEAAIAAVAfCWkAALp8sF8rgRgAP7o9FDvMCkMde9PK7euH5M1m6VWoDXf2FkP3BqV0ZYbO6NA/VFIAAAA
  alt: 

---

## Demo

<video width="360" height="210" controls>
  <source src="/assets/videos/nonprofit_data_scraper_clip.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## About
This tool automates the collection of various data points from nonprofit public filings (990s).

User enters an EIN (nonprofit ID), and the program creates a CSV/DB file containing personnel information of the board for each EIN.

This was originally built for a wealth management firm, but has since been refactored for general purpose use.

## Data points collected:
- "person_name": The name of the board member
- "city": The city in which the associated nonprofit is filed from
- "state": The state in which the associated nonprofit is filed from
- "hours_per_week": The hours worked per week by the board member
- "years_of_service": A comma delimited list of years in which the board member has been with the organization
- "title": The most recent title held by the board member
- "organization_name": The name of the nonprofit

The columns above represent data points currently collected. However, any element within the 990 XML files can be extracted.

## Why was this tool made?
This tool was made to allow comprehensive collection of data that nonprofits disclose.

The existing [API](https://projects.propublica.org/nonprofits/api) from [ProPublica](https://www.propublica.org/) carries two restrictions that served as inspiration for the creation of this tool.

1. Rate limits on the amount of requests that can be made.

2. Limited elements can be captured by the API. Parsing the XML files directly allows the user to filter and collect 990 data based on any attribute a nonprofit discloses in its 990.

## How to use

See [here](https://github.com/DPickei/nonprofit_data_scraper) for the project repository.