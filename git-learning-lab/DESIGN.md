---
name: Analyst Engineering Enablement Lab
description: Static Delta Utilities learning environment for practical Git, tool, and Oracle SQL enablement.
colors:
  electric-blue: "#0042FF"
  midnight-navy: "#082652"
  crisp-mint: "#C3F4E6"
  spring-green: "#14C614"
  golden-yellow: "#FFB30B"
  graphite-ink: "#333333"
  cloud-bg: "#F7F8FB"
  white-surface: "#FFFFFF"
  pale-surface-blue: "#EEF6FF"
  line-grey: "#DDDDDD"
  danger-red: "#B42318"
typography:
  display:
    fontFamily: "Rubik, Arial, sans-serif"
    fontSize: "clamp(1.7rem, 3vw, 2.55rem)"
    fontWeight: 800
    lineHeight: 1.04
    letterSpacing: "0"
  headline:
    fontFamily: "Rubik, Arial, sans-serif"
    fontSize: "clamp(1.45rem, 2.3vw, 2.35rem)"
    fontWeight: 800
    lineHeight: 1.08
    letterSpacing: "0"
  title:
    fontFamily: "Rubik, Arial, sans-serif"
    fontSize: "clamp(1.25rem, 2vw, 1.65rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "0"
  body:
    fontFamily: "Arial, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: "0"
  label:
    fontFamily: "Rubik, Arial, sans-serif"
    fontSize: "0.76rem"
    fontWeight: 900
    lineHeight: 1.1
    letterSpacing: "0.08em"
rounded:
  sm: "7px"
  md: "8px"
  lg: "12px"
  pill: "999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "20px"
  xl: "24px"
components:
  button-primary:
    backgroundColor: "{colors.electric-blue}"
    textColor: "{colors.white-surface}"
    rounded: "{rounded.md}"
    padding: "0 14px"
  button-secondary:
    backgroundColor: "{colors.white-surface}"
    textColor: "{colors.graphite-ink}"
    rounded: "{rounded.md}"
    padding: "0 12px"
  status-pill:
    backgroundColor: "{colors.crisp-mint}"
    textColor: "{colors.midnight-navy}"
    rounded: "{rounded.pill}"
    padding: "4px 10px"
  course-card:
    backgroundColor: "{colors.white-surface}"
    textColor: "{colors.graphite-ink}"
    rounded: "{rounded.md}"
    padding: "clamp(16px, 1.7vw, 22px)"
  terminal-surface:
    backgroundColor: "{colors.midnight-navy}"
    textColor: "{colors.crisp-mint}"
    rounded: "{rounded.md}"
    padding: "12px"
---

# Design System: Analyst Engineering Enablement Lab

## Overview

**Creative North Star: "Grid Control With Electric Pulse"**

This system is a product interface first, not a campaign site, but it should still feel unmistakably Delta Utilities. The official brand gives us the core posture: reliable, knowledgeable, clear, confident, and helpful. The current lab already hints at a useful visual twist, Delta Utilities meets vaporwave, and that is worth keeping as long as it stays disciplined. The result should feel electric, not chaotic. Operational, not sterile.

The system should read like a calm internal control surface energized by sharp blue signal, mint confirmation, and selective yellow urgency. It should never feel like compliance training and never feel like startup theater. The learner should sense competence and motion without being overloaded. That means product-grade hierarchy, strong wayfinding, and a few high-voltage color moments used intentionally rather than everywhere at once.

This system explicitly rejects generic LMS dashboards, flashy bootcamp marketing pages, terminal cosplay, dense documentation walls, and playful or patronizing onboarding. The lab exists to get learners to the next real move fast, with enough visual personality to stay memorable.

**Key Characteristics:**
- Electric blue and midnight navy carry the system identity.
- Mint and green signal progress, readiness, and safety.
- Yellow is scarce and used for attention, not decoration.
- Rubik handles direction and hierarchy, Arial keeps body copy universally readable.
- Panels feel structured and product-like, with light gradients and subtle atmosphere instead of decorative noise.
- The interface favors task clarity over symmetry, and sequence over spectacle.

## Colors

