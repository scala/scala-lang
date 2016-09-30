## Add a Training

To add a training session to the front page, fork this repository and create a
file in the [_posts](_posts/) subdirectory.

The file must be named `yyyy-mm-dd-abc.md`, where `yyyy-mm-dd` is the starting
date of the training, and `abc` is some slug for the name of the training.

For example, a training titled "Fast Track to Scala", starting on July 3,
2013, would be stored in a file named `2013-07-03-fast-track-to-scala.md`.

The content of the file describes data about the training, which will be used by
a generator and a template engine to render the training in HTML. Here is an
example that you can copy-and-paste.

```
---
category: event
title: Fast Track to Scala
description: Get up to speed in Scala in no time
link-out: http://typesafe.com/how/training/fasttracktoscala
where: London
when: 3 July 2013
trainers: Trond Bjerkestrand
organizer: Typesafe
---
```

And a small description of each field, in case it is not already obvious:

*   `category: event`, this is obligatory, don't leave it out!
*   `title`: short title of the training
*   `description`: a longer description of the training. It does not appear on
    the front page per se, but could be useful some day
*   `link-out`: URL of the training website
*   `where`: location of the training session
*   `when`: date of the training, in the format shown above, i.e., dd Month yyyy
*   `trainers`: name of the trainer(s)
*   `organizer`: organizer of the training

When you are done, send us a pull request!
