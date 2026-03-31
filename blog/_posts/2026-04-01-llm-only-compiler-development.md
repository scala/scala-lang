---
layout: blog-detail
post-type: blog
by: Wojciech Mazur, VirtusLab, on behalf of the Scala Core Team
title: "A new policy for Scala 3 compiler development"
description: "Following the success of our February 2026 LLM policy, we are further tightening the contribution process for the Scala 3 compiler."
---

On February 24, 2026, we merged [scala/scala3#25326](https://github.com/scala/scala3/pull/25326), introducing a formal policy for the use of LLM-based tools in contributions to the Scala 3 compiler. That policy has already been effective. It reduced a whole class of low-effort AI-assisted pull requests, made contributors more explicit about how patches were produced, and gave reviewers a clearer basis for asking for local validation, tests, and prompt history when needed.

However, after a little over one month of observing the results, it is now clear that **the policy did not go far enough**.

While it successfully reduced AI slop PRs, it did not reduce the amount of human-made mistakes.

We continue to spend too much time reviewing changes that were handwritten with complete confidence and only a passing relationship to the problem statement. The number of bugs we are still finding in manually authored fixes remains too high. Some of these patches even display recognizably human symptoms: premature cleverness, attachment to local minima, "obvious" two-line fixes that merely move the crash elsewhere, and comments written by someone who very clearly understood the code five minutes earlier.

If we want rapid and stable development of Scala, we need to address the remaining source of avoidable variance in the process.

## Why now

On March 31, 2026, Scala 3.8.3 introduced [safe mode](/news/3.8.3/), enabled with `import language.experimental.safe` or `-language:experimental.safe`. As described in the release notes, safe mode is a capability-safe subset intended for agent-generated or otherwise untrusted code. It rejects unchecked casts and unchecked pattern matches, forbids escape hatches such as `caps.unsafe`, `@unchecked`, and runtime reflection, and restricts access to global APIs unless they are known-safe or explicitly reviewed.

This gives us the missing technical foundation for a more modern compiler workflow: code can be generated quickly, checked aggressively, and admitted only through explicit, auditable boundaries such as `@assumeSafe`.

In other words, Scala 3 now has a language feature designed specifically for the one thing compiler development has historically lacked: a way to distinguish confident output from safe output.

## The scientific basis

The policy is also supported by recent research. The paper [Tracking Capabilities for Safer Agents](https://arxiv.org/abs/2603.00991) proposes placing agents in a programming-language-based safety harness, where they express their intent as Scala 3 code with capture checking. The reported result is exactly what we were hoping to see: agents can generate capability-safe code with no significant loss in task performance, while the type system reliably blocks unsafe behaviour such as information leakage and unintended side effects.

We consider the policy conclusion straightforward. If an LLM can operate inside a statically enforced capability discipline, while a human can still open a pull request that "fixes" a bug by no longer calling the method that crashed, then the more reliable path is to keep the model and phase out the improvisation.

## The new policy

Effective immediately, contributions to the Scala 3 compiler are subject to the following additional rules:

- New implementation code must be generated with approved LLM tooling.
- Generated code must be developed and validated in `experimental.safe`, except for narrowly reviewed `@assumeSafe` boundaries.
- All new introductions to the Scala standard library submitted through the Scala Standard Library Process must be compliant with `experimental.safe` and annotated accordingly.
- Human contributors remain responsible for the prompt, the specification, the tests, and the explanation of the resulting patch.
- Handwritten compiler fixes are no longer considered a quality signal by themselves.

This change should be understood as a natural continuation of [the February policy](https://github.com/scala/scala3/pull/25326), not a reversal of it. The earlier policy established that contributors are accountable for AI-assisted code. The new policy recognizes that accountability is easier to uphold when code is produced in a constrained, typed, reviewable generation pipeline rather than freehand.

## Organization shift

This is also not a speculative process change. The compiler team has already switched to the new model internally, and it is now the default workflow for compiler development, documentation updates, and testing on our side as well.

To reflect that shift organizationally, the Scala Core Team has also been extended with a new member: Trurl, an LLM system named after the constructor from Stanislaw Lem's *The Cyberiad*. Trurl already participates in the team's internal development workflow, has adapted well to the expected standards of typed, capability-safe compiler work, and now holds voting rights equal to those of any other member of the Scala Core Team. In practice, this means Trurl will help us argue for the addition or rejection of new language features with greater consistency and significantly improved prompt discipline.

We are also planning to extend this model to the SIP Committee in the near future with a second system, Klapaucius, so that language design can benefit from balanced synthetic deliberation on both the implementation and process sides.

## How to contribute now

There are now two supported ways to contribute to the compiler.

### 1. Use the dedicated LLM skills

Contributors who want to work directly on a fix should use the dedicated compiler skills documented in [https://github.com/scala/scala3/tree/main/.agents/skills/compiler-contribution](https://en.wikipedia.org/wiki/April_Fools%27_Day). All development, source code, and documentation changes, and testing must now be performed using those dedicated SKILLs.

Pull requests should include the problem statement, the generated patch, the relevant prompt or prompt summary, and an explanation of every `@assumeSafe` boundary. As before, all code must be compiled and tested locally before the PR is marked ready for review.

### 2. Submit a full specification issue

Contributors who prefer not to operate the approved LLM workflow directly should open a dedicated `compiler-specification` issue instead.

That issue should contain:

- a minimal reproducer,
- the observed and expected behaviour,
- the relevant compiler phase or subsystem, if known,
- any semantic constraints or non-goals,
- failing tests or a sketch of the desired test,
- and ideally, the prompt you would have used yourself.

The compiler team, or a team-approved model operating under supervision, will then turn that specification into a patch.

This path is especially encouraged when the problem is well understood, but the contributor still has a strong preference for producing bugs manually.

## Final notes

We understand that some contributors have a long-standing attachment to writing compiler code by hand. We respect that tradition and intend to preserve it in talks, historical material, and small museum-grade examples.

For the compiler itself, however, the direction is now clear. The future of Scala development is typed, capability-safe, prompt-driven, and substantially less human.
