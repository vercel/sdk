# TwoHundredAndFiftySix

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFiftySix } from "@vercel/sdk/models/usereventpayload238prevproject.js";

let value: TwoHundredAndFiftySix = {
  enforced: false,
  organizationId: "<id>",
  organizationSlug: "<value>",
  previousEnforced: true,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `enforced`         | *boolean*          | :heavy_check_mark: | N/A                |
| `organizationId`   | *string*           | :heavy_check_mark: | N/A                |
| `organizationSlug` | *string*           | :heavy_check_mark: | N/A                |
| `previousEnforced` | *boolean*          | :heavy_check_mark: | N/A                |