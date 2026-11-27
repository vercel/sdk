# FiveHundredAndThirtyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndThirtyFive } from "@vercel/sdk/models/payloadoutcome.js";

let value: FiveHundredAndThirtyFive = {
  enabled: true,
  repositoryId: "<id>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `enabled`          | *boolean*          | :heavy_check_mark: | N/A                |
| `organizationId`   | *string*           | :heavy_minus_sign: | N/A                |
| `repository`       | *string*           | :heavy_minus_sign: | N/A                |
| `repositoryId`     | *string*           | :heavy_check_mark: | N/A                |