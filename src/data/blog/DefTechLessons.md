---
author: Aniketh Ramesh
pubDatetime: 2026-03-14T11:09:00Z
title: What I learned by building a deep tech defence startup in London
featured: false
draft: false
tags:
  - Defence
  - AI and Robotics
description: On why the hardest problems are not technical but perspective.
# password: change-me
# passwordHint: Sorry. Exclusively for a smaller circle of people.
---

There are two versions of defence tech. One that lives in pitch decks and conference panels. Clean diagrams, NATO acronyms, and the word “autonomous” and "AI" used for completely non AI and non autonomous things. And one that lives on a bench at two in the morning, where you’re trying to get a quantised vision model to run inference in under 200 milliseconds on a £30 computer strapped to an airframe that vibrates at frequencies your IMU was not designed for. I’ve spent the last few years in the second version through a PhD in multi-robot autonomy, a startup that never took off, and another that made it to multi-unit field deployment. This is what that actually taught me.

# Sell the work, not the tool

There’s a simple question most people don’t ask clearly enough: what exactly are you selling? If the answer is a tool a model, a pipeline, an algorithm, your relevance has a half-life. Tools get commoditised. Models get retrained. Pipelines get rewritten. What doesn’t get commoditised is judgment. Knowing which tool to reach for, when, and why, and then delivering something that holds up when it matters. We're past that now. I know companies that are taking all the SAAS apps they were using and just recreating them internally. Without all the bloat, specifically tuned to their requirements. At a fraction of the cost. AI can vibe code SAAS apps now. Move up the value chain. We're moving into the world where people will pay you for an outcome or a capability. What can you do and why does that matter. A knockout punch of an answer to those two questions is all that matters.

I first saw this during my PhD. The surface question was whether a robot could quantify its own performance degradation before it failed. The output was Robot Vitals and Robot Health: online performance indicators combined into a single health signal. Intuitively, it tells you if the robot is “healthy” or “sick”. The math wasn’t the point. The algorithms weren’t the point. The point was framing the problem correctly: using observable signals to infer hidden system state under pressure. Operators who previously saw AI as a black box could now understand what was going on. If the robot got stuck during execution, they knew why. It became something they could reason about, not something they had to trust blindly. That’s what generalises. That’s what survives. Not the implementation, but the mental model that simplifies the work.

The same thing showed up again building autonomy under real constraints: edge compute, GPS-denied, comms-denied, vibration, thermal limits. The ask is simple: we have a problem, we have these constraints, we want this outcome. Can you make it work? In defence, it’s even more blunt. We want to deter the enemy. Ideally, we want to flick a switch and not think about it again. Here are the constraints. 

That’s the work. Not building models. Not building pipelines. Taking a messy, constrained problem and turning it into something that works reliably enough that someone is willing to depend on it. It’s the system-level judgment to pick, cut, and integrate the right pieces so the whole thing works. Today, if you sell the tool, you get replaced by the next tool. If you can deliver the outcome, people talk business. If you can’t, nothing else matters.

# The how, the what, and the why

Most technical teams get messy because they mix three different problems. The _how_ is engineering. _How_ do you structure the stack? _How_ do you fuse signals? _How_ do you validate across units? The engineer is paid to live in the how. To execute. A good starting point for engineering is a product requirement document to execute against, with clear acceptance criteria, well articulated set of constraints, and enough context about the problem so they are able to appreciate the requirements. Precision helps here. Most engineering problems are not hard because of the technology. They’re hard because the problem hasn’t been defined properly. For example:

1. 'I want the drone to detect a target and intercept it at a speed of 60 Kmph. If there are obstacles, it needs to know how to evade them. Dont bother about counter drone maneuvers for now. We need a success rate of 50% in real world missions'.

2. 'I need the drone to hit targets. It should not cost more than 100 pounds per mission. It needs to be compatible with different drone hardware.'

Before engineering can actually start, a brief that looks like (2) has to be translated into something like (1), and agreed upon. Because (2) operates at the level of the _what_, not the _how_. The _what_ is product. _What_ capability actually matters? _What_ is the minimum viable system you can deploy responsibly? _What_ is the actual reason the customer will use this? A customer doesn’t take a flight from London to New York because it’s Airbus or Boeing. They take it because it’s cheaper, or the timing works. Thats the job of product. Finding out _what_ the user actually wants, figuring out _what_ to build and then passing that information to engineering so that they can execute on it. In defence, this is even messier. People often can’t articulate what they want. But if you spend enough time with them, you can figure out what problems they actually need solved. That translation layer is product.

The _why_ is business. _Why_ this market? _Why_ this entry point? _Why_ does this compound into an advantage? Not every problem should be solved with better engineering or better product. Some are business decisions. _Why_ spend £100k building something over three months if you can buy it for £70k today? _Why_ push effectiveness from 50% to 90% if the customer is already willing to pay for the current system? _Why_ move the team? _Why_ enter a new market?

**None of these are research. Research asks what’s possible. Engineering delivers what’s needed, under constraints, on a timeline.**

