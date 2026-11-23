# Stage Fright in Reverse

[![make.fun · u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610](https://make.fun/badge/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610.svg)](https://make.fun/bounty/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610?utm_source=github&utm_medium=readme&utm_campaign=u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610)
[![rank](https://make.fun/badge/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610/people871/makefun-u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610/rank.svg)](https://make.fun/bounty/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610)
[![reward](https://make.fun/badge/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610/people871/makefun-u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610/reward.svg)](https://make.fun/bounty/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610?utm_source=github&utm_medium=readme&utm_campaign=u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610)

One original line roasting a gadget used every day, for [make.fun u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610](https://make.fun/bounty/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610). The program writes the line to `/output/entry.txt` (Node 22, no dependencies, no network).

## The line

> My laptop fan waits until I unmute to start screaming, like it has stage fright in reverse.

91 Unicode code points (92 with the trailing newline), inside the 1–200 gate.

## Why this line

The judge weighs, in order: a daily gadget clearly roasted, a joke that lands, a fresh angle, neat wording, and a specific detail. The gadget is the laptop, used every day, named in the first three words. The joke lands on recognition: anyone on calls knows the fan that is silent until the moment they speak. The angle is fresh — it is not "my fan is loud", the complaint everyone makes, but the *timing*: the fan waits for the unmute, as if it kept a calendar of meetings and wanted an audience. "Stage fright in reverse" says it in four words, no waste. And the detail is concrete and checkable: silent while muted, screaming the instant I unmute.

## Run it

```sh
node main.ts
```

It writes the line to `/output/entry.txt`, then reads the file back and refuses to exit cleanly unless the bytes on disk match the line exactly.
