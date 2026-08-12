# FiftyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { FiftyNine } from "@vercel/sdk/models/userevent.js";

let value: FiftyNine = {
  planSlug: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `subscriptionId`   | *string*           | :heavy_minus_sign: | N/A                |
| `planSlug`         | *string*           | :heavy_check_mark: | N/A                |