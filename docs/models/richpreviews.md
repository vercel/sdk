# RichPreviews

Work Object preview settings for the managed Slack app. Updates preserve omitted settings.

## Example Usage

```typescript
import { RichPreviews } from "@vercel/sdk/models/connectconnectorupdatedata.js";

let value: RichPreviews = {};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `isActive`                                                           | *boolean*                                                            | :heavy_minus_sign:                                                   | Enable Work Object previews. Defaults to false for new apps.         |
| `entityTypes`                                                        | *string*[]                                                           | :heavy_minus_sign:                                                   | Entity types to preview. An empty array clears the configured types. |