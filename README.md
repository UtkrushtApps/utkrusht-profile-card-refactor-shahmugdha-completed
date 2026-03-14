# Task Overview
Utkrusht is building a simple profiles gallery to showcase candidates on its proof-of-skills marketplace. You are working on the page that displays a small grid of candidate profiles, which will later be reused in multiple parts of the product. Right now the page shows three candidates, but the implementation is not yet structured in a way that scales as the list grows.

The current screen renders all candidate information directly in a single component with repeated markup. The business team wants this page to be easier to maintain, ready for more profiles, and give viewers a way to focus on just the key details or expand to see more information per candidate.

### Objectives
- Replace the repeated profile markup in the main component with a reusable card structure that can render multiple candidates from a collection of data.
- Introduce simple internal behaviour on each card so that extra candidate details can be shown or hidden individually.
- Ensure the page shows a clear message when there are no profiles to display instead of leaving an empty area.
- Keep the implementation beginner-friendly while following modern React practices.

### How to Verify
- Open the profiles page in the browser and confirm that the same three candidates still appear with their names, roles, locations, and summaries.
- Confirm that the profile cards are rendered by iterating over a data collection instead of duplicating markup manually.
- Click the control on one card intended to reveal more information and check that only that card’s additional details are shown or hidden.
- Verify that toggling the extra information on one profile does not change the visibility of details on any other profile.
- Temporarily adjust the data so that there are no candidates and confirm that a clear, user-friendly message appears instead of a blank grid.

### Helpful Tips
- Consider how to represent each candidate as a single object in a collection, and how that collection can drive what is rendered on the page.
- Think about what information belongs in the main page component versus what belongs inside an individual card.
- Explore how a small piece of state inside each card can control whether extra information is visible.
- Review the existing JSX structure for the three hardcoded cards to understand what repeated pieces should be moved into a reusable building block.
- Consider how to handle the case where the collection of candidates is empty so users are not left with a confusing blank area.