The palette is a restrained product system energized by a strong brand accent. The official Delta Utilities colors remain the authority. The lab can feel slightly more electric than corporate marketing, but it cannot drift away from those anchors.

### Primary
- **Electric Blue** (`#0042FF`): The main action color. Use for primary buttons, section kickers, active emphasis, and wayfinding anchors. This is the lab’s voltage source, not a wallpaper color.
- **Midnight Navy** (`#082652`): The structural brand color. Use for headers, terminal surfaces, deep contrast areas, and serious framing moments.

### Secondary
- **Crisp Mint** (`#C3F4E6`): The positive surface accent. Use for progress pills, success-tinted backgrounds, supportive highlights, and breathable atmosphere layers.
- **Spring Green** (`#14C614`): The success state color. Use for completion, readiness, healthy status, and “you did the right thing” reinforcement.

### Tertiary
- **Golden Yellow** (`#FFB30B`): The attention color. Use for current-step emphasis, warning states, and rare focus moments where the system must pull the eye.
- **Danger Red** (`#B42318`): The error color. Use for destructive or failed states only.

### Neutral
- **Cloud Background** (`#F7F8FB`): Primary light-mode page field.
- **White Surface** (`#FFFFFF`): Default panel and card surface.
- **Pale Surface Blue** (`#EEF6FF`): Alternate support surface for grouped content and low-pressure secondary callouts.
- **Line Grey** (`#DDDDDD`): Dividers, control borders, neutral outlines.
- **Graphite Ink** (`#333333`): Primary body text and sober readable copy.

**The Electric Discipline Rule.** Electric Blue is the voice, not the wallpaper. It leads actions, status, and hierarchy. It does not flood the entire screen.

**The Yellow Scarcity Rule.** Golden Yellow is reserved for “look here now” moments: active steps, warnings, and guided emphasis. If yellow becomes ambient, it stops teaching.

**The Mint Means Progress Rule.** Crisp Mint and Spring Green represent support, success, readiness, and recovery. They should calm the interface, not compete with primary action.

## Typography

**Display Font:** Rubik (with Arial, sans-serif fallback)
**Body Font:** Arial (with system sans fallback)
**Label/Mono Font:** Rubik for labels and Cascadia Mono / Consolas for terminal-style instructional surfaces

**Character:** Rubik gives the system a clear, modern utility voice that still feels human. Arial keeps instructional and body copy frictionless, universal, and true to the Delta brand guide. This pairing is not fancy, which is a strength. The interface should feel readable under pressure.

### Hierarchy
- **Display** (`800`, `clamp(1.7rem, 3vw, 2.55rem)`, `1.04`): Use for major course and resume banners. This level should be rare and directional.
- **Headline** (`800`, `clamp(1.45rem, 2.3vw, 2.35rem)`, `1.08`): Use for page and module headlines, including the main app title.
- **Title** (`700`, `clamp(1.25rem, 2vw, 1.65rem)`, `1.15`): Use for section titles, lesson titles, and panel-level headings.
- **Body** (`400`, `1rem`, `1.45`): Use for all instructional, explanatory, and support copy. Keep line lengths practical and readable. Body text should not exceed roughly `65–75ch` in long-form contexts.
- **Label** (`900`, `0.76rem`, `0.08em`): Use for kickers, pills, and small UI framing labels. Uppercase is appropriate here because it creates navigation rhythm.

**The Utility First Rule.** Use typography to direct, not to decorate. If the learner cannot tell what to read first, the hierarchy failed.

**The Plain Body Rule.** Body text stays in Arial. Do not get clever with body typography. The lab teaches unfamiliar technical concepts, and readability wins.

## Elevation

This system uses tonal layering with restrained shadow, not dramatic floating surfaces. Most depth should come from color field changes, border definition, and spacing. Shadows exist to gently separate panels and confirm interaction, not to create a faux-3D interface.

### Shadow Vocabulary
- **Ambient Panel Shadow** (`0 14px 34px rgba(8, 38, 82, 0.09)`): Use for default light-mode panels and cards.
- **Deep Modal Shadow** (`0 24px 70px rgba(7, 17, 31, 0.32)`): Use for blocking modal surfaces only.
- **Dark Ambient Shadow** (`0 18px 44px rgba(0, 0, 0, 0.34)`): Use for dark-mode surfaces where separation would otherwise collapse.

