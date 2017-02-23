## Add an Event

To add an event to the front page, fork this repository and create a file in
the [_posts](_posts/) subdirectory.

The file must be named `yyyy-mm-dd-abc.md`, where `yyyy-mm-dd` is the starting
date of the event, and `abc` is some slug for the name of the event.

For example, the Strange Loop 2013 event, starting on September 18, is stored
in a file named `2013-09-18-strange-loop.md`.

The content of the file describes data about the event, which will be used by
a generator and a template engine to render the event in HTML. Here is an
example that you can copy-and-paste.

```
---
category: event
title: Strange Loop
logo: https://si0.twimg.com/profile_images/1883816998/slsquare.jpg
location: St Louis
description: Hey, it's pretty good.
start: 18 September 2013
end: 20 September 2013
link-out: http://thestrangeloop.com/
---
```

And a small description of each field, in case it is not already obvious:

*   `category: event`, this is obligatory, don't leave it out!
*   `title`: short title of the event
*   `logo`: URL of the logo of the event. It should be a square image [which follows the below rules](#logo-images).
*   `location`: obvious
*   `description`: a longer description of the event. It does not appear on the
    front page per se, but could be useful some day
*   `start` and `end`: first and last day of the event, in the format shown
    above, i.e., dd Month yyyy
*   `link-out`: URL of the event website

The ending date is optional, and defaults to the starting date.

When you are done, send us a pull request!

### Logo Images

It's easiest to just include actual image files for your logo in your pull request. To do this, you must upload two images:

1. a "normal" logo, 40 x 40 pixels. Named, for example, like so: `my-conference.png` (pngs and jpgs are OK to upload)
2. a "retina" logo, 80 x 80 pixels, **the same as the "normal" logo, just 2x larger**. Named, for example, like so: `my-conference@2x.png`. (Note that it must be identically named to the "normal" logo, but with `@2x` in addition.)

Including a relative path to a logo looks like this:

    ---
    category: event
    title: ICFP
    logo: /resources/img/icfp.png
    location: Boston
    description: International Conference on Functional Programming
    start: 25 September 2013
    end: 27 October 2013
    link-out: http://icfpconference.org/icfp2013/
    ---
