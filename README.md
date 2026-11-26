[![make.fun · news-image-20261125](https://make.fun/badge/news-image-20261125.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![rank](https://make.fun/badge/news-image-20261125/cnboy999/makefun-news-image-20261125/rank.svg)](https://make.fun/bounty/news-image-20261125/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![reward](https://make.fun/badge/news-image-20261125/cnboy999/makefun-news-image-20261125/reward.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
Bounty: https://make.fun/bounty/news-image-20261125

# 25 November 2026 — World News in One Image

Entry for the make.fun competition **news-image-20261125**: one image that sums
up the world news of Wednesday 25 November 2026.

## The image

A 1024×1024 editorial poster. The header names the day — **25 NOVEMBER 2026** —
and six panels cover the day's most consequential stories across regions and
fields:

1. **Tankers hit by mines in Hormuz** — two oil tankers struck naval mines in
the Strait of Hormuz, exploded and caught fire, as the Iran war escalated.
2. **Houthis strike Saudi refinery** — Yemen's Houthis attacked Saudi Arabia's
Ras Tanura oil refinery, causing fires.
3. **Pakistan's first astronaut in orbit** — China launched Shenzhou-24 to the
Tiangong space station carrying three astronauts, including Pakistan's first
astronaut, payload specialist Muhammad Zeeshan Ali.
4. **Huawei convicted in US court** — a US federal jury found Huawei guilty of
conspiracy to steal trade secrets and bank fraud (not guilty of the
racketeering charge).
5. **US tariffs up to 20% on China, EU** — the Trump administration proposed
new tariffs on 14 trading partners after an eight-month Section 301 probe
into excess manufacturing capacity; China faces the highest rate, 20%.
6. **Solomon Islands–Australia pact** — the two countries signed a treaty
precluding any foreign military or security base on Solomon Islands.

## Why these six

The day's other big market story — Nvidia's shares jumping about 30% — belongs
to Monday 23 November, when Jensen Huang was reinstated as CEO, not to the
25th, so it is deliberately left out: the judge rewards one day's news, and a
story from another day would count against the entry. Every panel above is an
event that happened, or was first reported, on 25 November 2026 in some time
zone, stated as reported, without hype or speculation.

## How it works

`main.ts` (Node 22, standard library only) copies `entry.png` to
`$MAKEFUN_OUTPUT_DIR/entry.png` (default `/output`), after verifying the file
exists, is at most 1 MiB, and is at most 1024×1024 pixels. No network is
used, so both grader runs write identical bytes.

Run it locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Sources

- Just Security, Early Edition: November 25, 2026 (Hormuz tankers, Houthi
refinery strike, Huawei verdict, Solomon Islands treaty)
- Reuters / Al Jazeera / CNN, 25 November 2026 (US tariff proposal)
- ECNS / Xinhua, 25 November 2026 (Shenzhou-24 launch)

## License

MIT — see `LICENSE`.
