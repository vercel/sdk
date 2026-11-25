# TwoHundredAndFortyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFortyEight } from "@vercel/sdk/models/newenvvar.js";

let value: TwoHundredAndFortyEight = {
  organizationId: "<id>",
  organizationSlug: "<value>",
  targetUser: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `organizationId`   | *string*           | :heavy_check_mark: | N/A                |
| `organizationSlug` | *string*           | :heavy_check_mark: | N/A                |
| `targetUser`       | *string*           | :heavy_check_mark: | N/A                |