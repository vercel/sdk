# FiveHundredAndTwenty

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndTwenty } from "@vercel/sdk/models/usereventpayload499next.js";

let value: FiveHundredAndTwenty = {
  ciEnabled: false,
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