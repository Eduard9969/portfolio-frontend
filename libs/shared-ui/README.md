# @org/shared-ui

A React component library built on Tailwind CSS v4. Provides 19 components covering layout, display, interactive, and data-presentation patterns. Every component and its corresponding `*Props` type (e.g. `AvatarProps`, `TimelineItemProps`) are exported from the `@org/shared-ui` package, so consumers can type wrapper components without redeclaring shapes.

## Table of Contents

- [Installation](#installation)
- [Theming](#theming)
- [Components](#components)
  - [Display](#display)
  - [Buttons](#buttons)
  - [Rating](#rating)
  - [Layout](#layout)
  - [Social](#social)
  - [Timeline](#timeline)
  - [Interactive](#interactive)
- [Development](#development)

---

## Installation

### 1. Add the package

```bash
pnpm add @org/shared-ui
```

> In this Nx monorepo the package is already available as a workspace dependency.

### 2. Import the stylesheet

```ts
// main.tsx or your app entry point
import '@org/shared-ui/styles.css';
```

This stylesheet includes:
- Tailwind CSS v4 base styles
- Lato font (weights 400 and 700)
- CSS custom properties (theme tokens)
- Loader animation keyframes

### 3. Tailwind v4 source scanning

If your app uses Tailwind v4, add the library source to `@source` so its utility classes are not purged:

```css
/* app/src/styles.css */
@source "../../libs/shared-ui/src";
```

### 4. Import components

```tsx
import { Section, Timeline, Avatar } from '@org/shared-ui';
```

---

## Theming

All visual tokens are CSS custom properties defined in `styles.css`. Override them in your app's CSS to customise the appearance.

### Global tokens

| Variable | Default | Description |
|---|---|---|
| `--color-accent` | `#EFC68B` | Accent color — dot fills, borders |
| `--color-photo-bg` | `#DBDCDD` | Avatar placeholder background |
| `--color-timeline` | `#6D6E70` | Timeline line color |
| `--color-text-primary` | `#343334` | Primary text color |
| `--color-surface` | `#313742` | Dark surface background (sidebar) |
| `--color-link` | `#ff9800` | Links and interactive elements |
| `--color-muted` | `#808080` | Muted / secondary text |
| `--color-text-hover` | `#444444` | Text hover state |
| `--color-bg` | `white` | Page background |
| `--font-sans` | `'Lato', sans-serif` | Primary font family |

### Component-specific tokens

| Variable | Component | Description |
|---|---|---|
| `--section-head-border` | `Section` | Heading border color |
| `--section-head-bg` | `Section` | Heading background (used by `withLine`) |
| `--timeline-dot-bg` | `TimelineItem` | Timeline dot color |

### Example override

```css
:root {
  --color-accent: #3B82F6;
  --color-link: #2563EB;
}
```

---

## Components

### Display

#### `Avatar`

Profile photo container with overflow handling and responsive sizing (max 420×420 px).

```tsx
<Avatar src="/photo.jpg" alt="John Doe" />
```

| Prop | Type | Required | Description |
|---|---|---|---|
| `src` | `string` | ✓ | Image source URL |
| `alt` | `string` | ✓ | Accessible alt text |

---

#### `NameTitle`

Hero header displaying a name in a bordered accent box with an overlapping job title badge.

```tsx
<NameTitle name="John Doe" title="Frontend Engineer" />
```

| Prop | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | ✓ | Name displayed inside the bordered box |
| `title` | `string` | ✓ | Job title shown as an overlapping badge |

---

#### `Loader`

Animated CSS spinner. No props.

```tsx
<Loader />
```

---

### Buttons

#### `Button`

Minimal text button with an active (selected/disabled) state.

```tsx
<Button onClick={() => setTab('skills')}>Skills</Button>
<Button active>Active tab</Button>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `active` | `boolean` | `false` | Renders as selected and disables interaction |
| `onClick` | `() => void` | — | Click handler |
| `children` | `ReactNode` | — | Button label |

---

#### `ButtonGroup`

Type-safe radio tab group. Generic over the value type `T`.

```tsx
<ButtonGroup
  items={[{ value: 'en', label: 'EN' }, { value: 'ru', label: 'RU' }]}
  current="en"
  onChange={(v) => setLang(v)}
/>
```

| Prop | Type | Required | Description |
|---|---|---|---|
| `items` | `{ value: T; label: string }[]` | ✓ | Available options |
| `current` | `T` | ✓ | Currently active value |
| `onChange` | `(value: T) => void` | ✓ | Called when the selection changes |

---

### Rating

#### `DotRating`

Filled/unfilled dot row for visualising a rating value.

```tsx
<DotRating mark={3} max={5} />
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `mark` | `number` | — | Number of filled dots |
| `max` | `number` | `5` | Total number of dots |

---

#### `RatingList`

Vertical list of labelled dot ratings.

```tsx
<RatingList
  items={[{ label: 'TypeScript', mark: 5 }, { label: 'Rust', mark: 2 }]}
  max={5}
/>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `items` | `{ label: string; mark: number }[]` | — | Rating items |
| `max` | `number` | `5` | Dot scale maximum |

---

#### `RatingTooltip`

Popover legend explaining what each rating level means. Composes `Popover` and `RatingList`.

```tsx
<RatingTooltip
  legendLabel="Rating legend"
  labels={['Elementary', 'Basic', 'Intermediate', 'Advanced', 'Expert']}
  align="right"
/>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `legendLabel` | `string` | — | Trigger button text |
| `labels` | `string[]` | — | Level names — index + 1 equals the mark value |
| `align` | `'left' \| 'right'` | `'right'` | Popover and arrow alignment |

---

### Layout

#### `Section`

Semantic `<section>` wrapper with a styled `<h3>` heading. Supports an optional horizontal rule after the title.

```tsx
<Section title="Experience" withLine>
  <Timeline items={[...]} />
</Section>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `title` | `string` | — | Heading text |
| `children` | `ReactNode` | — | Section body |
| `withLine` | `boolean` | `false` | Adds a horizontal rule after the heading |

For sidebar usage, set `--section-head-border` and `--section-head-bg` on the parent element to match the sidebar surface.

---

#### `LabelRow`

Flex row with a label on the left and arbitrary content on the right.

```tsx
<LabelRow label="Location">Berlin, DE</LabelRow>
```

| Prop | Type | Required | Description |
|---|---|---|---|
| `label` | `string` | ✓ | Left-side label |
| `children` | `ReactNode` | ✓ | Right-side content |

---

#### `LabelValueList`

Vertical list of plain label → text value pairs.

```tsx
<LabelValueList items={[{ label: 'Birthday', value: '01 Jan 1990' }]} />
```

| Prop | Type | Required | Description |
|---|---|---|---|
| `items` | `{ label: string; value: string }[]` | ✓ | Key-value pairs |

---

#### `IconTextRow`

Single flex row: fixed-width icon slot (18×18 px) followed by text.

```tsx
<IconTextRow text="+49 123 456789" icon={<Icon name="phone" />} />
```

| Prop | Type | Required | Description |
|---|---|---|---|
| `text` | `string` | ✓ | Row text — long values wrap with `break-all` |
| `icon` | `ReactNode` | ✓ | Icon element |

---

#### `IconTextList`

Vertical list of `IconTextRow` entries.

```tsx
<IconTextList
  items={[
    { text: 'john@example.com', icon: <Icon name="email" /> },
    { text: 'Berlin, DE', icon: <Icon name="location" /> },
  ]}
/>
```

| Prop | Type | Required | Description |
|---|---|---|---|
| `items` | `IconTextRowProps[]` | ✓ | `{ text, icon }` per row |

---

### Social

#### `SocialLink`

Social media anchor with an icon and label. Opens in a new tab with `rel="nofollow noreferrer"`.

```tsx
<SocialLink
  url="https://github.com/user"
  label="GitHub"
  icon={<Icon name="github" />}
/>
```

| Prop | Type | Required | Description |
|---|---|---|---|
| `url` | `string` | ✓ | Link href |
| `label` | `string` | ✓ | Visible link text |
| `icon` | `ReactNode` | ✓ | Icon element |

---

#### `SocialsList`

Horizontal (desktop) / stacked (mobile) list of social links.

```tsx
<SocialsList
  items={[
    { url: 'https://linkedin.com/in/user', label: 'LinkedIn', icon: <Icon name="linkedin" /> },
    { url: 'https://github.com/user', label: 'GitHub', icon: <Icon name="github" /> },
  ]}
/>
```

| Prop | Type | Required | Description |
|---|---|---|---|
| `items` | `SocialLinkProps[]` | ✓ | Social link entries |

---

### Timeline

#### `TimelineItem`

Single chronological entry: date range on the left, title/subtitle/description on the right.

```tsx
<TimelineItem
  period="2020 – 2023"
  title="Senior Frontend Engineer"
  subtitle="Acme Corp"
  description="Led frontend architecture and design system development."
/>
```

| Prop | Type | Required | Description |
|---|---|---|---|
| `period` | `string` | ✓ | Date range displayed on the left |
| `title` | `string` | ✓ | Role or degree |
| `subtitle` | `string` | ✓ | Company or institution |
| `description` | `string` | ✓ | Detail text |

The dot color is controlled by `--timeline-dot-bg`.

---

#### `Timeline`

Vertical list of `TimelineItem` entries.

```tsx
<Timeline
  items={[
    { period: '2020 – 2023', title: 'Senior Frontend Engineer', subtitle: 'Acme Corp', description: '...' },
  ]}
/>
```

| Prop | Type | Required | Description |
|---|---|---|---|
| `items` | `TimelineItemProps[]` | ✓ | List of timeline entries |

---

### Interactive

#### `Popover`

Click-toggled popover with a text trigger button and configurable alignment.

```tsx
<Popover trigger="More info" align="right">
  <p>Popover content here</p>
</Popover>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `trigger` | `string` | — | Trigger button label |
| `children` | `ReactNode` | — | Popover body content |
| `align` | `'left' \| 'right'` | `'right'` | Arrow and popover alignment |

---

#### `Icon`

Named wrapper for FontAwesome icons.

```tsx
<Icon name="github" />
```

| Prop | Type | Required | Description |
|---|---|---|---|
| `name` | `IconName` | ✓ | Icon identifier |

Available names: `linkedin`, `bitbucket`, `github`, `telegram`, `location`, `phone`, `email`, `info`.

---

## Development

Run Storybook to explore and develop components in isolation:

```bash
pnpm nx storybook shared-ui
```

## License

MIT — see the [repository license](../../LICENSE).
