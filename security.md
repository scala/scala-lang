---
title: Scala Security Policy
layout: inner-page-no-masthead
permalink: /security/
includeTOC: false
---

## Receiving Security Announcements

Security announcements related to Scala are published to the ["Security Announcements" channel](https://users.scala-lang.org/c/security) on our discourse forum.

Messages to this channel can only be posted by administrators, so it is very low traffic.
To set up email notifications for new security announcements, read [this post](https://users.scala-lang.org/t/about-the-security-announcements-category).

## Releases Integrity

To ensure the integrity of all the releases, our organization uses [PGP](https://gnupg.org/) keys for cryptographic signing. 
We provide below an **exhaustive** list of all the keys
used for signing the artifacts under the `org.scala-lang` namespace on [Maven Central](https://central.sonatype.com/namespace/org.scala-lang)

|                    Fingerprint                    | Algorithm |                                                       Public Key                                                        |
|:-------------------------------------------------:|:---------:|:-----------------------------------------------------------------------------------------------------------------------:|
| 86DA 41A5 E169 9C9C EBE9 64A8 A905 2B1B 6D92 E560 | RSA-4096  | [Download Public Key](https://keyserver.ubuntu.com/pks/lookup?op=get&search=0x86da41a5e1699c9cebe964a8a9052b1b6d92e560) |
| ACF3 9CCD ED38 E2C6 F089 8BF2 8F7F 6C04 5196 7B84 | RSA-4096  | [Download Public Key](https://keyserver.ubuntu.com/pks/lookup?op=get&search=0xacf39ccded38e2c6f0898bf28f7f6c0451967b84) |

## Reporting Vulnerabilities

We strongly encourage reporting security issues in Scala to us privately before disclosing them in public.

The email address for security related communication is [security@scala-lang.org](mailto:security@scala-lang.org).
Messages are delivered to the Scala Security Team, which includes people from EPFL, the Scala Center, VirtusLab, and Akka.

We strive to acknowledge reports within 2 business days.
In case you don't receive a reply within a few days and would like to escalate, our advice is to ask for a contact person in a forum hosted by the Scala organization:
  - [Meta category on Discourse](https://users.scala-lang.org/c/meta)
  - [`#admin` channel on Discord](https://discord.com/channels/632150470000902164/632628729029328947) ([invite link](https://discord.com/invite/scala) for joining)

