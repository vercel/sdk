# Guides

## Example Usage

```typescript
import { Guides } from "@vercel/sdk/models/createintegrationstoredirectresponsebody.js";

let value: Guides = {
  framework: "<value>",
  title: "<value>",
  steps: [],
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `framework`                          | *string*                             | :heavy_check_mark:                   | N/A                                  |
| `title`                              | *string*                             | :heavy_check_mark:                   | N/A                                  |
| `steps`                              | [models.Steps](../models/steps.md)[] | :heavy_check_mark:                   | N/A                                  |