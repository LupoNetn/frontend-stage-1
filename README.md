# Frontend Track — Stage 1: Multi-Page Application

## Overview
This project is part of **Stage 1** of the Frontend Wizards challenge. It extends the Stage 0 single-card project into a **multi-page application**, including:

1. **Contact Us Page**
   - A form with full **validation**, accessible error messages, and success feedback.
   - All fields are required, with proper email format and minimum message length.
   - Error messages disappear automatically after 4 seconds.
   - Fully accessible and keyboard navigable.

2. **About Me Page**
   - A reflective page using **semantic HTML** with sections for:
     - Bio
     - Goals
     - Areas of low confidence
     - Note to future self
     - Extra thoughts
   - Each section has unique `data-testid` attributes for testing.

---

## Demo

**Live Demo:** https://luponetn.github.io/frontend-stage-1/

---

## Features

- **Contact Form Validation**:
  - Full name, email, subject, and message are required.
  - Email validation using regex.
  - Message must be at least 10 characters.
  - Error messages appear below each input and auto-hide after 4 seconds.
  - Success message appears on successful submission.

- **Accessibility**:
  - Proper `<label>` elements linked to inputs via `for` and `id`.
  - Error messages connected using `aria-describedby`.
  - Fully keyboard navigable.

- **Responsive Design**:
  - Works on mobile, tablet, and desktop devices.

- **Semantic HTML**:
  - Uses `<main>`, `<section>`, `<h2>`, `<h3>`, `<p>`, and `<ul>` where appropriate.

---

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript (for validation and DOM manipulation)

---

## How to Run Locally

1. Clone the repository:

```bash
git clone https://github.com/your-username/frontend-stage-1.git

cd frontend-stage-1

