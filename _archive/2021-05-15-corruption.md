---
title: "What causes corruption?"
description: "Econometrics research into one of the most important indicators of a country's wellbeing"
date: 2021-05-06 09:48:00 +0800
categories: [Stata]
tags: [Stata]
pin: true
math: true
mermaid: true
image:
  path: /assets/images/post_thumbnails/what_causes_corruption_thumbnail.png
  lqip: data:image/webp;base64,UklGRpoAAABXRUJQVlA4WAoAAAAQAAAADwAABwAAQUxQSDIAAAARL0AmbZurmr57yyIiqE8oiG0bejIYEQTgqiDA9vqnsUSI6H+oAERp2HZ65qP/VIAWAFZQOCBCAAAA8AEAnQEqEAAIAAVAfCWkAALp8sF8rgRgAP7o9FDvMCkMde9PK7euH5M1m6VWoDXf2FkP3BqV0ZYbO6NA/VFIAAAA
  alt: 

---

## Introduction
This post summarizes research I conducted on corruption. My original goal was understanding what causes a country to be unhappy, but I found that corruption is often the strongest predictor of a country’s wellbeing. So I decided to investigate what causes corruption.

Think of this writeup as a less formal summary of the paper.

## Materials
See [here](/assets/post_files/what_causes_corruption/source_materials.zip) for the materials in discussion, containing:

1. Research paper. Includes Stata code used to make regressions
2. Raw data used for regressions
3. Summary slides of research

## Background
It's not a new concept that corruption negatively impacts a country's wellbeing. So the literature review here is important to start from an edge of knowledge rather than rediscover what we already know. Here's what I read beforehand.

- [What predicts corruption? Machine learning predictions using micro-data in Brazil](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3330651)
- [Corruption Takes Away Happiness: Evidence from a Cross-National Study](https://ideas.repec.org/a/spr/jhappi/v21y2020i2d10.1007_s10902-019-00092-z.html)
- [2017 World Happiness Report](https://worldhappiness.report/ed/2017/)
- [What Predicts Corruption?](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3330651)
- [South Sudan's Anti-Corruption Efforts and Poor Global Ranking](https://www.jstor.org/stable/resrep11043)
- [Corruption Perceptions Index 2014 for Denmark](https://www.transparency.org/en/cpi/2014/index/dnk#)
- [Africa: Botswana "Least Corrupt in Africa"](https://allafrica.com/stories/201312030582.html)
- [The relationship between corruption and political structure](https://www.jstor.org/stable/i20445040)
- [Corruption Around the World: Causes, Consequences, Scope, and Cures](https://www.jstor.org/stable/3867585)
- [Political Corruption in Central America: Assessment and Explanation](https://www.jstor.org/stable/41342299)
- [Corruption and Foreign Direct Investment](https://www.jstor.org/stable/3069545)

## Methodology
My research used the Corruption Perception Index (CPI), a score from 0 (most corrupt) to 100 (least corrupt), as the dependent variable to assess corruption levels. The following represents independent variables tested to see their correlation to corruption:

- GDP Growth Rate (Control Variable)
- Air Quality (PM2.5)
- Unemployment
- Age Dependency Ratio
- Private Sector Activity (funds from private institutions, rather than the government)
- FDI Inflow/Outflow
- Net Lending​

For our regression we will use the following formula:

$$
\begin{equation}
  CPI_i = a + \beta \cdot TV_i + X'_i \gamma + \epsilon_i
\end{equation}
$$

Here's what the variables represent:

- CPI (Corruption Perception Index) = The measure of corruption in a country scaling from 100 (low corruption) to 0 (high corruption)
- i = The country
- 𝛽 = Coefficient to the degree of change in the outcome variable for every 1-unit of change in the predictor variable
- Test Variable (TV) = Multiple variables will be tested as the independent variable to determine which one shows the highest degree of relation with predicting the degree of corruption in a country.
- X = set of control variables (GDP per capita growth rate, unemployment rate, population-weighted average exposure to PM2.5 (air quality), working age-population)

We use an Ordinary Least Squares (OLS) model in Stata to estimate the coefficients of our regression, and get a few tables. The most interesting one to me was #2, shown below.

![Desktop View](assets/images/corruption_images/table_2_rounded.png){: width="600" height="600" .w-75 .normal}

Our p values being below 0.01 indicates just how tightly knit corruption is to air quality, outflow of domestic income, and privatized funding (Private Sector Activity). 

## Findings

1. Look at the private sector: The most consistent and significant predictor of corruption was higher private sector credit allocations, suggesting a link between financialization and corruption​.[^fn3]

2. How does money flow in and out: FDI outflows had a significant positive relationship with corruption. This finding suggests that capital leaving the country may exacerbate corrupt practices, potentially through quid-pro-quo agreements​.[^fn4]

3. Examine your air quality: Countries with elevated PM2.5 levels tended to rank higher in corruption​. I suspect this is likely reverse causality, but does substantiate the importance of corruption reduction for wellbeing. Poor PM2.5 is horrible for health. [An example](https://www.indiatoday.in/health/story/air-pollution-can-reduce-life-expectancy-by-5-years-doctors-explain-why-2429264-2023-08-31) being that the average lifespan of a person who lives in India is reduced by 5.3 years due to poor PM2.5 levels, and up to 11.9 years for those who live in Delhi.

4. GDP growth rate is not as correlated as I originally thought: There was no significant relationship between GDP growth and corruption. Something I initially hypothesized would have a inverse correlation.

## Conclusion
The [financialization](https://www.sciencedirect.com/topics/economics-econometrics-and-finance/financialization) of a vulnerable country’s economy appears to play a significant role in fostering corruption, particularly when tied to private sector activity and cross-border lending. This finding highlights the importance of financial regulation and transparency in reducing corruption. Future studies should focus on the interplay between international financial flows and government accountability, as well as the impact of machine learning tools to further refine these analyses and create predictive models.

## Next Steps
I think novel discovery is likely going to be made in novel technology (go figure). So I'm interested in applications of AI to econometric models. One specific limitation of manual regressions is the interplay of variables that you can test at a time, which is a lot easier (and more fun) to blast all at once at giant scale with a machine learning or deep learning model with a lot of compute. I'd expect that from there the new bottleneck will be getting reliable, clean, and rich data.

## Misc Personal Thoughts
1. Stata was very annoying to work with. To quote from another user - "Stata's syntax gets on my nerves cause it's halfway between a programming language and point and click software and imo gets the worst aspects of both". I'd do this with R or Python next time.
2. I've spoken with some people who work at the Happiness Research Institute and I really like the variables they are introducing for examining wellbeing. Take a look at their [WALY report](https://www.happinessresearchinstitute.com/waly-report) for more info.

## Footnotes

[^fn3]: I recently talked to someone who was interested in passing legislation for something called [Charter Cities](https://chartercitiesinstitute.org/intro/), aimed at the positive development of low-income regions. While my regression suggests it'd negatively impact corruption, I'd be interested in following how these cities impact corruption indexes if they pass. I hope they prove my finding wrong.

[^fn4]: My ex neighbor used to work as an agriculturalist and agricultural economist for the World Bank in East Africa, he noted that what we call quid-pro-quo is often non noteworthy standard practice in politics. A lot of the missions from the World Bank have to incorporate local and national politics to ensure their safety and effectiveness.