**The Flat By Default Rule.** A panel earns lift only when it needs separation or focus. If everything floats, nothing does.

**The Terminal Contrast Rule.** Deep navy and near-black terminal surfaces provide their own sense of depth. Do not stack extra elevation tricks on top.

## Components

### Buttons
- **Shape:** Soft utility corners (`8px radius`).
- **Primary:** Electric Blue fill with white text, medium horizontal padding, strong weight, and direct language. Primary buttons should feel like safe commitment, not flashy purchase CTAs.
- **Hover / Focus:** Hover may tighten border or lift slightly. Focus must remain visible and high-contrast.
- **Secondary / Ghost:** White or pale surface backgrounds with line-grey borders and graphite or navy text. These are for navigation, optional support actions, and low-pressure controls.

### Status Pills
- **Style:** Crisp Mint background with Midnight Navy text for neutral-positive state. Rounded to pill form (`999px radius`) with compact padding.
- **Role:** Use for module counts, recommended-path labels, progress tokens, and supportive metadata.

### Cards / Panels
- **Corner Style:** Utility-soft corners (`8px radius`) with occasional larger rounding for modal contexts only.
- **Background:** White Surface in light mode, structured dark surfaces in dark mode, with selective pale gradients or mint-blue atmospheric overlays.
- **Border:** A visible but quiet line-grey outline is the default.
- **Internal Padding:** Panels should breathe at `16px–24px` depending on density and importance.

### Inputs / Command Surfaces
- **Style:** Standard form inputs stay minimal. Command and SQL surfaces can use dark, editor-like treatment, but those surfaces must still read as instructional environments, not hacker theatrics.
- **Focus:** Focus states must remain explicit. Training products cannot afford hidden focus.
- **Error / Disabled:** Error states use the red system sparingly and should always pair color with plain-language explanation.

### Terminal Surface
- **Style:** Midnight Navy or near-black background, Crisp Mint success text, white prompt text, and blue prompt labels. This is one of the product’s signature surfaces.
- **Role:** The terminal is where action happens, so it should feel confident and real. It should not dominate every screen by default. In guided modes, it follows the step context.

### Navigation And Guided Panels
- **Style:** Guided panels are the learner’s control tower. They should visually outrank secondary references through spacing, title hierarchy, and selective yellow “current move” emphasis.
- **Behavior:** Reference and quiz drawers can collapse. Current step, progress, and next action should never feel hidden.

**The First Move Rule.** In guided modes, the current step and next command outrank every secondary surface, including repo explorer, glossary, and quiz.

## Do's and Don'ts

### Do:
- **Do** lead with task clarity: where am I, what do I do now, what does success look like.
- **Do** use Electric Blue (`#0042FF`) and Midnight Navy (`#082652`) as the main identity pair.
- **Do** keep body copy in Arial and use Rubik for headings, labels, and directional emphasis.
- **Do** use Mint and Green to reinforce progress, safety, and successful learning moments.
- **Do** keep secondary reference content collapsible so the primary learning path remains dominant.
- **Do** distinguish real commands from simulator-only actions visually and verbally.
- **Do** keep gradients atmospheric and sparse. Light blue-mint wash is acceptable. Decorative gradient theater is not.
- **Do** maintain WCAG-conscious color pairings in line with the brand guide’s accessibility standard.

### Don't:
- **Don't** make the product feel like a generic LMS dashboard that feels like compliance training.
- **Don't** make it feel like a flashy bootcamp marketing site that over-promises mastery.
- **Don't** make it look like terminal cosplay interfaces that look technical but do not teach real habits.
- **Don't** make it feel like a dense documentation portal that expects learners to read everything before acting.
- **Don't** use playful or patronizing onboarding that undercuts the seriousness of the work.
- **Don't** flood the interface with blue, mint, and yellow at the same time. That kills hierarchy.
- **Don't** use yellow as decoration. Yellow is for urgency, current move, and guided emphasis only.
- **Don't** let cards, quizzes, glossaries, and support modules compete equally with the current lesson action.
- **Don't** use purple-forward vaporwave cues. The lab can feel electric, but it still belongs to Delta Utilities.
