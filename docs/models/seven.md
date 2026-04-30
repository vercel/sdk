# Seven

The payload of the event, if requested.

## Example Usage

```typescript
import { Seven } from "@vercel/sdk/models/userevent.js";

let value: Seven = {
  teamId: "<id>",
  teamSlug: "<value>",
  stripeAccount: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `teamId`           | *string*           | :heavy_check_mark: | N/A                |
| `teamSlug`         | *string*           | :heavy_check_mark: | N/A                |
| `stripeAccount`    | *string*           | :heavy_check_mark: | N/A                |