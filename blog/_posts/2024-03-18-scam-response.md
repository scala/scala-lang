---
layout: blog-detail
post-type: blog
by: The Scala Center
title: Scams in the Scala Community update
description: Lately there's been a wave of employment scams in the Scala community. Here's how the Scala Center responded, what we know so far, and what you can do to protect yourself.
---

We recently wrote about a [wave of employment scams](https://scala-lang.org/blog/2024/03/01/fake-scala-courses.html) in the Scala community. We write this blog post to update the community on the progress, raise awareness, share the learnings, actions we are taking, and steps you could take if you are a victim of such a scam.

We also invite you to read another article on this topic, by Krebs on Security, from 2021, [“How to Tell a Job Offer from an ID Theft Trap”](https://krebsonsecurity.com/2021/05/how-to-tell-a-job-offer-from-an-id-theft-trap/)

## Report stats

- From the end of January until now we received 20 reports, explaining the scam. From the reports, we could identify that:
- 8 fraudulent websites were created, copies of “[https://docs.scala-lang.org/](https://docs.scala-lang.org/)”
- 5 services were used (MightyRecruiter, Thinkific, LinkedIn, Graphy, Dynadot)
- 5 companies were impersonated (Regeneron, Nference, Interglobe, IBM India Private Limited, Cencora India Technology Services Private Limited)

We can only assume that there are many more people, companies and services who fell victim to this fraud and that the reports we received are only a fraction of it.

## The Scam

The scam is elaborate and targets vulnerable groups of people, such as the ones who have been looking for a job for a long period of time. It goes as follows: the scammer introduces themselves as a recruiter for a well-established company to the target of the scam (further: victim). They conduct a few interviews with the victim, with both HR and technical rounds. Sometimes, the victim receives a rejection only to receive an acceptance a few days later, presumably as a psychological way to put pressure on the victim. Finally, the victim is told that the obligatory condition for them to get the job is to receive a Scala competence certificate from one of the courses recognized by their company. They direct the victim to a fraudulent website which impersonates the scala-lang.org website, where they pay an equivalent of 200$ for a course, after which the scammers cut communication with them.

In addition to scamming victims for money, the fraud doubles as identity theft. The fake recruiters ask the victims to submit all sorts of identity documents, such as passports, in the process. Identity theft may have more severe implications than the lost money. Personal documents can be used to commit even more fraudulent activities, and the person whose identity got stolen would be held responsible.

## The Scala Center's Response

The Scala Center has been carefully documenting all the cases brought to our attention. Here are the actions we took in response to this fraud operation:

- Reporting fraudulent websites at the DNS level, and successfully shutting down 7 out of 8 until now
- Reporting the fraudulent activities to the services and impersonated companies
- Writing up the alert blog post and sharing on all the channels
- Putting up a warning banner on all the official websites
- Promptly responding to all the people reporting, encouraging them to report to their local authorities and change their personal documents if they shared them with scammers

## What you can do

If you see a fraudulent domain, the following are the things you can do:

- Report them at the DNS level proved helpful - they get blocked fairly quickly. You can use [who.is](https://who.is/) to find the DNS provider of a domain by looking at its NS record. Then, you can complain to that provider. For example, we reported several domains to [Dynadot](https://www.dynadot.com/report-abuse) via their abuse report system.
- Report the fraud to your local law enforcement. The more such reports they get, the more likely they are to prioritise the issue. If you are a victim and have revealed your identity documents to the scammers, it is especially important that you seek help from your law enforcement, as the leaked documents may be used by the scammers to impersonate you.
- Report the fraud to the companies the scammers impersonate.
- Stay informed via the Scala Center's official channels. Also, coordinate with your local community, e.g., the Scala's Indian community made a [thread](https://www.reddit.com/r/developersIndia/comments/1axvs2p/new_scam_alert_guys_it_is_a_massive_elaborate/)  on Reddit where they discuss the issue.

As this is an ongoing incident, please stay vigilant. You can read the previous article on the matter, which contains some useful tips on how to detect the scam [here](https://scala-lang.org/blog/2024/03/01/fake-scala-courses.html).

We would also like to extend our empathy to those who suffered from this scam. It is truly unfortunate that Scala itself got pulled in this elaborate scam. We would like to remind everyone that Scala is an open source language and that all Scala MOOCs produced and maintained by the Scala Center and EPFL employees are [available for free](https://docs.scala-lang.org/online-courses.html). And finally, whereas today Scala is targeted, tomorrow it can be another technology. Keep your eyes open and stay safe. 🙏
