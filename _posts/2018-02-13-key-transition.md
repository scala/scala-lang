---
category: announcement
permalink: /news/key-transition-2018
title: "New key for signing Scala releases"
---

-----BEGIN PGP SIGNED MESSAGE-----
Hash: SHA256


From today, 2018-02-13, we will sign Scala release artifacts with a [new 4096-bit key](http://pgp.mit.edu/pks/lookup?op=vindex&search=0xA9052B1B6D92E560) with fingerprint `3D3A 4396 458F D629 DEAE 0F88 E9DF 618B B41F 2BCE`.

Our old 2048-bit key [B41F2BCE](http://pgp.mit.edu/pks/lookup?op=vindex&search=0xE9DF618BB41F2BCE), originally created on 2013-04-30, will no longer be used.

The team member responsible for a new Scala release will continue to use their personal key to sign the git tag from which the release is built.

<!--  break -->

To fetch the full key from a public key server:

```
gpg --keyserver keys.riseup.net --recv-key "3D3A 4396 458F D629 DEAE 0F88 E9DF 618B B41F 2BCE"
```

To verify the signatures on this new key (signed by the old key, as well as the core team members):

```
gpg --check-sigs "3D3A 4396 458F D629 DEAE 0F88 E9DF 618B B41F 2BCE"
```

The [original markdown](https://raw.githubusercontent.com/scala/scala-lang/master/_posts/2018-02-13-key-transition.md) for this post was signed with both keys (`gpg -u B41F2BCE -u 6D92E560 --clearsign 2018-02-13-key-transition.md`). Verify with `curl -s https://raw.githubusercontent.com/scala/scala-lang/master/_posts/2018-02-13-key-transition.md | gpg --verify`.

This announcement was modeled after  [https://riseup.net/en/security/message-security/openpgp/key-transition](https://riseup.net/en/security/message-security/openpgp/key-transition), which provides further background.

-----BEGIN PGP SIGNATURE-----

iQEzBAEBCAAdFiEE5oU9N+6jHB8i3J2TWhb/oyAtNkYFAlqDGWUACgkQWhb/oyAt
NkauQwgAhW5U46A5Dhw5xAmypbkDjZD6Y6sm0iLPz+8qqMzaXt3cOqcFOpUhv3iG
gQPOECBc9YztH5A3TfetmUEJ7ZGCTyWubiHDg/FTdjvIXZtKy24bjSBU7mdblk/e
nw8L/W6MfMZ5sbxNcezLko6jZhPeTXxgJb6BVOqNESOfJ2mVgrCwTmbPVsx/Bh+q
MBV35GauAq5X7rrpq1JssPuC2fbO9kg7+2jpjE0cS7vuNY+gfBGSCJVBW8Ykceb5
rJVP8z93Bc8Mr1vj+WyVLGcUtYz0KWtQt2B7xBSIRKFfDSFivuG0LTuBkJdQaDKj
9Ry3wsQnTaxK5GUHBCN4PXniIREHo4kCMwQBAQgAHRYhBIbaQaXhaZyc6+lkqKkF
KxttkuVgBQJagxllAAoJEKkFKxttkuVgxdsQAJHd652ayRg5sIhmbOzhp0BrIJht
AGoTEe6/5TB43POXACAhgPKz2k77J5ypZqRnd+mZe23kGihfyYU75sLX5IBBfWhk
JHjAFq9JWHx4eFtp50ByIVFPo8yPc01p+jeDOoomjLIqqyOMRxJS9XJaxCa8WNtO
4X/uBJbsZ0xzCq/+nmncIMyf967Vt6WtKOAbzCdWiHM+r7ZGRQT72mYfcCii3Mx0
iw8medQ2UWmn8nTWnD/YGT5jpHjCDYHOCDXTY1r1wVium2gR4TslE9p6Eutgi+8W
epxgG68j/8zHPR3YbYz7s5pQT2ubVS87PFumAVI3iYhAM6pOgpEchtJx5DL6+8le
5J+rz/cdDZ9jhGFeU0QZhHAdf5f02DOdEkMlFJWoi9ChwV0wh20fXx1a7Ck8lbBl
XyXepAWFzpcqwiUtgdwWQlU2cvBe1CYLboGZe4Y885uOz5qKKCClQprFe5lg3qCV
8ufXK7BcxZxhxDQDgxPrFmTmp/Tia1s54kJj30+OQIZ3PtVV5p+1BDpz1/b2t2jg
+xUx1Qj0WI4jMscFH1Bq3M4XXOzjIP2yqeHnWZsgDK0Nup9EEPwrVjyKEnBl9eX8
NzVe6sgN72PhhLTp9bh3gz6biDHl8qvpI9uK28RUcEyKr5vGen3l/fD9nMLWSh/s
kXp5o03oFmSnzKNX
=HKxi
-----END PGP SIGNATURE-----