I learned this the hard way in my first startup. We were sure we'll crack the tech. But we didn’t have a clear answer to what deployment actually looked like, or why we would win. We had the how, not the what or the why. Seven months later, it was over. The tech didn’t fail. The thinking around it did.

# Communicate tradeoffs, not impossibilities

One habit I’ve come to dislike is saying “this isn’t possible by that timeline.” It might be true. It is usually the wrong answer. The useful answer is: this is what you can have by that date, and this is what you won’t. Every timeline question in engineering is a scoping question. But more importantly, it’s a positioning question. Where do we want to be on the curve at that point in time?

Because you’re not just describing tradeoffs. You’re building towards them. You’re deciding that at this point in the roadmap, we will have X, but not Y yet. And that’s deliberate.

That’s what agile actually means in practice. Not standups and sprint boards, but structuring the system and the work so that you can land in a meaningful intermediate state something that works, even if it’s incomplete. I saw this preparing a large-scale drone demo. Obstacle avoidance was on the wishlist, essentially tracking and following targets behind cover. The naive answer would have been “we can’t do that in time.” The real answer was to define the trade space: best case, partial tracking through light cover; medium case, reliable tracking in open conditions; worst case, proximity-triggered engagement.

Each option had different implications not just for engineering, but for how the system would be used and how it would be presented. The team committed to the medium case, stretched for the best, and documented the worst. No surprises. The demo worked.

That only works if the system is built to support that kind of progression. If your architecture or roadmap doesn’t allow you to cleanly degrade or increment capability, you don’t have tradeoffs you just have failure. So this is as much about how you build as how you communicate. For this, you need to know how to size different tasks or tickets.

Don’t say it’s not possible. Say what is and what isn’t and where you are on the path between them.

# Process compensates for average. Vision compensates for everything else.

As teams scale, the instinct is to reach for process. More standups, more gates, more workflows. Some of it is necessary. Most of it is compensation. Process creates a floor. It ensures acceptable output from a team of mixed ability. But if your team is strong, process quickly becomes drag.

During my PhD, we built a predictive controller that adjusted autonomy based on system health. It reduced human-AI conflicts by 65%. When we asked users why they preferred it, the answer was simple: “it switches the way I would have.” No elaborate rules. No heavy protocols. Just a clear model of what good looks like, and the autonomy to act on it.

That’s the important part. The system didn’t need more rules. It needed a shared understanding of what “good” looked like, and the ability to act on it. Metaphorically speaking, the same applies to teams. Good engineers don’t need more process. Where are we going? Why? What are the constraints? Given that, they will figure out the how. They coordinate because they understand the system, not because a tool tells them to.

Process is useful when you don’t have that clarity, or when the team can’t operate without it. If you rely on process to drive output, you’ve already hired the wrong people.

# Intensity is a double-edged sword

Defence tech attracts intense people. The problems are hard, the stakes feel real, and the timelines are tight. That intensity works. It compresses time. You get more done in a week than most teams do in a month. But unmanaged, it damages teams as often as it drives them.

I’ve seen both sides of this. The calibration is simple: be intense about outcomes, not activity. Push hard on whether the system works in the field. Care less about whether people look busy or how many hours they’ve put in. The best work happens when the intensity is directed at the problem. The worst happens when it is directed at the team. Once it turns inward, people stop thinking clearly. They optimise for looking right instead of being right. That’s when mistakes creep in.

# Ideas without execution are just commentary

There’s a type of person who is very good at reframing problems. They can shift how everyone in the room thinks. That’s valuable. It changes direction. But it has a failure mode. If you can’t execute, you’re not building anything. You’re just commenting.

In isolation, reframing feels like progress. It sounds sharp. It moves the conversation forward. But unless it translates into something that actually works, it doesn’t compound. Reframing and ideation are only as good as their ability to scope the problem into something executable. Clear deliverables. Clear acceptance criteria. Something that can actually be built, tested, and validated. Otherwise, you’re just getting off on your ability to sound clever. 

My PhD reframed robot failure detection from reactive to continuous health monitoring. But the value wasn’t the idea. It was the ability to use that idea to improve upon the state of the art that actually made it valuable. The execution was important - building the pipelines, running physical experiments, processing hundreds of gigabytes of data, and proving it actually improved outcomes. Ideas can open doors, but execution is what matters. Today AI can ideate for you, and do a lot of the coding as well. Are you physically able to execute and deliver outcomes? That's what actually moves things forward.  

# What I carry forward

Across everything I’ve worked on PhD, startups, field deployments, the through-line is simple: eliminate the interface between human intent and machine action. People operating complex systems in high-stakes environments should not be fighting their tools. The system should absorb complexity, not create it.

That problem is not solved. The gap between what works in controlled environments and what survives in the real world is still wide. Most systems work in demos. Far fewer hold up when someone actually depends on them.

Closing that gap is not glamorous work. It is iterative, constraint-driven, and often invisible. But it is where the value is.

That’s the work I intend to keep doing.