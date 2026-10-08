# TwoHundredAndThirty

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndThirty } from "@vercel/sdk/models/lasteditedbyprincipal2.js";

let value: TwoHundredAndThirty = {
  enforced: false,
  organizationId: "<id>",
  organizationSlug: "<value>",
  previousEnforced: false,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `enforced`         | *boolean*          | :heavy_check_mark: | N/A                |
| `organizationId`   | *string*           | :heavy_check_mark: | N/A                |
| `organizationSlug` | *string*           | :heavy_check_mark: | N/A                |
| `previousEnforced` | *boolean*          | :heavy_check_mark: | N/A                |