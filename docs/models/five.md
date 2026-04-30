# Five

The payload of the event, if requested.

## Example Usage

```typescript
import { Five } from "@vercel/sdk/models/userevent.js";

let value: Five = {
  teamId: "<id>",
  stripeAccount: "<value>",
  stripeOrganisation: "<value>",
  accountRequestId: "<id>",
};
```

## Fields

| Field                | Type                 | Required             | Description          |
| -------------------- | -------------------- | -------------------- | -------------------- |
| `teamId`             | *string*             | :heavy_check_mark:   | N/A                  |
| `stripeAccount`      | *string*             | :heavy_check_mark:   | N/A                  |
| `stripeOrganisation` | *string*             | :heavy_check_mark:   | N/A                  |
| `accountRequestId`   | *string*             | :heavy_check_mark:   | N/A                  |