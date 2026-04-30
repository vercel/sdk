# Six

The payload of the event, if requested.

## Example Usage

```typescript
import { Six } from "@vercel/sdk/models/userevent.js";

let value: Six = {
  teamId: "<id>",
  stripeAccount: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `teamId`           | *string*           | :heavy_check_mark: | N/A                |
| `stripeAccount`    | *string*           | :heavy_check_mark: | N/A                |