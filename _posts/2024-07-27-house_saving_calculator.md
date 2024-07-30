---
title: "\"How long until I can afford a home?\""
description: "The most comprehensive home saving calculator online"
date: 2024-07-28 09:49:00 +0800
categories: []
tags: [Excel]
pin: true
math: true
mermaid: true
image:
  path: assets\images\post_thumbnails\home_saving_calculator_rounded.png
  lqip: data:image/webp;base64,UklGRpoAAABXRUJQVlA4WAoAAAAQAAAADwAABwAAQUxQSDIAAAARL0AmbZurmr57yyIiqE8oiG0bejIYEQTgqiDA9vqnsUSI6H+oAERp2HZ65qP/VIAWAFZQOCBCAAAA8AEAnQEqEAAIAAVAfCWkAALp8sF8rgRgAP7o9FDvMCkMde9PK7euH5M1m6VWoDXf2FkP3BqV0ZYbO6NA/VFIAAAA
  alt: 

---

## Demo

<video width="900" height="525" controls>
  <source src="/assets/videos/house_buying_calc_clip.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## How to use
1. [Download the Excel file](/assets/lib/home_saving_calculator.xlsx)
2. Fill in the green cells (see the demo above for reference)

## Why I made this
Home saving calculators already exist online. However, they often omit important variables:

- Year-over-year lifestyle creep
- Changes in salary
- Changes in cost of living
- Additional costs when purchasing a home
- Increased housing costs / inflation lowering purchasing power of future savings

Most importantly, the user is usually thinking, "What would it look like if I saved X per year? What if X was 20% bigger or smaller?" They're trying to see different scenarios that ultimately impact major personal financial decisions.

Therefore, the purpose of this calculator lies in the bottom graph, which tests how savings would look at different salaries.

## Findings

- As salary decreases linearly, the time it takes to afford a home approximates an exponential increase. This is illustrated by the steep increase in the slope of the second graph. It may take much longer to save for a house with a slightly lower annual savings amount.

- The exercise of entering the input values alone is a good reality check. Seeing how much your ideal house would cost, or estimating how much you currently save, is useful clarity to have.

## Closing thoughts

Despite home ownership being the largest financial milestone in a person's life, a conscious intention towards achieving this milestone is often brushed off. Worse, rather than admitting such, which would raise alarm bells, misleading intuitions fill in to ease stress. For example, opting for cheaper groceries, cutting a Netflix subscription, or using coupons. Even though other approaches may yield higher returns relative to effort.

This project does not unequivocally aim to convince the user to save or earn more. Many people make a lot of money but have little free time. It may be in their interest to see that the nature of saving conversely follows a logarithmic curve as income increases. Or

## Notes
This is not a perfectly precise model. The importance is not exact accuracy. Even if the outputs were perfectly accurate, no user could precisely know their exact savings. The key value of this model lies in illustrating the approximately exponential / logarithmic nature of the time needed to save as income decreases / increases.

If this model does not incorporate significant variables or there are other calculators online with more detail, please feel free to let me know.