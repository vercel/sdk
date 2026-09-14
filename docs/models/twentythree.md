# TwentyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { TwentyThree } from "@vercel/sdk/models/userevent.js";

let value: TwentyThree = {
  amount: "748.73",
  purchaseIntentId: "<id>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `amount`           | *string*           | :heavy_check_mark: | N/A                |
| `purchaseIntentId` | *string*           | :heavy_check_mark: | N/A                |