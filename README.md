# ShadCN UI Components Showcase

A collection of reusable, accessible, and responsive React components built with TypeScript, Tailwind CSS, and ShadCN UI principles. This project demonstrates various UI components with flexible APIs and comprehensive Storybook stories to showcase their potential.

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Getting Started](#getting-started)


---

## Overview

This project is a showcase of several UI components including Alerts, MultiSelect dropdowns, and Data-Driven Pie Charts among others. Each component is designed to be flexible, accessible, and fully responsive. Storybook stories are provided to help visualize component states and usage scenarios.

---

## Features

### Alert Component

- **Multiple Alert Types:** Supports `success`, `error`, `warning`, and `info` types.
- **Flexible Layouts:** Renders both a title and description or description only. Can be displayed with or without an icon.
- **Optional Close Button:** Allows for dismissible alerts via an `onClose` callback.
- **Customizable Themes/Variants:** Easily configurable via Tailwind CSS and the `class-variance-authority` library.

### MultiSelect Component

- **Async Options:** Options are fetched asynchronously from external APIs.
- **Flexible Props:** Supports custom placeholders, loading states, pre-selected options, and disabled options.
- **Storybook Stories:** Multiple usage demonstrations (default, loading, custom placeholder, pre-selected, and disabled states).

### PieChart Component

- **Dynamic Data Processing:** Fetches product data, aggregates counts by category, and displays data in a donut chart.
- **Responsive Rendering:** Utilizes Recharts' `<ResponsiveContainer>` component and Tailwind's responsive classes to adapt to various screen sizes.
- **Custom Labels:** Displays total product count in the center of the chart.
- **Responsive Layout:** Provides a flexible layout that wraps content on smaller screens.

---

## Getting Started

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```
2. **Start the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

### Running Storybook

To view the component demos and various states in Storybook:

bash
npm run storybook
or
yarn storybook

