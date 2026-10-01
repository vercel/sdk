# TwentyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { TwentyNine } from "@vercel/sdk/models/via3.js";

let value: TwentyNine = {
  amount: "611.04",
  purchaseIntentId: "<id>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `amount`           | *string*           | :heavy_check_mark: | N/A                |
| `purchaseIntentId` | *string*           | :heavy_check_mark: | N/A                |