---
name: react-tailwind
description: Use when writing or reviewing React components with Tailwind CSS — converting CSS modules, applying conditional styles, responsive layouts, pseudo-elements, or interactive states
---

# React + Tailwind

## Custom Theme Colors

Defined in `apps/portfolio-app/src/styles.css` via `@theme`. Always use these — never hardcode hex.

| Token | Hex | Usage |
|---|---|---|
| `yellow` | `#EFC68B` | `bg-yellow`, `border-yellow` |
| `grey` | `#DBDCDD` | `bg-grey` |
| `light-grey` | `#6D6E70` | `bg-light-grey`, `text-light-grey` |
| `light-black` | `#343334` | `text-light-black`, `fill-light-black` |
| `charcoal` | `#313742` | `bg-charcoal`, `text-charcoal` |

## Responsive Breakpoints

This project uses **max-width** breakpoints (not mobile-first):

```tsx
// ✅ Correct — max-width approach
<div className="flex max-lg:block">          // < 1024px → block
<div className="w-[70%] max-lg:w-full">
<span className="text-5xl max-[520px]:text-[2rem]">  // custom breakpoint
```

Tailwind v4 max-breakpoints: `max-sm` `max-md` `max-lg` `max-xl`. Use `max-[Xpx]:` for non-standard values.

## Conditional Classes in React

```tsx
// ✅ Template literal for simple conditions
className={`base-class ${condition ? 'active-class' : 'inactive-class'}`}

// ✅ Array + filter for multiple conditions
className={['base', condition && 'extra'].filter(Boolean).join(' ')}
```

## Group — Hover on Child Elements

Use `group` on parent to style children on hover (e.g. SVG fill):

```tsx
<a className="group text-light-black hover:text-[#444]">
  <span className="fill-light-black group-hover:fill-[#444]">{icon}</span>
</a>
```

## Pseudo-Elements

```tsx
// ✅ Inline divider line
<div className="relative after:content-[''] after:absolute after:inset-0 after:h-[2px] after:bg-black after:my-auto">

// ✅ CSS triangle (tooltip arrow)
<ul className="after:content-[''] after:absolute after:w-0 after:h-0
               after:border-b-[8px] after:border-b-white
               after:border-x-[8px] after:border-x-transparent
               after:bottom-full after:right-[2%]">
```

## Tailwind v4 Specifics

```css
/* styles.css — CSS-first config, no tailwind.config.js */
@import "tailwindcss";

@theme {
  --color-yellow: #EFC68B;  /* → bg-yellow, text-yellow */
}
```

- No `tailwind.config.js` — configuration lives in CSS via `@theme`
- Arbitrary values: `w-[70%]`, `text-[1.2rem]`, `top-[180%]`
- Arbitrary variants: `[&>li]:mt-[10px]`, `[&>li:first-child]:mt-0`

## Anti-Patterns

| ❌ Don't | ✅ Do |
|---|---|
| `style={{ color: '#313742' }}` | `text-charcoal` |
| `background-color: #EFC68B` in CSS | `bg-yellow` |
| Mix CSS modules with Tailwind in same component | Tailwind only |
| `@media (max-width: 1024px)` in CSS | `max-lg:` variant |
| `className={styles.wrap}` | Inline Tailwind classes |