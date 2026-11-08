# FiveHundredAndOne

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndOne } from "@vercel/sdk/models/usereventpayload470actortype.js";

let value: FiveHundredAndOne = {
  ciEnabled: true,
  organizationId: "<id>",
  repository: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `ciEnabled`        | *boolean*          | :heavy_check_mark: | N/A                |
| `organizationId`   | *string*           | :heavy_check_mark: | N/A                |
| `repository`       | *string*           | :heavy_check_mark: | N/A                |