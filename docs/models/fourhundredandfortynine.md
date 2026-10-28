# FourHundredAndFortyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndFortyNine } from "@vercel/sdk/models/pricingplan.js";

let value: FourHundredAndFortyNine = {
  organizationId: "<id>",
  teamIds: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `organizationId`   | *string*           | :heavy_check_mark: | N/A                |
| `teamIds`          | *string*[]         | :heavy_check_mark: | N/A                |