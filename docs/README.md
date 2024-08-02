This document provides guidelines and requirements for configuring and managing content within the application. It covers various components and their properties, as well as the steps to ensure content is displayed correctly.

## Table of Contents

1. [Components](#components)
   - [Section Content](#section-content)

### Section Content

This component is used to render a section with various types of content, including headlines, paragraphs, buttons, cards, price charts, bullet points, and text with pictures.

- **Main Headline**:
  - `mainHeadlineText`: The text for the main headline.
  - `mainHeadlineType`: The type of the main headline (e.g., "Headline1").
- **Sub Headline**:
  - `subHeadlineText`: The text for the sub headline.
- **Paragraph**:
  - `paragraphText`: The text for the paragraph.
- **Buttons**:
  - `firstButtonText`: The text for the first button.
  - `firstButtonLink`: The link for the first button.
  - `firstButtonStyle`: The style for the first button (e.g., "primary").
  - `secondButtonText`: The text for the second button.
  - `secondButtonLink`: The link for the second button.
  - `secondButtonStyle`: The style for the second button (e.g., "secondary").
- **Cards**:
  - `cardOneProps`: Properties for the first card.
    - `cardOneIcon`: The icon for the first card.
    - `cardOneHeadline`: The headline for the first card.
    - `cardOneText`: The text for the first card.
  - `cardTwoProps`: Properties for the second card.
    - `cardTwoIcon`: The icon for the second card.
    - `cardTwoHeadline`: The headline for the second card.
    - `cardTwoText`: The text for the second card.
  - `cardThreeProps`: Properties for the third card.
    - `cardThreeIcon`: The icon for the third card.
    - `cardThreeHeadline`: The headline for the third card.
    - `cardThreeText`: The text for the third card.
- **Price Chart**:
  - `priceChartProps`: Properties for the price chart.
    - `fetchUrl`: The URL to fetch the price data.
    - `priceLabel`: The label for the price data.
- **Bullet Points**:
  - `bulletPoints`: An array of bullet points.
    - Each bullet point should have a `headline` and `text`.
  - `bulletClassName`: Custom class name for the bullet points.
- **Text Picture**:
  - `textPicture`: Properties for the text with picture section.
    - `pictureSrc`: The source URL for the picture.
    - `pictureAlt`: The alt text for the picture.
    - `text`: The text description for the picture.
- **Custom Class Names**:
  - `sectionClassName`: Custom class name for the section.
  - `mainHeadlineClassName`: Custom class name for the main headline.
  - `subHeadlineClassName`: Custom class name for the sub headline.
  - `paragraphClassName`: Custom class name for the paragraph.
  - `firstButtonClassName`: Custom class name for the first button.
  - `secondButtonClassName`: Custom class name for the second button.
- **Background**:
  - `background`: Background for the section.
