---
# Edit this file to update the /my-work page.
# h2  → section heading (Industry, Academia)
# h3  → subsection title (mono, uppercase)
# h4  → subsection meta/subtitle (mono, muted)
# ---  → horizontal divider
# >    → left-border callout (emphasis)
# **bold paragraph** → mono uppercase label before a list
# - lists → left-border bullet list
---

This is a brief overview of my industrial and academic experience. For more detail, [download my resume](/pdfs/Resume_AnikethRamesh.pdf).

---

## Industry

### Occam Industries — CTO & Co-founder
#### Autonomous AI pilot for UAVs

At Occam, I built an AI pilot for drones that works when GPS and comms don't.

I led development of a modular autonomy stack (OccamX) that runs entirely onboard, using vision and inertial sensing to localise, track, and navigate in degraded environments.

The system was built using the Modular Open Systems Approach with clean separation between perception, state estimation and decision making. This enabled it to be retrofitted onto any UAV platform with wafer-thin compute, achieving real-time performance where single-threaded systems fail.

**Key outcomes:**

- Fully autonomous edge-based onboard perception
- Stable navigation without GPS
- Rapid deployment across airframes
- Validated in real flight conditions in Ukraine

---

## Academia (PhD)

### Robot Triage and Variable Autonomy
#### Supervisors: Prof Rustam Stolkin and Asst Prof Manolis Chiou

Robots fail in the real world in ways that aren't explicitly programmed, especially in challenging environments. Drones destabilise in wind, ground vehicles get stuck, legged systems lose footing. These failures emerge gradually and are hard to detect from individual subsystems, which is why most robots still require constant supervision.

> The core problem is simple: robots don't know when they are struggling.

During my PhD, I worked on real-time robot self-assessment — enabling a robot to quantify its own performance from operational data.

The key insight I proposed was to treat robots like physiological systems. I introduced Robot Vitals: a set of online indicators combined into a single Robot Health metric, giving a continuous, interpretable measure of how well the robot is actually operating.

Once you can measure robot health in real time, the problem becomes actionable: what do you do with it?

I used Robot Health as a control signal to build human-robot teaming architectures that dynamically adjust autonomy during task execution.

**At the single-robot level, this meant:**

- Triggering recovery behaviours
- Requesting operator intervention when needed
- Blending human and autonomous control based on system state

**At the multi-robot level, this extended to triage:**

- Prioritising which robots need attention
- Allocating limited human bandwidth across a fleet
- Maintaining overall mission performance without overloading the operator

**These systems were validated through human-in-the-loop experiments, showing:**

- Reduced operator–AI conflict
- Lower aggregate risk of failure
- Improved task performance without increasing cognitive load

Full publication list on [Google Scholar](https://scholar.google.com/citations?view_op=list_works&hl=en&hl=en&user=cuatGVUAAAAJ).
